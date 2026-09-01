const productImage = (name, type, tone, accent) => {
  const icons = {
    tenis:
      "M145 285 C185 230 250 205 335 215 C410 224 455 265 505 300 L565 340 C590 357 584 390 552 397 L245 397 C188 397 137 369 125 333 C119 314 128 298 145 285Z",
    camiseta:
      "M205 150 L285 115 L350 145 L415 115 L495 150 L455 255 L425 238 L425 420 L215 420 L215 238 L185 255Z",
    short: "M215 145 L485 145 L470 285 L380 285 L350 225 L320 285 L230 285Z",
    legging:
      "M235 130 L465 130 L450 250 L420 425 L345 425 L330 265 L315 425 L240 425 L210 250Z",
    jaqueta:
      "M220 135 L290 110 L350 145 L410 110 L480 135 L445 240 L405 220 L405 425 L295 425 L295 220 L255 240Z",
    top: "M230 165 L285 120 L350 145 L415 120 L470 165 L445 300 L255 300Z",
    moletom:
      "M210 155 L285 115 L350 145 L415 115 L490 155 L455 250 L420 230 L420 425 L280 425 L280 230 L245 250Z",
    conjunto:
      "M220 130 L285 105 L350 135 L415 105 L480 130 L450 245 L400 225 L400 285 L465 285 L445 425 L350 410 L255 425 L235 285 L300 285 L300 225 L250 245Z",
  };
  const path = icons[type] || icons.camiseta;
  const safe = name
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 560"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${tone}"/><stop offset="1" stop-color="#f4f1ec"/></linearGradient><linearGradient id="item" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${accent}"/><stop offset="1" stop-color="#151515"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-opacity=".18"/></filter></defs><rect width="700" height="560" rx="34" fill="url(#bg)"/><circle cx="580" cy="90" r="120" fill="#fff" opacity=".45"/><ellipse cx="350" cy="438" rx="230" ry="28" fill="#000" opacity=".08"/><path d="${path}" fill="url(#item)" filter="url(#shadow)"/><path d="M275 175 H425" stroke="#fff" stroke-width="8" opacity=".18"/><text x="38" y="48" font-family="Arial,sans-serif" font-size="16" font-weight="700" fill="#171514" letter-spacing="3">CLIMAX / PERFORMANCE</text><text x="38" y="512" font-family="Arial,sans-serif" font-size="20" font-weight="700" fill="#171514">${safe}</text><text x="38" y="536" font-family="Arial,sans-serif" font-size="12" fill="#6c6966">PREMIUM SPORTS COLLECTION</text></svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
};

const products = [
  {
    id: 1,
    name: "Apex Runner X1",
    cat: "Calçados",
    price: 699.9,
    old: 799.9,
    tag: "-13%",
    desc: "Tênis premium de corrida com amortecimento responsivo e cabedal respirável.",
    img: "img/0001.jpg",
  },
  {
    id: 2,
    name: "Velocity Carbon Pro",
    cat: "Calçados",
    price: 899.9,
    old: 999.9,
    tag: "-10%",
    desc: "Tênis de performance fictício com placa de propulsão e construção ultraleve.",
    img: "img/0002.webp",
  },
  {
    id: 3,
    name: "Pulse Trainer Elite",
    cat: "Calçados",
    price: 649.9,
    old: 749.9,
    tag: "Oferta",
    desc: "Treinador premium para academia com estabilidade e amortecimento equilibrado.",
    img: "img/br-11134207-7r98o-ma05sn4rfi82e3.jpg",
  },
  {
    id: 4,
    name: "Aero Court Premium",
    cat: "Calçados",
    price: 619.9,
    old: 699.9,
    tag: "-11%",
    desc: "Tênis de quadra com suporte lateral e sola de alta aderência.",
    img: "img/images (8).jpg",
  },
  {
    id: 5,
    name: "Endurance Trail Pro",
    cat: "Calçados",
    price: 749.9,
    old: null,
    tag: "Novo",
    desc: "Tênis para trilhas com proteção reforçada e tração em terrenos variados.",
    img: "img/image.webp",
  },
  {
    id: 6,
    name: "FlexRun Essential",
    cat: "Calçados",
    price: 429.9,
    old: 499.9,
    tag: "-14%",
    desc: "Modelo leve e flexível para caminhada, cardio e corrida recreativa.",
    img: "img/images (9).jpg",
  },
  {
    id: 13,
    name: "AeroFlex Pro Tee",
    cat: "Masculino",
    price: 189.9,
    old: 229.9,
    tag: "-17%",
    desc: "Camiseta técnica de secagem rápida com tecido leve e respirável.",
    img: "img/01.png",
  },
  {
    id: 14,
    name: "Impact Training Tee",
    cat: "Masculino",
    price: 199.9,
    old: 239.9,
    tag: "-17%",
    desc: "Camiseta técnica premium para musculação e treinos funcionais.",
    img: "img/02.png",
  },
  {
    id: 15,
    name: "Motion Compression Tee",
    cat: "Masculino",
    price: 229.9,
    old: null,
    tag: "Novo",
    desc: "Camiseta de compressão com ajuste anatômico e toque suave.",
    img: "img/03.png",
  },
  {
    id: 16,
    name: "Velocity Tech Shorts",
    cat: "Masculino",
    price: 179.9,
    old: null,
    tag: "Novo",
    desc: "Short esportivo leve com mobilidade elevada e bolso seguro.",
    img: "img/04.png",
  },
  {
    id: 17,
    name: "ProForm Training Short",
    cat: "Masculino",
    price: 189.9,
    old: 219.9,
    tag: "-14%",
    desc: "Short técnico elástico pensado para mobilidade durante o treino.",
    img: "img/05.png",
  },
  {
    id: 18,
    name: "Core Motion Pants",
    cat: "Masculino",
    price: 269.9,
    old: null,
    tag: "Novo",
    desc: "Calça de treino premium com elasticidade e acabamento minimalista.",
    img: "img/06.png",
  },
  {
    id: 19,
    name: "Velocity Track Pants",
    cat: "Masculino",
    price: 289.9,
    old: null,
    tag: "Novo",
    desc: "Calça esportiva de corte moderno para aquecimento e treinamento.",
    img: "img/07.png",
  },
  {
    id: 20,
    name: "Apex Training Jacket",
    cat: "Masculino",
    price: 389.9,
    old: 449.9,
    tag: "-13%",
    desc: "Jaqueta leve para aquecimento com corte esportivo contemporâneo.",
    img: "img/08.jpg",
  },
  {
    id: 21,
    name: "Performance Windbreaker",
    cat: "Masculino",
    price: 379.9,
    old: 439.9,
    tag: "-14%",
    desc: "Corta-vento esportivo leve para corrida e atividades ao ar livre.",
    img: "img/09.jpg",
  },
  ,
  {
    id: 22,
    name: "Aero Seamless Longsleeve",
    cat: "Masculino",
    price: 219.9,
    old: 259.9,
    tag: "-15%",
    desc: "Blusa esportiva de manga longa sem excesso de costuras.",
    img: "img/10.jpg",
  },
  {
    id: 23,
    name: "AeroWarm Training Hoodie",
    cat: "Masculino",
    price: 349.9,
    old: 399.9,
    tag: "-12%",
    desc: "Moletom técnico macio para aquecimento, recuperação e dias frios.",
    img: "img/11.webp",
  },
  {
    id: 24,
    name: "Active Mesh Tank",
    cat: "Masculino",
    price: 159.9,
    old: null,
    tag: "Novo",
    desc: "Regata esportiva de alta ventilação para musculação e cardio.",
    img: "img/12.webp",
  },

  {
    id: 25,
    name: "Pulse Training Top",
    cat: "Feminino",
    price: 169.9,
    old: 199.9,
    tag: "-15%",
    desc: "Top de alta sustentação com tecido respirável para treinos dinâmicos.",
    img: "img/img_0389-5ef960b7850fb8493217482820211637-1024-1024.webp",
  },
  {
    id: 26,
    name: "Sculpt Motion Legging",
    cat: "Feminino",
    price: 299.9,
    old: 349.9,
    tag: "-14%",
    desc: "Legging de compressão equilibrada com cintura alta e acabamento premium.",
    img: "img/images.jpg",
  },
  {
    id: 27,
    name: "AeroForm Training Set",
    cat: "Feminino",
    price: 399.9,
    old: 469.9,
    tag: "-15%",
    desc: "Conjunto esportivo de ajuste confortável para academia e funcional.",
    img: "img/images (1).jpg"
  },
  {
    id: 28,
    name: "Motion Flow Jacket",
    cat: "Feminino",
    price: 369.9,
    old: null,
    tag: "Novo",
    desc: "Jaqueta esportiva leve para aquecimento e atividades externas.",
    img: "img/images (2).jpg",
  },
  {
    id: 29,
    name: "Elevate Running Shorts",
    cat: "Feminino",
    price: 179.9,
    old: 219.9,
    tag: "-18%",
    desc: "Short de corrida leve com liberdade de movimento e bolso discreto.",
    img: "img/images (3).jpg",
  },
  {
    id: 30,
    name: "AeroLite Running Tee",
    cat: "Feminino",
    price: 159.9,
    old: null,
    tag: "Novo",
    desc: "Camiseta ultraleve com secagem rápida para corrida e cardio.",
    img: "img/images (4).jpg",
  },
  {
    id: 31,
    name: "Balance Yoga Legging",
    cat: "Feminino",
    price: 279.9,
    old: 319.9,
    tag: "-13%",
    desc: "Legging de alta elasticidade para yoga, pilates e mobilidade.",
    img: "img/images (5).jpg",
  },
  {
    id: 32,
    name: "Motion Ribbed Top",
    cat: "Feminino",
    price: 149.9,
    old: null,
    tag: "Novo",
    desc: "Top esportivo estruturado para treino funcional e mobilidade.",
    img: "img/images (6).jpg",
  },
  {
    id: 33,
    name: "Aero Performance Bra",
    cat: "Feminino",
    price: 199.9,
    old: 239.9,
    tag: "-17%",
    desc: "Top de alta sustentação com construção confortável para impacto elevado.",
    img: "img/images (7).jpg",
  },
];

let currentPage = "home",
  category = "Todos",
  query = "",
  cart = [],
  favorites = new Set(),
  selected = null;
const money = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const navItems = [
  "Início",
  "Masculino",
  "Feminino",
  "Calçados",
  "Promoções",
  "Carrinho",
];
function goToPage(page) {
  currentPage = page;
  const home = document.querySelector("#home"),
    shop = document.querySelector("#shop");
  if (page === "home") {
    home.style.display = "";
    shop.style.display = "none";
    window.scrollTo(0, 0);
  } else {
    home.style.display = "none";
    shop.style.display = "";
    window.scrollTo(0, 0);
  }
}
function goToCategory(cat) {
  goToPage("shop");
  setCategory(cat);
}
const nav = document.querySelector("#nav");
nav.innerHTML = navItems
  .map((x) => `<button class="nav-btn" data-nav="${x}">${x}</button>`)
  .join("");
["Todos", "Masculino", "Feminino", "Calçados", "Promoções"].forEach((x) => {
  const b = document.createElement("button");
  b.textContent = x;
  b.dataset.cat = x;
  document.querySelector("#filters").appendChild(b);
});
function setCategory(c) {
  category = c;
  document
    .querySelectorAll("#filters button")
    .forEach((b) => b.classList.toggle("active", b.dataset.cat === c));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.nav === c));
  render();
}
function filtered() {
  let arr = products.filter(
    (p) =>
      category === "Todos" ||
      p.cat === category ||
      (category === "Promoções" && p.old),
  );
  if (query)
    arr = arr.filter((p) =>
      (p.name + " " + p.cat + " " + p.desc)
        .toLowerCase()
        .includes(query.toLowerCase()),
    );
  const s = document.querySelector("#sort").value;
  if (s === "low") arr.sort((a, b) => a.price - b.price);
  if (s === "high") arr.sort((a, b) => b.price - a.price);
  return arr;
}
function renderCard(p) {
  return `<article class="card" data-id="${p.id}"><div class="photo"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="tag">${p.tag}</span><button class="heart ${favorites.has(p.id) ? "liked" : ""}" data-fav="${p.id}" aria-label="Favoritar"><svg width="18" height="18" viewBox="0 0 24 24" fill="${favorites.has(p.id) ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button></div><div class="card-body"><div class="category">${p.cat}</div><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="price-row"><div class="price">${money(p.price)}${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</div><button class="add" data-add="${p.id}">Adicionar</button></div></div></article>`;
}
function render() {
  const arr = filtered();
  document.querySelector("#count").textContent =
    `${arr.length} ${arr.length === 1 ? "produto" : "produtos"}`;
  document.querySelector("#grid").innerHTML = arr.length
    ? arr.map(renderCard).join("")
    : `<div class="empty" style="grid-column:1/-1">Nenhum produto encontrado.<br>Tente outra busca ou categoria.</div>`;
}
function renderFeaturedProducts() {
  document.querySelector("#featuredGrid").innerHTML = products
    .slice(0, 4)
    .map(renderCard)
    .join("");
}
function add(id) {
  const item = cart.find((x) => x.id === id);
  item ? item.qty++ : cart.push({ id, qty: 1 });
  updateCart();
  toast("Produto adicionado ao carrinho");
}
function updateCart() {
  document.querySelector("#cartBadge").textContent = cart.reduce(
    (s, x) => s + x.qty,
    0,
  );
  const list = document.querySelector("#cartList");
  let total = 0;
  if (!cart.length)
    list.innerHTML = '<div class="empty">Seu carrinho está vazio.</div>';
  else {
    list.innerHTML = cart
      .map((i) => {
        const p = products.find((x) => x.id === i.id);
        total += p.price * i.qty;
        return `<div class="cart-item"><img src="${p.img}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="qty"><button data-minus="${p.id}">−</button><span>${i.qty}</span><button data-plus="${p.id}">+</button></div></div><button class="remove" data-remove="${p.id}">Remover</button></div>`;
      })
      .join("");
  }
  document.querySelector("#total").textContent = money(total);
  document.querySelector("#checkout").disabled = !cart.length;
}
function openModal(id) {
  selected = products.find((p) => p.id === id);
  document.querySelector("#modalImg").src = selected.img;
  document.querySelector("#modalImg").alt = selected.name;
  document.querySelector("#modalCat").textContent = selected.cat;
  document.querySelector("#modalTitle").textContent = selected.name;
  document.querySelector("#modalDesc").textContent = selected.desc;
  document.querySelector("#modalPrice").innerHTML =
    money(selected.price) +
    (selected.old ? ` <span class="old">${money(selected.old)}</span>` : "");
  const favBtn = document.querySelector("#modalFav"),
    favText = favBtn.querySelector("#favText");
  if (favorites.has(id)) {
    favBtn.classList.add("liked");
    favText.textContent = "Favoritado";
  } else {
    favBtn.classList.remove("liked");
    favText.textContent = "Favoritar";
  }
  document.querySelector("#modalOverlay").classList.add("open");
}
function toast(msg) {
  const t = document.querySelector("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add]"),
    fav = e.target.closest("[data-fav]"),
    card = e.target.closest(".card");
  if (addBtn) {
    e.stopPropagation();
    add(+addBtn.dataset.add);
    return;
  }
  if (fav) {
    e.stopPropagation();
    const id = +fav.dataset.fav;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    render();
    renderFeaturedProducts();
    return;
  }
  if (card) openModal(+card.dataset.id);
  if (e.target.closest("[data-plus]")) {
    const id = +e.target.closest("[data-plus]").dataset.plus;
    cart.find((x) => x.id === id).qty++;
    updateCart();
  }
  if (e.target.closest("[data-minus]")) {
    const id = +e.target.closest("[data-minus]").dataset.minus;
    const x = cart.find((i) => i.id === id);
    x.qty--;
    if (x.qty <= 0) cart = cart.filter((i) => i.id !== id);
    updateCart();
  }
  if (e.target.closest("[data-remove]")) {
    const id = +e.target.closest("[data-remove]").dataset.remove;
    cart = cart.filter((i) => i.id !== id);
    updateCart();
  }
  if (e.target.closest("[data-nav]")) {
    const n = e.target.closest("[data-nav]").dataset.nav;
    if (n === "Carrinho")
      document.querySelector("#drawer").classList.add("open");
    else if (n === "Início") {
      goToPage("home");
      category = "Todos";
    } else goToCategory(n);
  }
  if (e.target.dataset.section === "home") {
    e.preventDefault();
    goToPage("home");
  }
  if (e.target.dataset.category) {
    e.preventDefault();
    goToCategory(e.target.dataset.category);
  }
  const catCard = e.target.closest(".category-card");
  if (catCard) goToCategory(catCard.dataset.category);
});
document.querySelector("#filters").addEventListener("click", (e) => {
  if (e.target.dataset.cat) setCategory(e.target.dataset.cat);
});
document.querySelector("#search").addEventListener("input", (e) => {
  query = e.target.value;
  render();
});
document.querySelector("#sort").addEventListener("change", render);
document.querySelector("#cartBtn").onclick = () =>
  document.querySelector("#drawer").classList.add("open");
document.querySelector("#drawerClose").onclick = () =>
  document.querySelector("#drawer").classList.remove("open");
document.querySelector("#modalClose").onclick = () =>
  document.querySelector("#modalOverlay").classList.remove("open");
document.querySelector("#modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") e.currentTarget.classList.remove("open");
});
document.querySelector("#favBtn").onclick = () => {
  goToPage("shop");
  query = "";
  category = "Todos";
  render();
  toast(`${favorites.size} favorito(s) selecionado(s)`);
  setTimeout(
    () =>
      document.querySelector("#grid").scrollIntoView({ behavior: "smooth" }),
    100,
  );
};
document.querySelector("#modalAdd").onclick = () => {
  add(selected.id);
  document.querySelector("#modalOverlay").classList.remove("open");
};
document.querySelector("#modalFav").onclick = () => {
  favorites.has(selected.id)
    ? favorites.delete(selected.id)
    : favorites.add(selected.id);
  openModal(selected.id);
  render();
  renderFeaturedProducts();
};
document.querySelector("#checkout").onclick = () => {
  if (!cart.length) return;
  cart = [];
  updateCart();
  document.querySelector("#drawer").classList.remove("open");
  toast("Pedido realizado com sucesso! Obrigado pela compra.");
};
document.querySelector("#btnShopNow").onclick = () => goToCategory("Todos");
document.querySelector("#btnViewCollection").onclick = () =>
  goToCategory("Todos");
document.querySelector("#btnStartShopping").onclick = () =>
  goToCategory("Todos");
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector("#modalOverlay").classList.remove("open");
    document.querySelector("#drawer").classList.remove("open");
  }
});
function init() {
  goToPage("home");
  setCategory("Todos");
  updateCart();
  renderFeaturedProducts();
}
init();
