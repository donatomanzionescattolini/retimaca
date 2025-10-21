import React from 'react'


export default function Hero(){
return (
<section className="hero">
<div className="container hero-inner">
<div>
<h2>Leña profesional para restaurantes y negocios</h2>
<p className="lead">Casuarina y Oak Blanco, secado natural al sol. Entregas a pedido — presentaciones para producción o compra por paquete.</p>
<a href="#products" className="btn">Ver productos</a>
</div>
<div className="hero-image" aria-hidden>
{/* Placeholder — replace with a photo if you have one */}
<div className="image-box">Imagen de leña</div>
</div>
</div>
</section>
)
}