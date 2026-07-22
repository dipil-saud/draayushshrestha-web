# Dr. Aayush Shrestha

Static Astro website for draayushshrestha.com.

## Development

```sh
npm install
npm run dev
```

The local development server is currently started on `http://localhost:4173/`.

## Verification

```sh
npm run check
npm run build
```

Astro writes the production website to `dist/`.

## Cloudflare Pages

Connect the Git repository in Cloudflare Workers & Pages and use:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22.12.0` or newer

No Cloudflare adapter is required because the site uses Astro's static output. Add `@astrojs/cloudflare` only if the site later needs server-side rendering or Cloudflare runtime APIs.
