# ZENQA LIFE · Preview de tienda (matcha)

Prototipo estático de una tienda de té matcha pensada para migrarse a **Shopify** (tema propio, con la filosofía de Horizon / Atelier / Pitch / Fabric: bloques grandes, tipografía Display pesada, mucho aire y componentes reutilizables).

Competencia directa analizada: `matchaflix.com` (catálogo enorme, precios "desde", packs y urgencia).
Base de copy y estructura: `zenqalife.roadshop.online`.

---

## Ver el proyecto

```bash
cd zenqa-life
python3 -m http.server 8080 --bind 0.0.0.0
# → http://localhost:8080/index.html
```

No hay build, no dependencias, no red: todas las tipografías y assets son locales.

## Páginas

| Archivo | Página | Notas |
|---|---|---|
| `index.html` | **Home** | banner rosa + hero `#MATCHA VIBES` + tu momento matcha + marquee + kit + grid 3 col + banda verde 60 s + reseñas + recetas + historia + lead magnet + RRSS/newsletter |
| `tienda.html` | **Tienda** | 4 colecciones filtrables (té matcha / kits / tazas y vasos / merchandising), orden por precio y valoración, comparativa ceremonial vs culinario |
| `prepararlo.html` | **Cómo prepararlo** | 01 energía limpia · especificaciones · 4 pasos → 02 recetas y guías → 03 matcha vs café → 04 arranca con energía |
| `recetas.html` | **Recetas y guías** (subpágina de "Cómo prepararlo") | 13 contenidos (8 recetas + 5 guías) con detalle por `#/id`, filtros y productos relacionados |
| `nosotros.html` | **Nosotros** | manifiesto, 6 claves de calidad (Uji, sombreado, molienda en piedra…), cifras, timeline, valores, prensa |
| `contacto.html` | **Contacto** (subpágina de "Nosotros") | formulario validado + canales + horario + FAQ |
| `legal.html` | **Textos legales** | aviso legal, condiciones, envíos, devoluciones, privacidad, cookies, tallas, consumidor, reclamaciones |

El **header (banner rosa + menú) y el footer son idénticos en todas las páginas**: se inyectan desde `assets/js/app.js` (`header()` / `footer()`), así que un cambio se propaga a las 7 páginas.

## Sistema de diseño

*Paleta tomada literalmente del logo y de las referencias:*

```
--pink   #FF6EBC   (rosa del logotipo / referencias)
--sage   #A3B47E   (verde salvia del logo)
--forest #14301E   (verde oscuro, fondos y sombras)
--cream  #FAF9F2   (blanco roto / beige)
--mint   #F0F4E3   (beige verdoso de secciones)
--ink    #101410   (negro, bordes de 2 px)
```

Tipografías auto-hospedadas en `assets/fonts/` (woff2 subset latin): **Archivo Black** (display), **Inter** (texto), **Space Grotesk** (etiquetas/mono).
Lenguaje visual: bordes negros de 2 px + sombras duras desplazadas, titulares rotados con sombra verde (como tu tercera imagen), subrayado tipo rotulador rosa, bandas en marquesina y revelados al hacer scroll. Respeta `prefers-reduced-motion`.

## Datos y catálogo

Todo el catálogo, recetas, reseñas y FAQ viven en **`assets/js/data.js`** (una sola fuente de verdad) y se renderizan con `app.js`.
Mapeo directo a Shopify:

| Este prototipo | Shopify |
|---|---|
| `ZENQA.products` | `Collection` / `Product` (título, precio, `compare_at_price`, etiqueta, reseñas) |
| `ZENQA.categories` | Colecciones: `te-matcha`, `kits-de-preparacion`, `tazas-y-vasos`, `merchandising` |
| `ZENQA.recipes` | Blog `Recetas y guías` (article + tag `receta` / `guia`) |
| `ZENQA.reviews` | App de reseñas (Judge.me / Loox) |
| `#band-marquee`, `#grid-matcha`, `.lead` | Secciones del tema (`announcement-bar`, `featured-collection`, `newsletter`) |
| carrito lateral + barra de envío gratis | Cart drawer nativo de Shopify (`/cart`, `cart.item_count`) |

## Carrito, buscador y captación de leads (demo)

* Carrito con `localStorage`, cantidades, subtotal, barra de progreso "te faltan X € para el envío gratis" y checkout simulado.
* Buscador overlay (`/` no, icono de lupa) sobre productos **y** recetas.
* Lead magnet: modal + píldora flotante (aparece tras 620 px de scroll y se puede cerrar), y **descarga real** del PDF en `assets/downloads/guia-matcha-zenqa.pdf`. Copy del formulario adaptado en home, tienda, cómo prepararlo, recetas, nosotros y contacto.

## Tests

```bash
cd zenqa-life && npm i jsdom          # smoke test funcional de las 7 páginas
node .test/smoke.mjs                  # 21 aserciones + interacciones (carrito, filtros, validaciones, routing de recetas)
npm i puppeteer                       # opcional: capturas de pantalla reales
node .test/shot.mjs index.html:d      # → shots/index-d-*.png (1440x900, avisa de 404 y errores de consola)
```

## Pendientes antes de publicar (importante)

1. **Fotos**: son material de generación/marcador de posición. Sustitúyelas por las fotos reales de producto (mismo nombre de archivo y todo sigue funcionando). Las imágenes miden 1000 px cuadrados en `.jpg` comprimido.
2. **Datos legales**: NIF, dirección, textos de `legal.html` y precios son de ejemplo. Hay que revisarlos con asesoría.
3. **Checkout, cuentas y suscripciones**: la suscripción mensual es una tarjeta de producto; en Shopify iría con Recharge/Shop Subscriptions.
4. **Fichas de producto**: el brief pedía 4 páginas, así que cada tarjeta enlaza a su bloque dentro de `tienda.html`. Para producción hay que crear `products/*.html` (o las URLs de Shopify) con galería, variaciones y reseñas.
5. Idiomas/divisas: todo está en es-ES y EUR con formato `Intl`.
