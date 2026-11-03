# MORON Products API

A read-only REST API containing the 17 MORON products provided by the project owner.

## Setup and deployment

1. All 19 original product images are included in `public/images/`.
2. Run `npm install`.
3. Run `npx vercel dev` to test locally (Vercel CLI may prompt you to link a project).
4. Run `npx vercel --prod` or import this folder into Vercel to deploy. The real public domain is assigned on deployment; none is pre-created.

## Endpoints

- `GET /api/products` — returns `{items, total, categories}`.
- `GET /api/products?category=Totes`
- `GET /api/products?search=leather`
- `GET /api/products?sort=price-low` (`featured`, `price-low`, `price-high`, `name`)
- `GET /api/products/sienna-tote` — returns one product; missing IDs return HTTP 404.

The API returns absolute image URLs based on the deployed host. It does not upload, generate, or store image binaries. All referenced images are included in `public/images`.

## Use from MORON

```ts
const response = await fetch('https://YOUR-VERCEL-DOMAIN.vercel.app/api/products');
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const { items } = await response.json();
console.log(items);
```

This is a public read-only demo API. It has no database or write operations.
