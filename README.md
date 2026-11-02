# SJPII_Site
Desarrollo para el sitio de la Parroquia San Juan Pablo II por parte de TBD Software (2026).

## Desarrollo

Sitio estático en [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

- `src/styles/tokens/` — tokens del sistema de diseño (colores, tipografía, espaciado, efectos).
- `src/components/ds/` — componentes del sistema de diseño (Button, IconButton, Icon, Photo, Card, SectionHeading).
- `src/components/` — SiteHeader, PageHero, SiteFooter, CtaBand.
- `src/pages/` — Inicio, Horarios, Sacramentos, Comunidad, Eventos, Nosotros, Oración y Donativos.
- `src/data/` — datos editables: parroquia (`site.ts`), horarios, grupos y eventos. Todos son de ejemplo.
- `src/lib/forms.ts` — validación y envío de los formularios.

### Formularios

Contacto, peticiones de oración y avisos de donativo se envían como JSON a la URL de
`PUBLIC_FORMS_ENDPOINT` (ver `.env.example`). Sin esa variable los formularios muestran su
confirmación, pero no envían nada. El donativo en línea todavía no está conectado a una
pasarela de pago.
