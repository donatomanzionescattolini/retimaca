export const CONTACT_INFO = {
  phone: '17868775187',
  whatsapp: 'https://wa.me/17868775187',
  email: 'info@retimaca.com',
  address: '12750 NW 17th Street #222, Miami, FL 33182',
  hours: 'Lunes - Viernes: 8:00 am - 6:00 pm',
  instagram: 'https://www.instagram.com/hardwoodretimaca/'
}

export const woods = [
  {
    name: "Casuarina",
    description: "Ideal para restaurantes que buscan una flama duradera y aroma suave.",
    image: "/casuarina.webp",
    moisture: "< 20%",
    heat: "Medium-High",
    bestFor: {
      es: "Pizza y parrilla rápida",
      en: "Pizza and fast grill service",
    },
  },
  {
    name: "Oak Blanco",
    description: "Leña densa, perfecta para ahumar carne y para hornos de alta temperatura.",
    image: "/oak-blanco.jpg",
    moisture: "< 18%",
    heat: "High",
    bestFor: {
      es: "Ahumado y cocción lenta",
      en: "Smoking and slow cook",
    },
  },
]

export const gallery = [
  { src: "/pallet.jpg", titleEs: "Pallet completo de leña seca", titleEn: "Complete pallet of dry firewood", type: "image" },
  { src: "/bundle.jpg", titleEs: "Paquete de 5 piezas", titleEn: "5-piece bundle", type: "image" },
  { src: "/casuarina.jpg", titleEs: "Leña Casuarina lista para entrega", titleEn: "Australian Pine firewood ready for delivery", type: "image" },
  { src: "/oak-blanco.jpg", titleEs: "Leña Oak Blanco premium", titleEn: "Premium White Oak firewood", type: "image" },
  { src: "/video (1).mp4", titleEs: "Servicio bajo la lluvia", titleEn: "Service in the rain", type: "video" },
  { src: "/video (2).mp4", titleEs: "El secreto de la pizza bien hecha", titleEn: "The secret to perfect pizza", type: "video" },
  { src: "/video (3).mp4", titleEs: "Nuestros trabajadores en acción", titleEn: "Our workers in action", type: "video" },
  { src: "/video (4).mp4", titleEs: "Ejemplo de uso", titleEn: "Usage example", type: "video" },
  { src: "/video (5).mp4", titleEs: "Tip para que el carbón dure más", titleEn: "Tip to make charcoal last longer", type: "video" },
  { src: "/video (6).mp4", titleEs: "Tip para encender", titleEn: "Lighting tip", type: "video" },
  { src: "/video (7).mp4", titleEs: "Ejemplo de uso", titleEn: "Usage example", type: "video" },
]

export const reviews = [
  {
    name: "Restaurante La Flama",
    text: "Excelente calidad y puntualidad en las entregas. La Casuarina tiene una combustión perfecta.",
    rating: 5,
  },
  {
    name: "Parrilla El Roble",
    text: "El mejor proveedor de leña que hemos tenido. Productos secos y bien cortados.",
    rating: 5,
  },
  {
    name: "Horno Artesano",
    text: "Nos encanta su atención personalizada y la consistencia del producto.",
    rating: 4,
  },
]

export const SECTIONS = [
  "inicio",
  "sobre-nosotros", 
  "productos",
  "galeria",
  "delivery",
  "areas-servicio",
  "guias",
  "faq",
  "contacto"
]

export const CITY_LANDING_PAGES = [
  {
    id: "miami-delivery",
    city: "Miami",
    region: "Miami-Dade",
    slugs: {
      es: "lena-a-domicilio-miami",
      en: "firewood-delivery-miami",
    },
    intents: {
      es: "Leña a domicilio para restaurantes y hogares",
      en: "Firewood delivery for restaurants and homes",
    },
  },
  {
    id: "doral-restaurants",
    city: "Doral",
    region: "Miami-Dade",
    slugs: {
      es: "proveedor-lena-restaurantes-doral",
      en: "restaurant-firewood-supplier-doral",
    },
    intents: {
      es: "Proveedor de leña para restaurantes",
      en: "Restaurant firewood supplier",
    },
  },
  {
    id: "kendall-pizza",
    city: "Kendall",
    region: "Miami-Dade",
    slugs: {
      es: "lena-para-hornos-pizza-kendall",
      en: "pizza-oven-firewood-kendall",
    },
    intents: {
      es: "Leña premium para hornos de pizza",
      en: "Premium firewood for pizza ovens",
    },
  },
  {
    id: "broward-wholesale",
    city: "Broward",
    region: "South Florida",
    slugs: {
      es: "lena-al-mayor-broward",
      en: "bulk-firewood-broward",
    },
    intents: {
      es: "Leña al mayor con entrega rápida",
      en: "Bulk firewood with fast delivery",
    },
  },
]