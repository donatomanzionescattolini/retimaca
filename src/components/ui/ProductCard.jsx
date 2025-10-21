import React from 'react'


function Packaging(){
return (
<ul>
<li><strong>Pallet:</strong> 1 cubic yard</li>
<li><strong>Paquete:</strong> 5 piezas — 15" cada una</li>
</ul>
)
}


export default function ProductCard({product}){
return (
<article className="card">
<h4>{product.name}</h4>
<p className="muted">{product.intro}</p>
<p>{product.details}</p>


<div className="card-section">
<h5>Presentación</h5>
<Packaging />
</div>


<div className="card-actions">
<button className="btn btn-outline" onClick={() => alert('Solicitar cotización para ' + product.name)}>Solicitar cotización</button>
</div>
</article>
)
}