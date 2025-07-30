import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const en = {
  nav: {
    home: "Home",
    products: "Wood Products", 
    about: "About Us",
    contact: "Contact"
  },
  hero: {
    title: "Retimaca Premium Restaurant Wood",
    subtitle: "OUR QUALITY CAN'T BE BEAT!",
    description: "Miami's premier supplier of premium cooking wood for restaurants, pizzerias, and commercial kitchens.",
    viewProducts: "View Our Wood Products",
    getQuote: "Get Quote Now"
  },
  features: {
    family: {
      title: "Family Business",
      description: "We believe in family values with our dedicated team involved in daily operations, ensuring personal service for every Miami restaurant we serve."
    },
    commercial: {
      title: "Commercial Focus", 
      description: "Specializing exclusively in commercial restaurant supply across Miami-Dade County, from fine dining establishments to casual pizzerias."
    },
    quality: {
      title: "Premium Quality",
      description: "Only the finest kiln-dried hardwoods that meet strict restaurant standards for flavor, burn quality, and food safety regulations."
    }
  },
  products: {
    title: "Premium Restaurant Wood Products",
    description: "From pizza oven perfection to steakhouse grilling, we supply the right wood for every culinary need.",
    viewAll: "View All Wood Types",
    oak: {
      name: "Premium Oak",
      description: "Perfect for steakhouses and grilling. Long burn time with excellent flavor."
    },
    hickory: {
      name: "Hickory", 
      description: "Ideal for BBQ restaurants and smokers. Strong, distinctive flavor profile."
    },
    cherry: {
      name: "Cherry",
      description: "Premium choice for pizza ovens. Mild, sweet flavor that enhances food."
    },
    apple: {
      name: "Apple Wood",
      description: "Subtle, fruity flavor perfect for poultry and pork dishes."
    }
  },
  stats: {
    restaurants: "Miami Restaurants Served",
    deliveries: "Monthly Deliveries", 
    experience: "Years Experience",
    coverage: "Miami-Dade Coverage"
  },
  contact: {
    title: "Get Your Wood Delivery Quote",
    subtitle: "Ready to supply your Miami restaurant with premium cooking wood?",
    form: {
      restaurantName: "Restaurant Name",
      contactPerson: "Contact Person",
      phone: "Phone Number",
      email: "Email Address", 
      woodType: "Wood Type",
      quantity: "Quantity Needed",
      deliveryAddress: "Restaurant Delivery Address",
      message: "Additional Requirements or Notes",
      submit: "Request Quote",
      sending: "Sending..."
    },
    info: {
      title: "Contact Information",
      phone: "Phone",
      email: "Email", 
      serviceArea: "Service Area",
      delivery: "Delivery",
      hours: "Mon-Fri 8am - 5pm",
      area: "Miami-Dade County",
      timeframe: "2-3 Business Days"
    }
  },
  footer: {
    description: "Miami's premier supplier of premium cooking wood for restaurants, pizzerias, and commercial kitchens throughout Miami-Dade County.",
    quickLinks: "Quick Links",
    woodTypes: "Wood Types",
    contactInfo: "Contact Info",
    copyright: "© 2024 Retimaca. All rights reserved.",
    licensed: "Licensed & Certified for Commercial Food Service"
  },
  common: {
    phone: "Call us: (305) 555-WOOD (9663)",
    callNow: "Call (305) 555-WOOD",
    readMore: "Learn More"
  }
};

// Spanish translations
const es = {
  nav: {
    home: "Inicio",
    products: "Productos de Madera",
    about: "Sobre Nosotros", 
    contact: "Contacto"
  },
  hero: {
    title: "Retimaca Madera Premium para Restaurantes",
    subtitle: "¡NUESTRA CALIDAD NO TIENE COMPETENCIA!",
    description: "El proveedor principal de Miami de madera de cocina premium para restaurantes, pizzerías y cocinas comerciales.",
    viewProducts: "Ver Nuestros Productos de Madera",
    getQuote: "Obtener Cotización Ahora"
  },
  features: {
    family: {
      title: "Negocio Familiar",
      description: "Creemos en los valores familiares con nuestro equipo dedicado involucrado en las operaciones diarias, asegurando servicio personal para cada restaurante de Miami que servimos."
    },
    commercial: {
      title: "Enfoque Comercial",
      description: "Especializándose exclusivamente en suministro comercial de restaurantes en todo el Condado de Miami-Dade, desde establecimientos de alta cocina hasta pizzerías casuales."
    },
    quality: {
      title: "Calidad Premium",
      description: "Solo las mejores maderas duras secadas en horno que cumplen con los estrictos estándares de restaurantes para sabor, calidad de combustión y regulaciones de seguridad alimentaria."
    }
  },
  products: {
    title: "Productos Premium de Madera para Restaurantes",
    description: "Desde la perfección del horno de pizza hasta la parrilla de steakhouse, suministramos la madera correcta para cada necesidad culinaria.",
    viewAll: "Ver Todos los Tipos de Madera",
    oak: {
      name: "Roble Premium",
      description: "Perfecto para steakhouses y parrillas. Tiempo de combustión largo con excelente sabor."
    },
    hickory: {
      name: "Nogal Americano",
      description: "Ideal para restaurantes de BBQ y ahumadores. Perfil de sabor fuerte y distintivo."
    },
    cherry: {
      name: "Cerezo",
      description: "Elección premium para hornos de pizza. Sabor suave y dulce que realza la comida."
    },
    apple: {
      name: "Madera de Manzano",
      description: "Sabor sutil y afrutado perfecto para platos de aves y cerdo."
    }
  },
  stats: {
    restaurants: "Restaurantes de Miami Servidos",
    deliveries: "Entregas Mensuales",
    experience: "Años de Experiencia", 
    coverage: "Cobertura de Miami-Dade"
  },
  contact: {
    title: "Obtenga Su Cotización de Entrega de Madera",
    subtitle: "¿Listo para abastecer su restaurante de Miami con madera de cocina premium?",
    form: {
      restaurantName: "Nombre del Restaurante",
      contactPerson: "Persona de Contacto",
      phone: "Número de Teléfono",
      email: "Dirección de Email",
      woodType: "Tipo de Madera",
      quantity: "Cantidad Necesaria",
      deliveryAddress: "Dirección de Entrega del Restaurante",
      message: "Requisitos Adicionales o Notas",
      submit: "Solicitar Cotización",
      sending: "Enviando..."
    },
    info: {
      title: "Información de Contacto",
      phone: "Teléfono",
      email: "Email",
      serviceArea: "Área de Servicio",
      delivery: "Entrega",
      hours: "Lun-Vie 8am - 5pm",
      area: "Condado de Miami-Dade",
      timeframe: "2-3 Días Hábiles"
    }
  },
  footer: {
    description: "El proveedor principal de Miami de madera de cocina premium para restaurantes, pizzerías y cocinas comerciales en todo el Condado de Miami-Dade.",
    quickLinks: "Enlaces Rápidos",
    woodTypes: "Tipos de Madera",
    contactInfo: "Información de Contacto",
    copyright: "© 2024 Retimaca. Todos los derechos reservados.",
    licensed: "Licenciado y Certificado para Servicio de Alimentos Comerciales"
  },
  common: {
    phone: "Llámanos: (305) 555-WOOD (9663)",
    callNow: "Llamar (305) 555-WOOD",
    readMore: "Leer Más"
  }
};

// Italian translations
const it = {
  nav: {
    home: "Home",
    products: "Prodotti di Legno",
    about: "Chi Siamo",
    contact: "Contatto"
  },
  hero: {
    title: "Retimaca Legno Premium per Ristoranti",
    subtitle: "LA NOSTRA QUALITÀ È IMBATTIBILE!",
    description: "Il fornitore principale di Miami di legno da cucina premium per ristoranti, pizzerie e cucine commerciali.",
    viewProducts: "Vedi i Nostri Prodotti di Legno",
    getQuote: "Ottieni Preventivo Ora"
  },
  features: {
    family: {
      title: "Azienda Familiare",
      description: "Crediamo nei valori familiari con il nostro team dedicato coinvolto nelle operazioni quotidiane, garantendo servizio personale per ogni ristorante di Miami che serviamo."
    },
    commercial: {
      title: "Focus Commerciale",
      description: "Specializzandoci esclusivamente nella fornitura commerciale di ristoranti in tutta la Contea di Miami-Dade, da stabilimenti di alta cucina a pizzerie casual."
    },
    quality: {
      title: "Qualità Premium",
      description: "Solo i migliori legni duri essiccati in forno che soddisfano i rigorosi standard dei ristoranti per sapore, qualità di combustione e regolamenti di sicurezza alimentare."
    }
  },
  products: {
    title: "Prodotti Premium di Legno per Ristoranti",
    description: "Dalla perfezione del forno per pizza alla griglia steakhouse, forniamo il legno giusto per ogni esigenza culinaria.",
    viewAll: "Vedi Tutti i Tipi di Legno",
    oak: {
      name: "Quercia Premium",
      description: "Perfetto per steakhouse e grigliate. Tempo di combustione lungo con eccellente sapore."
    },
    hickory: {
      name: "Noce Americano",
      description: "Ideale per ristoranti BBQ e affumicatori. Profilo di sapore forte e distintivo."
    },
    cherry: {
      name: "Ciliegio",
      description: "Scelta premium per forni per pizza. Sapore dolce e delicato che esalta il cibo."
    },
    apple: {
      name: "Legno di Melo",
      description: "Sapore sottile e fruttato perfetto per piatti di pollame e maiale."
    }
  },
  stats: {
    restaurants: "Ristoranti di Miami Serviti",
    deliveries: "Consegne Mensili",
    experience: "Anni di Esperienza",
    coverage: "Copertura Miami-Dade"
  },
  contact: {
    title: "Ottieni il Tuo Preventivo di Consegna Legno",
    subtitle: "Pronto a rifornire il tuo ristorante di Miami con legno da cucina premium?",
    form: {
      restaurantName: "Nome del Ristorante",
      contactPerson: "Persona di Contatto",
      phone: "Numero di Telefono",
      email: "Indirizzo Email",
      woodType: "Tipo di Legno",
      quantity: "Quantità Necessaria",
      deliveryAddress: "Indirizzo di Consegna del Ristorante",
      message: "Requisiti Aggiuntivi o Note",
      submit: "Richiedi Preventivo",
      sending: "Invio..."
    },
    info: {
      title: "Informazioni di Contatto",
      phone: "Telefono",
      email: "Email",
      serviceArea: "Area di Servizio",
      delivery: "Consegna",
      hours: "Lun-Ven 8am - 5pm",
      area: "Contea di Miami-Dade",
      timeframe: "2-3 Giorni Lavorativi"
    }
  },
  footer: {
    description: "Il fornitore principale di Miami di legno da cucina premium per ristoranti, pizzerie e cucine commerciali in tutta la Contea di Miami-Dade.",
    quickLinks: "Link Rapidi",
    woodTypes: "Tipi di Legno",
    contactInfo: "Informazioni di Contatto",
    copyright: "© 2024 Retimaca. Tutti i diritti riservati.",
    licensed: "Autorizzato e Certificato per Servizio Alimentare Commerciale"
  },
  common: {
    phone: "Chiamaci: (305) 555-WOOD (9663)",
    callNow: "Chiama (305) 555-WOOD",
    readMore: "Leggi di Più"
  }
};

const resources = {
  en: { translation: en },
  es: { translation: es },
  it: { translation: it }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;