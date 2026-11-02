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
- `src/components/` — SiteHeader, PageHero, SiteFooter.
- `src/data/site.ts` — rutas, navegación y datos de la parroquia (dirección, teléfono y redes son de ejemplo).
