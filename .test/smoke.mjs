import { JSDOM, VirtualConsole } from "jsdom";
const BASE = "http://127.0.0.1:8080/";
const pages = {
  "index.html": (d) => {
    const q = (s) => d.querySelectorAll(s);
    assert(q(".promo .promo__item").length >= 3, "promo repetida en marquesina");
    assert(/Envíos gratis a partir de 35/i.test(d.querySelector(".promo").textContent), "texto único del banner rosa");
    assert(d.querySelector(".promo").textContent.replace(/\s+/g," ").trim().split("  ").length, "banner");
    assert(q("#nav .nav__link").length === 4, "nav = 4 enlaces (es " + q("#nav .nav__link").length + ")");
    assert(q("#nav .nav__link[aria-current=page]").length === 1, "home marcada como actual");
    assert(q("#grid-matcha .card").length === 7, "grid matcha = 7 productos (es " + q("#grid-matcha .card").length + ")");
    assert(q("#grid-outfit .card").length === 6, "grid outfit = 6 (es " + q("#grid-outfit .card").length + ")");
    assert(!/merchandising/i.test(d.querySelector("#tienda").textContent), "sin la palabra merchandising en home");
    assert(q("#reviews .quote").length === 6, "6 reseñas");
    assert(q("#band-marquee .band__txt").length > 6, "marquee rosa construido");
    assert(q("#grid-recipes-home .rcard").length === 3, "3 recetas en home");
    assert(/Convierte 60 segundos/.test(d.querySelector("#sesenta").textContent), "sección verde");
    assert(q(".foot .foot__legal a").length >= 6, "footer con avisos legales (" + q(".foot .foot__legal a").length + ")");
    assert(d.querySelector(".foot img.brand__mark"), "logo en el footer");
    assert(d.querySelector("#lead .lead"), "lead magnet en home");
  },
  "tienda.html": (d) => {
    const q = (s) => d.querySelectorAll(s);
    assert(q(".sec-cat").length === 4, "4 colecciones");
    assert(q("#shopChips .chip").length === 5, "chips: todo + 4");
    assert(q("#grid-shop, .pgrid").length >= 4, "grids por colección");
    assert(q(".card").length === 16, "16 productos en tienda (es " + q(".card").length + ")");
    assert(/Merchandising/.test(d.body.textContent), "etiqueta merchandising en tienda");
    assert(q("#lead .lead").length === 1, "lead magnet en tienda");
  },
  "prepararlo.html": (d) => {
    const t = d.body.textContent;
    ["Energía limpia","Especificaciones","Cuatro pasos","Recetas","café","Arranca con"].forEach(k =>
      assert(new RegExp(k,"i").test(t), "sección: " + k));
    assert(d.querySelectorAll(".stepnum").length >= 8, "pasos numerados (" + d.querySelectorAll(".stepnum").length + ")");
    assert(d.querySelectorAll(".cmp").length === 1, "tabla matcha vs café");
    assert(/70-80|70 °C|70-75/.test(t), "temperaturas del agua");
  },
  "recetas.html": (d) => {
    assert(d.querySelectorAll("#recipeList .rcard").length === 13, "13 recetas y guías (es " + d.querySelectorAll("#recipeList .rcard").length + ")");
    assert(d.querySelectorAll("#recipeRelated a").length === 6, "6 productos relacionados");
  },
  "nosotros.html": (d) => {
    const t = d.body.textContent;
    ["Uji","sombra","molienda","piedra","comercio","garantía"].forEach(k => assert(new RegExp(k,"i").test(t), "nosotros menciona " + k));
    assert(d.querySelectorAll(".timeline > div").length === 5, "timeline 5 hitos");
  },
  "contacto.html": (d) => {
    assert(d.querySelector("form[data-contact]"), "formulario de contacto");
    assert(d.querySelectorAll("#faq .acc__item").length === 6, "FAQ 6 preguntas");
    assert(/legal\.html#privacidad/.test(d.querySelector("form[data-contact]").innerHTML), "checkbox de privacidad enlazado");
  },
  "legal.html": (d) => {
    ["aviso","privacidad","cookies","condiciones","envios","devoluciones","consumo"].forEach(id =>
      assert(d.getElementById(id), "sección legal #" + id));
  }
};
function assert(cond, msg) { if (!cond) throw new Error("FAIL: " + msg); }

let bad = 0;
for (const [file, test] of Object.entries(pages)) {
  const errs = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", (e) => { const m = e.message || String(e); if (!/Not implemented/.test(m)) errs.push("jsdomError: " + m); });
  vc.on("error", (m) => errs.push("console.error: " + m));
  const dom = await JSDOM.fromURL(BASE + file, { runScripts: "dangerously", resources: "usable", pretendToBeVisual: true, virtualConsole: vc });
  await new Promise((r) => setTimeout(r, 700));
  const d = dom.window.document;
  let note = "";
  try { await test(d); } catch (e) { errs.push(e.message); }
  // interacciones: añadir al carrito + buscador + filtros + receta
  try {
    const add = d.querySelector("[data-add]");
    if (add) { add.click(); await new Promise((r) => setTimeout(r, 60));
      const n = d.querySelector("[data-count]").textContent;
      if (n !== "1") errs.push("carrito no suma (es " + n + ")");
      d.querySelector('[data-act="cart"]').click();
      if (!/Subtotal|subtotal/.test(d.querySelector("#cart").textContent)) errs.push("drawer sin resumen");
      if (!d.querySelector(".citem")) errs.push("drawer sin líneas de producto");
      if (!/Envío gratis conseguido|para el envío gratis/.test(d.querySelector("#shipBar").textContent)) errs.push("barra de envío gratis ausente");
    }
    if (file === "tienda.html") {
      d.querySelector("[data-filter=matcha]").click();
      await new Promise((r) => setTimeout(r, 60));
      const visible = [...d.querySelectorAll(".sec-cat")].filter((s) => !s.classList.contains("hide"));
      if (visible.length !== 1) errs.push("filtro deja " + visible.length + " secciones");
    }
    if (file === "recetas.html") {
      dom.window.location.hash = "#iced-matcha-oat-latte";
      await new Promise((r) => setTimeout(r, 200));
      const det = d.querySelector("#recipeDetail");
      if (det.hidden) errs.push("la receta no abre su detalle");
      if (det.querySelectorAll(".olist li").length !== 5) errs.push("pasos de receta = " + det.querySelectorAll(".olist li").length);
    }
    if (file === "index.html") {
      const form = d.querySelector('[data-news="home"]');
      form.querySelector('input[type=email]').value = "nope";
      form.dispatchEvent(new dom.window.Event("submit", { bubbles: true, cancelable: true }));
      if (form.querySelector("[data-err]").hidden) errs.push("validación: acepta email inválido");
      form.querySelector('input[type=email]').value = "hola@zenqa.com";
      form.querySelector('input[type=checkbox]').checked = true;
      form.dispatchEvent(new dom.window.Event("submit", { bubbles: true, cancelable: true }));
      if (!form.querySelector("[data-err]").hidden) errs.push("validación: rechaza email válido");
    }
  } catch (e) { errs.push("interacción: " + e.message); }

  const clean = errs.filter((e, i, a) => a.indexOf(e) === i);
  if (clean.length) bad++;
  console.log((clean.length ? "✗ " : "✓ ") + file.padEnd(16) + (clean.length ? "\n    " + clean.join("\n    ") : note));
  dom.window.close();
}
console.log(bad ? "\n" + bad + " página(s) con fallos" : "\nTODO OK");
process.exit(bad ? 1 : 0);
