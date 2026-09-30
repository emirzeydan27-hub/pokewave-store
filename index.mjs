const PRODUCTS = [
  {
    id: "etb-30th",
    name: "30th Celebration Elite Trainer Box",
    category: "Sealed",
    price: 49.99,
    packs: 9,
    tag: "Selling 3\u20134\xD7 MSRP on the secondary market",
    blurb: "9 booster packs, full-art Nidorina promo, sleeves, dice and full accessory kit. The launch-day product everyone wants.",
    wave: "Wave 1 \xB7 Live",
    accent: "#f5a623",
    emoji: "\u26A1"
  },
  {
    id: "etb-pc",
    name: "Pok\xE9mon Center Elite Trainer Box",
    category: "Sealed",
    price: 59.99,
    packs: 11,
    tag: "Exclusive",
    blurb: "11 packs (two more than the standard ETB) plus two Nidorina promos, one with the Pok\xE9mon Center stamp.",
    wave: "Wave 1 \xB7 Live",
    accent: "#ee4035",
    emoji: "\u{1F381}"
  },
  {
    id: "booster-bundle",
    name: "30th Celebration Booster Bundle",
    category: "Sealed",
    price: 26.94,
    packs: 6,
    tag: "Cheapest packs in the lineup \u2014 $4.49/pack",
    blurb: "Six booster packs, nothing else. The most efficient way to farm the 30 artist Pikachus and the Futuristic Rares.",
    wave: "Wave 2 \xB7 Oct 2",
    accent: "#3b82f6",
    emoji: "\u{1F4E6}"
  },
  {
    id: "mini-tins",
    name: "Day & Night Mini Tin (2 packs)",
    category: "Sealed",
    price: 9.99,
    packs: 2,
    tag: "10 collectible designs",
    blurb: "Two booster packs, sticker sheet and art card in a collectible tin. Perfect impulse price point.",
    wave: "Wave 2 \xB7 Oct 2",
    accent: "#8b5cf6",
    emoji: "\u{1F96B}"
  },
  {
    id: "poster-collection",
    name: "Poster Collection (Legendary Birds)",
    category: "Sealed",
    price: 14.99,
    packs: 3,
    tag: "$5.00/pack",
    blurb: "3 booster packs, a two-sided poster showing 160+ cards, and foil promos of Articuno, Zapdos and Moltres.",
    wave: "Wave 1 \xB7 Live",
    accent: "#0ea5e9",
    emoji: "\u{1F5BC}\uFE0F"
  },
  {
    id: "ex-box",
    name: "Pok\xE9mon ex Box \u2014 Sylveon / Greninja",
    category: "Sealed",
    price: 21.99,
    packs: 4,
    tag: "Fast mover",
    blurb: "A foil promo, an oversized version of the same card and 4 booster packs. One of the first products to sell out at launch.",
    wave: "Wave 1 \xB7 Live",
    accent: "#ec4899",
    emoji: "\u{1F3B4}"
  },
  {
    id: "upc",
    name: "Ultra-Premium Collection (Day / Night)",
    category: "Pre-Order",
    price: 179.99,
    packs: 29,
    tag: "Only confirmed route to the Classic Collection pack",
    blurb: "29 packs + one Classic Collection booster (Base Set Charizard with the 30th stamp lives here), Pikachu ex + Espeon/Umbreon promos, playmat, sleeves and deck box.",
    wave: "Wave 4 \xB7 Nov 6",
    accent: "#eab308",
    emoji: "\u{1F451}"
  },
  {
    id: "ditto-premium",
    name: "Ditto Premium Collection",
    category: "Pre-Order",
    price: 39.99,
    packs: 8,
    tag: "$5.00/pack",
    blurb: "8 booster packs, an Illustration Rare style Ditto promo and an acrylic display stand.",
    wave: "Wave 4 \xB7 Nov 6",
    accent: "#a855f7",
    emoji: "\u{1F52E}"
  },
  {
    id: "figure-collection",
    name: "Figure Collection \u2014 Mew / Mewtwo",
    category: "Pre-Order",
    price: 29.99,
    packs: 5,
    tag: "Gift-tier",
    blurb: "A sculpted figure, foil promo, oversized card and 5 booster packs. Strong Q4 gifting item.",
    wave: "Wave 4 \xB7 Nov 6",
    accent: "#14b8a6",
    emoji: "\u{1F9EC}"
  },
  {
    id: "charizard-single",
    name: "Base Set Charizard (market-tested single)",
    category: "Singles",
    price: 108,
    tag: "Low competition \xB7 High opportunity segment",
    blurb: "Charizard is one of the three segments eBay data scores Low competition / High opportunity \u2014 2,826 sold in 30 days at ~$108.",
    wave: "In stock",
    accent: "#f97316",
    emoji: "\u{1F525}"
  },
  {
    id: "pikachu-promo",
    name: "Pikachu 133/M-P Championship Promo",
    category: "Singles",
    price: 7.98,
    tag: "Pikachu segment: 64.1% sell-through",
    blurb: "The Pikachu segment is the third high-opportunity pocket: 6,170 cards sold in 30 days at a $109.96 average.",
    wave: "In stock",
    accent: "#facc15",
    emoji: "\u{1F401}"
  },
  {
    id: "pitch-black-box",
    name: "Mega Era: Pitch Black Booster Box",
    category: "Sealed",
    price: 159.99,
    packs: 36,
    tag: "Current standard-era sealed",
    blurb: "Factory-sealed box from the current Mega Evolution era \u2014 the steady earner while 30th Celebration product sells out everywhere.",
    wave: "In stock",
    accent: "#64748b",
    emoji: "\u{1F5A4}"
  }
];
const TREND_STATS = [
  { value: "136K", label: "Pok\xE9mon cards sold on eBay, last 30 days" },
  { value: "$5.1M", label: "eBay sold value, last 30 days" },
  { value: "+10.1%", label: "US hobby-store sales, YoY (Census)" },
  { value: "3\u20134\xD7", label: "ETB secondary-market premium at launch" }
];
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const productCard = (p) => `
<article class="card" style="--accent:${p.accent}" data-id="${p.id}">
  <div class="card-top"><span class="emoji">${p.emoji}</span><span class="wave">${esc(p.wave)}</span></div>
  <h3>${esc(p.name)}</h3>
  <p class="blurb">${esc(p.blurb)}</p>
  ${p.tag ? `<p class="tag">${esc(p.tag)}</p>` : ""}
  <div class="card-bottom">
    <span class="price">$${p.price.toFixed(2)}</span>
    <button class="add" data-add="${p.id}">Add to cart</button>
  </div>
</article>`;
function page() {
  const sealed = PRODUCTS.filter((p) => p.category === "Sealed").map(productCard).join("");
  const singles = PRODUCTS.filter((p) => p.category === "Singles").map(productCard).join("");
  const preorder = PRODUCTS.filter((p) => p.category === "Pre-Order").map(productCard).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PokeWave \u2014 Pok\xE9mon TCG, sealed & graded</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; margin: 0; }
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    background: radial-gradient(1200px 600px at 80% -10%, #1e2a5a 0%, #0b1020 55%) #0b1020;
    color: #e6e9f2; line-height: 1.5; min-height: 100vh;
  }
  a { color: #8ab4ff; }
  header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 28px; border-bottom: 1px solid #ffffff14;
    position: sticky; top: 0; backdrop-filter: blur(10px);
    background: #0b1020cc; z-index: 10;
  }
  .logo { font-weight: 800; font-size: 20px; letter-spacing: .5px; }
  .logo span { color: #f5a623; }
  .cart-btn {
    background: #f5a623; color: #14181f; border: 0; border-radius: 999px;
    padding: 9px 18px; font-weight: 700; cursor: pointer; font-size: 14px;
  }
  .hero { padding: 56px 28px 30px; max-width: 1100px; margin: 0 auto; }
  .hero h1 { font-size: clamp(28px, 5vw, 44px); line-height: 1.15; max-width: 760px; }
  .hero h1 em { color: #f5a623; font-style: normal; }
  .hero p { margin-top: 14px; color: #aab3c5; max-width: 640px; }
  .badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
  .badge {
    font-size: 12.5px; padding: 6px 12px; border-radius: 999px;
    border: 1px solid #ffffff22; color: #c8d2e8; background: #ffffff08;
  }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; max-width: 1100px; margin: 26px auto 0; padding: 0 28px; }
  .stat { background: #ffffff07; border: 1px solid #ffffff14; border-radius: 14px; padding: 16px 18px; }
  .stat b { display: block; font-size: 24px; color: #f5a623; }
  .stat span { font-size: 12.5px; color: #9aa4ba; }
  main { max-width: 1100px; margin: 0 auto; padding: 10px 28px 80px; }
  section { margin-top: 42px; }
  section h2 { font-size: 20px; margin-bottom: 6px; }
  section .sub { color: #8d97ad; font-size: 13.5px; margin-bottom: 18px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
  .card {
    background: linear-gradient(180deg, #ffffff0a, #ffffff05);
    border: 1px solid #ffffff14; border-radius: 16px; padding: 18px;
    display: flex; flex-direction: column; gap: 8px;
    border-top: 3px solid var(--accent);
  }
  .card-top { display: flex; justify-content: space-between; align-items: center; }
  .emoji { font-size: 26px; }
  .wave { font-size: 11px; color: #9aa4ba; text-transform: uppercase; letter-spacing: .8px; }
  .card h3 { font-size: 16px; line-height: 1.3; }
  .blurb { font-size: 13px; color: #aab3c5; flex: 1; }
  .tag { font-size: 12px; color: var(--accent); }
  .card-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; }
  .price { font-weight: 800; font-size: 18px; }
  .add {
    background: var(--accent); color: #10131a; border: 0; border-radius: 10px;
    padding: 8px 14px; font-weight: 700; cursor: pointer; font-size: 13px;
  }
  .add:active { transform: scale(.97); }
  .note {
    margin-top: 40px; padding: 16px 18px; border-radius: 14px;
    border: 1px dashed #f5a62366; background: #f5a6230d; font-size: 13px; color: #d9c89a;
  }
  dialog {
    border: 1px solid #ffffff22; border-radius: 16px; background: #131a2e;
    color: #e6e9f2; padding: 24px; max-width: 420px; width: 90%;
  }
  dialog::backdrop { background: #000a; }
  dialog h3 { margin-bottom: 8px; }
  dialog p { font-size: 14px; color: #aab3c5; margin-bottom: 14px; }
  dialog ul { margin: 0 0 16px 18px; font-size: 14px; color: #c8d2e8; }
  dialog .total { font-weight: 800; color: #f5a623; font-size: 18px; }
  dialog button { background: #f5a623; border: 0; color: #14181f; font-weight: 700; border-radius: 10px; padding: 10px 16px; cursor: pointer; }
  dialog .ghost { background: transparent; color: #aab3c5; border: 1px solid #ffffff22; margin-left: 8px; }
  footer { text-align: center; color: #77809a; font-size: 12px; padding: 30px 20px 40px; border-top: 1px solid #ffffff10; }
</style>
</head>
<body>
<header>
  <div class="logo">Poke<span>Wave</span></div>
  <button class="cart-btn" id="cartBtn">\u{1F6D2} Cart <span id="cartCount">0</span></button>
</header>

<div class="hero">
  <h1>Riding the <em>Pok\xE9mon 30th Celebration</em> wave \u2014 the hottest collectible market in the US right now.</h1>
  <p>Sealed product, chase singles and pre-orders, priced at MSRP while the secondary market runs 3\u20134\xD7 hot. Launch wave is live; the Booster Bundle lands October 2 and the Ultra-Premium Collection lands November 6.</p>
  <div class="badges">
    <span class="badge">\u2705 Authenticated sourcing only</span>
    <span class="badge">\u{1F69A} Free US shipping over $300</span>
    <span class="badge">\u{1F4E6} Wave 1 &amp; 2 in stock</span>
    <span class="badge">\u{1F451} Nov 6 pre-orders open</span>
  </div>
</div>

<div class="stats">
  ${TREND_STATS.map((s) => `<div class="stat"><b>${s.value}</b><span>${s.label}</span></div>`).join("")}
</div>

<main>
  <section>
    <h2>Sealed product \u2014 in stock</h2>
    <p class="sub">Factory-sealed boxes, bundles and collections at US MSRP.</p>
    <div class="grid">${sealed}</div>
  </section>

  <section>
    <h2>Pre-orders \u2014 November 6 wave</h2>
    <p class="sub">The Ultra-Premium Collection is the only confirmed route to the Classic Collection pack.</p>
    <div class="grid">${preorder}</div>
  </section>

  <section>
    <h2>Chase singles</h2>
    <p class="sub">Hand-picked from the segments eBay data scores as low-competition / high-opportunity.</p>
    <div class="grid">${singles}</div>
  </section>

  <div class="note">
    <strong>Demo notice:</strong> this is a live preview storefront built for you today. Product data reflects real
    September 2026 market research; checkout is not connected to a payment processor yet \u2014 reserving an order
    sends it to our order desk for manual follow-up. Connect a payment account and this becomes a real store.
  </div>
</main>

<dialog id="cartDlg">
  <h3>Your cart</h3>
  <div id="cartItems"></div>
  <p class="total" id="cartTotal"></p>
  <button id="checkoutBtn">Reserve order</button>
  <button class="ghost" id="closeDlg">Keep browsing</button>
</dialog>

<footer>PokeWave \xB7 Built by Chew \xB7 Catalog reflects market data as of Sep 2026 \xB7 Demo storefront</footer>

<script>
  const PRODUCTS = ${JSON.stringify(PRODUCTS)};
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem("pw_cart") || "{}"); } catch (e) { cart = {}; }

  const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const total = () => Object.entries(cart).reduce((sum, [id, q]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return p ? sum + p.price * q : sum;
  }, 0);

  function syncBadge() { document.getElementById("cartCount").textContent = count(); }

  function renderCart() {
    const box = document.getElementById("cartItems");
    const lines = Object.entries(cart).map(([id, q]) => {
      const p = PRODUCTS.find((x) => x.id === id);
      return p ? \`<p style="margin:6px 0;font-size:14px">\${q}\xD7 \${p.name} \u2014 $\${(p.price*q).toFixed(2)}</p>\` : "";
    }).join("");
    box.innerHTML = lines || '<p style="color:#9aa4ba;font-size:14px">Cart is empty.</p>';
    document.getElementById("cartTotal").textContent = "Total: $" + total().toFixed(2);
  }

  document.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.add;
      cart[id] = (cart[id] || 0) + 1;
      localStorage.setItem("pw_cart", JSON.stringify(cart));
      syncBadge();
      btn.textContent = "Added \u2713";
      setTimeout(() => (btn.textContent = "Add to cart"), 900);
    });
  });

  const dlg = document.getElementById("cartDlg");
  document.getElementById("cartBtn").addEventListener("click", () => { renderCart(); dlg.showModal(); });
  document.getElementById("closeDlg").addEventListener("click", () => dlg.close());
  document.getElementById("checkoutBtn").addEventListener("click", async () => {
    if (!count()) { alert("Your cart is empty."); return; }
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart, total: Number(total().toFixed(2)), at: new Date().toISOString() }),
    });
    if (res.ok) {
      cart = {}; localStorage.removeItem("pw_cart"); syncBadge(); renderCart();
      alert("Order reserved! Our order desk will reach out to confirm payment and shipping. (Demo flow \u2014 payments wiring in progress.)");
      dlg.close();
    } else { alert("Could not reserve the order \u2014 try again."); }
  });

  syncBadge();
</script>
</body>
</html>`;
}
const orders = [];
import http from "node:http";
http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  if (url.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(page());
    return;
  }
  if (url.pathname === "/api/order" && req.method === "POST") {
    let raw = "";
    req.on("data", (c) => raw += c);
    req.on("end", () => {
      try {
        const body = JSON.parse(raw);
        orders.push({ at: body.at, items: body.items, total: body.total });
        console.log("[order]", JSON.stringify(body));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true }));
      } catch {
        res.writeHead(400);
        res.end("bad request");
      }
    });
    return;
  }
  if (url.pathname === "/healthz") {
    res.writeHead(200);
    res.end("ok");
    return;
  }
  res.writeHead(404);
  res.end("not found");
}).listen(3001, () => console.log("PokeWave listening on :3001"));
