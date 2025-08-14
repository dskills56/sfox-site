// --- $SFOX Live Price Config ---
// Set this to the Moonshot JSON price endpoint that returns { price: number } or similar.
// Example placeholder (replace with the correct URL for your token):
// window.MOONSHOT_PRICE_URL = "https://moonshot.com/api/token/PRICE_ENDPOINT_FOR_SFOX";
// If you don't have a direct JSON endpoint, keep this blank and the site will use a graceful fallback.
window.MOONSHOT_PRICE_URL = "";
// Optional: a function to transform the JSON shape into a numeric price.
// By default we try common keys like price, currentPrice, data.price, etc.
window.MOONSHOT_PRICE_MAP = (json) => {
  if (!json) return null;
  if (typeof json === "number") return json;
  if (json.price) return Number(json.price);
  if (json.currentPrice) return Number(json.currentPrice);
  if (json.data && (json.data.price || json.data.currentPrice)) return Number(json.data.price || json.data.currentPrice);
  return null;
};
