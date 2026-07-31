export const SITE_CHAT_EVENT = 'retimaca:open-chat'

export function openSiteChat(prefill = '') {
  window.dispatchEvent(
    new CustomEvent(SITE_CHAT_EVENT, {
      detail: { prefill },
    })
  )
}
