import { useMemo, useState } from "react";

export default function UinkLuxuryStore() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [openIndex, setOpenIndex] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const whatsappBase = "https://wa.me/573013439680";

  const filters = [
    "Todos",
    "Adhesivos",
    "Pestañas",
    "Pinzas",
    "Limpieza",
    "Removedores",
    "Boonder",
    "Micropigmentación",
  ];

  const videoTestimonials = [
    "https://i.imgur.com/qSJ8DCR.mp4",
    "https://i.imgur.com/vGektvq.mp4",
    "https://i.imgur.com/3tRHHyQ.mp4",
    "https://i.imgur.com/0hFXxFv.mp4",
    "https://i.imgur.com/VoI90oo.mp4",
  ];

  const packingVideos = [
    "https://i.imgur.com/rIJCH7r.mp4",
    "https://i.imgur.com/0zn80L2.mp4",
    "https://i.imgur.com/qIsK7oU.mp4",
    "https://i.imgur.com/ANRky5L.mp4",
    "https://i.imgur.com/RtrrjJ1.mp4",
  ];

  const products = [
    {
      name: "Deluxe",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "Ultra rápido, elegante y diseñado para climas cálidos.",
      description:
        "DELUXE es un adhesivo de alto rendimiento para lashistas con ritmo ágil. Su textura fluida y fórmula libre de etil-cianoacrilato ayudan a lograr una adhesión estable, una experiencia más profesional y una retención poderosa incluso en ambientes exigentes.",
      bullets: [
        "Secado ultra rápido: 0.3 seg",
        "Humedad ideal: 60-70%",
        "Temperatura ideal: 24-30 °C",
        "Textura: fluida",
        "Libre de etil-cianoacrilato",
        "Ideal para climas cálidos y manos rápidas",
      ],
      note: "Para lashistas que quieren velocidad, control y presencia premium en su mesa.",
      image: "https://i.imgur.com/2uI5ayf.jpeg",
      gallery: ["https://i.imgur.com/2uI5ayf.jpeg", "https://i.imgur.com/6IidGfU.png"],
      video: "https://i.imgur.com/KksbWBc.mp4",
    },
    {
      name: "Volume Pro",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "El favorito para Bogotá: precisión, retención y velocidad.",
      description:
        "UINK VOLUME PRO es ideal para estudios de clima frío o templado, manos ágiles y lashistas que buscan una unión limpia, rápida y estable. Libre de etil-cianoacrilato y pensado para elevar la seguridad de cada procedimiento profesional.",
      bullets: [
        "Secado rápido: 0.5 a 1 seg",
        "Retención: hasta 7 semanas",
        "Humedad ideal: 45-65%",
        "Temperatura ideal: 20-25 °C",
        "Textura: fluida",
        "Libre de etil-cianoacrilato",
      ],
      note: "Perfecto si trabajas en Bogotá o ciudades de temperatura fría/templada.",
      image: "https://i.imgur.com/2PJkZXI.png",
      gallery: ["https://i.imgur.com/2PJkZXI.png", "https://i.imgur.com/uDeduBa.png", "https://i.imgur.com/06gLK60.png"],
      video: "https://i.imgur.com/Qg8IhH0.mp4",
    },
    {
      name: "Fantasy",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "Transparente, versátil y visualmente limpio.",
      description:
        "UINK FANTASY es un adhesivo transparente con secado controlado, ideal para trabajos donde quieres un resultado más natural, limpio o creativo. Su fórmula libre de etil-cianoacrilato se adapta a estudios con variaciones climáticas y manos en evolución.",
      bullets: [
        "Secado controlado: 0.5 seg",
        "Retención: hasta 6 semanas",
        "Humedad ideal: 50-65%",
        "Temperatura ideal: 20-25 °C",
        "Textura: media",
        "Libre de etil-cianoacrilato",
      ],
      note: "Ideal para acabados limpios, sets naturales o trabajos donde no quieres pigmento negro.",
      image: "https://i.imgur.com/YuCj4B6.jpeg",
      gallery: ["https://i.imgur.com/YuCj4B6.jpeg"],
      video: "https://i.imgur.com/Wmb6vNZ.mp4",
    },
    {
      name: "Classic Pro",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "Control, seguridad y confianza para manos en formación.",
      description:
        "CLASSIC PRO acompaña a lashistas que están construyendo técnica, ritmo y seguridad. Su secado más suave permite trabajar con mayor control sin sacrificar desempeño profesional. Libre de etil-cianoacrilato.",
      bullets: [
        "Secado suave: 1.5 a 2 seg",
        "Retención: hasta 5 semanas",
        "Humedad ideal: 50-65%",
        "Temperatura ideal: 20-26 °C",
        "Textura: medio espesa",
        "Libre de etil-cianoacrilato",
      ],
      note: "Perfecto para principiantes o para quienes necesitan más tiempo de acoplamiento.",
      image: "https://i.imgur.com/GhBlFsy.jpeg",
      gallery: ["https://i.imgur.com/GhBlFsy.jpeg", "https://i.imgur.com/F6BTmg4.png", "https://i.imgur.com/TYwzwQX.png"],
      video: "https://i.imgur.com/mujOjIo.mp4",
    },
    {
      name: "Boonder",
      category: "Boonder",
      priceValue: 75000,
      priceLabel: "$ 75.000 COP",
      tagline: "El sellado final para potenciar la retención.",
      description:
        "Nuestro boonder sella la unión del adhesivo con la pestaña natural, acelera la polimerización y ayuda a reducir vapores e irritación. Es el toque final que convierte un buen set en una experiencia profesional.",
      bullets: [
        "Se aplica al final del servicio",
        "Compatible con cualquier adhesivo",
        "Mejora la durabilidad del set",
        "Reduce sensibilidad post-aplicación",
        "Ayuda a disminuir vapores",
      ],
      note: "El paso que muchas clientas no ven, pero sí sienten en la retención.",
      image: "https://i.imgur.com/LyqEIsc.png",
      gallery: ["https://i.imgur.com/LyqEIsc.png"],
    },
    {
      name: "Removedor en crema",
      category: "Removedores",
      priceValue: 50000,
      priceLabel: "$ 50.000 COP",
      tagline: "Remoción profesional, precisa y segura.",
      description:
        "Removedor en crema diseñado para eliminar extensiones de pestañas de forma controlada, rápida y profesional. Su textura permite trabajar sin escurrimientos, cuidando la zona ocular y la experiencia de la clienta.",
      bullets: [
        "Textura en crema: no escurre",
        "Remoción eficaz en minutos",
        "Compatible con adhesivos UINK",
        "Recomendado para uso profesional",
      ],
      note: "Para retiros más limpios, seguros y elegantes.",
      image: "https://i.imgur.com/KRktHfX.png",
      gallery: ["https://i.imgur.com/KRktHfX.png"],
    },
    {
      name: "Shampoo Limpiador Profesional UINK",
      category: "Limpieza",
      priceValue: 25000,
      priceLabel: "$ 25.000 COP",
      tagline: "La retención empieza antes de aplicar.",
      description:
        "Limpieza suave y efectiva para preparar la mirada. Ayuda a retirar grasa, polvo y residuos de maquillaje para que el adhesivo trabaje sobre una base más limpia.",
      bullets: [
        "pH balanceado",
        "Libre de aceites y parabenos",
        "Apto para ojos sensibles",
        "Espuma cremosa de alto rendimiento",
      ],
      note: "Una buena preparación puede cambiar el resultado del set.",
      image: "https://i.imgur.com/4dDF7Ig.jpeg",
      gallery: ["https://i.imgur.com/4dDF7Ig.jpeg"],
    },
    {
      name: "Espejo UINK",
      category: "Pestañas",
      priceValue: 40000,
      priceLabel: "$ 40.000 COP",
      tagline: "Precisión visual para revisar cada detalle del set.",
      description:
        "Herramienta práctica para controlar ángulos, simetría, cobertura y dirección durante el procedimiento.",
      bullets: [
        "Ideal para revisar dirección y cobertura",
        "Ligero y cómodo",
        "Acabado visual elegante",
        "Control de detalle en lash sets",
      ],
      note: "Una herramienta pequeña que mejora el control del resultado final.",
      image: "https://i.imgur.com/AS4Xnca.jpeg",
      gallery: ["https://i.imgur.com/AS4Xnca.jpeg"],
    },
    {
      name: "Porta pestañas Acrílico UINK",
      category: "Pestañas",
      priceValue: 60000,
      priceLabel: "$ 60.000 COP",
      tagline: "Orden, estética y funcionalidad en tu mesa.",
      description:
        "Portapestañas en acrílico resistente, pensado para trabajar con más orden, limpieza visual y presentación profesional.",
      bullets: [
        "Base estable y ligera",
        "Medidas visibles",
        "Compatible con varias curvaturas",
        "Diseño limpio y profesional",
      ],
      note: "Tu mesa de trabajo también comunica tu nivel.",
      image: "https://i.imgur.com/WbTYR1P.jpeg",
      gallery: ["https://i.imgur.com/WbTYR1P.jpeg"],
    },
    {
      name: "Trebori OR",
      category: "Micropigmentación",
      priceValue: 60000,
      priceLabel: "$ 60.000 COP",
      tagline: "Arte, técnica y precisión en cada trazo.",
      description:
        "Herramienta desarrollada por el formador Óscar, fabricada en acero inoxidable coreano de grado quirúrgico para microblading artístico y estructurado.",
      bullets: [
        "Compatible con agujas U, curvas y planas",
        "Sistema de sujeción reforzado",
        "Acero coreano esterilizable",
        "Mango antideslizante y peso balanceado",
      ],
      note: "Alta precisión para artistas de micropigmentación.",
      image: "https://i.imgur.com/d7j385l.jpeg",
      gallery: ["https://i.imgur.com/d7j385l.jpeg"],
    },
  ];

  const pinzasEmma = {
    name: "Pinzas UINK by Emma",
    category: "Pinzas",
    image: "https://i.imgur.com/4CwfEMo.png",
    priceValue: 45000,
    description:
      "Pinzas UINK con precisión profesional, ergonomía y estética elegante. Creadas para lashistas que buscan control, comodidad y presentación premium.",
    models: [
      "Pinza Curva de Volumen (Boot / Panzona)",
      "Pinza Angular en L (L-Type)",
      "Pinza de Aislamiento Recta",
      "Pinza Recta Larga de Precisión",
    ],
  };

  const pinzaPink = {
    name: "Pinza Pink",
    category: "Pinzas",
    image: "https://i.imgur.com/kzEFTDn.png",
    priceValue: 45000,
    description:
      "Edición rosada creada para lashistas que valoran precisión y estilo. Su agarre permite trabajar con más seguridad en técnicas de volumen.",
    bullets: [
      "Grip de precisión",
      "Acabado rosado elegante",
      "Cierre fino y alineación estable",
      "Compatible con técnicas Russian, Wispy y Dark Volume",
    ],
  };

  const classicLashes = {
    name: "Pestañas Clásicas",
    category: "Pestañas",
    image: "https://i.imgur.com/0Oq7zeZ.jpeg",
    priceValue: 25000,
    description:
      "Diseñadas para looks naturales, limpios y profesionales, con opciones para distintas necesidades dentro de la técnica clásica.",
    lengths: ["8mm", "9mm", "10mm", "11mm", "12mm", "13mm", "14mm", "MIX"],
    thickness: ["0.07", "0.15"],
  };

  const fibrasTech = {
    name: "Fibras Tecnológicas",
    category: "Pestañas",
    image: "https://i.imgur.com/I3mPzvK.jpeg",
    effectPrices: { YY: 32000, "3DW": 32000, "4DW": 35000, "5DW": 38000 },
    lengths: ["8mm", "9mm", "10mm", "11mm", "12mm", "13mm", "14mm", "MIX"],
    thickness: ["0.07"],
    description:
      "Sets modernos, ligeros y con más textura visual para lashistas que buscan impacto, tendencia y facilidad de trabajo.",
  };

  const fibrasU = {
    name: "Fibras Tecnológicas en U",
    category: "Pestañas",
    image: "https://i.imgur.com/j8C5c2X.png",
    effectPrices: {
      "U Rímel": 35000,
      U2D: 35000,
      U3D: 35000,
      U4D: 38000,
      U5D: 40000,
    },
    lengths: ["8mm", "9mm", "10mm", "11mm", "12mm", "13mm", "14mm", "MIX"],
    thickness: ["0.07"],
    description:
      "Volumen uniforme, oscuro y definido para sets con presencia, efecto rímel y acabados intensos.",
  };

  const efectosEspeciales = {
    name: "Pestañas Efectos Especiales",
    category: "Pestañas",
    image: "https://i.imgur.com/ssW1AIn.jpeg",
    effectPrices: { "Vol Russo": 25000, Commic: 30000, "Brown 3DW": 45000 },
    lengths: ["MIX"],
    thickness: ["0.07"],
    curves: ["D", "C", "J", "L", "M"],
    description:
      "Colección para lashistas que quieren salir de lo tradicional y ofrecer sets con personalidad, carácter visual y efectos más creativos.",
  };

  const starterKit = {
    name: "Kit Lash Starter UINK",
    priceValue: 397000,
    image: "https://i.imgur.com/A5o7bwl.png",
    variant: "1 adhesivo + 2 pinzas + 1 boonder + 1 removedor + 2 cajas MIX",
    description:
      "Todo lo esencial para iniciar o renovar tu mesa profesional: adhesivo, dos pinzas, boonder, removedor y dos cajas de pestañas en MIX.",
  };

  const [pinzaModel, setPinzaModel] = useState(pinzasEmma.models[0]);
  const [classicLength, setClassicLength] = useState("10mm");
  const [classicThickness, setClassicThickness] = useState("0.07");
  const [techEffect, setTechEffect] = useState("YY");
  const [techLength, setTechLength] = useState("10mm");
  const [techThickness, setTechThickness] = useState("0.07");
  const [uEffect, setUEffect] = useState("U Rímel");
  const [uLength, setULength] = useState("10mm");
  const [uThickness, setUThickness] = useState("0.07");
  const [especialEffect, setEspecialEffect] = useState("Vol Russo");
  const [especialCurve, setEspecialCurve] = useState("D");

  const addToCart = (item) => {
    setCart((prev) => {
      const key = item.cartKey || item.name;
      const existing = prev.find((p) => (p.cartKey || p.name) === key);
      if (existing) {
        return prev.map((p) =>
          (p.cartKey || p.name) === key ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const changeQuantity = (key, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          (item.cartKey || item.name) === key
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (key) =>
    setCart((prev) => prev.filter((item) => (item.cartKey || item.name) !== key));

  const filteredProducts = useMemo(() => {
    if (activeFilter === "Todos") return products;
    return products.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const showVariantsSection =
    activeFilter === "Todos" || activeFilter === "Pestañas" || activeFilter === "Pinzas";

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);

  const checkoutMessage = useMemo(() => {
    if (!cart.length) return whatsappBase;
    const intro = `Hola, quiero hacer este pedido del catálogo UINK.%0A%0A`;
    const customer = `${customerName ? `Nombre: ${customerName}%0A` : ""}${
      customerCity ? `Ciudad: ${customerCity}%0A` : ""
    }${customerAddress ? `Dirección: ${customerAddress}%0A` : ""}`;
    const items = cart
      .map(
        (item) =>
          `• ${item.name}${item.variant ? ` (${item.variant})` : ""} x${item.quantity} — $ ${item.priceValue.toLocaleString("es-CO")} COP`
      )
      .join("%0A");
    const total = `%0A%0ATotal estimado: $ ${cartTotal.toLocaleString("es-CO")} COP%0AAdjunto comprobante de pago para confirmar pedido.`;
    return `${whatsappBase}?text=${intro}${customer}${items}${total}`;
  }, [cart, cartTotal, customerName, customerCity, customerAddress]);

  const openMedia = (src, alt, type = "image") => setSelectedImage({ src, alt, type });

  const trustCards = [
    ["Registro INVIMA", "Productos con respaldo para una compra más segura y profesional."],
    ["Libre de etil", "Adhesivos formulados sin etil-cianoacrilato para una experiencia más consciente."],
    ["Envíos nacionales", "Llegamos a Bogotá y a distintas ciudades de Colombia."],
    ["Asesoría real", "Te ayudamos a elegir adhesivo según clima, humedad, temperatura y velocidad."],
  ];

  const distributorCities = ["Bogotá", "Villavicencio", "Cali", "Medellín", "Venezuela", "Pereira", "Cartagena"];

  const MediaBlock = ({ product }) => (
    <div className="media-strip">
      {(product.gallery || [product.image]).map((img) => (
        <button className="thumb" key={img} onClick={() => openMedia(img, product.name)}>
          <img src={img} alt={product.name} />
        </button>
      ))}
      {product.video && (
        <button className="thumb video-thumb" onClick={() => openMedia(product.video, product.name, "video")}>
          <video src={product.video} muted playsInline preload="metadata" />
          <span>▶</span>
        </button>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:'Inter',sans-serif;background:#070707;color:#f5f1e8} a{text-decoration:none;color:inherit} button,select,input,option{font-family:inherit} option{background:#111;color:#fff}
        .page{min-height:100vh;background:radial-gradient(circle at 12% 0%, rgba(212,175,55,0.18), transparent 30%),radial-gradient(circle at 86% 12%, rgba(255,255,255,0.08), transparent 25%),linear-gradient(180deg,#090909 0%,#050505 100%);overflow:hidden}
        .container{width:min(1220px,calc(100% - 40px));margin:0 auto}
        .cart-fab,.whatsapp-fab{position:fixed;right:22px;z-index:50;display:inline-flex;align-items:center;gap:12px;padding:12px 16px;border-radius:18px;border:1px solid rgba(255,255,255,0.1);background:rgba(12,12,12,0.82);color:#fff6df;backdrop-filter:blur(18px);box-shadow:0 18px 40px rgba(0,0,0,0.3);cursor:pointer}.cart-fab{top:22px}.whatsapp-fab{bottom:22px;background:linear-gradient(135deg,rgba(212,175,55,.9),rgba(240,217,140,.95));color:#111;font-weight:800}.cart-badge{min-width:24px;height:24px;padding:0 8px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#d4af37,#f0d98c);color:#111;font-size:12px;font-weight:800}
        .hero{position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,0.08);padding:78px 0 58px}.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg, rgba(255,255,255,0.04) 0%, transparent 35%),linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.6));pointer-events:none}.hero:after{content:"";position:absolute;right:-10%;top:8%;width:38vw;height:38vw;border-radius:999px;background:radial-gradient(circle,rgba(212,175,55,.16),transparent 62%);filter:blur(8px)}
        .hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.02fr .98fr;gap:34px;align-items:center}.eyebrow,.section-kicker{display:inline-flex;align-items:center;gap:10px;color:#e6c874;font-size:11px;letter-spacing:.28em;text-transform:uppercase}.eyebrow{padding:10px 16px;border:1px solid rgba(212,175,55,0.35);border-radius:999px;background:rgba(255,255,255,0.03);margin-bottom:22px;backdrop-filter:blur(14px)}
        .hero h1{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,78px);line-height:.94;margin:0;letter-spacing:-.035em;max-width:780px;color:#fff8ec}.gold{color:#f0d98c}.hero p{max-width:720px;margin:24px 0 0;color:rgba(255,245,225,.75);font-size:18px;line-height:1.82}.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.button-primary,.button-secondary{border-radius:18px;padding:14px 22px;font-weight:800;font-size:14px;transition:transform .2s ease;display:inline-flex;align-items:center;justify-content:center;gap:10px}.button-primary:hover,.button-secondary:hover,.add-cart-btn:hover{transform:translateY(-2px)}.button-primary{background:linear-gradient(135deg,#d4af37,#f0d98c);color:#111;box-shadow:0 18px 40px rgba(212,175,55,.18)}.button-secondary{color:rgba(255,255,255,.92);border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.03)}
        .hero-visual{min-height:590px;border-radius:38px;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:radial-gradient(circle at 20% 20%, rgba(212,175,55,.16), transparent 26%),linear-gradient(135deg,#121212 0%,#171717 38%,#0a0a0a 100%);box-shadow:0 30px 60px rgba(0,0,0,.35);padding:26px}.hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.38;filter:saturate(1.05) contrast(1.08)}.hero-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.74));pointer-events:none}.hero-pill,.hero-stack,.hero-mini-copy{position:relative;z-index:2}.hero-pill{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;border:1px solid rgba(212,175,55,.28);background:rgba(0,0,0,.25);color:#f0d98c;font-size:11px;letter-spacing:.24em;text-transform:uppercase;backdrop-filter:blur(14px)}.hero-dot{width:8px;height:8px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f0d98c);box-shadow:0 0 16px rgba(212,175,55,.4)}.hero-stack{display:grid;grid-template-columns:1.06fr .94fr;gap:16px;align-items:end;margin-top:205px}.hero-main-card,.hero-side-card,.hero-bottom-card{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 20px 45px rgba(0,0,0,.28);background:rgba(0,0,0,.12)}.hero-main-card{height:250px;border-radius:30px}.hero-side-card,.hero-bottom-card{height:118px;border-radius:24px}.hero-bottom-card{margin-top:14px}.hero-main-card img,.hero-side-card img,.hero-bottom-card img{width:100%;height:100%;object-fit:cover;display:block}.hero-card-tag{position:absolute;left:14px;bottom:14px;background:rgba(0,0,0,.44);border:1px solid rgba(255,255,255,.1);padding:8px 12px;border-radius:999px;color:#fff6df;font-size:11px;letter-spacing:.16em;text-transform:uppercase;backdrop-filter:blur(10px)}.hero-mini-copy{margin-top:18px;color:rgba(255,245,225,.78);font-size:14px;line-height:1.8}
        .stats{margin-top:26px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.stat{border:1px solid rgba(255,255,255,.08);border-radius:22px;background:rgba(255,255,255,.04);padding:20px}.stat-title{color:#dfc06b;font-size:11px;text-transform:uppercase;letter-spacing:.24em;margin-bottom:10px}.stat-text{color:rgba(255,245,225,.72);line-height:1.7;font-size:14px;margin:0}
        .section{padding:74px 0}.section-header{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:30px}.section-kicker{margin-bottom:12px}.section-title{font-family:'Playfair Display',serif;font-size:clamp(34px,4vw,48px);margin:0;color:#fff7e8;line-height:1.05}.section-desc{max-width:560px;color:rgba(255,245,225,.66);line-height:1.85;margin:0}
        .trust-grid,.feature-grid,.testimonials-grid,.payments-grid,.social-grid,.contact-grid,.distributor-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.trust-card,.feature-card,.testimonial-card,.payment-card,.social-card,.contact-card,.distributor-card,.promo-card{padding:26px;border-radius:28px;border:1px solid rgba(255,255,255,.08);background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.025));box-shadow:0 20px 45px rgba(0,0,0,.16)}.trust-card h3,.feature-card h3,.payment-card h3,.social-card h3,.contact-card h3,.distributor-card h3,.promo-card h3{margin:8px 0 0;font-family:'Playfair Display',serif;font-size:27px;color:#fff7e8;line-height:1.05}.trust-card p,.feature-card p,.testimonial-card p,.payment-card p,.social-card p,.contact-card p,.distributor-card p,.promo-card p{color:rgba(255,245,225,.68);line-height:1.8;font-size:14px;margin:14px 0 0}
        .filters{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:26px}.filter{border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.03);color:rgba(255,245,225,.72);border-radius:999px;padding:10px 16px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;cursor:pointer}.filter.active{border-color:rgba(212,175,55,.55);background:linear-gradient(135deg, rgba(212,175,55,.22), rgba(212,175,55,.08));color:#f0d98c}
        .products-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.card{background:linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.022));border:1px solid rgba(255,255,255,.08);border-radius:30px;overflow:hidden;box-shadow:0 20px 45px rgba(0,0,0,.24);transition:transform .2s ease,border-color .2s ease}.card:hover{transform:translateY(-4px);border-color:rgba(212,175,55,.22)}.card-image{position:relative;height:350px;background:#111;overflow:hidden}.card-image img{width:100%;height:100%;object-fit:contain;display:block;background:#0d0d0d;padding:14px}.card-image video{width:100%;height:100%;object-fit:cover;display:block}.card-image:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.66));pointer-events:none}.card-badge{position:absolute;left:18px;top:18px;z-index:1;border-radius:999px;padding:8px 12px;background:rgba(0,0,0,.45);border:1px solid rgba(212,175,55,.35);color:#eed27d;font-size:10px;letter-spacing:.22em;text-transform:uppercase;backdrop-filter:blur(10px)}.card-image-content{position:absolute;left:20px;right:20px;bottom:20px;z-index:1}.image-zoom-btn{position:absolute;right:16px;top:16px;z-index:3;width:42px;height:42px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.48);color:#fff6df;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(10px);font-size:18px}.price{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:8px}.product-name{margin:0;font-size:29px;line-height:1.08;color:#fff8ea;font-family:'Playfair Display',serif}.card-body{padding:24px}.tagline{color:#eed27d;font-size:15px;font-weight:800;line-height:1.6}.description{margin-top:12px;color:rgba(255,245,225,.72);line-height:1.8;font-size:14px}.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.chip{border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.03);border-radius:999px;padding:8px 12px;font-size:12px;color:rgba(255,245,225,.72)}
        .media-strip{display:flex;gap:8px;margin-top:18px;overflow-x:auto;padding-bottom:4px}.thumb{position:relative;min-width:70px;width:70px;height:70px;border-radius:16px;border:1px solid rgba(255,255,255,.1);background:#101010;padding:0;overflow:hidden;cursor:pointer}.thumb img,.thumb video{width:100%;height:100%;object-fit:cover;display:block}.video-thumb span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.32);color:#fff;font-size:20px}
        .details-button,.add-cart-btn{margin-top:12px;width:100%;border-radius:16px;padding:13px 16px;font-size:14px;font-weight:800;cursor:pointer}.details-button{border:1px solid rgba(212,175,55,.35);color:#eed27d;background:transparent}.add-cart-btn{border:none;background:linear-gradient(135deg,#d4af37,#f0d98c);color:#111;box-shadow:0 16px 30px rgba(212,175,55,.16)}.details{margin-top:18px;padding:18px;border-radius:22px;border:1px solid rgba(255,255,255,.08);background:rgba(0,0,0,.22)}.detail-item{color:rgba(255,245,225,.76);line-height:1.7;margin-bottom:10px;font-size:14px}.note{margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);color:rgba(255,245,225,.65);font-style:italic;line-height:1.8;font-size:14px}
        .promo-wrap{display:grid;grid-template-columns:.92fr 1.08fr;gap:24px;align-items:stretch}.promo-visual{border-radius:34px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#0d0d0d;min-height:410px}.promo-visual img{width:100%;height:100%;object-fit:cover;display:block}.promo-card{display:flex;flex-direction:column;justify-content:center}.promo-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:20px 0}.promo-list span{border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:12px;color:rgba(255,245,225,.76);background:rgba(255,255,255,.03);font-size:14px}.urgency{display:inline-flex;width:max-content;border:1px solid rgba(212,175,55,.34);border-radius:999px;padding:10px 14px;color:#f0d98c;background:rgba(212,175,55,.08);font-size:12px;letter-spacing:.16em;text-transform:uppercase;font-weight:800;margin-bottom:12px}
        .variant-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:24px}.variant-card{background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.08);border-radius:30px;overflow:hidden;box-shadow:0 20px 45px rgba(0,0,0,.24)}.variant-visual{height:280px;position:relative;background:#0d0d0d}.variant-visual img{width:100%;height:100%;object-fit:contain;display:block;padding:14px;cursor:zoom-in}.variant-content{padding:24px}.variant-select{width:100%;padding:14px 16px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);color:#fff6df;margin-top:10px;appearance:none}.variant-price{font-family:'Playfair Display',serif;font-size:34px;color:#fff7e8;margin-top:16px}
        .video-grid{display:grid;grid-template-columns:repeat(5, minmax(210px,1fr));gap:16px;overflow-x:auto;padding-bottom:8px}.video-card{min-width:210px;border-radius:28px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#0d0d0d;position:relative;min-height:370px}.video-card video{width:100%;height:370px;object-fit:cover;display:block}.video-label{position:absolute;left:14px;bottom:14px;right:14px;border-radius:16px;padding:10px 12px;background:rgba(0,0,0,.48);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(12px);color:#fff6df;font-size:12px;line-height:1.5}
        .footer-cta{text-align:center;border-top:1px solid rgba(255,255,255,.08);padding:76px 0}.footer-cta h3{max-width:920px;margin:14px auto 0;font-family:'Playfair Display',serif;font-size:clamp(34px,5vw,54px);line-height:1.06;color:#fff7e8}.footer-cta p{max-width:760px;margin:22px auto 0;color:rgba(255,245,225,.65);line-height:1.9;font-size:15px}.footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding:24px 0 38px;color:rgba(255,245,225,.42);font-size:14px}.footer-bottom .container{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.footer-col-title{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:10px}.footer-col-text{line-height:1.8;color:rgba(255,245,225,.62)}
        .cart-overlay{position:fixed;inset:0;background:rgba(0,0,0,.46);z-index:60}.cart-panel{position:fixed;top:0;right:0;width:min(430px,100%);height:100vh;z-index:61;background:linear-gradient(180deg,#0f0f0f,#090909);border-left:1px solid rgba(255,255,255,.08);box-shadow:-20px 0 50px rgba(0,0,0,.35);padding:24px;overflow-y:auto}.cart-header{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:20px}.cart-title{font-family:'Playfair Display',serif;font-size:34px;color:#fff7e8;margin:0}.cart-close{background:transparent;border:1px solid rgba(255,255,255,.12);color:#fff6df;border-radius:14px;padding:10px 14px;cursor:pointer}.cart-empty{color:rgba(255,245,225,.68);line-height:1.9;font-size:15px;padding:12px 0 28px}.cart-item{border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);border-radius:22px;padding:14px;display:grid;grid-template-columns:82px 1fr;gap:14px;margin-bottom:14px}.cart-item img{width:82px;height:96px;object-fit:cover;border-radius:16px;display:block}.cart-item h4{margin:0;color:#fff6df;font-size:18px;font-family:'Playfair Display',serif}.cart-item-price{color:#eed27d;font-size:12px;letter-spacing:.16em;text-transform:uppercase;margin-top:6px}.cart-qty{display:flex;align-items:center;gap:10px;margin-top:12px}.cart-qty button{width:30px;height:30px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);color:#fff6df;cursor:pointer}.remove-btn{margin-top:10px;border:none;background:transparent;color:rgba(255,245,225,.58);cursor:pointer;padding:0}.checkout-box{margin-top:22px;padding:18px;border-radius:24px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03)}.checkout-label{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:10px}.checkout-total{font-family:'Playfair Display',serif;font-size:36px;color:#fff7e8;margin:8px 0 18px}.checkout-input{width:100%;padding:14px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.08);background:rgba(0,0,0,.18);color:#fff6df;margin-bottom:10px;font-size:14px}.checkout-note{color:rgba(255,245,225,.62);font-size:13px;line-height:1.8;margin-bottom:14px}.payment-box{margin-top:14px;padding:14px;border-radius:18px;background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.06)}.payment-title{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:8px}.payment-text{color:rgba(255,245,225,.72);font-size:14px;line-height:1.8}.cart-checkout-btn{display:block;text-align:center;margin-top:14px}
        .image-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.84);z-index:80;display:flex;align-items:center;justify-content:center;padding:28px}.image-modal-box{position:relative;max-width:min(92vw,1100px);max-height:90vh;width:100%;border:1px solid rgba(255,255,255,.1);border-radius:26px;background:#0b0b0b;box-shadow:0 30px 80px rgba(0,0,0,.45);padding:22px}.image-modal-box img,.image-modal-box video{width:100%;max-height:78vh;object-fit:contain;display:block}.image-modal-close{position:absolute;top:16px;right:16px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04);color:#fff6df;border-radius:14px;padding:10px 14px;cursor:pointer;z-index:2}.image-helper{margin-top:10px;color:rgba(255,245,225,.6);font-size:12px;line-height:1.6;text-align:center}
        @media (max-width:1080px){.hero-grid,.products-grid,.trust-grid,.feature-grid,.testimonials-grid,.payments-grid,.social-grid,.contact-grid,.distributor-grid,.stats,.variant-grid,.footer-bottom .container,.promo-wrap{grid-template-columns:1fr 1fr}.hero-stack{margin-top:160px}.hero-main-card{height:220px}.hero-side-card,.hero-bottom-card{height:104px}}
        @media (max-width:820px){.hero-grid,.products-grid,.trust-grid,.feature-grid,.testimonials-grid,.payments-grid,.social-grid,.contact-grid,.distributor-grid,.stats,.variant-grid,.section-header,.footer-bottom .container,.promo-wrap{grid-template-columns:1fr;display:grid}.section-header{align-items:start}.hero{padding-top:64px}.hero-visual{min-height:580px}.hero-stack{grid-template-columns:1fr;margin-top:170px}.hero-main-card{height:220px}.hero-side-card,.hero-bottom-card{height:150px}.section-title{font-size:34px}.card-image{height:310px}.cart-fab{right:14px;top:14px}.whatsapp-fab{right:14px;bottom:14px}.cart-panel{width:100%}.promo-list{grid-template-columns:1fr}.video-card video,.video-card{height:330px;min-height:330px}}
      `}</style>

      <div className="page">
        <button className="cart-fab" onClick={() => setIsCartOpen(true)}>Carrito <span className="cart-badge">{cartCount}</span></button>
        <a className="whatsapp-fab" href={whatsappBase} target="_blank" rel="noreferrer">WhatsApp</a>

        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">✦ UINK Luxe Store</div>
              <h1>No es solo un producto. Es lo que define tu <span className="gold">retención, técnica y reputación.</span></h1>
              <p>Una tienda creada para lashistas que buscan productos profesionales, asesoría real y una experiencia de compra segura, elegante y directa.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#catalogo">Comprar ahora</a>
                <a className="button-secondary" href={whatsappBase} target="_blank" rel="noreferrer">Asesorarme por WhatsApp</a>
              </div>
              <div className="stats">
                <div className="stat"><div className="stat-title">INVIMA</div><p className="stat-text">Productos con respaldo y enfoque profesional.</p></div>
                <div className="stat"><div className="stat-title">Libre de etil</div><p className="stat-text">Adhesivos sin etil-cianoacrilato.</p></div>
                <div className="stat"><div className="stat-title">Envíos</div><p className="stat-text">Despachos nacionales y atención personalizada.</p></div>
              </div>
            </div>
            <div className="hero-visual">
              <video className="hero-video" src="https://i.imgur.com/Qg8IhH0.mp4" autoPlay muted loop playsInline />
              <div className="hero-pill"><span className="hero-dot"></span> Beauty tools for lash artists</div>
              <div className="hero-stack">
                <div className="hero-main-card">
                  <img src="https://i.imgur.com/A5o7bwl.png" alt="Adhesivos UINK" />
                  <span className="hero-card-tag">Adhesivos UINK</span>
                </div>
                <div>
                  <div className="hero-side-card"><img src="https://i.imgur.com/LyqEIsc.png" alt="Boonder" /><span className="hero-card-tag">Boonder</span></div>
                  <div className="hero-bottom-card"><img src="https://i.imgur.com/KRktHfX.png" alt="Removedor" /><span className="hero-card-tag">Removedor</span></div>
                </div>
              </div>
              <div className="hero-mini-copy">Productos creados por lashistas para lashistas: elegancia visual, rendimiento técnico y asesoría para elegir lo correcto según tu ciudad, clima y velocidad.</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <div><div className="section-kicker">Seguridad profesional</div><h2 className="section-title">Confianza UINK antes de comprar</h2></div>
              <p className="section-desc">No vendemos solo insumos. Te acompañamos a elegir mejor para cuidar tu técnica, tu tiempo y la experiencia de tus clientas.</p>
            </div>
            <div className="trust-grid">
              {trustCards.map(([title, text]) => (
                <div className="trust-card" key={title}><div className="section-kicker">✦</div><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container promo-wrap">
            <div className="promo-visual"><img src={starterKit.image} alt={starterKit.name} /></div>
            <div className="promo-card">
              <div className="urgency">Promoción activa · Envío gratis</div>
              <div className="section-kicker">Kit especial</div>
              <h3>{starterKit.name}</h3>
              <p>{starterKit.description}</p>
              <div className="promo-list">
                <span>1 adhesivo UINK</span><span>2 pinzas profesionales</span><span>1 boonder</span><span>1 removedor</span><span>2 cajas de pestañas MIX</span><span>Envío gratis</span>
              </div>
              <button className="add-cart-btn" onClick={() => addToCart({ ...starterKit, cartKey: "kit-lash-starter-uink" })}>Añadir kit al carrito</button>
            </div>
          </div>
        </section>

        <section className="section" id="catalogo">
          <div className="container">
            <div className="section-header">
              <div><div className="section-kicker">Catálogo</div><h2 className="section-title">Productos UINK Luxe</h2></div>
              <p className="section-desc">Explora imágenes, videos, detalles técnicos y arma tu pedido por WhatsApp con el carrito inteligente.</p>
            </div>
            <div className="filters">
              {filters.map((filter) => (
                <button key={filter} className={`filter ${activeFilter === filter ? "active" : ""}`} onClick={() => { setActiveFilter(filter); setOpenIndex(null); }}>{filter}</button>
              ))}
            </div>

            <div className="products-grid">
              {filteredProducts.length === 0 ? (
                <div className="feature-card" style={{ gridColumn: "1 / -1" }}>
                  <div className="section-kicker">Selección especial</div>
                  <h3>Esta categoría se presenta en la sección de variantes</h3>
                  <p>Para que la experiencia sea más clara, las pestañas y pinzas se muestran con sus modelos, efectos, grosores y medidas.</p>
                </div>
              ) : (
                filteredProducts.map((product, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <article className="card" key={product.name}>
                      <div className="card-image">
                        {product.video ? (
                          <video src={product.video} autoPlay muted loop playsInline onClick={() => openMedia(product.video, product.name, "video")} />
                        ) : (
                          <img src={product.image} alt={product.name} />
                        )}
                        <button className="image-zoom-btn" onClick={() => openMedia(product.image, product.name)} title="Ampliar">⌕</button>
                        <div className="card-badge">{product.category}</div>
                        <div className="card-image-content"><div className="price">{product.priceLabel}</div><h3 className="product-name">{product.name}</h3></div>
                      </div>
                      <div className="card-body">
                        <div className="tagline">{product.tagline}</div>
                        <div className="description">{product.description}</div>
                        <MediaBlock product={product} />
                        <div className="chips">{product.bullets.slice(0, 3).map((item) => <span className="chip" key={item}>{item}</span>)}</div>
                        <button className="details-button" onClick={() => setOpenIndex(isOpen ? null : index)}>{isOpen ? "Ocultar detalles" : "Ver detalles"}</button>
                        <button className="add-cart-btn" onClick={() => addToCart({ ...product, quantity: 1 })}>Añadir al carrito</button>
                        {isOpen && (
                          <div className="details">
                            {product.bullets.map((item) => <div className="detail-item" key={item}>✦ {item}</div>)}
                            <div className="note">{product.note}</div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {showVariantsSection && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="section-header">
                <div><div className="section-kicker">Pestañas y pinzas</div><h2 className="section-title">Selecciona tu versión ideal</h2></div>
                <p className="section-desc">Opciones reales para elegir longitud, grosor, efecto, curva o referencia sin saturar la tienda.</p>
              </div>
              <div className="variant-grid">
                {(activeFilter === "Todos" || activeFilter === "Pestañas") && (
                  <>
                    <div className="variant-card"><div className="variant-visual"><img src={classicLashes.image} alt={classicLashes.name} onClick={() => openMedia(classicLashes.image, classicLashes.name)} /></div><div className="variant-content"><div className="section-kicker">Pestañas</div><h3 className="product-name">{classicLashes.name}</h3><div className="description">{classicLashes.description}</div><select className="variant-select" value={classicLength} onChange={(e) => setClassicLength(e.target.value)}>{classicLashes.lengths.map((v) => <option key={v}>{v}</option>)}</select><select className="variant-select" value={classicThickness} onChange={(e) => setClassicThickness(e.target.value)}>{classicLashes.thickness.map((v) => <option key={v}>{v}</option>)}</select><div className="variant-price">$ {classicLashes.priceValue.toLocaleString("es-CO")} COP</div><button className="add-cart-btn" onClick={() => addToCart({ name: classicLashes.name, variant: `${classicLength} / ${classicThickness}`, priceValue: classicLashes.priceValue, image: classicLashes.image, cartKey: `classic-${classicLength}-${classicThickness}` })}>Añadir al carrito</button></div></div>
                    <div className="variant-card"><div className="variant-visual"><img src={fibrasTech.image} alt={fibrasTech.name} onClick={() => openMedia(fibrasTech.image, fibrasTech.name)} /></div><div className="variant-content"><div className="section-kicker">Pestañas</div><h3 className="product-name">{fibrasTech.name}</h3><div className="description">{fibrasTech.description}</div><select className="variant-select" value={techEffect} onChange={(e) => setTechEffect(e.target.value)}>{Object.keys(fibrasTech.effectPrices).map((v) => <option key={v}>{v}</option>)}</select><select className="variant-select" value={techLength} onChange={(e) => setTechLength(e.target.value)}>{fibrasTech.lengths.map((v) => <option key={v}>{v}</option>)}</select><select className="variant-select" value={techThickness} onChange={(e) => setTechThickness(e.target.value)}>{fibrasTech.thickness.map((v) => <option key={v}>{v}</option>)}</select><div className="variant-price">$ {fibrasTech.effectPrices[techEffect].toLocaleString("es-CO")} COP</div><button className="add-cart-btn" onClick={() => addToCart({ name: fibrasTech.name, variant: `${techEffect} / ${techLength} / ${techThickness}`, priceValue: fibrasTech.effectPrices[techEffect], image: fibrasTech.image, cartKey: `tech-${techEffect}-${techLength}-${techThickness}` })}>Añadir al carrito</button></div></div>
                    <div className="variant-card"><div className="variant-visual"><img src={fibrasU.image} alt={fibrasU.name} onClick={() => openMedia(fibrasU.image, fibrasU.name)} /></div><div className="variant-content"><div className="section-kicker">Pestañas</div><h3 className="product-name">{fibrasU.name}</h3><div className="description">{fibrasU.description}</div><select className="variant-select" value={uEffect} onChange={(e) => setUEffect(e.target.value)}>{Object.keys(fibrasU.effectPrices).map((v) => <option key={v}>{v}</option>)}</select><select className="variant-select" value={uLength} onChange={(e) => setULength(e.target.value)}>{fibrasU.lengths.map((v) => <option key={v}>{v}</option>)}</select><select className="variant-select" value={uThickness} onChange={(e) => setUThickness(e.target.value)}>{fibrasU.thickness.map((v) => <option key={v}>{v}</option>)}</select><div className="variant-price">$ {fibrasU.effectPrices[uEffect].toLocaleString("es-CO")} COP</div><button className="add-cart-btn" onClick={() => addToCart({ name: fibrasU.name, variant: `${uEffect} / ${uLength} / ${uThickness}`, priceValue: fibrasU.effectPrices[uEffect], image: fibrasU.image, cartKey: `u-${uEffect}-${uLength}-${uThickness}` })}>Añadir al carrito</button></div></div>
                    <div className="variant-card"><div className="variant-visual"><img src={efectosEspeciales.image} alt={efectosEspeciales.name} onClick={() => openMedia(efectosEspeciales.image, efectosEspeciales.name)} /></div><div className="variant-content"><div className="section-kicker">Pestañas</div><h3 className="product-name">{efectosEspeciales.name}</h3><div className="description">{efectosEspeciales.description}</div><select className="variant-select" value={especialEffect} onChange={(e) => setEspecialEffect(e.target.value)}>{Object.keys(efectosEspeciales.effectPrices).map((v) => <option key={v}>{v}</option>)}</select><select className="variant-select" value={especialCurve} onChange={(e) => setEspecialCurve(e.target.value)}>{efectosEspeciales.curves.map((v) => <option key={v}>{v}</option>)}</select><div className="variant-price">$ {efectosEspeciales.effectPrices[especialEffect].toLocaleString("es-CO")} COP</div><button className="add-cart-btn" onClick={() => addToCart({ name: efectosEspeciales.name, variant: `${especialEffect} / MIX / 0.07 / Curva ${especialCurve}`, priceValue: efectosEspeciales.effectPrices[especialEffect], image: efectosEspeciales.image, cartKey: `esp-${especialEffect}-${especialCurve}` })}>Añadir al carrito</button></div></div>
                  </>
                )}

                {(activeFilter === "Todos" || activeFilter === "Pinzas") && (
                  <>
                    <div className="variant-card"><div className="variant-visual"><img src={pinzasEmma.image} alt={pinzasEmma.name} onClick={() => openMedia(pinzasEmma.image, pinzasEmma.name)} /></div><div className="variant-content"><div className="section-kicker">Pinzas</div><h3 className="product-name">{pinzasEmma.name}</h3><div className="description">{pinzasEmma.description}</div><select className="variant-select" value={pinzaModel} onChange={(e) => setPinzaModel(e.target.value)}>{pinzasEmma.models.map((v) => <option key={v}>{v}</option>)}</select><div className="variant-price">$ {pinzasEmma.priceValue.toLocaleString("es-CO")} COP</div><button className="add-cart-btn" onClick={() => addToCart({ name: pinzasEmma.name, variant: pinzaModel, priceValue: pinzasEmma.priceValue, image: pinzasEmma.image, cartKey: `pinza-emma-${pinzaModel}` })}>Añadir al carrito</button></div></div>
                    <div className="variant-card"><div className="variant-visual"><img src={pinzaPink.image} alt={pinzaPink.name} onClick={() => openMedia(pinzaPink.image, pinzaPink.name)} /></div><div className="variant-content"><div className="section-kicker">Pinzas</div><h3 className="product-name">{pinzaPink.name}</h3><div className="description">{pinzaPink.description}</div><div className="chips">{pinzaPink.bullets.map((item) => <span className="chip" key={item}>{item}</span>)}</div><div className="variant-price">$ {pinzaPink.priceValue.toLocaleString("es-CO")} COP</div><button className="add-cart-btn" onClick={() => addToCart({ name: pinzaPink.name, priceValue: pinzaPink.priceValue, image: pinzaPink.image, cartKey: `pinza-pink` })}>Añadir al carrito</button></div></div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header"><div><div className="section-kicker">Prueba real</div><h2 className="section-title">Testimonios y experiencia UINK</h2></div><p className="section-desc">Videos reales para mostrar confianza, resultados y comunidad alrededor de nuestros productos.</p></div>
            <div className="video-grid">{videoTestimonials.map((v, i) => <div className="video-card" key={v}><video src={v} autoPlay muted loop playsInline controls={false} /><div className="video-label">Testimonio UINK #{i + 1}</div></div>)}</div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header"><div><div className="section-kicker">Despachos</div><h2 className="section-title">Así preparamos tu pedido</h2></div><p className="section-desc">Empaque, cuidado y envío con atención personalizada para que recibas tus productos listos para trabajar.</p></div>
            <div className="video-grid">{packingVideos.map((v, i) => <div className="video-card" key={v}><video src={v} autoPlay muted loop playsInline controls={false} /><div className="video-label">Empaque y despacho #{i + 1}</div></div>)}</div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header"><div><div className="section-kicker">Red UINK</div><h2 className="section-title">Contamos con distribuidoras</h2></div><p className="section-desc">UINK no solo llega a lashistas: llega a ciudades enteras a través de una red de distribuidoras que creen en productos seguros y profesionales.</p></div>
            <div className="distributor-grid">{distributorCities.map((city) => <div className="distributor-card" key={city}><div className="section-kicker">Distribución</div><h3>{city}</h3><p>Consulta disponibilidad y atención por WhatsApp.</p></div>)}</div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container feature-grid">
            <div className="feature-card"><div className="section-kicker">Compra asistida</div><h3>Carrito a WhatsApp</h3><p>La clienta elige productos y envía el resumen listo para cerrar el pedido.</p></div>
            <div className="feature-card"><div className="section-kicker">Asesoría real</div><h3>Clima y velocidad</h3><p>Guiamos la elección según humedad, temperatura, ciudad y agilidad de la lashista.</p></div>
            <div className="feature-card"><div className="section-kicker">Productos pro</div><h3>Marca profesional</h3><p>Insumos pensados para elevar la mesa de trabajo y la experiencia del servicio.</p></div>
            <div className="feature-card"><div className="section-kicker">Envíos</div><h3>Nacionales</h3><p>Coordinamos pedidos y despachos con atención humana.</p></div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header"><div><div className="section-kicker">Pagos</div><h2 className="section-title">Métodos de pago</h2></div><p className="section-desc">Opciones rápidas y coordinadas directamente con asesoría para facilitar el cierre del pedido.</p></div>
            <div className="payments-grid">
              <div className="payment-card"><div className="section-kicker">Nequi</div><h3>Pago inmediato</h3><p>@BBORH451 Oscar Ramirez</p></div>
              <div className="payment-card"><div className="section-kicker">Daviplata</div><h3>Transferencia</h3><p>@BBORH451 Oscar Ramirez</p></div>
              <div className="payment-card"><div className="section-kicker">Bancos / Bre B</div><h3>Cuenta coordinada</h3><p>@BBORH451 Oscar Ramirez</p></div>
              <div className="payment-card"><div className="section-kicker">WhatsApp</div><h3>Confirmación</h3><p>Adjunta comprobante para confirmar tu pedido.</p></div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header"><div><div className="section-kicker">Redes</div><h2 className="section-title">Conecta con UINK</h2></div><p className="section-desc">Más contenido, demostraciones, lanzamientos y comunidad.</p></div>
            <div className="social-grid">
              <a className="social-card" href="https://www.instagram.com/uinklashpro" target="_blank" rel="noreferrer"><div className="section-kicker">Instagram</div><h3>@uinklashpro</h3><p>Novedades, productos, educación y contenido de marca.</p></a>
              <a className="social-card" href="https://www.tiktok.com/@uinklashpro" target="_blank" rel="noreferrer"><div className="section-kicker">TikTok</div><h3>@uinklashpro</h3><p>Videos, demostraciones y tendencias del mundo lash.</p></a>
              <a className="social-card" href={whatsappBase} target="_blank" rel="noreferrer"><div className="section-kicker">WhatsApp</div><h3>Asesoría directa</h3><p>Resuelve dudas, arma tu pedido y confirma entrega.</p></a>
              <div className="social-card"><div className="section-kicker">Bogotá</div><h3>UINK Lash</h3><p>Productos profesionales y atención personalizada.</p></div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header"><div><div className="section-kicker">Ubicación</div><h2 className="section-title">Información de contacto</h2></div><p className="section-desc">Todo lo necesario para ubicar, escribir o coordinar una compra con UINK.</p></div>
            <div className="contact-grid">
              <div className="contact-card"><div className="section-kicker">Dirección</div><h3>Bogotá D.C.</h3><p>Calle 27 Sur 11A - 65</p></div>
              <div className="contact-card"><div className="section-kicker">Horario</div><h3>Atención</h3><p>08:00 AM a 07:00 PM</p></div>
              <div className="contact-card"><div className="section-kicker">WhatsApp</div><h3>301 343 9680</h3><p>Para confirmar pedido, dirección, pago y asesoría.</p></div>
              <div className="contact-card"><div className="section-kicker">Envíos</div><h3>Nacionales</h3><p>Consulta cobertura y tiempos por WhatsApp.</p></div>
            </div>
          </div>
        </section>

        <section className="footer-cta">
          <div className="container">
            <div className="section-kicker">UINK Luxe Store</div>
            <h3>Deja de perder clientas por mala retención. Elige productos que trabajen contigo.</h3>
            <p>Escríbenos y recibe asesoría para elegir el adhesivo, fibras o complemento ideal según tu ritmo, técnica y ambiente de trabajo.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}><a className="button-primary" href={whatsappBase} target="_blank" rel="noreferrer">Asesorarme por WhatsApp</a></div>
          </div>
        </section>

        <footer className="footer-bottom">
          <div className="container">
            <div><div className="footer-col-title">Marca</div><div className="footer-col-text">UINK Luxe Store<br />Estética Integral</div></div>
            <div><div className="footer-col-title">Ubicación</div><div className="footer-col-text">Bogotá D.C.<br />Calle 27 Sur 11A - 65</div></div>
            <div><div className="footer-col-title">Horario</div><div className="footer-col-text">08:00 AM a 07:00 PM</div></div>
            <div><div className="footer-col-title">Pagos</div><div className="footer-col-text">Nequi / Daviplata / Bancos o Bre B<br />@BBORH451 Oscar Ramirez</div></div>
          </div>
        </footer>

        {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />}

        {selectedImage && (
          <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="image-modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="image-modal-close" onClick={() => setSelectedImage(null)}>Cerrar</button>
              {selectedImage.type === "video" ? (
                <video src={selectedImage.src} controls autoPlay playsInline />
              ) : (
                <img src={selectedImage.src} alt={selectedImage.alt} />
              )}
              <div className="image-helper">Vista completa · {selectedImage.alt}</div>
            </div>
          </div>
        )}

        {isCartOpen && (
          <aside className="cart-panel">
            <div className="cart-header"><h3 className="cart-title">Tu carrito</h3><button className="cart-close" onClick={() => setIsCartOpen(false)}>Cerrar</button></div>
            {!cart.length ? (
              <div className="cart-empty">Aún no has agregado productos. Explora el catálogo y arma tu pedido para enviarlo por WhatsApp.</div>
            ) : (
              <>
                {cart.map((item) => {
                  const key = item.cartKey || item.name;
                  return (
                    <div className="cart-item" key={key}>
                      <img src={item.image} alt={item.name} onClick={() => openMedia(item.image, item.name)} />
                      <div>
                        <h4>{item.name}</h4>
                        {item.variant && <div className="description" style={{ marginTop: 6 }}>{item.variant}</div>}
                        <div className="cart-item-price">$ {item.priceValue.toLocaleString("es-CO")} COP</div>
                        <div className="cart-qty"><button onClick={() => changeQuantity(key, -1)}>-</button><span>{item.quantity}</span><button onClick={() => changeQuantity(key, 1)}>+</button></div>
                        <button className="remove-btn" onClick={() => removeFromCart(key)}>Quitar</button>
                      </div>
                    </div>
                  );
                })}
                <div className="checkout-box">
                  <div className="checkout-label">Resumen</div>
                  <div className="checkout-total">$ {cartTotal.toLocaleString("es-CO")} COP</div>
                  <input className="checkout-input" placeholder="Tu nombre" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                  <input className="checkout-input" placeholder="Tu ciudad" value={customerCity} onChange={(e) => setCustomerCity(e.target.value)} />
                  <input className="checkout-input" placeholder="Tu dirección" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
                  <div className="checkout-note">El pedido se enviará por WhatsApp con productos, variantes, cantidades, dirección y total estimado. Luego confirmas el pedido y adjuntas el comprobante.</div>
                  <div className="payment-box"><div className="payment-title">Métodos de pago</div><div className="payment-text">Nequi, Daviplata o Bancos / Bre B coordinado por asesoría.</div></div>
                  <a className="button-primary cart-checkout-btn" href={checkoutMessage} target="_blank" rel="noreferrer">Finalizar pedido por WhatsApp</a>
                </div>
              </>
            )}
          </aside>
        )}
      </div>
    </>
  );
}
