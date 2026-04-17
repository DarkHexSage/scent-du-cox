"use client";
import { useState } from "react";

const WHATSAPP = "50686175331";

type Product = { id: number; name: string; detail: string; price: number; originalPrice: number; category: "hombre" | "mujer"; img: string; };

const products: Product[] = [
  { id: 1, name: "AFNAN 9PM", detail: "EDP 100ML", price: 27000, originalPrice: 35000, category: "hombre", img: "/images/products/perfume-9pm-men.png" },
  { id: 2, name: "ARMAF CLUB DE NUIT", detail: "EDP 105ML", price: 26000, originalPrice: 34000, category: "hombre", img: "/images/products/perfume-clubdenuit-men.png" },
  { id: 3, name: "VERSACE EROS", detail: "EDP 100ML", price: 54000, originalPrice: 68000, category: "hombre", img: "/images/products/perfume-eros-men.png" },
  { id: 4, name: "VERSACE EROS", detail: "EDT 100ML", price: 42000, originalPrice: 55000, category: "hombre", img: "/images/products/perfume-eroseaudetoilette-men.png" },
  { id: 5, name: "VERSACE EROS FLAME", detail: "EDP 100ML", price: 49000, originalPrice: 62000, category: "hombre", img: "/images/products/perfume-erosflame-men.png" },
  { id: 6, name: "CLINIQUE HAPPY", detail: "EDT 100ML", price: 27000, originalPrice: 35000, category: "hombre", img: "/images/products/perfume-happy-men.png" },
  { id: 7, name: "DUNHILL ICON", detail: "EDP 100ML", price: 25000, originalPrice: 33000, category: "hombre", img: "/images/products/perfume-icon-men.png" },
  { id: 8, name: "HUGO BOSS IN MOTION", detail: "EDT 100ML", price: 27000, originalPrice: 35000, category: "hombre", img: "/images/products/perfume-inmotion-men.png" },
  { id: 9, name: "JESUS DEL POZO", detail: "EDT 125ML", price: 26000, originalPrice: 34000, category: "hombre", img: "/images/products/perfume-jesusdelpozo-men.png" },
  { id: 10, name: "ISSEY MIYAKE L'EAU D'ISSEY", detail: "EDT 125ML", price: 35000, originalPrice: 45000, category: "hombre", img: "/images/products/perfume-leaudissey-men.png" },
  { id: 11, name: "D&G LIGHT BLUE", detail: "EDT 125ML", price: 42000, originalPrice: 55000, category: "hombre", img: "/images/products/perfume-lightblue-men.png" },
  { id: 12, name: "BVLGARI MAN", detail: "EDP 100ML", price: 27000, originalPrice: 35000, category: "hombre", img: "/images/products/perfume-man-men.png" },
  { id: 13, name: "HUGO BOSS NUMBER ONE", detail: "EDT 125ML", price: 27000, originalPrice: 35000, category: "hombre", img: "/images/products/perfume-numberone-men.png" },
  { id: 14, name: "MOSCHINO TOY BOY", detail: "EDP 100ML", price: 42000, originalPrice: 55000, category: "hombre", img: "/images/products/perfume-toyboy-men.png" },
  { id: 15, name: "NAUTICA VOYAGE", detail: "EDT 100ML", price: 15000, originalPrice: 22000, category: "hombre", img: "/images/products/perfume-voyage-men.png" },
  { id: 16, name: "AFNAN 9PM", detail: "EDP 100ML", price: 27000, originalPrice: 35000, category: "mujer", img: "/images/products/perfume-9pm-women.png" },
  { id: 17, name: "VERSACE BRIGHT CRYSTAL", detail: "EDT 90ML", price: 38000, originalPrice: 50000, category: "mujer", img: "/images/products/perfume-brightcrystal-women.png" },
  { id: 18, name: "CH GOOD GIRL EAU", detail: "EDP 80ML", price: 60000, originalPrice: 78000, category: "mujer", img: "/images/products/perfume-goodgirleau-women.png" },
  { id: 19, name: "CH GOOD GIRL SUPREME", detail: "EDP 80ML", price: 60000, originalPrice: 78000, category: "mujer", img: "/images/products/perfume-goodgirlsupreme-women.png" },
  { id: 20, name: "CLINIQUE HAPPY", detail: "EDP 100ML", price: 27000, originalPrice: 35000, category: "mujer", img: "/images/products/perfume-happy-women.png" },
  { id: 21, name: "DUNHILL ICON", detail: "EDP 100ML", price: 25000, originalPrice: 33000, category: "mujer", img: "/images/products/perfume-icon-women.png" },
  { id: 22, name: "JESUS DEL POZO", detail: "EDT 100ML", price: 26000, originalPrice: 34000, category: "mujer", img: "/images/products/perfume-jesusdelpozo-women.png" },
  { id: 23, name: "D&G LIGHT BLUE", detail: "EDT 100ML", price: 39000, originalPrice: 50000, category: "mujer", img: "/images/products/perfume-lightblue-women.png" },
  { id: 24, name: "MOSCHINO TOY 2 BUBBLEGUM", detail: "EDT 100ML", price: 42000, originalPrice: 55000, category: "mujer", img: "/images/products/perfume-toy2bubblegum-women.png" },
  { id: 25, name: "CH VERY GOOD GIRL GLAM", detail: "EDP 80ML", price: 60000, originalPrice: 78000, category: "mujer", img: "/images/products/perfume-verygoodgirlglam-women.png" },
  { id: 26, name: "CH VERY GOOD GIRL NEW YORK", detail: "EDP 80ML", price: 60000, originalPrice: 78000, category: "mujer", img: "/images/products/perfume-verygoodgirlnewyork-women.png" },
  { id: 27, name: "VERSACE YELLOW DIAMOND", detail: "EDT 90ML", price: 38000, originalPrice: 50000, category: "mujer", img: "/images/products/perfume-yellowdiamond-women.png" },
];

const categoryLabels: Record<string, string> = { todos: "Todos", hombre: "Hombre", mujer: "Mujer" };

function formatPrice(n: number) { return "\u20A1" + n.toLocaleString("es-CR"); }
function discountPercent(o: number, n: number) { return Math.round(((o - n) / o) * 100); }
function waLink(p: Product) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hola! Me interesa el perfume " + p.name + " " + p.detail + " (" + formatPrice(p.price) + "). Esta disponible?");
}

const WaIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card">
      <div className="card-img-wrap">
        <span className={"card-badge " + (product.category === "hombre" ? "badge-men" : "badge-women")}>{product.category === "hombre" ? "HOMBRE" : "MUJER"}</span>
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>
      <div className="card-body">
        <p className="card-name">{product.name}</p>
        <p className="card-detail">{product.detail}</p>
        <div className="card-prices">
          <p className="card-price">{formatPrice(product.price)}</p>
          {product.originalPrice > product.price && <span className="card-original">{formatPrice(product.originalPrice)}</span>}
        </div>
        <a className="card-wa" href={waLink(product)} target="_blank" rel="noopener noreferrer"><WaIcon /> Consultar</a>
      </div>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<string>("todos");
  const filtered = filter === "todos" ? products : products.filter((p) => p.category === filter);
  return (
    <>
      <div className="hero">
        <p className="hero-sub-top">Perfumeria</p>
        <h1 className="hero-title">Scent du Cox<span>Costa Rica</span></h1>
        <img src="/images/logo.png" alt="Scent du Cox" style={{ width: 160, height: "auto", margin: "24px auto", display: "block" }} />
        <p className="hero-sub">FRAGANCIAS ORIGINALES &middot; HOMBRE &amp; MUJER</p>
        <div className="hero-line" />
      </div>
      <div className="filters">
        {Object.entries(categoryLabels).map(([key, label]) => {
          const count = key === "todos" ? products.length : products.filter((p) => p.category === key).length;
          return (<button key={key} className={"filter-btn" + (filter === key ? " active" : "")} onClick={() => setFilter(key)}>{label}<span className="filter-count">{count}</span></button>);
        })}
      </div>
      <div className="grid-container">
        {filter === "todos" ? (["hombre", "mujer"] as const).map((cat) => (
          <div key={cat} style={{ marginBottom: 48 }}>
            <div className="section-header"><h2>{cat === "hombre" ? "Para El" : "Para Ella"}</h2><p>{cat === "hombre" ? "Fragancias masculinas" : "Fragancias femeninas"}</p><div className="section-divider" /></div>
            <div className="product-grid">{products.filter((p) => p.category === cat).map((p) => (<ProductCard key={p.id} product={p} />))}</div>
          </div>
        )) : (
          <><div className="section-header"><h2>{filter === "hombre" ? "Para El" : "Para Ella"}</h2><p>{filter === "hombre" ? "Fragancias masculinas" : "Fragancias femeninas"}</p><div className="section-divider" /></div>
          <div className="product-grid">{filtered.map((p) => (<ProductCard key={p.id} product={p} />))}</div></>
        )}
      </div>
      <a className="wa-float" href={"https://wa.me/" + WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
      <footer className="footer"><p>&copy; 2026 <span className="accent">Scent du Cox</span> &mdash; Costa Rica</p><p style={{ marginTop: 4, opacity: 0.5 }}>Pedidos por WhatsApp &middot; Envios a todo el pais</p></footer>
    </>
  );
}
