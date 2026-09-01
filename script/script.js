const products = [
  {
    id: 1,
    name: "Calça Western Stallion",
    cat: "Calças",
    gender: "Masculino",
    price: 189.9,
    old: 229.9,
    tag: "Novo",
    img: "img/e13e66f3-db42-48da-af95-42d4cf54c4d0.jpg",
    desc: "Calça de corte western contemporâneo, tecido confortável e acabamento premium.",
  },
  {
    id: 2,
    name: "Bota Country Classic",
    cat: "Botas",
    gender: "Masculino",
    price: 399.9,
    old: 469.9,
    tag: "-15%",
    img: "img/2044408c-93f2-4509-a9e8-d8183c35a6fc.jpg",
    desc: "Bota de inspiração western com presença marcante e construção para o dia a dia.",
  },
  {
    id: 3,
    name: "Chapéu Western Premium",
    cat: "Chapéus",
    gender: "Feminino",
    price: 159.9,
    old: null,
    tag: "Novo",
    img: "img/4659cd6c-33bd-4d9a-8145-d5b8fc430334.jpg",
    desc: "Chapéu de silhueta clássica para completar produções country com elegância.",
  },
  {
    id: 4,
    name: "Jaqueta Ranch",
    cat: "Calças",
    gender: "Masculino",
    price: 429.9,
    old: 499.9,
    tag: "-14%",
    img: "img/e0805de1-7af9-4bb7-8613-d13437a1ca7a.jpg",
    desc: "Jaqueta versátil com visual western limpo e acabamento contemporâneo.",
  },
  {
    id: 5,
    name: "Chapeu Western Classic",
    cat: "Chapéus",
    gender: "Unissex",
    price: 219.9,
    old: null,
    tag: "Novo",
    img: "img/93f1c3e0-5d6b-4a2e-9f8b-1c2e3d4f5a6b.jpg",
    desc: "Chapeu essencial para composições autênticas, com caimento moderno.",
  },
  {
    id: 6,
    name: "Bota Ranch Leather",
    cat: "Botas",
    gender: "Feminino",
    price: 449.9,
    old: 519.9,
    tag: "-13%",
    img: "img/cb1f66ba-25f4-48d0-9294-0b2df25979e4.jpg",
    desc: "Bota feminina de presença forte, inspirada no western e pensada para uso diário.",
  },
  {
    id: 7,
    name: "Cinto Heritage",
    cat: "Acessórios",
    gender: "Unissex",
    price: 129.9,
    old: null,
    tag: "Novo",
    img: "img/b0b2aecc-0ce6-49d0-adb6-34230ada4b96.jpg",
    desc: "Cinto minimalista para finalizar o visual com personalidade.",
  },
  {
    id: 8,
    name: "Calça Western Pearl",
    cat: "Calças",
    gender: "Feminino",
    price: 199.9,
    old: 239.9,
    tag: "-17%",
    img: "img/e1cb89ed-bd39-42a4-9584-1d5fd594c554.jpg",
    desc: "Calça feminina inspirada no western clássico com leitura sofisticada.",
  },
  {
    id: 9,
    name: "Bota Western Heritage",
    cat: "Botas",
    gender: "Masculino",
    price: 249.9,
    old: null,
    tag: "Novo",
    img: "img/c707210f-3be9-4d6d-bf72-5a915ae33d5f.jpg",
    desc: "Bota de corte reto, estrutura confortável e estética atemporal.",
  },
  {
    id: 10,
    name: "Chapeu Western Pearl",
    cat: "Chapéus",
    gender: "Feminino",
    price: 279.9,
    old: 329.9,
    tag: "-15%",
    img: "img/b4c0e0b8-3603-4f6c-ad07-14db0fd96df5.jpg",
    desc: "Chapeu de inspiração western com acabamento leve e elegante.",
  },
  {
    id: 11,
    name: "Botina Western Compact",
    cat: "Botas",
    gender: "Unissex",
    price: 119.9,
    old: null,
    tag: "Novo",
    img: "img/a305f012-d2ff-4b5c-9c59-0d4115a2d103.jpg",
    desc: "Botina compacta e resistente para completar o essencial.",
  },
  {
    id: 12,
    name: "Calça Western Heritage",
    cat: "Calças",
    gender: "Feminino",
    price: 349.9,
    old: 399.9,
    tag: "-12%",
    img: "img/54e202af-b6d2-4f9e-8382-fafdc30a3954.jpg",
    desc: "Calça denim de corte atual com referências discretas do rodeio.",
  },
];
let category = "Todos",
  query = "",
  cart = [],
  favorites = new Set(),
  selected = null;
const $ = (s) => document.querySelector(s),
  money = (v) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const filters = [
  "Todos",
  "Masculino",
  "Feminino",
  "Calçados",
  "Camisas",
  "Calças",
  "Botas",
  "Chapéus",
  "Acessórios",
  "Promoções",
];
function isFootwear(p) {
  return ["Botas"].includes(p.cat);
}
function matches(p) {
  const q = query.trim().toLowerCase();
  const text = `${p.name} ${p.cat} ${p.gender}`.toLowerCase();
  const catOk =
    category === "Todos" ||
    (category === "Calçados"
      ? isFootwear(p)
      : category === "Promoções"
        ? !!p.old
        : category === p.gender || p.cat === category);
  return catOk && (!q || text.includes(q));
}
function filtered() {
  return products.filter(matches);
}
function card(p) {
  const fav = favorites.has(p.id);
  return `<article class="product-card"><div class="product-image"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span><button class="favorite ${fav ? "active" : ""}" data-fav="${p.id}" aria-label="${fav ? "Remover dos favoritos" : "Favoritar"}">${fav ? "♥" : "♡"}</button></div><div class="product-info"><span class="product-category">${p.cat}</span><h3 class="product-name">${p.name}</h3><div><span class="price">${money(p.price)}</span>${p.old ? `<span class="old-price">${money(p.old)}</span>` : ""}</div><button class="add-product" data-add="${p.id}">Adicionar ao carrinho</button></div></article>`;
}
function renderFeatured() {
  $("#featuredGrid").innerHTML = products.slice(0, 4).map(card).join("");
}
function renderFilters() {
  $("#filters").innerHTML = filters
    .map(
      (x) =>
        `<button class="${x === category ? "active" : ""}" data-filter="${x}">${x}</button>`,
    )
    .join("");
}
function renderShop() {
  const list = filtered();
  let sorted = [...list];
  const sort = $("#sort")?.value;
  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  $("#grid").innerHTML = sorted.map(card).join("");
  $("#count").textContent =
    `${sorted.length} ${sorted.length === 1 ? "produto" : "produtos"}`;
  $("#catalogTitle").textContent =
    category === "Todos" ? "Todos os produtos" : category;
  $("#emptyState").hidden = sorted.length > 0;
  renderFilters();
}
function showHome() {
  $("#home").hidden = false;
  $("#shop").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobile();
}
function showShop(cat = "Todos") {
  category = cat;
  $("#home").hidden = true;
  $("#shop").hidden = false;
  renderShop();
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobile();
}
function toast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}
function updateCart() {
  const count = cart.reduce((n, x) => n + x.qty, 0),
    total = cart.reduce((n, x) => n + x.product.price * x.qty, 0);
  $("#cartBadge").textContent = count;
  $("#mobileCartCount").textContent = count;
  $("#total").textContent = money(total);
  $("#checkout").disabled = !cart.length;
  $("#cartList").innerHTML = cart.length
    ? cart
        .map(
          (x) =>
            `<div class="cart-item"><img src="${x.product.img}" alt="${x.product.name}"><div><strong>${x.product.name}</strong><small>${money(x.product.price)} cada</small><div class="qty-controls"><button data-qty="${x.product.id}" data-delta="-1" aria-label="Diminuir quantidade">−</button><span>${x.qty}</span><button data-qty="${x.product.id}" data-delta="1" aria-label="Aumentar quantidade">+</button></div></div><button class="cart-remove" data-remove="${x.product.id}">remover</button></div>`,
        )
        .join("")
    : "<p>Seu carrinho está vazio.</p>";
}
function addCart(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const item = cart.find((x) => x.product.id === id);
  item ? item.qty++ : cart.push({ product: p, qty: 1 });
  updateCart();
  toast("Produto adicionado ao carrinho.");
}
function changeQty(id, delta) {
  const item = cart.find((x) => x.product.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((x) => x.product.id !== id);
  updateCart();
  toast(item.qty > 0 ? "Quantidade atualizada." : "Produto removido.");
}
function toggleFav(id) {
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  $("#favBadge").textContent = favorites.size;
  renderFeatured();
  if (!$("#shop").hidden) renderShop();
  toast(
    favorites.has(id)
      ? "Produto adicionado aos favoritos."
      : "Produto removido dos favoritos.",
  );
}
function openProduct(id) {
  selected = products.find((x) => x.id === id);
  if (!selected) return;
  $("#modalImg").src = selected.img;
  $("#modalImg").alt = selected.name;
  $("#modalCat").textContent = selected.cat;
  $("#modalTitle").textContent = selected.name;
  $("#modalDesc").textContent = selected.desc;
  $("#modalPrice").textContent = money(selected.price);
  $("#modalFav").textContent = favorites.has(id)
    ? "♥ Favoritado"
    : "♡ Favoritar";
  $("#productModal").hidden = false;
}
function openCart() {
  updateCart();
  $("#cartDrawer").classList.add("open");
  $("#drawerBackdrop").classList.add("open");
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#drawerBackdrop").classList.remove("open");
}
function closeMobile() {
  $("#mobileNav").classList.remove("open");
  $("#mobileToggle").setAttribute("aria-expanded", "false");
}
document.addEventListener("click", (e) => {
  if (e.target.closest("#mobileCartLink")) {
    openCart();
    closeMobile();
    return;
  }
  const nav = e.target.closest("[data-category]");
  if (nav) {
    e.preventDefault();
    showShop(nav.dataset.category);
    return;
  }
  const filter = e.target.closest("[data-filter]");
  if (filter) {
    category = filter.dataset.filter;
    renderShop();
    return;
  }
  const add = e.target.closest("[data-add]");
  if (add) {
    addCart(Number(add.dataset.add));
    return;
  }
  const fav = e.target.closest("[data-fav]");
  if (fav) {
    toggleFav(Number(fav.dataset.fav));
    return;
  }
  const qty = e.target.closest("[data-qty]");
  if (qty) {
    changeQty(Number(qty.dataset.qty), Number(qty.dataset.delta));
    return;
  }
  const remove = e.target.closest("[data-remove]");
  if (remove) {
    cart = cart.filter((x) => x.product.id !== Number(remove.dataset.remove));
    updateCart();
    toast("Produto removido.");
    return;
  }
  const product = e.target.closest(".product-image");
  if (product && !e.target.closest("button")) {
    const btn = e.target.closest(".product-card")?.querySelector("[data-add]");
    if (btn) openProduct(Number(btn.dataset.add));
    return;
  }
  if (e.target.closest("#cartBtn")) {
    openCart();
    return;
  }
  if (e.target.closest("#drawerClose") || e.target.closest("#drawerBackdrop")) {
    closeCart();
    return;
  }
  if (e.target.closest("#modalAdd")) {
    addCart(selected.id);
    $("#productModal").hidden = true;
    return;
  }
  if (e.target.closest("#modalFav")) {
    toggleFav(selected.id);
    openProduct(selected.id);
    return;
  }
  if (e.target.closest("[data-close-modal]")) {
    $("#productModal").hidden = true;
    return;
  }
  if (e.target.closest("#favBtn")) {
    showShop("Todos");
    return;
  }
  if (e.target.closest("#searchToggle")) {
    $("#searchPanel").classList.toggle("open");
    if ($("#searchPanel").classList.contains("open")) $("#searchInput").focus();
    return;
  }
  if (e.target.closest("#mobileToggle")) {
    const open = $("#mobileNav").classList.toggle("open");
    $("#mobileToggle").setAttribute("aria-expanded", open);
    return;
  }
  if (e.target.closest(".brand")) {
    e.preventDefault();
    showHome();
    return;
  }
  if (e.target.closest('.mobile-nav a[href="#home"]')) {
    e.preventDefault();
    showHome();
    return;
  }
});
$("#searchInput").addEventListener("input", (e) => {
  query = e.target.value;
  showShop("Todos");
});
$("#sort").addEventListener("change", renderShop);
$("#clearFilters").addEventListener("click", () => {
  query = "";
  category = "Todos";
  $("#searchInput").value = "";
  renderShop();
});
$("#checkout").addEventListener("click", () =>
  toast("Pedido pronto para finalização."),
);
$("#newsletter").addEventListener("submit", (e) => {
  e.preventDefault();
  toast("Cadastro realizado com sucesso.");
  e.target.reset();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $("#productModal").hidden = true;
    closeCart();
    closeMobile();
  }
});
renderFeatured();
updateCart();
$("#favBadge").textContent = favorites.size;
