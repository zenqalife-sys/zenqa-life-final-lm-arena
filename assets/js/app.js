/* ==========================================================
   ZENQA LIFE · app.js
   Layout compartido (banner + nav + footer), carrito,
   buscador, filtros de tienda, recetas con routing,
   lead magnet y micro-interacciones.
   ========================================================== */
(function () {
  "use strict";
  const D = window.ZENQA;
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const PAGE = document.body.dataset.page || "home";

  /* ---------------- iconos ---------------- */
  const I = {
    leaf: '<svg class="promo__leaf" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 3c0 9-5.5 14-12 14-1.6 0-3-.3-4-1 1-7 6-12 13-13.5l3-.5Z" fill="#14301E"/><path d="M4 21c2-6 6-9 11-11" stroke="#14301E" stroke-width="1.6" stroke-linecap="round"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L21 8H6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="20" r="1.4" fill="currentColor"/><circle cx="18" cy="20" r="1.4" fill="currentColor"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="6.4"/><path d="m16 16 4.5 4.5" stroke-linecap="round"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="8" r="3.6"/><path d="M4.8 20c1.2-3.7 4-5.2 7.2-5.2S18 16.3 19.2 20" stroke-linecap="round"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" stroke-linejoin="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke-linecap="round"/></svg>',
    burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3.5 7h17M3.5 12h17M3.5 17h11" stroke-linecap="round"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V6m0 0-6 6m6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="m4 12.5 5 5L20 6.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 10h16v10H4V10Zm0-3h16v3H4V7Zm8 0v13M12 7c-2.6 0-4.6-2.4-2.9-3.8C10.6 2.3 12 4 12 7Zm0 0c2.6 0 4.6-2.4 2.9-3.8C13.4 2.3 12 4 12 7Z" stroke-linejoin="round"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M2 6h11v10H2V6Zm11 3h4.5l3 3.5V16h-7.5V9Z" stroke-linejoin="round"/><circle cx="7" cy="18.5" r="1.7"/><circle cx="17" cy="18.5" r="1.7"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2h2.6c.3 2 1.7 3.6 4.4 3.9v2.7c-1.7 0-3.2-.5-4.4-1.4v5.9a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.8a3 3 0 1 0 2.1 2.8L14 2Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12s0-3.4-.4-5a2.7 2.7 0 0 0-1.9-1.9C18 4.7 12 4.7 12 4.7s-6 0-7.7.4A2.7 2.7 0 0 0 2.4 7C2 8.6 2 12 2 12s0 3.4.4 5a2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9c.4-1.6.4-5 .4-5ZM10 15.3V8.7L15.7 12 10 15.3Z"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5.1s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.3 1 .6 1.9 1.6 1.9 1.9 0 3.4-2 3.4-5 0-2.6-1.9-4.4-4.5-4.4a4.7 4.7 0 0 0-4.9 4.7c0 .9.4 1.9.8 2.4l.1.4-.3 1.2c0 .2-.2.3-.4.2-1.4-.7-2.3-2.7-2.3-4.4C5.7 9.4 8 6 12.3 6c3.4 0 6.1 2.5 6.1 5.7 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.6-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.7A10 10 0 1 0 12 2Z"/></svg>',
    threads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 21c4.7 0 7-3 7-6.6 0-6-3-9.4-7-9.4-2.9 0-4.7 1.5-5.5 3.4M12 21c-3 0-4.8-1.7-4.8-3.7 0-2.2 2-3.3 4.8-3.3 3.6 0 5.6 1.9 5.6 4.2 0 1.7-1.2 2.8-2.6 2.8-1.4 0-2-.8-2-1.6" stroke-linecap="round"/></svg>'
  };

  /* ==========================================================
     1 · BARRA ROSA + NAV + FOOTER (idénticos en todas las páginas)
     ========================================================== */
  const NAV = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "tienda", label: "Tienda", href: "tienda.html",
      fly: [["Té matcha", "tienda.html#matcha"], ["Kits y preparación", "tienda.html#kits"], ["Tazas y vasos", "tienda.html#vasos"], ["Lo nuestro", "tienda.html#outfit"]] },
    { id: "prepararlo", label: "Cómo prepararlo", href: "prepararlo.html",
      fly: [["Cómo prepararlo", "prepararlo.html"], ["Recetas y guías", "recetas.html"], ["Matcha vs café", "prepararlo.html#vs-cafe"]] },
    { id: "nosotros", label: "Nosotros", href: "nosotros.html",
      fly: [["Nuestra historia", "nosotros.html"], ["Contacto", "contacto.html"]] }
  ];
  const isSub = (id) => (PAGE === "recetas" && id === "prepararlo") || (PAGE === "contacto" && id === "nosotros");

  function promoBar() {
    const item = '<span class="promo__item">Envíos gratis a partir de 35€</span>';
    const group = '<div class="promo__group">' + (item + I.leaf).repeat(3) + "</div>";
    return '<div class="promo" role="region" aria-label="Envío gratuito desde 35 euros"><div class="promo__track">' + group + group + "</div></div>";
  }

  function header() {
    const links = NAV.map((n) => {
      const cur = PAGE === n.id || isSub(n.id);
      const fly = n.fly
        ? '<div class="fly"><ul>' + n.fly.map((f) => `<li><a href="${f[1]}">${f[0]}</a></li>`).join("") + "</ul></div>"
        : "";
      return `<div class="nav__cell"><a class="nav__link" href="${n.href}"${cur ? ' aria-current="page"' : ""}>${n.label}</a>${fly}</div>`;
    }).join("");
    return `
<a href="#MainContent" class="skip">Ir al contenido</a>
${promoBar()}
<header class="nav" id="nav">
  <div class="wrap nav__in">
    <a class="brand" href="index.html" aria-label="ZENQA LIFE · inicio">
      <img class="brand__mark" src="assets/img/logo-mark.png" alt="Logo de Zenqa Life" width="42" height="42">
      <span class="brand__txt"><span class="brand__name">ZEN<i>QA</i></span><span class="brand__sub">Matcha life</span></span>
    </a>
    <nav class="nav__links" aria-label="Principal">${links}</nav>
    <div class="nav__tools">
      <button class="icon-btn" data-act="search" aria-label="Buscar productos">${I.search}</button>
      <a class="icon-btn" href="contacto.html" aria-label="Mi cuenta y contacto">${I.user}</a>
      <button class="icon-btn" data-act="cart" aria-label="Ver carrito"><span id="cartIcon">${I.cart}</span><span class="badge" data-count>0</span></button>
      <button class="icon-btn nav__burger" data-act="menu" aria-label="Abrir menú" aria-expanded="false">${I.burger}</button>
    </div>
  </div>
</header>`;
  }

  function footer() {
    const cols = [
      ["Tienda", [
        ["Té matcha", "tienda.html#matcha"], ["Kits y preparación", "tienda.html#kits"],
        ["Tazas, vasos y cristalería", "tienda.html#vasos"], ["Lo nuestro", "tienda.html#outfit"],
        ["Pack descubrimiento", "tienda.html#pack-descubrimiento"], ["Suscripción ritual", "tienda.html#suscripcion-matcha"]
      ]],
      ["Aprende", [
        ["Cómo prepararlo", "prepararlo.html"], ["Recetas y guías", "recetas.html"],
        ["Matcha vs café", "prepararlo.html#vs-cafe"], ["Guía de dosis", "recetas.html#guia-dosis"],
        ["Conservación del té", "recetas.html#guia-conservacion"], ["Guía gratuita (PDF)", "#lead"]
      ]],
      ["Ayuda", [
        ["Contacto", "contacto.html"], ["Envíos y plazos", "legal.html#envios"],
        ["Devoluciones", "legal.html#devoluciones"], ["Preguntas frecuentes", "contacto.html#faq"],
        ["Guía de tallas", "legal.html#tallas"], ["Estado de mi pedido", "contacto.html"]
      ]]
    ];
    const socials = D.brand.social.map((s) => `<a class="social" href="${s.url}" target="_blank" rel="noopener">${I[s.id] || ""}<span>${s.label}</span><i>${s.handle}</i></a>`).join("");
    return `
<footer class="foot" id="foot">
  <div class="wrap">
    <div class="foot__grid">
      <div class="foot__brand">
        <a class="brand" href="index.html">
          <img class="brand__mark" src="assets/img/logo-mark.png" alt="Logo de Zenqa Life" width="42" height="42">
          <span class="brand__txt"><span class="brand__name" style="color:#fff">ZEN<i>QA</i></span><span class="brand__sub">Te matcha vibes</span></span>
        </a>
        <p style="color:rgba(255,255,255,.72);max-width:34ch">Matcha de Uji molido en piedra, estética de barrio y un ritual de 60 segundos. Sin solemnidad, con mucho color.</p>
        <div class="socials">${socials}</div>
        <div class="foot__mini">
          <span>${I.truck} Envío gratis +35 €</span><span>${I.leaf} Cosecha de primavera</span>
        </div>
      </div>
      ${cols.map(([h, items]) => `<div><h4>${h}</h4><ul>${items.map((i) => `<li><a href="${i[1]}">${i[0]}</a></li>`).join("")}</ul></div>`).join("")}
      <div>
        <h4>Boletín matcha</h4>
        <p style="color:rgba(255,255,255,.72);font-size:.9rem">Una receta, un descuento y cero spam. Cada dos semanas.</p>
        <form class="col" data-news="footer" novalidate>
          <div class="field"><input type="email" name="email" placeholder="tu@email.com" aria-label="Tu email" required></div>
          <button class="btn btn--pink btn--sm" type="submit">Suscribirme</button>
          <p class="err" data-err hidden>Revisa el email e inténtalo otra vez.</p>
        </form>
        <div class="pays" style="margin-top:14px">
          <span class="pay">VISA</span><span class="pay">MC</span><span class="pay">AMEX</span><span class="pay">PAYPAL</span><span class="pay">APPLE PAY</span><span class="pay">BIZUM</span>
        </div>
      </div>
    </div>
  </div>
  <div class="foot__type" aria-hidden="true">TE MATCHA VIBES</div>
  <div class="wrap">
    <div class="foot__legal">
      <nav aria-label="Legal">
        <a href="legal.html#aviso">Aviso legal</a>
        <a href="legal.html#privacidad">Política de privacidad</a>
        <a href="legal.html#cookies">Política de cookies</a>
        <a href="legal.html#condiciones">Condiciones de compra</a>
        <a href="legal.html#devoluciones">Envíos y devoluciones</a>
        <a href="legal.html#consumo">Información al consumidor</a>
        <a href="#cookies" data-act="cookies">Preferencias de cookies</a>
      </nav>
      <p class="foot__copy">© ${new Date().getFullYear()} ZENQA LIFE · NIF B-00000000 · Av. de la Paz 21, 28931 Arroyomolinos (Madrid) · hola@zenqalife.com</p>
    </div>
  </div>
</footer>
<button class="totop" data-act="top" aria-label="Volver arriba">${I.up}</button>`;
  }

  function overlays() {
    return `
<div class="scrim" data-act="close-all"></div>
<div class="drawer" id="cart" role="dialog" aria-modal="true" aria-label="Carrito de la compra">
  <div class="drawer__head"><h2>Tu carrito</h2><button class="icon-btn" data-act="close-all" aria-label="Cerrar carrito">${I.close}</button></div>
  <div class="drawer__body" id="cartBody"></div>
  <div class="drawer__foot">
    <div class="ship-bar" id="shipBar"></div>
    <div class="row row--between"><span class="count-lbl">Subtotal</span><strong style="font-family:var(--f-display);font-size:1.3rem" id="cartSum">0,00 €</strong></div>
    <button class="btn btn--pink btn--block" data-act="checkout">Finalizar compra</button>
    <p class="count-lbl" style="text-align:center">Impuestos incluidos · Envío calculado en el checkout</p>
  </div>
</div>
<div class="search" id="search" role="dialog" aria-modal="true" aria-label="Buscar">
  <div class="wrap">
    <form role="search" id="searchForm">
      <div class="row" style="gap:10px">
        <input class="input" id="q" type="search" placeholder="Busca matcha, chawan, kit, tote…" aria-label="Buscar" autocomplete="off">
        <button class="btn btn--sm" type="submit">Buscar</button>
        <button class="icon-btn" type="button" data-act="close-all" aria-label="Cerrar buscador">${I.close}</button>
      </div>
    </form>
    <div class="search__res" id="searchRes"></div>
  </div>
</div>
<div class="mmenu" id="mmenu" role="dialog" aria-modal="true" aria-label="Menú">
  <div class="drawer__head"><h2 style="font-size:1rem">Menú</h2><button class="icon-btn" data-act="close-all" aria-label="Cerrar menú">${I.close}</button></div>
  <nav>${NAV.map((n) => `<a href="${n.href}">${n.label}<small>›</small></a>`).join("")}</nav>
  <div style="padding:18px 22px;display:grid;gap:10px;border-top:var(--edge)">
    <a class="btn btn--pink btn--sm" href="tienda.html">Comprar matcha</a>
    <a class="btn btn--ghost btn--sm" href="recetas.html">Recetas y guías</a>
    <a class="btn btn--ghost btn--sm" href="#lead" data-act="lead">Descargar guía gratis</a>
  </div>
</div>
<div class="modal" id="leadModal" role="dialog" aria-modal="true" aria-labelledby="leadTitle">
  <div class="modal__box">
    <div class="modal__aside">
      <div>
        <span class="eyebrow eyebrow--light">Guía gratuita · PDF</span>
        <h3 class="display" id="leadTitle" style="font-size:clamp(1.5rem,2.6vw,2.1rem);color:#fff">Del bote a la taza en 6 pasos</h3>
        <p style="color:rgba(255,255,255,.78);font-size:.95rem">Temperaturas exactas, gramos según objetivo, 6 recetas y una hoja de cata para encontrar tu matcha. Más un <strong style="color:#fff">10 %</strong> en el primer pedido.</p>
      </div>
      <ul class="col" style="gap:9px;font-family:var(--f-mono);font-size:.76rem;text-transform:uppercase;letter-spacing:.08em">
        <li>✓ PDF de 12 páginas</li><li>✓ 6 recetas con pasos</li><li>✓ Cupón ZENQA10</li>
      </ul>
    </div>
    <div class="modal__main">
      <button class="icon-btn modal__close" data-act="close-all" aria-label="Cerrar">${I.close}</button>
      <form data-lead novalidate>
        <div class="col" style="gap:14px">
          <div class="field"><label for="lname">Cómo te llamas</label><input id="lname" name="name" required placeholder="Aitana"></div>
          <div class="field"><label for="lmail">Tu email</label><input id="lmail" name="email" type="email" required placeholder="hola@correo.com"></div>
          <label class="check"><input type="checkbox" name="priv" required><span>Acepto la <a href="legal.html#privacidad" class="underline-sketch">política de privacidad</a> y recibir el contenido de Zenqa Life. Puedo darme de baja cuando quiera.</span></label>
          <p class="err" data-err hidden>Necesito un email válido y tu consentimiento.</p>
          <button class="btn btn--pink btn--block" type="submit">Quiero la guía</button>
          <p class="count-lbl" style="text-align:center">Te la enviamos al momento. Nada de spam.</p>
        </div>
      </form>
      <div class="form-ok" data-lead-ok hidden>
        <strong class="display" style="font-size:1.2rem">¡Guía en camino!</strong>
        <p>Revisa tu bandeja (y promociones). Aquí también puedes descargarla ya:</p>
        <a class="btn btn--sm" href="assets/downloads/guia-matcha-zenqa.pdf" download>${I.check} Descargar PDF</a>
        <p class="count-lbl">Tu código para el primer pedido: <strong>ZENQA10</strong></p>
      </div>
    </div>
  </div>
</div>
<div class="toast" id="toast" role="status" aria-live="polite"><span class="tk"></span><span data-msg></span></div>`;
  }

  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", footer() + overlays());

  /* ==========================================================
     2 · INTERACCIONES GLOBALES
     ========================================================== */
  const lock = (on) => document.body.classList.toggle("is-locked", on);
  const openBox = (cls) => { lock(true); document.body.classList.add(cls); };
  const closeAll = () => { lock(false); ["is-locked", "is-cart", "is-search", "is-menu", "is-modal"].forEach((c) => document.body.classList.remove(c)); };

  let toastT;
  function toast(msg) {
    const el = $("#toast"); $("[data-msg]", el).textContent = msg;
    el.classList.add("is-on"); clearTimeout(toastT);
    toastT = setTimeout(() => el.classList.remove("is-on"), 3200);
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-act]"); if (!a) return;
    const act = a.dataset.act;
    if (act === "close-all") { e.preventDefault(); closeAll(); }
    if (act === "cart") { e.preventDefault(); openBox("is-cart"); renderCart(); }
    if (act === "search") { e.preventDefault(); openBox("is-search"); setTimeout(() => $("#q").focus(), 120); }
    if (act === "menu") { e.preventDefault(); const on = !document.body.classList.contains("is-menu"); closeAll(); if (on) openBox("is-menu"); a.setAttribute("aria-expanded", String(on)); }
    if (act === "lead" || act === "lead-open") { e.preventDefault(); openBox("is-modal"); }
    if (act === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); }
    if (act === "cookies") { e.preventDefault(); toast("Solo usamos cookies técnicas y analíticas anónimas."); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

  /* nav sticky + back to top */
  const nav = $("#nav"), totop = $("[data-act=top]");
  const onScroll = () => {
    nav.classList.toggle("is-stuck", window.scrollY > 8);
    totop.classList.toggle("is-on", window.scrollY > 900);
  };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  /* reveal on scroll */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => {
    es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;
  function observeReveals() {
    $$(".rv:not(.is-in)").forEach((el) => { if (io) io.observe(el); else el.classList.add("is-in"); });
  }
  observeReveals();

  /* contadores */
  const cio = "IntersectionObserver" in window ? new IntersectionObserver((es) => {
    es.forEach((en) => {
      if (!en.isIntersecting) return; cio.unobserve(en.target);
      const el = en.target, to = parseFloat(el.dataset.countTo), dur = 1100, t0 = performance.now();
      const dec = (el.dataset.dec || 0) | 0;
      (function tick(t) {
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = (to * e).toFixed(dec).replace(".", ",");
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.5 }) : null;
  $$("[data-count-to]").forEach((el) => (cio ? cio.observe(el) : (el.textContent = el.dataset.countTo)));

  /* acordeón genérico */
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".acc__btn"); if (!b) return;
    const item = b.closest(".acc__item"), group = item.parentElement;
    const open = item.classList.contains("is-open");
    if (group.dataset.single !== "off") $$(".acc__item", group).forEach((i) => { i.classList.remove("is-open"); $(".acc__btn", i).setAttribute("aria-expanded", "false"); });
    item.classList.toggle("is-open", !open); b.setAttribute("aria-expanded", String(!open));
  });

  /* formularios: newsletter, lead, contacto */
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v);
  function validForm(f) {
    const d = new FormData(f); let ok = true;
    $$("input, select, textarea", f).forEach((el) => {
      if (!el.required) return;
      const v = (d.get(el.name) || "").toString().trim();
      let good = v.length > 0;
      if (el.type === "email") good = emailOk(v);
      if (el.type === "checkbox") good = el.checked;
      el.setAttribute("aria-invalid", String(!good));
      if (!good) ok = false;
    });
    return ok;
  }
  function wireForm(sel, onSuccess) {
    $$("[data-" + sel + "]").forEach((f) => {
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        const err = $("[data-err]", f);
        const ok = validForm(f);
        if (err) err.hidden = ok;
        if (!ok) return;
        if (onSuccess) onSuccess(f, new FormData(f));
      });
    });
  }
  wireForm("news", (f) => { toast("¡Dentro! Confirma el email y recibes la guía."); f.reset(); });
  wireForm("lead", (f) => { f.hidden = true; $("[data-lead-ok]", f.closest(".modal__main")).hidden = false; try { localStorage.setItem("zenqa_lead", "1"); } catch (_) {} });
  wireForm("contact", (f, d) => {
    const ok = $("[data-contact-ok]", document);
    if (ok) { ok.hidden = false; $("[data-who]", ok).textContent = (d.get("name") || "").split(" ")[0] || ""; ok.scrollIntoView({ block: "center", behavior: "smooth" }); }
    f.reset();
  });

  /* lead magnet: FAB + oferta a los 25 s una sola vez */
  const fab = document.createElement("div");
  fab.className = "fab"; fab.id = "fab";
  fab.innerHTML = '<button class="row" data-fab-open style="gap:10px;align-items:center">' + I.gift + '<span>Guía gratis + 10 %</span></button>' +
                  '<button class="fab__x" data-fab-x aria-label="Cerrar aviso de la guía">×</button>';
  document.body.appendChild(fab);
  let fabOff = false; try { fabOff = sessionStorage.getItem("zenqa_fab") === "off"; } catch (_) {}
  const fabSync = () => fab.classList.toggle("is-on", !fabOff && window.scrollY > 620);
  window.addEventListener("scroll", fabSync, { passive: true }); fabSync();
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-fab-x]")) { fabOff = true; try { sessionStorage.setItem("zenqa_fab", "off"); } catch (_) {} fabSync(); return; }
    if (e.target.closest("[data-fab-open]")) openBox("is-modal");
  });
  let seen = false; try { seen = !!localStorage.getItem("zenqa_lead_seen"); } catch (_) {}
  if (!seen) setTimeout(() => { if (!document.body.classList.contains("is-locked")) { try { localStorage.setItem("zenqa_lead_seen", "1"); } catch (_) {} openBox("is-modal"); } }, 25000);

  /* ==========================================================
     3 · CARRITO
     ========================================================== */
  const CK = "zenqa_cart";
  const getCart = () => { try { return JSON.parse(localStorage.getItem(CK)) || {}; } catch (_) { return {}; } };
  const setCart = (c) => { try { localStorage.setItem(CK, JSON.stringify(c)); } catch (_) {} countCart(); };
  function countCart() {
    const c = getCart(), n = Object.values(c).reduce((a, b) => a + b, 0);
    $$("[data-count]").forEach((el) => { el.textContent = n; el.hidden = n === 0; });
  }
  function cartLines() {
    const c = getCart();
    return Object.entries(c).map(([id, q]) => ({ p: D.byId(id), q })).filter((l) => l.p);
  }
  function renderCart() {
    const body = $("#cartBody"), lines = cartLines();
    const sum = lines.reduce((a, l) => a + l.p.price * l.q, 0);
    if (!lines.length) {
      body.innerHTML = `<div class="empty">${I.cart}<p><strong>Tu carrito está vacío.</strong><br>¿Empezamos por el ceremonial o por el kit completo?</p><a class="btn btn--sm" href="tienda.html">Ver la tienda</a></div>`;
    } else {
      body.innerHTML = lines.map((l) => `
        <div class="citem">
          <img src="${l.p.img}" alt="">
          <div><h4>${l.p.name}</h4><p class="p">${D.money(l.p.price)} · ${l.p.unit}</p>
            <div class="qty" data-id="${l.p.id}"><button data-qty="-1" aria-label="Quitar una unidad">−</button><span>${l.q}</span><button data-qty="1" aria-label="Añadir una unidad">+</button></div>
          </div>
          <button class="icon-btn" data-del="${l.p.id}" aria-label="Eliminar ${l.p.name}">${I.close}</button>
        </div>`).join("");
    }
    $("#cartSum").textContent = D.money(sum);
    const pct = Math.min(100, (sum / D.brand.freeShipping) * 100), left = D.brand.freeShipping - sum;
    $("#shipBar").innerHTML = `<div class="track"><div class="fill" style="width:${pct}%"></div></div>
      <p>${left > 0 ? `Te faltan <strong>${D.money(left)}</strong> para el envío gratis` : "¡Envío gratis conseguido! 🍵"}</p>`;
  }
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) {
      e.preventDefault();
      const c = getCart(), id = add.dataset.add;
      c[id] = (c[id] || 0) + 1; setCart(c); renderCart();
      add.classList.add("is-done"); const t = add.textContent; add.textContent = "Añadido ✓";
      setTimeout(() => { add.classList.remove("is-done"); add.textContent = t; }, 1400);
      toast(`${D.byId(id).name} en el carrito`);
    }
    const q = e.target.closest("[data-qty]");
    if (q) { const c = getCart(), id = q.closest(".qty").dataset.id; c[id] = Math.max(1, (c[id] || 1) + (+q.dataset.qty)); setCart(c); renderCart(); }
    const del = e.target.closest("[data-del]");
    if (del) { const c = getCart(); delete c[del.dataset.del]; setCart(c); renderCart(); }
    if (e.target.closest("[data-act=checkout]")) {
      if (!cartLines().length) return toast("Añade algo primero, ¿no?");
      toast("Checkout de demostración · en Shopify esto va a /cart");
    }
  });
  countCart();

  /* ==========================================================
     4 · BUSCADOR
     ========================================================== */
  function search(q) {
    q = q.trim().toLowerCase();
    const res = $("#searchRes"); if (!q) { res.innerHTML = ""; return; }
    const pool = D.products.concat(D.recipes.map((r) => ({ id: r.id, name: r.name, cat: r.type, img: r.img, price: null, unit: r.kicker, isRecipe: true })));
    const hits = pool.filter((p) => (p.name + " " + (p.kicker || "") + " " + (p.cat || "") + " " + (p.short || "")).toLowerCase().includes(q)).slice(0, 8);
    res.innerHTML = hits.length ? hits.map((h) => `
      <a href="${h.isRecipe ? "recetas.html#" + h.id : "tienda.html#" + h.id}">
        <img src="${h.img}" alt=""><span><b>${h.name}</b><span>${h.price ? D.money(h.price) : (h.unit || "Guía")}</span></span>
      </a>`).join("") : `<p class="count-lbl">Sin resultados para “${q}”. Prueba con “ceremonial”, “kit” o “vaso”.</p>`;
  }
  $("#q").addEventListener("input", (e) => search(e.target.value));
  $("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const first = $("#searchRes a"); if (first) location.href = first.getAttribute("href");
    else location.href = "tienda.html";
  });

  /* ==========================================================
     5 · RENDER DE PRODUCTOS
     ========================================================== */
  const cardHTML = (p) => `
  <article class="card rv" id="${p.id}">
    <a class="card__media" href="tienda.html#${p.id}" aria-label="${p.name}">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<span class="tag card__badge">${p.badge}</span>` : ""}
    </a>
    <button class="card__wish" aria-label="Guardar ${p.name}" aria-pressed="false">${I.heart}</button>
    <div class="card__body">
      <span class="card__cat">${p.kicker}</span>
      <h3 class="card__title"><a href="tienda.html#${p.id}">${p.name}</a></h3>
      <p class="card__desc">${p.short}</p>
      <div class="card__rate"><span class="stars">${D.stars(p.rating)}</span> ${String(p.rating).replace(".", ",")} · ${p.reviews} reseñas</div>
      <div class="card__foot">
        <span class="card__price">${D.money(p.price)}${p.compare ? `<s>${D.money(p.compare)}</s>` : ""}</span>
        <button class="card__add" data-add="${p.id}">Añadir</button>
      </div>
    </div>
  </article>`;

  const wishHandler = (e) => {
    const b = e.target.closest(".card__wish"); if (!b) return;
    const on = b.getAttribute("aria-pressed") === "true"; b.setAttribute("aria-pressed", String(!on));
    toast(on ? "Quitado de favoritos" : "Guardado en favoritos ♥");
  };
  document.addEventListener("click", wishHandler);

  function mountHome() {
    const g = $("#grid-matcha"); if (!g) return;
    g.innerHTML = D.products.filter((p) => p.home && p.cat !== "outfit").map(cardHTML).join("");
    $("#grid-outfit").innerHTML = D.products.filter((p) => p.home && p.cat === "outfit").map(cardHTML).join("");
    g.insertAdjacentHTML("beforeend", `
      <article class="promo-tile rv">
        <span class="big">+9</span>
        <h3>Packs, suscripción<br>y regalo listo</h3>
        <p>Pack descubrimiento de 3 orígenes, caja de regalo y Ritual Mensual con un 17 % menos.</p>
        <a class="btn btn--pink btn--sm" href="tienda.html">Ver la tienda completa</a>
      </article>`);
    const mom = $("#moment"), hero = D.byId("te-matcha-ceremonial");
    if (mom && $("[data-price]", mom)) {
      $("[data-price]", mom).innerHTML = `${D.money(hero.price)}${hero.compare ? `<s>${D.money(hero.compare)}</s>` : ""}`;
    }
    observeReveals();
  }

  const sortList = (list, sort) => {
    const l = [...list];
    if (sort === "asc") return l.sort((a, b) => a.price - b.price);
    if (sort === "desc") return l.sort((a, b) => b.price - a.price);
    if (sort === "rate") return l.sort((a, b) => b.rating - a.rating);
    if (sort === "new") return l.sort((a, b) => (b.badge === "Nuevo") - (a.badge === "Nuevo"));
    return l;
  };

  function mountShop() {
    const root = $("#shopSections"); if (!root) return;
    let filter = "all", sort = "feat";
    const counts = { all: D.products.length };
    D.categories.forEach((c) => (counts[c.id] = D.products.filter((p) => p.cat === c.id).length));
    const chips = [["all", "Todo"], ...D.categories.map((c) => [c.id, c.shopLabel || c.label])];
    $("#shopChips").innerHTML = chips.map(([id, label]) =>
      `<button class="chip" data-filter="${id}" aria-pressed="${id === "all"}">${label}<span class="count">${counts[id] || 0}</span></button>`).join("");

    root.innerHTML = D.categories.map((c, i) => `
      <section class="sec sec-cat ${i % 2 ? "sec--mint" : "sec--cream"}" id="${c.id}">
        <div class="wrap">
          <header class="sec-head">
            <div class="col rv">
              <span class="eyebrow">0${i + 1} · Colección</span>
              <h2 class="display d-lg">${c.shopLabel || c.label}</h2>
              <p class="lede">${c.note} · ${counts[c.id]} referencias disponibles en almacén de Madrid.</p>
            </div>
            <a class="btn btn--ghost" href="contacto.html" style="flex:none">¿Dudas? Escríbenos</a>
          </header>
          <div class="pgrid" data-grid="${c.id}"></div>
        </div>
      </section>`).join("");

    function draw() {
      let shown = 0;
      D.categories.forEach((c) => {
        const sec = document.getElementById(c.id);
        const on = filter === "all" || filter === c.id;
        sec.classList.toggle("hide", !on);
        const list = sortList(D.products.filter((p) => p.cat === c.id), sort);
        $("[data-grid='" + c.id + "']", root).innerHTML = list.map(cardHTML).join("");
        shown += list.length;
      });
      $("[data-total]").textContent = (filter === "all" ? D.products.length : counts[filter]) + " productos";
      observeReveals();
    }
    $("#shopChips").addEventListener("click", (e) => {
      const b = e.target.closest("[data-filter]"); if (!b) return;
      filter = b.dataset.filter;
      $$("#shopChips .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
      history.replaceState(null, "", "#" + (filter === "all" ? "todo" : filter));
      draw();
    });
    $("#shopSort").addEventListener("change", (e) => { sort = e.target.value; draw(); });
    draw();
    if (location.hash) {
      const h = location.hash.slice(1);
      if (["all", "todo"].includes(h)) { /* nada */ }
      else if (D.categories.some((c) => c.id === h)) { $("#shopChips [data-filter='" + h + "']").click(); }
      else { const t = document.getElementById(h); if (t) { t.scrollIntoView({ block: "center" }); t.animate([{ boxShadow: "0 0 0 0 rgba(255,110,188,.9)" }, { boxShadow: "0 0 0 14px rgba(255,110,188,0)" }], { duration: 900 }); } }
    }
  }

  function mountReviews() {
    const r = $("#reviews"); if (!r) return;
    r.innerHTML = D.reviews.map((v) => `
      <blockquote class="quote rv">
        <span class="stars" aria-label="${v.stars} de 5 estrellas">${"★".repeat(v.stars)}${"☆".repeat(5 - v.stars)}</span>
        <p>“${v.text}”</p>
        <footer><span class="avatar">${v.name[0]}</span> <span><strong>${v.name}</strong> · ${v.meta}</span></footer>
      </blockquote>`).join("");
    observeReveals();
  }

  function mountFaq(sel) {
    const el = $(sel); if (!el) return;
    el.innerHTML = `<div class="acc" data-single="off">` + D.faq.map((f, i) => `
      <div class="acc__item${i === 0 ? " is-open" : ""}">
        <button class="acc__btn" aria-expanded="${i === 0}"><span>${f.q}</span><span class="pm">+</span></button>
        <div class="acc__panel"><div><p>${f.a}</p></div></div>
      </div>`).join("") + `</div>`;
  }

  const recipeCard = (r) => `
    <article class="rcard rv">
      <a class="rcard__media" href="recetas.html#${r.id}" aria-label="${r.name}">
        <img src="${r.img}" alt="${r.name}" loading="lazy">
        <span class="tag rcard__type ${r.type === "guia" ? "tag--sage" : ""}">${r.type === "guia" ? "Guía" : "Receta"}</span>
      </a>
      <div class="rcard__body">
        <h3><a href="recetas.html#${r.id}">${r.name}</a></h3>
        <p>${r.intro}</p>
        <div class="rcard__meta"><span>⏱ <b>${r.time}</b></span><span>Nivel <b>${r.level}</b></span></div>
        <a class="rcard__link" href="recetas.html#${r.id}">Ver ${r.type === "guia" ? "la guía" : "la receta"}</a>
      </div>
    </article>`;

  function mountRecipes() {
    const g = $("#grid-recipes-home");
    if (g) { g.innerHTML = D.recipes.filter((r) => r.type === "receta").slice(0, 3).map(recipeCard).join(""); observeReveals(); }
    if (PAGE !== "recetas") return;
    // ---- página recetas con routing por hash
    const list = $("#recipeList"), detail = $("#recipeDetail");
    const byType = (t) => D.recipes.filter((r) => (t === "all" || t === "all2") ? true : (t === "receta" ? r.type === "receta" : r.type === "guia"));
    let t = "all";
    function drawList() {
      list.innerHTML = byType(t).map(recipeCard).join("");
      observeReveals();
    }
    $("#recipeTabs").addEventListener("click", (e) => {
      const b = e.target.closest("[data-t]"); if (!b) return;
      t = b.dataset.t; $$("#recipeTabs .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
      drawList();
    });
    function renderDetail(id) {
      const r = D.recipeById(id);
      if (!r) { list.parentElement.hidden = false; detail.hidden = true; $("#recipeFilters").hidden = false; return; }
      const rel = D.byId(r.product);
      list.parentElement.hidden = true; $("#recipeFilters").hidden = true; detail.hidden = false;
      detail.innerHTML = `
        <a class="btn btn--ghost btn--sm" href="recetas.html">← Todas las recetas y guías</a>
        <div class="detail">
          <div class="detail__head">
            <span class="row" style="gap:8px"><span class="tag ${r.type === "guia" ? "tag--sage" : ""}">${r.type === "guia" ? "Guía Zenqa" : "Receta Zenqa"}</span><span class="count-lbl">${r.kicker}</span></span>
            <h1 class="display d-lg">${r.name}</h1>
            <div class="row" style="gap:20px"><span class="count-lbl">⏱ ${r.time}</span><span class="count-lbl">Nivel: <b>${r.level}</b></span><span class="count-lbl">${r.ingredients.length} ingredientes</span></div>
            <p class="lede">${r.intro}</p>
          </div>
          <div class="detail__grid">
            <aside class="ing">
              <h3>${r.type === "guia" ? "Lo que vas a necesitar" : "Ingredientes"}</h3>
              <ul>${r.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
              ${rel ? `<div style="margin-top:6px"><h3>Para esto usamos</h3>
                <a href="tienda.html#${rel.id}" style="display:grid;grid-template-columns:58px 1fr;gap:12px;align-items:center">
                  <img src="${rel.img}" alt="" style="width:58px;height:58px;object-fit:cover;border:1px solid var(--ink)">
                  <span><b style="font-family:var(--f-display);text-transform:uppercase;font-size:.82rem">${rel.name}</b><br>
                  <span class="count-lbl">${D.money(rel.price)}</span></span></a></div>` : ""}
            </aside>
            <div class="col gap-lg">
              <figure style="margin:0;border:var(--edge);border-radius:var(--r-lg);overflow:hidden"><img src="${r.img}" alt="${r.name}" style="width:100%;aspect-ratio:16/9;object-fit:cover"></figure>
              <div><h2 class="display d-md" style="margin-bottom:14px">${r.type === "guia" ? "Puntos clave" : "Paso a paso"}</h2>
                <ol class="olist">${r.steps.map((s) => `<li><p>${s}</p></li>`).join("")}</ol></div>
              <div class="tipbox"><span style="font-size:1.2rem">${"🍵"}</span><p><strong>Truco Zenqa.</strong> ${r.tip}</p></div>
              <div class="banner-x banner-x--pink"><div><h3>¿Listo para prepararlo?</h3><p>Ten matcha de verdad en casa: kit completo o solo el bote, con envío gratis desde 35 €.</p></div>
                <a class="btn" href="tienda.html">Ver la tienda <span class="arw">→</span></a></div>
            </div>
          </div>
        </div>`;
      try { window.scrollTo(0, 0); } catch (_) {}
    }
    const route = () => { const id = decodeURIComponent(location.hash.replace("#", "")); renderDetail(D.recipeById(id) ? id : null); };
    window.addEventListener("hashchange", route);
    drawList(); route();
    const rel = $("#recipeRelated");
    if (rel) rel.innerHTML = ["kit-completo", "te-matcha-ceremonial", "taza-matcha", "vasos-cristal", "tetera-cristal", "botella-cristal"].map((id) => {
      const p = D.byId(id);
      return `<a href="tienda.html#${p.id}"><img src="${p.img}" alt=""><span><b>${p.name}</b><span>${D.money(p.price)} · ${p.unit}</span></span></a>`;
    }).join("");
  }

  /* marquee reutilizable para bandas rosas */
  function band(sel, phrases, cls) {
    const el = $(sel); if (!el) return;
    el.className = "band " + (cls || "");
    const g = '<div class="band__group">' + phrases.map((p) => `<span class="band__txt">${p}</span><svg class="band__sep" viewBox="0 0 24 24" fill="#14301E" aria-hidden="true"><path d="M20 3c0 9-5.5 14-12 14-1.6 0-3-.3-4-1 1-7 6-12 13-13.5l3-.5Z"/></svg>`).join("") + "</div>";
    el.innerHTML = '<div class="band__track">' + g + g + "</div>";
  }
  band("#band-marquee", [
    "<i>Envíos gratis desde 35 €</i>", "Descarga la guía gratuita", "Molido en piedra en Uji",
    "Cosecha de primavera", "Prepara tu momento matcha", "<i>30 días de garantía</i>"
  ]);
  ZENQA.band = band;
  band("#band-marquee-2", ["Matcha ceremonial", "Grado culinario", "Kits completos", "Cristalería", "Camisetas y tote bags", "Suscripción mensual"], "band--ink");

  /* mount por página */
  mountHome(); mountShop(); mountReviews(); mountRecipes();
  mountFaq("#faq"); mountFaq("#faq-contact");

  /* enlaces internos #lead desde el footer/menú */
  $$('a[href="#lead"]').forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); openBox("is-modal"); }));

  /* deep-link a secciones con offset del nav */
  if (location.hash && !D.recipeById(decodeURIComponent(location.hash.slice(1)))) {
    const t = document.querySelector(location.hash);
    if (t && !["tienda"].includes(PAGE)) setTimeout(() => window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 110, behavior: "smooth" }), 120);
  }
})();
