# Pendiente antes de publicar y solicitar el alta en Amazon Afiliados

## Datos que faltan (obligatorios para legal/privacidad)

- **NIF/NIE y nombre o razón social** del titular: hoy son placeholders
  `[PENDIENTE: ...]` en `_build/nav.js` (`SITE.legal`). Se usan en
  [`legal/aviso-legal.html`](legal/aviso-legal.html) y
  [`legal/politica-privacidad.html`](legal/politica-privacidad.html).
- **Domicilio fiscal completo**: mismo sitio.
- **Correo real**: `hola@cocinaideal.es` es un placeholder — hoy ese
  dominio no existe. Cambiar `SITE.email` en `_build/nav.js` por un correo
  que sí puedas leer (puede ser un Gmail mientras no haya dominio propio),
  y verificarlo antes de publicar.

Después de rellenar `_build/nav.js`, ejecutar `node build.js` para
regenerar las páginas con los datos correctos.

## Tag de Amazon Afiliados: PLACEHOLDER, sin crear todavía

`SITE.amazonTag` en `_build/nav.js` está puesto a `cocinaideal0a-21`, un
**Store ID inventado a modo de placeholder**: todavía no se ha creado el
Store ID real para este sitio en el panel de afiliados de Amazon. Antes de
publicar o de generar tráfico real:

1. Crear el Store ID real para CocinaIdeal en `afiliados.amazon.es` →
   "Configuración de la cuenta" → "Administrar tus Store ID" (puede usarse
   la misma cuenta de Afiliados que los otros sitios hermanos, Amazon
   permite hasta 50 Store ID por cuenta).
2. Sustituir `cocinaideal0a-21` por el Store ID real en `_build/nav.js` y
   volver a ejecutar `node build.js`: todos los enlaces de producto
   (`amazonProductUrl` en `_build/lib.js`) y las cajas de búsqueda
   (`amazonSearchBox`) se regeneran automáticamente con el tag correcto.
3. Publicar el sitio en Vercel (nuevo proyecto) y añadir la URL publicada
   en `afiliados.amazon.es` → "Tus páginas web o apps".

**No enviar tráfico real ni solicitar el alta en el programa mientras el
tag siga siendo el placeholder anterior.**

## Dominio

No hay dominio comprado. `SITE.domain` en `_build/nav.js` apunta a un
subdominio provisional de Vercel (`cocinaideal.vercel.app`) — todavía sin
desplegar. Para la solicitud de afiliados sirve un subdominio de Vercel,
pero un dominio propio (`.es` o `.com`) da más credibilidad en la revisión
manual de Amazon.

## Contenido

Hay 26 páginas de contenido real (10 guías + 4 artículos de blog + inicio
+ guías-índice + productos-índice + 119 fichas de producto + 10
comparativas + blog-índice + 3 legales + 404 sin indexar), muy por encima
del mínimo de 10 páginas que suele pedir Amazon. Los 119 productos están
verificados en Amazon.es en septiembre de 2026 (ASIN, título, precio e
imagen reales, tomados de los resultados de búsqueda), no inventados.

Ideas de contenido ya identificadas y no escritas todavía:
- Guía de robots de cocina con función de vapor y accesorios para pasta
  fresca, como categoría aparte de los robots multifunción generalistas.
- Guía de vajilla y menaje básico (platos, boles) si se quiere ampliar
  más allá del pequeño electrodoméstico.
- Artículo: cómo elegir electrodoméstico de cocina según el tamaño real
  de la cocina (encimera disponible, no solo presupuesto).

## Enlaces de afiliado (mínimo viable, sin PA-API)

Cada guía tiene una sección "Productos que cumplen estos criterios" con
11-12 productos reales por guía (`products` en `_build/data.js`, 119
productos en total), enlazados con
`https://www.amazon.es/dp/<ASIN>?tag=<SITE.amazonTag>`. Todas las páginas
del sitio muestran además un bloque "Lo más recomendado de CocinaIdeal"
con un producto por categoría destacada.

Los precios y valoraciones mostrados son una foto fija tomada al añadir
cada producto (verificados en Amazon.es en septiembre de 2026), no datos
en vivo — hay que revisarlos de vez en cuando a mano, sobre todo en
categorías con mucha rotación de modelos (robots de cocina, freidoras de
aire). Siguiente paso cuando haya PA-API: sustituir esos datos estáticos
por una consulta automática en tiempo de build.

## Otras cosas menores

- `SITE.social` (Instagram/Pinterest) está vacío.
- No hay fotografías propias: el sitio usa solo iconos SVG a propósito,
  salvo las fotos de producto que vienen directamente de Amazon.
- Analítica: no hay ningún script de analítica instalado todavía.
- No tiene páginas "Sobre mí" ni "Contacto" (misma decisión que en los
  sitios hermanos): el correo de contacto vive solo en las páginas
  legales.
- El favicon (`assets/img/favicon.svg`) es un icono genérico de olla,
  creado para este sitio; no hay logotipo de marca diseñado.
