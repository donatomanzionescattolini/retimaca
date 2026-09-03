import { useMemo, useState } from 'react'
import { useCms } from './CmsContext'
import './cms.css'

const tabs = ['contact', 'products', 'gallery', 'reviews', 'cities']

function clone(value) { return JSON.parse(JSON.stringify(value)) }
function Field({ label, value, onChange, multiline = false, type = 'text' }) {
  const props = { value: value ?? '', onChange: (e) => onChange(e.target.value), placeholder: label, type }
  return <label className="cms-field"><span>{label}</span>{multiline ? <textarea rows={4} {...props} /> : <input {...props} />}</label>
}

function CollectionEditor({ title, items, setItems, renderSummary, makeNew, renderForm }) {
  const [selected, setSelected] = useState(0)
  const safeIndex = Math.min(selected, Math.max(0, items.length - 1))
  const current = items[safeIndex]
  const update = (next) => setItems(items.map((item, index) => index === safeIndex ? next : item))
  const remove = () => {
    if (!items.length) return
    const next = items.filter((_, index) => index !== safeIndex)
    setItems(next)
    setSelected(Math.max(0, safeIndex - 1))
  }
  return <div className="cms-collection">
    <div className="cms-list">
      <div className="cms-list-head"><strong>{title}</strong><button onClick={() => { setItems([...items, makeNew()]); setSelected(items.length) }}>+ Add</button></div>
      {items.map((item, index) => <button key={index} className={`cms-list-item ${index === safeIndex ? 'active' : ''}`} onClick={() => setSelected(index)}>{renderSummary(item, index)}</button>)}
      {!items.length && <p className="cms-muted">Nothing here yet.</p>}
    </div>
    <div className="cms-editor-card">
      {current ? <>
        {renderForm(current, update)}
        <button className="cms-danger" onClick={remove}>Delete this item</button>
      </> : <p className="cms-muted">Add an item to begin.</p>}
    </div>
  </div>
}

export default function CmsPage() {
  const cms = useCms()
  const [tab, setTab] = useState('contact')
  const [draft, setDraft] = useState(() => clone({ contact: cms.contact, woods: cms.woods, gallery: cms.gallery, reviews: cms.reviews, cities: cms.cities }))
  const [message, setMessage] = useState('')
  const [login, setLogin] = useState({ email: '', password: '' })

  if (!cms.user) return <main className="cms-shell cms-login"><div className="cms-login-card"><div className="cms-kicker">RETIMACA · CONTENT</div><h1>Website editor</h1><p>Sign in to update the public website. There is no public sign-up.</p><form onSubmit={async (e) => { e.preventDefault(); setMessage(''); try { await cms.login(login.email, login.password) } catch (err) { setMessage(err?.message || 'Sign in failed.') } }}><Field label="Email" value={login.email} onChange={(v) => setLogin({ ...login, email: v })} type="email" /><Field label="Password" value={login.password} onChange={(v) => setLogin({ ...login, password: v })} type="password" /><button className="cms-primary" disabled={!cms.firebaseConfigured}>Sign in</button></form>{!cms.firebaseConfigured && <div className="cms-alert">{cms.error}</div>}{message && <div className="cms-alert">{message}</div>}</div></main>

  const save = async () => { setMessage(''); try { await cms.save(draft); setMessage('Published. Your website is now using these changes.') } catch (err) { setMessage(err?.message || 'Could not publish.') } }
  const updateContact = (key, value) => setDraft({ ...draft, contact: { ...draft.contact, [key]: value } })

  return <main className="cms-shell"><header className="cms-header"><div><div className="cms-kicker">RETIMACA · CONTENT</div><h1>Website editor</h1><p>Edit the things visitors actually see. Changes stay private until you publish.</p></div><div className="cms-actions"><span>{cms.user.email}</span><button onClick={cms.logout}>Sign out</button><button className="cms-primary" onClick={save} disabled={cms.saving}>{cms.saving ? 'Publishing…' : 'Publish changes'}</button></div></header>
    {message && <div className="cms-toast">{message}</div>}
    {cms.error && <div className="cms-alert">{cms.error}</div>}
    <nav className="cms-tabs">{tabs.map((item) => <button key={item} className={tab === item ? 'active' : ''} onClick={() => setTab(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}</nav>
    {tab === 'contact' && <section className="cms-card"><h2>Contact & business details</h2><p className="cms-muted">These details appear across the site and help customers reach you.</p>{Object.entries(draft.contact).map(([key, value]) => <Field key={key} label={key} value={value} onChange={(v) => updateContact(key, v)} />)}</section>}
    {tab === 'products' && <CollectionEditor title="Firewood products" items={draft.woods} setItems={(woods) => setDraft({ ...draft, woods })} renderSummary={(x) => <><strong>{x.name}</strong><small>{x.heat} · {x.moisture}</small></>} makeNew={() => ({ name: 'New wood', description: '', image: '', moisture: '', heat: '', bestFor: { es: '', en: '' } })} renderForm={(x, update) => <><h2>Product</h2><Field label="Name" value={x.name} onChange={(v) => update({ ...x, name: v })}/><Field label="Description" value={x.description} onChange={(v) => update({ ...x, description: v })} multiline/><Field label="Image path / URL" value={x.image} onChange={(v) => update({ ...x, image: v })}/><div className="cms-grid"><Field label="Moisture" value={x.moisture} onChange={(v) => update({ ...x, moisture: v })}/><Field label="Heat" value={x.heat} onChange={(v) => update({ ...x, heat: v })}/></div><Field label="Best for · Español" value={x.bestFor?.es} onChange={(v) => update({ ...x, bestFor: { ...x.bestFor, es: v } })}/><Field label="Best for · English" value={x.bestFor?.en} onChange={(v) => update({ ...x, bestFor: { ...x.bestFor, en: v } })}/></>}/>} />}
    {tab === 'gallery' && <CollectionEditor title="Gallery media" items={draft.gallery} setItems={(gallery) => setDraft({ ...draft, gallery })} renderSummary={(x) => <><strong>{x.titleEs || 'Untitled'}</strong><small>{x.type} · {x.src}</small></>} makeNew={() => ({ src: '', titleEs: '', titleEn: '', type: 'image' })} renderForm={(x, update) => <><h2>Gallery item</h2><Field label="Media URL / path" value={x.src} onChange={(v) => update({ ...x, src: v })}/><div className="cms-grid"><Field label="Title · Español" value={x.titleEs} onChange={(v) => update({ ...x, titleEs: v })}/><Field label="Title · English" value={x.titleEn} onChange={(v) => update({ ...x, titleEn: v })}/></div><label className="cms-field"><span>Media type</span><select value={x.type || 'image'} onChange={(e) => update({ ...x, type: e.target.value })}><option value="image">Image</option><option value="video">Video</option></select></label></>}/>} />}
    {tab === 'reviews' && <CollectionEditor title="Customer reviews" items={draft.reviews} setItems={(reviews) => setDraft({ ...draft, reviews })} renderSummary={(x) => <><strong>{x.name}</strong><small>{x.rating}/5</small></>} makeNew={() => ({ name: '', text: '', rating: 5 })} renderForm={(x, update) => <><h2>Customer review</h2><Field label="Customer / business" value={x.name} onChange={(v) => update({ ...x, name: v })}/><Field label="Review" value={x.text} onChange={(v) => update({ ...x, text: v })} multiline/><label className="cms-field"><span>Rating</span><select value={x.rating} onChange={(e) => update({ ...x, rating: Number(e.target.value) })}>{[5,4,3,2,1].map((n) => <option key={n}>{n}</option>)}</select></label></>}/>} />}
    {tab === 'cities' && <CollectionEditor title="SEO city pages" items={draft.cities} setItems={(cities) => setDraft({ ...draft, cities })} renderSummary={(x) => <><strong>{x.city}</strong><small>{x.region}</small></>} makeNew={() => ({ id: `city-${Date.now()}`, city: '', region: '', slugs: { es: '', en: '' }, intents: { es: '', en: '' } })} renderForm={(x, update) => <><h2>Local landing page</h2><Field label="City" value={x.city} onChange={(v) => update({ ...x, city: v })}/><Field label="Region" value={x.region} onChange={(v) => update({ ...x, region: v })}/><Field label="URL slug · Español" value={x.slugs?.es} onChange={(v) => update({ ...x, slugs: { ...x.slugs, es: v } })}/><Field label="URL slug · English" value={x.slugs?.en} onChange={(v) => update({ ...x, slugs: { ...x.slugs, en: v } })}/><Field label="Search intent · Español" value={x.intents?.es} onChange={(v) => update({ ...x, intents: { ...x.intents, es: v } })}/><Field label="Search intent · English" value={x.intents?.en} onChange={(v) => update({ ...x, intents: { ...x.intents, en: v } })}/></>}/>} />}
  </main>
}
