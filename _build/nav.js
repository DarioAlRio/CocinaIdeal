"use strict";

// Datos del negocio y estructura de navegación. Todo lo que cambie de marca
// (nombre, dominio, tag de afiliado, datos fiscales) se toca aquí, no en las páginas.

const SITE = {
  name: "CocinaIdeal",
  claim: "Guías y comparativas para elegir robots de cocina, freidoras y pequeños electrodomésticos sin perder tiempo ni dinero",
  description:
    "Guías de compra y comparativas independientes de robots de cocina, freidoras de aire, batidoras, cafeteras y demás pequeño electrodoméstico para cocinar mejor sin gastar de más.",
  // Dominio provisional: no hay dominio propio comprado todavía.
  domain: "https://cocinaideal.vercel.app",
  locale: "es_ES",
  lang: "es",
  email: "hola@cocinaideal.es", // PENDIENTE: crear buzón real, ver PENDIENTE.md
  // PLACEHOLDER: todavía no existe el Store ID real de Amazon Afiliados para
  // este sitio. Sustituir por el tag real en cuanto se cree en el panel de
  // afiliados (afiliados.amazon.es → "Tus páginas web o apps"). Ver PENDIENTE.md.
  amazonTag: "cocinaideal0a-21",
  amazonDisclaimer:
    "Como Afiliado de Amazon, CocinaIdeal obtiene ingresos por las compras adscritas que cumplen los requisitos aplicables.",
  social: {
    instagram: null,
    pinterest: null,
  },
  // Datos fiscales del titular: pendientes, ver PENDIENTE.md.
  legal: {
    titular: "[PENDIENTE: nombre y apellidos o razón social]",
    nif: "[PENDIENTE: NIF/NIE]",
    domicilio: "[PENDIENTE: domicilio fiscal completo]",
    registro: null,
  },
};

// Menú principal. Cada guía y artículo real vive en _build/data.js; aquí solo
// se listan los grupos y los enlaces fijos.
const NAV = [
  { label: "Guías de compra", href: "/guias/" },
  { label: "Productos", href: "/productos/" },
  { label: "Blog", href: "/blog/" },
];

const FOOT = {
  columnas: [
    {
      titulo: "Guías de compra",
      enlaces: [], // se rellena en build.js a partir de DATA.guides
    },
    {
      titulo: "Blog",
      enlaces: [], // se rellena en build.js a partir de DATA.articles
    },
    {
      titulo: "Legal",
      enlaces: [
        { label: "Aviso legal", href: "/legal/aviso-legal.html" },
        { label: "Política de privacidad", href: "/legal/politica-privacidad.html" },
        { label: "Política de cookies", href: "/legal/politica-cookies.html" },
      ],
    },
  ],
};

module.exports = { SITE, NAV, FOOT };
