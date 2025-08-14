// --- $SFOX Live Price Loader (Moonshot-first) ---
(async function(){
  const pill = document.getElementById('pricePill');
  const setText = (v) => { if (pill) pill.textContent = `$SFOX: $${Number(v).toFixed(6)}`; };

  // Manual override support (set window.SFOX_PRICE manually to pin the number)
  if (typeof window.SFOX_PRICE === "number") {
    setText(window.SFOX_PRICE);
  }

  const msUrl = window.MOONSHOT_PRICE_URL || "";
  async function fetchMoonshotPriceOnce() {
    if (!msUrl) return null;
    try {
      const res = await fetch(msUrl, {cache: "no-store"});
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const mapper = window.MOONSHOT_PRICE_MAP || ((j)=>j?.price ?? null);
      const p = mapper(json);
      return (p && !Number.isNaN(Number(p))) ? Number(p) : null;
    } catch (e) {
      console.warn("Moonshot fetch failed:", e);
      return null;
    }
  }

  // Fallback: keep a subtle random walk until Moonshot URL is provided.
  let price = 0.000001;
  setText(price);

  async function tick() {
    let v = await fetchMoonshotPriceOnce();
    if (typeof v === "number") {
      price = v;
      setText(price);
    } else {
      // gentle animated placeholder so the pill looks alive
      price = Math.max(0, price + (Math.random() - 0.5) * 0.0000005);
      setText(price);
    }
  }

  // First paint immediately, then update every 25s
  tick();
  setInterval(tick, 25000);
})();
