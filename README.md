# Coffee Hour Chapala — sitio web

Sitio bilingüe (ES/EN) construido con **Vite + React + TypeScript + Tailwind CSS**.

## Requisitos y arranque

```bash
yarn install   # usar yarn — el npm de este entorno está roto (npm 6 con Node 20)
yarn dev       # http://localhost:5173
yarn build     # type-check + build de producción en dist/
yarn preview   # sirve dist/ localmente
```

## Variables de entorno

Google Analytics 4 usa `G-35PLSX9GLD` por defecto. Para cambiar la propiedad, copia
`.env.example` a `.env.local` y ajusta `PUBLIC_GA_MEASUREMENT_ID`. Para desactivar
la analítica, define esa variable con un valor vacío. Los cambios requieren recompilar.

## Dónde vive cada dato (fuente única — edítalo una vez)

| Qué | Archivo |
|---|---|
| Nombre, dirección, teléfono, horario, redes sociales | `src/data/business.ts` |
| Menú completo (5 categorías, precios) | `src/data/menu/*.ts` |
| Productos destacados de inicio | `src/data/featured.ts` |
| Experiencias (Hangout & Create, Picoteo) | `src/data/experiences.ts` |
| Galería | `src/data/gallery.ts` |
| Videos | `src/data/videos.ts` |
| Blog / guía local | `src/data/blog.ts` |
| Textos de UI (ambos idiomas) | `src/i18n/es.ts`, `src/i18n/en.ts` |
| Títulos, descripciones y palabras clave por página e idioma | `src/data/seo.ts` |
| Rutas del sitio (ambos idiomas) | `src/routes.ts` |

Cambiar el teléfono, la dirección o el horario en `business.ts` los actualiza en **todo**
el sitio (header, footer, contacto, FAQ, JSON-LD) automáticamente.

## Despliegue

Es una SPA (client-side routing). Incluye configuración para los hosts estáticos más comunes:

- **Netlify**: `public/_redirects` ya redirige todo a `index.html`.
- **Vercel**: `vercel.json` ya define el rewrite.
- Cualquier otro host estático necesita una regla equivalente ("SPA fallback") o las rutas
  internas (`/menu/desayunos`, `/en/faq`, etc.) darán 404 al recargar o compartir el link directo.

## Antes de publicar — pendientes de confirmación

Estos puntos están señalados en el código (`business.ts`, `experiences.ts`, `i18n/*.ts`) y
deben confirmarse con el negocio antes de lanzar:

- Año exacto de fundación (se usa "23 años" como dato proporcionado por la marca).
- Wi-Fi, aceptación de tarjetas, facturación, para llevar — no confirmados, se muestran como
  "en proceso de confirmación" en FAQ.
- Vigencia, horarios y precio de las experiencias "Hangout & Create" y "Picoteo".
- Si el teléfono +52 376 765 5931 recibe WhatsApp (no se agregó el botón hasta confirmarlo).
- Coordenadas GPS exactas (el mapa usa búsqueda por dirección, no lat/lng fijos).
- Reseñas de clientes: no se publicaron testimonios inventados; la sección enlaza a las
  reseñas reales en Google Maps / redes en lo que se obtiene permiso para citarlas.
