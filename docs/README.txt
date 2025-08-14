# $SFOX Site — Live Price (Moonshot-first) + Social Cards

## How to wire the price from Moonshot
1. Open `config.js` and set `window.MOONSHOT_PRICE_URL` to your **Moonshot JSON endpoint** for $SFOX price.
   - The script expects JSON and will try common keys (price, currentPrice, data.price). You can customize with `window.MOONSHOT_PRICE_MAP`.
2. The price pill will refresh every ~25 seconds.

> If Moonshot blocks CORS for that URL, deploy a tiny proxy (Netlify Function/Cloudflare Worker) and point `MOONSHOT_PRICE_URL` to it.

## Social preview cards
- Open Graph & Twitter meta tags are set to `assets/coin-logo.png`. Replace with your preferred share image if you want a banner.

## Images to replace
- `assets/coin-logo.png` → your real logo (same filename)
- `assets/fox-bg.png` → your background image (same filename)

## Preview locally
- VS Code → Live Server → Open `index.html`

## Deploy free
- Netlify (drag-and-drop), GitHub Pages, Vercel, Cloudflare Pages.
