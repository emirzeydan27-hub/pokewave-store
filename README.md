# PokeWave — Pokémon TCG storefront

A self-contained storefront for Pokémon TCG sealed product, pre-orders and chase singles.
Built on Node's built-in HTTP server — zero dependencies, one file (`index.mjs`).

## Run it

```bash
npm start          # serves on port 3001 (set PORT to change)
```

## Deploy free (pick one)

- **Vercel** — import this repo at vercel.com/new; build command `none`, output `none`, and it runs `npm start`.
- **Netlify** — connect the repo, set build command to `echo` and publish directory to `/`.
- **Cloudflare / Render / Railway** — any Node host: `npm start`.

## Notes

- Catalog data and prices live at the top of `index.mjs` (`PRODUCTS` array) — edit there.
- `/api/order` logs reserved orders; wire a real payment processor (Stripe etc.) before selling.
