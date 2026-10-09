/* ============================================================
   ZENQA LIFE · Catálogo y contenidos
   Estructura pensada para mapear 1:1 a Shopify:
   products -> Collection/Product, recipes -> Article/Blog
   ============================================================ */
window.ZENQA = window.ZENQA || {};

ZENQA.brand = {
  name: "ZENQA LIFE",
  claim: "Te matcha vibes",
  freeShipping: 35,
  email: "hola@zenqalife.com",
  phone: "+34 611 00 22 33",
  city: "Uji (JP) · Madrid (ES)",
  social: [
    { id: "instagram", label: "Instagram", handle: "@zenqalife", url: "https://www.instagram.com/" },
    { id: "tiktok", label: "TikTok", handle: "@zenqalife", url: "https://www.tiktok.com/" },
    { id: "youtube", label: "YouTube", handle: "Zenqa Life", url: "https://youtube.com/@" },
    { id: "pinterest", label: "Pinterest", handle: "/zenqalife", url: "https://es.pinterest.com/" },
    { id: "threads", label: "Threads", handle: "@zenqalife", url: "https://www.threads.com/"}
  ]
};

ZENQA.categories = [
  { id: "matcha", label: "Té matcha", shopLabel: "Té matcha", note: "Grado ceremonial y grado culinario, molido en piedra y envasado en oscuridad." },
  { id: "kits", label: "Kits y preparación", shopLabel: "Kits de preparación", note: "Chawan, chasen, chashaku, tamizador y todo lo que hace falta para no improvisar." },
  { id: "vasos", label: "Tazas, vasos y cristalería", shopLabel: "Tazas, vasos y cristalería", note: "Cerámica para el ritual y cristal para que se vean las capas." },
  { id: "outfit", label: "Lo nuestro", shopLabel: "Merchandising", note: "Camisetas, sudaderas, tote bags y vasos para llevar el verde a la calle." }
];

/* ---------- PRODUCTOS ---------- */
ZENQA.products = [
  {
    id: "te-matcha-culinario",
    name: "Té Matcha · Grado culinario",
    cat: "matcha",
    kicker: "Cocina, latte e higiene intensa",
    price: 21.95, compare: 24.95, unit: "30 g · 30 raciones",
    rating: 4.7, reviews: 412, badge: "Ideal latte",
    img: "assets/img/p-culinary.jpg",
    home: true, stock: 60,
    short: "verde valiente, cuerpo marcado y un amargor noble que aguanta la leche vegetal, el hielo y el horno.",
    bullets: ["Perfecto para matcha latte, smoothies y repostería", "Molido en piedra granítica, 40 g/h", "Sin azúcar, sin aromas, sin mezclas"]
  },
  {
    id: "te-matcha-ceremonial",
    name: "Té Matcha · Grado ceremonial",
    cat: "matcha",
    kicker: "Uji premium · cosecha de primavera",
    price: 29.95, compare: null, unit: "54 g · 1.9 oz",
    rating: 4.9, reviews: 1284, badge: "Best seller",
    img: "assets/img/p-ceremonial.jpg",
    home: true, stock: 34,
    short: "Umami dulce, color verde esmeralda y una textura sedosa que se sostiene en la espuma. Para tomar solo.",
    bullets: ["Hojas cultivadas 21 días a la sombra", "Perfil dulce, vegetal y sin astringencia", "L-teanina alta: foco sin nervios"]
  },
  {
    id: "tetera-cristal",
    name: "Tetera de cristal con infusor",
    cat: "vasos",
    kicker: "Borosilicato 750 ml",
    price: 27.95, compare: null, unit: "Apta para inducción suave",
    rating: 4.6, reviews: 96, badge: null,
    img: "assets/img/p-teapot.jpg",
    home: true, stock: 41,
    short: "Ves el punto exacto de infusión y sirves sin sobres: el filtro de acero se bloquea al inclinar.",
    bullets: ["Cristal borosilicato 3.3 libre de plomo", "Filtro de acero inoxidable de malla fina", "Aro de silicona verde para el agarre"]
  },
  {
    id: "taza-matcha",
    name: "Taza Matcha Zenqa",
    cat: "vasos",
    kicker: "Cerámica esmaltada · 320 ml",
    price: 18.95, compare: null, unit: "Exterior verde bosque / interior rosa",
    rating: 4.8, reviews: 244, badge: "Nuevo",
    img: "assets/img/p-chawan.jpg",
    home: true, stock: 55,
    short: "Borde ancho para batir en W sin salpicar y un interior rosa que hace que la espuma se vea aún más verde.",
    bullets: ["Base pesada: no se mueve al batir", "Apta lavavajillas y microondas", "Esmalte mate hecho a mano"]
  },
  {
    id: "botella-cristal",
    name: "Botella de cristal con filtro",
    cat: "kits",
    kicker: "Cold brew on the go · 600 ml",
    price: 24.95, compare: null, unit: "Tapa de bambú",
    rating: 4.5, reviews: 78, badge: null,
    img: "assets/img/p-bottle.jpg",
    home: true, stock: 30,
    short: "Matcha en frío ocho horas: metes el filtro, llenas, agitas y te lo llevas sin té molido flotando.",
    bullets: ["Filtro extraíble para hoja entera o matcha", "Funda de silicona rosa antigolpes", "Cierre hermético 100 %"]
  },
  {
    id: "juego-tetera-tazas",
    name: "Juego de tetera y dos tazas",
    cat: "kits",
    kicker: "Ritual para dos · 5 piezas",
    price: 39.95, compare: 46.85, unit: "Tetera 550 ml + 2 tazas 150 ml",
    rating: 4.7, reviews: 63, badge: "Para regalar",
    img: "assets/img/p-set.jpg",
    home: true, stock: 22,
    short: "La pausa compartida: una tetera de cristal, dos tazas sin asa y una caja que ya viene lista para regalar.",
    bullets: ["Caja de regalo incluida con tarjeta en blanco", "Cristal transparente para disfrutar el color", "Se limpia en 30 segundos"]
  },
  {
    id: "kit-completo",
    name: "Kit completo de preparación",
    cat: "kits",
    kicker: "Todo lo que necesitas, en una caja",
    price: 79.95, compare: 94.8, unit: "6 piezas + 30 g de matcha ceremonial",
    rating: 4.9, reviews: 371, badge: "Ahorra 15 %",
    img: "assets/img/p-kit.jpg",
    home: true, stock: 18,
    short: "Chawan, chasen de 100 púas, chashaku, tamizador, espumador y 30 g de matcha ceremonial. Sales de cero a espuma perfecta en el primer intento.",
    bullets: ["Bowl cerámico + batidor de bambú artesanal", "Tamizador fino: cero grumos", "Espumador para latte en 20 segundos"]
  },
  {
    id: "camiseta-vibes",
    name: "Camiseta Te Matcha Vibes",
    cat: "outfit",
    kicker: "Algodón orgánico 220 g",
    price: 24.95, compare: null, unit: "Unisex · XS a XXL",
    rating: 4.6, reviews: 89, badge: null,
    img: "assets/img/m-tee.jpg",
    home: true, stock: 74,
    short: "Serigrafía en rosa chicle con sombra verde bosque. Corte holgado, tacto lavado, cuello reforzado.",
    bullets: ["Algodón 100 % orgánico GOTS", "Tinta al agua, sin PVC", "Unisex, talla de S a XXL"]
  },
  {
    id: "sudadera-energy",
    name: "Sudadera Pink Energy",
    cat: "outfit",
    kicker: "Felpa perchada 380 g",
    price: 44.95, compare: null, unit: "Interior afelpado",
    rating: 4.8, reviews: 132, badge: "Top ventas",
    img: "assets/img/m-hoodie.jpg",
    home: true, stock: 26,
    short: "El rosa que se ve desde el otro lado de la calle. Bordado pequeño en el pecho y capucha doble capa.",
    bullets: ["380 g, cálida sin ser pesada", "Bolsillo canguro con refuerzo", "Bordado ZENQA en verde bosque"]
  },
  {
    id: "tote-matcha",
    name: "Tote Bag Matcha On Tour",
    cat: "outfit",
    kicker: "Lona de algodón 100 %",
    price: 16.95, compare: null, unit: "40 × 37 cm · asas largas",
    rating: 4.7, reviews: 205, badge: null,
    img: "assets/img/m-tote.jpg",
    home: true, stock: 120,
    short: "Cabe el kit entero, el portátil y media frutería. Asas largas para llevarla al hombro en modo supervivencia.",
    bullets: ["Costuras laterales: no es un saco sin forma", "Resiste 15 kg", "Se lava y el estampado no se va"]
  },
  {
    id: "tazas-personalizadas",
    name: "Pack 2 tazas personalizadas",
    cat: "outfit",
    kicker: "Con tu nombre o tu mantra",
    price: 29.95, compare: null, unit: "2 × 350 ml",
    rating: 4.9, reviews: 148, badge: "Personalizable",
    img: "assets/img/m-mug.jpg",
    home: true, stock: 40,
    short: "Escribe lo que quieras en el borde interior: solo tú lo verás mientras bates. Cerámica de taller propio.",
    bullets: ["Hasta 18 caracteres por taza", "Grabado a mano alzada, no pegatina", "Listas en 48 h"]
  },
  {
    id: "vaso-termico",
    name: "Vaso térmico de cristal doble pared",
    cat: "outfit",
    kicker: "450 ml · frío 6 h / caliente 2 h",
    price: 26.95, compare: null, unit: "Tapa antigoteo",
    rating: 4.6, reviews: 97, badge: null,
    img: "assets/img/m-thermal.jpg",
    home: true, stock: 48,
    short: "Las capas se ven perfectas, la mesa no se mancha y no te quemas la mano. El básico de tu mesa de trabajo.",
    bullets: ["Doble pared: no condensa por fuera", "Anillo de silicona rosa antideslizante", "Cabe en el portavasos del coche"]
  },
  {
    id: "vasos-cristal",
    name: "Pack 3 vasos de cristal",
    cat: "outfit",
    kicker: "Recetas con capas · 350 ml",
    price: 22.95, compare: null, unit: "Base rosa ahumada",
    rating: 4.5, reviews: 54, badge: null,
    img: "assets/img/m-glass.jpg",
    home: true, stock: 66,
    short: "Diseñados para strawberry cloud, tonic y cualquier cosa que merezca la pena fotografiar.",
    bullets: ["Cristal sodocálcico pulido a fuego", "Base teñida en rosa", "Aptos para lavavajillas"]
  },
  {
    id: "pack-descubrimiento",
    name: "Pack Descubrimiento · 3 orígenes",
    cat: "matcha",
    kicker: "Uji · Nishio · Kagoshima",
    price: 49.95, compare: 59.85, unit: "3 × 30 g + guía de cata",
    rating: 4.8, reviews: 176, badge: "Para probar",
    img: "assets/img/p-pack3.jpg",
    home: false, stock: 25,
    short: "Tres perfiles, tres formas de entender el umami. Con una ficha de cata para que descubras cuál repites.",
    bullets: ["Catas guiadas de 20 minutos", "Ahorras 9,90 € frente a comprarlos sueltos", "El mejor regalo si no sabes qué regalar"]
  },
  {
    id: "pack-regalo",
    name: "Pack Regalo Matcha Ritual",
    cat: "kits",
    kicker: "Listo para entregar",
    price: 64.95, compare: null, unit: "Caja rígida + lazo",
    rating: 4.9, reviews: 88, badge: "Envío en 24 h",
    img: "assets/img/p-set.jpg",
    home: false, stock: 30,
    short: "Matcha ceremonial, chasen, chawan y dos tazas en una caja que ya parece cara antes de abrirla.",
    bullets: ["Tarjeta manuscrita incluida", "Sin precio impreso en la caja", "Elegible para envío en 24 h"]
  },
  {
    id: "suscripcion-matcha",
    name: "Suscripción Ritual Mensual",
    cat: "matcha",
    kicker: "Matcha fresco cada 30 días",
    price: 24.95, compare: 29.95, unit: "/mes · cancela cuando quieras",
    rating: 4.9, reviews: 341, badge: "-17 %",
    img: "assets/img/p-ceremonial.jpg",
    home: false, stock: 999,
    short: "Cada mes molienda nueva y te llega en 48 h desde tueste. Precio de socio y acceso a lotes limitados de cosecha.",
    bullets: ["Envío gratis siempre", "Pausa o cambia de grado en 1 clic", "Acceso anticipado a cosechas"]
  }
];

/* ---------- RECETAS Y GUÍAS ---------- */
ZENQA.recipes = [
  {
    id: "iced-matcha-oat-latte", type: "receta",
    name: "Iced Matcha Oat Latte",
    time: "3 min", level: "Fácil", kicker: "El clásico que no falla",
    img: "assets/img/r-iced-latte.jpg",
    intro: "Hielo, leche de avena barista y un matcha concentrado. La textura es de cafetería de especialidad, el esfuerzo es de tres minutos.",
    ingredients: ["2 g de matcha ceremonial (1 chashaku colmado)", "40 ml de agua a 75 °C", "180 ml de leche de avena barista", "Hielo hasta arriba", "1/2 cdta de sirope de arce (opcional)"],
    steps: [
      "Tamiza el matcha directamente en el vaso donde lo vayas a batir.",
      "Añade el agua a 75 °C y bate en W con el chasen 15 segundos hasta microespuma.",
      "Endulza ahora, con el concentrado caliente: se integra infinitamente mejor.",
      "Llena otro vaso con hielo y vierte la leche de avena dejándola caer contra una cuchara.",
      "Sube el matcha por encima. No remuevas: primero se mira."
    ],
    tip: "Si la capa se mezcla, tu hielo estaba aguado. Usa dos o tres cubitos grandes.",
    product: "te-matcha-ceremonial"
  },
  {
    id: "strawberry-cloud-matcha", type: "receta",
    name: "Strawberry Cloud Matcha",
    time: "4 min", level: "Fácil", kicker: "La que rompe Instagram",
    img: "assets/img/r-strawberry.jpg",
    intro: "Fresa natural en el fondo, leche montada en nube y verde intenso arriba. Tres capas, contraste de sabor y cero azúcar refinada añadida.",
    ingredients: ["2 g de matcha culinario o ceremonial", "30 ml de agua a 75 °C", "5 fresas maduras", "120 ml de leche entera o de avena", "Hielo", "1 cdta de miel"],
    steps: [
      "Tritura las fresas con la miel hasta obtener un coulis con trozos.",
      "Cubre el fondo del vaso con el coulis y añade hielo hasta 3/4.",
      "Vierte la leche fría montada 10 segundos con el espumador.",
      "Bate el matcha con el agua caliente y viértelo por último sobre la nube.",
      "Sirve con pajita ancha y cuchara larga: hay que comerse también la fresa."
    ],
    tip: "Para un rosa más pastel, añade 1 cdta de yogur griego al coulis.",
    product: "vasos-cristal"
  },
  {
    id: "sparkling-matcha-yuzu-tonic", type: "receta",
    name: "Sparkling Matcha Yuzu Tonic",
    time: "2 min", level: "Fácil", kicker: "Aperitivo funcional",
    img: "assets/img/r-yuzu.jpg",
    intro: "Burbuja, cítrico y umami en el mismo vaso. Sustituye al gin-tonic en las comidas de trabajo sin llegar apagada a las seis.",
    ingredients: ["1,5 g de matcha ceremonial", "20 ml de agua a 70 °C", "40 ml de zumo de yuzu o lima + naranja", "120 ml de tónica seca muy fría", "Hielo", "Piel de yuzu"],
    steps: [
      "Bate el matcha con el agua caliente hasta que quede una pasta con brillo.",
      "En una coctelera, mezcla el matcha, el zumo y la tónica con un par de hielos.",
      "Sirve colado sobre hielo nuevo en copa de balón.",
      "Expresa la piel de yuzu sobre la superficie y déjala caer dentro."
    ],
    tip: "Sustituye la tónica por agua con gas + 1 cdta de sirope para la versión sin burbuja amarga.",
    product: "botella-cristal"
  },
  {
    id: "matcha-latte-cremoso", type: "receta",
    name: "Matcha Latte Cremoso",
    time: "2 min", level: "Fácil", kicker: "Sustituto del cappuccino",
    img: "assets/img/r-matcha-latte.jpg",
    intro: "La versión caliente de siempre. Con leche a 60 °C y espuma fina, no necesita azúcar y no se vuelve amarga al enfriarse.",
    ingredients: ["2 g de matcha", "60 ml de agua a 75 °C", "180 ml de leche", "Canela o vainilla (opcional)"],
    steps: [
      "Tamiza y bate el matcha con el agua hasta doble volumen de espuma.",
      "Calienta la leche y texturízala 8 segundos con el espumador.",
      "Vierte la leche en hilo sobre el matcha, haciendo círculos.",
      "Termina con una pizca de canela rallada en el momento."
    ],
    tip: "Nunca pases la leche de 65 °C: quema la lactosa y mata el umami del matcha.",
    product: "taza-matcha"
  },
  {
    id: "usucha-tradicional", type: "receta",
    name: "Usucha tradicional",
    time: "1 min", level: "Medio", kicker: "Como en Uji",
    img: "assets/img/p-chawan.jpg",
    intro: "Solo matcha, agua y muñeca. Es la receta que te dice si tu té es de verdad ceremonial: no esconde nada.",
    ingredients: ["1,5 g de matcha ceremonial", "70 ml de agua a 70-75 °C"],
    steps: [
      "Calienta el chawan con agua caliente y sécalo bien: la temperatura importa.",
      "Tamiza el matcha dentro del bowl con el koseru.",
      "Añade el agua en tres veces y bate en W rápida, sin presionar las púas contra la cerámica.",
      "Cuando la espuma sea fina y sin burbujas grandes, deja de batir. Bebe en tres tragos."
    ],
    tip: "Bate 15 segundos como máximo: más, y rompes la espuma e introduces amargor.",
    product: "kit-completo"
  },
  {
    id: "cold-brew-matcha", type: "receta",
    name: "Cold Brew Matcha",
    time: "5 min + 6 h", level: "Muy fácil", kicker: "Lo preparas el domingo",
    img: "assets/img/p-bottle.jpg",
    intro: "Sin batidor, sin temperatura, sin excusas. Cuatro horas de nevera y te sale un té dulce, limpio y con muchísimo color.",
    ingredients: ["4 g de matcha culinario o ceremonial", "500 ml de agua fría", "Rueda de limón"],
    steps: [
      "Pon el matcha en la botella con el filtro, añade el agua fría.",
      "Agita 20 segundos enérgicamente con la tapa puesta.",
      "Deja reposar de 6 a 8 horas en la nevera (no más: amarga).",
      "Agita de nuevo, sirve sobre hielo y añade la rueda de limón."
    ],
    tip: "En botella oscura y consumida en 24 h: el matcha odia la luz y el oxígeno.",
    product: "botella-cristal"
  },
  {
    id: "matcha-affogato", type: "receta",
    name: "Matcha Affogato",
    time: "2 min", level: "Fácil", kicker: "Postre de gente lista",
    img: "assets/img/m-glass.jpg",
    intro: "Helado de vainilla ahogado en matcha concentrado. Más rico que un café, más amargo que un helado, listo en cuanto abres el congelador.",
    ingredients: ["2 bolas de helado de vainilla de calidad", "2 g de matcha ceremonial", "30 ml de agua a 75 °C", "1 cdta de sirope de arce", "Almendra laminada"],
    steps: [
      "Bate el matcha con el agua y el sirope hasta obtener un concentrado espeso.",
      "Pon el helado en el vaso y deja 30 segundos a temperatura ambiente.",
      "Vierte el matcha por encima delante de alguien para que te agradezca el gesto.",
      "Corona con almendra laminada tostada."
    ],
    tip: "Con helado de coco queda apto para veganos y aún más tropical.",
    product: "vaso-termico"
  },
  {
    id: "matcha-banana-smoothie", type: "receta",
    name: "Matcha Banana Protein Smoothie",
    time: "3 min", level: "Muy fácil", kicker: "Post-entreno",
    img: "assets/img/p-culinary.jpg",
    intro: "Plátano congelado, proteína neutra y matcha. Sabe a batido de banana, se toma como un batido de banana y te mantiene enfocada dos horas.",
    ingredients: ["1 plátano maduro congelado en trozos", "250 ml de leche de avena", "2 g de matcha culinario", "20 g de proteína vegetal neutra", "1 cdta de mantequilla de cacahuete", "Hielo"],
    steps: [
      "Disuelve el matcha con 50 ml del líquido templado antes de batir (adiós grumos verdes).",
      "Añade todo lo demás al vaso y tritura 45 segundos.",
      "Ajusta textura con más leche si queda muy espeso.",
      "Sirve en vaso alto y bebe con pajita gruesa."
    ],
    tip: "Cambia el plátano por 1/2 taza de mango para un perfil más tropical y menos dulce.",
    product: "te-matcha-culinario"
  },
  {
    id: "guia-temperatura", type: "guia",
    name: "La temperatura del agua lo cambia todo",
    time: "4 min lectura", level: "Guía", kicker: "El error nº1",
    img: "assets/img/hero-matcha.jpg",
    intro: "Agua hirviendo = catequinas y cafeína disparadas = matcha amargo y astringente. Con dos minutos de espera en el hervidor cambias por completo la taza.",
    ingredients: [],
    steps: [
      "70 °C para matcha ceremonial: saca el punto dulce y el umami.",
      "75-80 °C para culinario y latte: más cuerpo para aguantar la leche.",
      "Nunca reutilices agua recién hervida sobre hojas del mismo día: quemas el perfil.",
      "Truco sin termómetro: hierve y espera 2 minutos en una jarra de cristal.",
      "Si te ha salido amargo, no tires el té: añade hielo y leche, se disimula y no se desperdicia."
    ],
    tip: "Un termómetro de cocina cuesta 8 € y te arregla la vida. En serio.",
    product: "tetera-cristal"
  },
  {
    id: "guia-chasen", type: "guia",
    name: "Cuida tu chasen como un profesional",
    time: "3 min lectura", level: "Guía", kicker: "Que te dure años",
    img: "assets/img/p-kit.jpg",
    intro: "Un batidor de bambú mal tratado se deforma en un mes y luego la espuma no sale. No es el té, es el chasen.",
    ingredients: [],
    steps: [
      "Nunca lo seques al sol ni apoyado sobre las púas: se abren y muere la espuma.",
      "Límpialo solo con agua tibia y sin jabón: el bambú absorbe todo.",
      "Sacúdelo con la muñeca hacia abajo y déjalo sobre una rejilla, púas al aire.",
      "Uso recomendado: 10 segundos de batido, no cuatro minutos de enfado.",
      "Cada mes, 20 segundos en agua a 60 °C con el kuse-naoshi si tienes; fija la forma."
    ],
    tip: "Si las púas ya están abiertas, tu chasen pasa a ser un pincel de cocina precioso. Y compra otro.",
    product: "kit-completo"
  },
  {
    id: "guia-conservacion", type: "guia",
    name: "Cómo conservar el matcha para que no se oxide",
    time: "3 min lectura", level: "Guía", kicker: "Color y sabor",
    img: "assets/img/p-ceremonial.jpg",
    intro: "El matcha es hoja entera molida: luz, calor, oxígeno y humedad son sus cuatro asesinos. Tres reglas y repites color verde intenso.",
    ingredients: [],
    steps: [
      "Nunca en la encimera junto al fuego: la nevera es tu amiga, la puerta del frigorífico no.",
      "En lata opaca y bien cerrada, con la bolsa original dentro si es posible.",
      "Consumo óptimo: 4-6 semanas desde que abres; máximo 90 días.",
      "Si compras para tres meses, guarda dos latas en el congelador sin abrir.",
      "Al sacarlo del frío, espera 10 minutos a abrirlo: si no, condensación = grumos."
    ],
    tip: "Un matcha que huele a heno seco y pardo ya oxidó: sigue siendo seguro, usa culinario y repostería.",
    product: "te-matcha-ceremonial"
  },
  {
    id: "guia-dosis", type: "guia",
    name: "Dosis exactas según tu objetivo",
    time: "4 min lectura", level: "Guía", kicker: "Ni una taza de más",
    img: "assets/img/m-mug.jpg",
    intro: "1 g, 2 g o 3 g: cambia el efecto más de lo que cambia el precio. Esta es la tabla que usamos internamente.",
    ingredients: [],
    steps: [
      "1 g · Calma con foco: para después de comer si solo quieres bajar revoluciones.",
      "2 g · Usucha y latte estándar: el punto dulce, unos 65 mg de cafeína.",
      "3 g · Antes de entrenar o examen: concentrado, siempre con algo de comida.",
      "Máximo recomendado: 4 g al día (≈ 4 tazas) y nada después de las 16 h.",
      "Embarazo, lactancia o medicación: consulta con tu profesional de salud antes de subir dosis."
    ],
    tip: "Siempre mejor 2 g de ceremonial que 4 g de culinario: te rinde más y no lo notas.",
    product: "suscripcion-matcha"
  },
  {
    id: "guia-matcha-cafe", type: "guia",
    name: "Matcha vs café: qué cambiar y cuándo",
    time: "5 min lectura", level: "Guía", kicker: "El cara a cara",
    img: "assets/img/r-iced-latte.jpg",
    intro: "No se trata de demonizar el café, se trata de elegir qué subida de energía quieres tener hoy. Esta es nuestra guía de sustituciones.",
    ingredients: [],
    steps: [
      "Café de las 8 y café de las 16 → matcha de las 8 y agua con gas de las 16.",
      "Si necesitas pico inmediato (reunión en 5 min), el café gana: es más rápido.",
      "Si necesitas 3 horas de trabajo profundo, gana el matcha por la L-teanina.",
      "Tarde, después de las 15 h: matcha en lugar de descafeinado. Más ritual, misma calma.",
      "Cambio progresivo: dos cafés → un café + un matcha → dos matcha. En 10 días ni lo notas."
    ],
    tip: "Si tomas medicación con horarios estrictos, consulta antes: el té verde puede afectar a la absorción.",
    product: "te-matcha-ceremonial"
  }
];

/* ---------- RESEÑAS ---------- */
ZENQA.reviews = [
  { name: "Laura M.", meta: "Compra verificada · Madrid", stars: 5, text: "Lo compré porque el café de media tarde me dejaba nerviosa. Con leche de avena queda suave y no me da bajón. Lo que más me sorprendió: no sabe amargo, sabe a primavera." },
  { name: "Sergio R.", meta: "Kit completo · Valencia", stars: 5, text: "Lo preparo frío antes de entrenar. El color es absurdamente verde y con hielo queda brutal. El chasen hace toda la diferencia si no quieres grumos." },
  { name: "Paula G.", meta: "Suscripción mensual", stars: 5, text: "Al principio lo hacía con agua recién hervida y me salía fuerte. Seguí la guía, bajé a 75°, y ahora queda cremoso. Llevo cuatro meses sin volver al café de las cinco." },
  { name: "Nuria B.", meta: "Grado culinario · Sevilla", stars: 4, text: "Para repostería va increíble y sale un verde que no parece pintado. Le quito una estrella porque me quedé con ganas de más bote: se acaba en dos semanas." },
  { name: "Andrés T.", meta: "Regalo de cumpleaños", stars: 5, text: "Compré el Pack Regalo para mi hermana y llegó en 24 h con la tarjeta escrita a mano. Se nota que alguien mira los pedidos, no un robot." },
  { name: "Marta Í.", meta: "Tetera de cristal", stars: 5, text: "Ver el punto de infusión cambia la experiencia. Y sí, el filtro se bloquea al servir: cero hojas en la taza. Ya he comprado dos más para la oficina." }
];

/* ---------- FAQ ---------- */
ZENQA.faq = [
  { q: "¿Cuánto tarda el envío?", a: "Península 24-48 h laborables. Baleares 48-72 h. Canarias, Ceuta y Melilla 3-5 días. Envío gratis a partir de 35 € y 3,95 € por debajo." },
  { q: "¿Cómo sé qué grado elegir?", a: "Si lo vas a tomar solo o con un chorrito de leche, ceremonial. Si haces latte, smoothies, bizcochos o es tu primer contacto, culinario: perdona mejor los errores de temperatura." },
  { q: "¿El matcha tiene cafeína?", a: "Sí: unos 65 mg por gramo, frente a ~60-80 mg de un espresso. La diferencia es que aquí llega con L-teanina y la subida es más plana y sostenida." },
  { q: "¿Puedo tomarlo por la tarde?", a: "La mayoría de personas puede sin afectar al descanso, sobre todo con 1 g. Si eres sensible a la cafeína, limita la ingesta a antes de las 15 h." },
  { q: "¿Y si no me gusta?", a: "Tienes 30 días desde la recepción. Si el matcha abierto no te convence, escríbenos y te devolvemos el importe o te lo cambiamos por otro grado. Sin preguntas incómodas." },
  { q: "¿Los productos son veganos y sin gluten?", a: "Todo el matcha es 100 % Camellia sinensis: vegano, sin gluten y sin azúcares añadidos. La cristalería y los textiles tampoco llevan ingredientes de origen animal." }
];

/* ---------- UTILIDADES ---------- */
ZENQA.money = (v) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(v);
ZENQA.byId = (id) => ZENQA.products.find((p) => p.id === id);
ZENQA.recipeById = (id) => ZENQA.recipes.find((r) => r.id === id);
ZENQA.stars = (n) => "★★★★★".slice(0, Math.round(n)) + "☆☆☆☆☆".slice(0, 5 - Math.round(n));
