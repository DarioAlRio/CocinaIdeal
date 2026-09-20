"use strict";

// Contenido real del sitio: guías de compra y artículos de blog.
// Nada de datos de producto inventados (ni precios exactos, ni valoraciones,
// ni modelos) en el cuerpo de la guía: son guías de criterio, no fichas de
// producto. Los productos concretos van en el array `products` de cada guía,
// verificados en Amazon.es (ASIN, título, precio e imagen reales).

const GUIDES = [
  {
    slug: "robots-de-cocina-multifuncion",
    img: "/assets/img/guias/robots-de-cocina-multifuncion.jpg",
    title: "Cómo elegir un robot de cocina multifunción",
    dek: "Potencia, funciones que se usan de verdad y capacidad del bol: los criterios para no pagar de más por un robot que acabará en un armario.",
    updated: "2026-09-17",
    intro: [
      "Un robot de cocina multifunción promete sustituir a media batería de electrodomésticos: batidora, báscula, picadora, vaporera y a veces hasta la sartén. Esa promesa es real en muchos modelos, pero también es la razón por la que acaban comprándose robots sobredimensionados para el uso que se les va a dar, o modelos baratos que se quedan cortos en potencia para las recetas que de verdad se cocinan en casa.",
      "Esta guía no recomienda una marca concreta: te da los criterios para comparar cualquier robot de cocina multifunción, ya sea con báscula integrada, con conexión WiFi o completamente manual, con o sin función de cocción con calor.",
    ],
    sections: [
      {
        heading: "Potencia y capacidad del bol",
        body: [
          "La potencia (vatios) marca la diferencia entre picar hielo o amasar pan sin esfuerzo y forzar el motor en cada receta algo exigente: por debajo de 1000W el robot rinde bien para batidos y salsas, pero amasar masas de pan o triturar hielo se nota más lento y con más ruido. Los robots con función de cocción (que calientan el propio bol) suelen rondar 1200-1600W en el modo de calentar.",
          "La capacidad del bol importa tanto como la potencia: 2-3 litros bastan para una o dos personas, pero si cocinas para una familia o haces lotes para congelar, un bol de 3,5-4,5 litros evita tener que hacer la receta en dos tandas.",
        ],
      },
      {
        heading: "Báscula integrada y pantalla",
        body: [
          "La báscula integrada en el propio bol es la función que más tiempo ahorra en el día a día: pesar sin sacar otro cacharro simplifica mucho seguir una receta al gramo. Los robots con pantalla táctil y recetas guiadas paso a paso son más cómodos para quien empieza, pero también son los que más encarecen el modelo: si ya cocinas con soltura, un robot sin pantalla y con báscula sigue cumpliendo lo esencial.",
          "La app y la conexión WiFi son un extra, no un básico: útiles si quieres controlar el robot desde el móvil o descargar recetas de la comunidad, pero no imprescindibles si vas a usarlo con las funciones manuales de siempre.",
        ],
      },
      {
        heading: "Funciones que se usan de verdad",
        body: [
          "Trocear, batir, amasar y montar son las cuatro funciones que más se usan en la práctica; vaporera, función de cocción a fuego lento o accesorio para pasta fresca son más específicas y solo compensan si sabes que las vas a usar con regularidad. Antes de pagar por un robot con 40 funciones, revisa cuántas de esas funciones se solapan (picar y trocear suelen ser la misma cuchilla con otro nombre comercial).",
          "El nivel de ruido y la limpieza también condicionan el uso real: un bol y unas cuchillas que se pueden meter en el lavavajillas se usan mucho más a menudo que uno que exige desmontar piezas y fregar a mano cada vez.",
        ],
      },
      {
        heading: "Accesorios y repuestos",
        body: [
          "Comprueba que existan accesorios de repuesto (cuchillas, juntas, cestillos) del fabricante antes de comprar: los robots de marcas con más recorrido en España suelen tener piezas sueltas disponibles varios años después, mientras que modelos genéricos a veces dejan de fabricar repuestos al poco tiempo.",
          "Si valoras hacer pasta fresca, helados o zumos, revisa si el robot admite accesorios opcionales para eso en lugar de comprar directamente el modelo más caro que ya los incluye de fábrica: a veces sale más barato añadir el accesorio después si acabas necesitándolo.",
        ],
      },
    ],
    checklist: [
      "Potencia mínima de 800-1000W para uso general, más si vas a amasar pan a menudo",
      "Capacidad del bol acorde al número de personas para las que cocinas habitualmente",
      "Báscula integrada si quieres ahorrar tiempo pesando ingredientes",
      "Piezas aptas para lavavajillas: condiciona mucho el uso real a largo plazo",
      "Disponibilidad de repuestos y accesorios del fabricante antes de comprar",
    ],
    faq: [
      {
        q: "¿Compensa pagar más por un robot con función de cocción frente a uno solo de picar y batir?",
        a: "Depende de si vas a sustituir el fuego por el robot en salsas, cremas o guisos sencillos. Si solo quieres picar, batir y amasar, un robot sin función de calentar cuesta mucho menos y cumple igual esas tareas.",
      },
      {
        q: "¿Necesito la app y el WiFi para que el robot funcione bien?",
        a: "No: la mayoría de robots funcionan de forma completa con los controles físicos o la pantalla táctil integrada. La app añade recetas guiadas y control remoto, pero no es necesaria para cocinar con el robot.",
      },
      {
        q: "¿Un robot de cocina sustituye a la batidora de vaso o de mano?",
        a: "En la mayoría de recetas sí, pero para batidos muy grandes o para llevar en un vaso individual, una batidora de vaso específica sigue siendo más rápida de montar, usar y lavar para ese uso concreto.",
      },
    ],
    products: [
      { asin: "B0FKNK452R", title: "Cecotec Robot de Cocina Multifunción Mambo Touch con Jarra Habana Pro", note: "Pantalla táctil y báscula integrada; gama alta para quien cocina con recetas guiadas paso a paso.", img: "https://m.media-amazon.com/images/I/814jjx4gO0L._AC_UL320_.jpg", price: "399,00", rating: "4,2★" },
      { asin: "B015993ZGW", title: "Moulinex Maxichef Advance MK8121, Robot de Cocina con 45 Programas de Cocción", note: "Marca con recorrido largo en España y buena disponibilidad de repuestos a futuro.", img: "https://m.media-amazon.com/images/I/61D-XCIJ78L._AC_UL320_.jpg", price: "129,00", rating: "4,5★" },
      { asin: "B0BTN6S5GQ", title: "Homlee 3 en 1 Robot de Cocina con Picadora de Carne y Batidora, 2000W, 5,5L", note: "Bol grande (5,5L) a buen precio, útil para cocinar en cantidad o congelar por lotes.", img: "https://m.media-amazon.com/images/I/71yDa4Gt+6L._AC_UL320_.jpg", price: "169,99", rating: "4,2★" },
      { asin: "B0DKJLBVYW", title: "Batidora Amasadora 6 en 1, Robot de Cocina 2000W, Antracita", note: "Buen punto medio de potencia y precio para amasar pan sin gama alta.", img: "https://m.media-amazon.com/images/I/71bkxxfWSML._AC_UL320_.jpg", price: "199,99", rating: "4,4★" },
      { asin: "B013DQEJF4", title: "Bosch Robot de Cocina MUM5, 1000W, Plateado, MUM58L20", note: "Diseño clásico sin pantalla, foco en potencia y repuestos disponibles a largo plazo.", img: "https://m.media-amazon.com/images/I/61RZfSlDX-L._AC_UL320_.jpg", price: "283,99", rating: "4,4★" },
      { asin: "B013DQF1DI", title: "Bosch Procesador de Alimentos MultiTalent 3, 800W, Blanco, MCM3100W", note: "Entrada de gama centrada en trocear y batir, sin función de cocción.", img: "https://m.media-amazon.com/images/I/71durQsTgSL._AC_UL320_.jpg", price: "74,38", rating: "4,3★" },
      { asin: "B07CJJ4F55", title: "Chef Robot Cocina Olla Programable 5L Multifunción 900W, Temporizador 24h", note: "El más económico con función de cocción y temporizador de 24 horas.", img: "https://m.media-amazon.com/images/I/51J813pfwtL._AC_UL320_.jpg", price: "49,90", rating: "4,2★" },
      { asin: "B09MWMJG76", title: "Ufesa TotalChef RK7 Robot de Cocina Inteligente Multifunción, WIFI, 30 Funciones, 4,5L", note: "Hermano menor del RK10, mismas funciones con pantalla algo más sencilla.", img: "https://m.media-amazon.com/images/I/71TQd4oQH-L._AC_UL320_.jpg", price: "349,99", rating: "3,9★" },
      { asin: "B00U65CWOG", title: "Russell Hobbs Robot de Cocina Cook@Home 5 L, Recipiente de Acero Inoxidable, Tapa Anticondensación, 21850-56", note: "Olla programable de 5 L y 900 W con 11 programas, función panificadora y temporizador de 24 horas; con más de 4.000 valoraciones.", img: "https://m.media-amazon.com/images/I/71YL9Z9OOdL._AC_SF480,480_.jpg", price: "104", rating: "4,3★" },
      { asin: "B0BJQPQVHP", title: "Cecotec Robot de Cocina Multifunción Mambo 11090 Habana, 1600W, 37 Funciones", note: "37 funciones y app propia; gama media-alta de la marca española más vendida en la categoría.", img: "https://m.media-amazon.com/images/I/51bl9P3BgOL._AC_UL320_.jpg", price: "271,86", rating: "4,0★" },
      { asin: "B00SBCZDDI", title: "NEWLUX Robot de Cocina Multifunción 5L SmartChef V50 con Cubeta Antiadherente", note: "Bol de 5L con cubeta antiadherente, programable hasta 24h.", img: "https://m.media-amazon.com/images/I/51b1NhImcIL._AC_UL320_.jpg", price: "133,20", rating: "4,1★" },
      { asin: "B075XN9MRG", title: "Kenwood MultiPro Compact, Procesador de Alimentos 800W, Bol 2,1L y 9 Accesorios", note: "Procesador sin cocción a precio contenido: motor de 800 W, dos velocidades más pulse, vaso batidor y exprimidor incluidos.", img: "https://m.media-amazon.com/images/I/81gvC0DWLML._AC_UL320_.jpg", price: "94,99", rating: "4,4★" },
      { asin: "B08DHZL8R2", title: "Bosch Robot de Cocina Serie 2 MUM, 700 W, Blanco, MUMS2EW00", note: "Amasadora compacta sin pantalla: 700 W, cuatro velocidades y bol de acero inoxidable de 3,8 L; pensada para masas y batidos más que para cocinar.", img: "https://m.media-amazon.com/images/I/61aUuvnYUBL._AC_UL320_.jpg", price: "137,99", rating: "4,4★" },
      { asin: "B07HPRQJL1", title: "Bosch Procesador de Alimentos MultiTalent 8, 1250 W, MC812M844", note: "Potente y muy completo sin función de cocción: 1250 W, recipiente de 3,9 L (hasta 1,5 kg de masa) y jarra batidora de 1,5 L.", img: "https://m.media-amazon.com/images/I/71Iz4CvmAWL._AC_UL320_.jpg", price: "249,99", rating: "4,2★" },
      { asin: "B09Y226XHG", title: "Kenwood Titanium Chef Baker KVC65.001WH, Robot de Cocina con Báscula Integrada, 1200 W", note: "Robot amasador de repostería con báscula EasyWeigh integrada y 1200 W; admite más de 25 accesorios opcionales. Sin función de cocción.", img: "https://m.media-amazon.com/images/I/71oGaBvIOfL._AC_UL320_.jpg", price: "378,99", rating: "4,4★" },
      { asin: "B01HKZZ4XU", title: "KitchenAid Artisan Robot de Cocina Amasadora 4,7 L, Rojo Imperial", note: "Batidora amasadora clásica con cabezal inclinable, bol de 4,8 L y 10 velocidades; alta gama centrada en repostería y panadería, sin cocción.", img: "https://m.media-amazon.com/images/I/61E98k5oGTL._AC_UL320_.jpg", price: "443,00", rating: "4,3★" },
    ],
  },
  {
    slug: "freidoras-de-aire",
    img: "/assets/img/guias/freidoras-de-aire.jpg",
    title: "Cómo elegir una freidora de aire",
    dek: "Capacidad, tipo de cesto y potencia real: lo que de verdad cambia entre una freidora de aire barata y una de gama alta.",
    updated: "2026-09-17",
    intro: [
      "La freidora de aire es probablemente el pequeño electrodoméstico que más ha cambiado la forma de cocinar en las cocinas españolas en los últimos años: menos aceite, menos olor y limpieza más rápida que una sartén honda. Pero no todas las freidoras de aire rinden igual, y el tamaño equivocado es el motivo más habitual de devolución o de arrepentimiento de compra.",
      "Aquí no se recomienda un modelo concreto: se explican los criterios para comparar cualquier freidora de aire, del tamaño y la marca que sea.",
    ],
    sections: [
      {
        heading: "Capacidad: litros reales, no solo el número en la caja",
        body: [
          "Una freidora de 2-3 litros sirve para una o dos personas y raciones pequeñas; 4-5 litros es el tamaño más equilibrado para una familia de 3-4 personas; por encima de 6-7 litros ya se piensa para cocinar en cantidad o para familias numerosas. El cajón familiar de doble compartimento (dos zonas independientes) permite cocinar dos alimentos distintos a la vez sin que se mezclen sabores ni tiempos.",
          "Ten en cuenta que la capacidad anunciada casi nunca es la que se puede llenar realmente sin que el aire caliente deje de circular bien: como referencia práctica, cocina como máximo dos tercios del volumen anunciado para que el resultado sea uniforme.",
        ],
      },
      {
        heading: "Potencia y tipo de cesto",
        body: [
          "Entre 1400 y 1800W es el rango habitual para freidoras domésticas: más potencia normalmente significa precalentar y cocinar más rápido, aunque no es la única variable que determina el resultado final. El diseño del cesto (con o sin bandeja separadora, con rejilla antiadherente) influye en cuánto aire circula alrededor del alimento y, por tanto, en lo crujiente que queda.",
          "Los modelos con doble cajón o doble zona reparten mejor el calor que una sola cesta muy llena, y suelen sincronizar el final de cocción de ambos compartimentos aunque tengan tiempos distintos, algo útil si cocinas guarnición y proteína a la vez.",
        ],
      },
      {
        heading: "Panel de control y programas",
        body: [
          "Los programas preestablecidos (patatas, pollo, pescado, repostería) son una guía de tiempo y temperatura, no una garantía de resultado perfecto: sirven sobre todo para quien empieza, y con el uso casi todo el mundo acaba ajustando manualmente tiempo y temperatura según su propia experiencia. Una pantalla con ventana de visualización permite comprobar el punto de cocción sin abrir el cajón y perder el calor acumulado.",
          "El modo de mantenimiento de calor o la función de recalentar son cómodos si sueles cocinar con antelación, pero no son determinantes si vas a usar la freidora justo para comer al momento.",
        ],
      },
      {
        heading: "Limpieza y mantenimiento",
        body: [
          "Un cesto y una bandeja antiadherentes aptos para lavavajillas ahorran mucho tiempo frente a los que solo se pueden limpiar a mano; revisa también si el revestimiento antiadherente está libre de PFOA/PFAS, un dato que ya aparece en la ficha técnica de la mayoría de modelos recientes.",
          "El tamaño exterior de la freidora (no solo la capacidad interior) importa si tu cocina tiene poco espacio de encimera libre: los modelos de mayor capacidad ocupan sensiblemente más sitio guardados.",
        ],
      },
    ],
    checklist: [
      "Capacidad ajustada al número de personas: 2-3L para 1-2 personas, 5-6L para 3-4",
      "Doble cajón o doble zona si sueles cocinar dos alimentos a la vez",
      "Potencia entre 1400-1800W para un precalentado rápido",
      "Cesto y bandeja antiadherentes aptos para lavavajillas",
      "Revestimiento libre de PFOA/PFAS especificado en la ficha técnica",
    ],
    faq: [
      {
        q: "¿Una freidora de aire sustituye por completo al horno?",
        a: "Para raciones individuales o medianas sí, y suele ser más rápida por el precalentado corto. Para asados grandes, bandejas de repostería completas o varios platos a la vez, el horno sigue teniendo más capacidad útil.",
      },
      {
        q: "¿Hace falta usar aceite en una freidora de aire?",
        a: "No es obligatorio, pero una fina capa de aceite en alimentos frescos (no precocinados) mejora el dorado y el crujiente. Los alimentos ya rebozados o congelados normalmente no necesitan aceite añadido.",
      },
      {
        q: "¿Cuánto tarda en calentar una freidora de aire comparado con un horno?",
        a: "El precalentado de una freidora de aire suele tardar 2-5 minutos frente a los 10-15 minutos habituales de un horno convencional, una de las razones por las que resulta más práctica para el día a día.",
      },
    ],
    products: [
      { asin: "B0G931B3RP", title: "Ninja Freidora de Aire 6,2L, Cajón Familiar, Antiadherente, Negro", note: "Buen equilibrio de capacidad y precio para familias de 3-4 personas.", img: "https://m.media-amazon.com/images/I/51tPa7Rt4xL._AC_UL320_.jpg", price: "99,99", rating: "4,7★" },
      { asin: "B0GL27XFXV", title: "Ninja CRISPi PRO XL, Freidora de Aire con 2 Recipientes, Dorado Piedra", note: "Dos recipientes independientes para cocinar dos alimentos distintos a la vez; gama alta.", img: "https://m.media-amazon.com/images/I/71XNbEDjSHL._AC_UL320_.jpg", price: "249,00", rating: "4,2★" },
      { asin: "B0F4KKZ7HH", title: "Ninja Freidora de Aire con Compartimento Doble, 7,6L, Gris Metalizado", note: "La de mayor capacidad de la selección, pensada para familias numerosas.", img: "https://m.media-amazon.com/images/I/71ftZsnndCL._AC_UL320_.jpg", price: "140,12", rating: "4,6★" },
      { asin: "B0DN5BDGVM", title: "Amazon Basics Freidora de Aire 5,7L con Ventana de Fácil Visualización, 8 Menús", note: "Ventana para ver la cocción sin abrir el cajón; buena relación precio-capacidad.", img: "https://m.media-amazon.com/images/I/71ESQ8LdX9L._AC_UL320_.jpg", price: "53,46", rating: "4,1★" },
      { asin: "B0CFL49C1J", title: "Ninja Foodi FlexDrawer, Freidora de Aire con Zona Flex, Negro", note: "Zona flexible que se puede usar como un solo compartimento grande o dos separados.", img: "https://m.media-amazon.com/images/I/71T8jynPV3L._AC_UL320_.jpg", price: "199,99", rating: "4,7★" },
      { asin: "B0F8HSTM5N", title: "Cecotec Freidora de Aire 10L Cecofry&Grill Duoheat 10000, 2800W", note: "La más grande y potente de la selección; pensada para cocinar en cantidad.", img: "https://m.media-amazon.com/images/I/71XyaneWz5L._AC_UL320_.jpg", price: "89,90", rating: "4,2★" },
      { asin: "B0BPYX2TGJ", title: "Cecotec Freidora de Aire sin Aceite 8L Air Fryer Cecofry Supreme 8000", note: "Buena capacidad a precio de entrada de gama.", img: "https://m.media-amazon.com/images/I/5177g+9MCDL._AC_UL320_.jpg", price: "57,90", rating: "4,5★" },
      { asin: "B0D63DHZCB", title: "Ninja Double Stack, Freidora de Aire con 2 Cajones Verticales, Negro", note: "Diseño vertical de dos cajones que ocupa menos superficie de encimera.", img: "https://m.media-amazon.com/images/I/71Olbki5uwL._AC_UL320_.jpg", price: "164,00", rating: "4,6★" },
      { asin: "B0DGLC3Y3L", title: "Cecotec Freidora de Aire 4L Cecofry&Grill Duoheat 4000, 1900W", note: "Tamaño compacto ideal para 1-2 personas con poco espacio de encimera.", img: "https://m.media-amazon.com/images/I/81JOfRIx9DL._AC_UL320_.jpg", price: "49,90", rating: "4,2★" },
      { asin: "B0CLRWNB7H", title: "Cecotec Freidora de Aire 6,5L con Ventana Cecofry Fantastik Window 6500", note: "Ventana de visualización a un precio muy competitivo.", img: "https://m.media-amazon.com/images/I/71MKHOa9JnL._AC_UL320_.jpg", price: "49,90", rating: "4,5★" },
      { asin: "B07N8N6C85", title: "Cosori Freidora de Aire 5,7L, Interior Metálico, 11 Modos, 97% Sin Aceite", note: "11 modos preestablecidos y buena valoración sostenida en el tiempo.", img: "https://m.media-amazon.com/images/I/712pqfyIq5L._AC_UL320_.jpg", price: "84,99", rating: "4,7★" },
      { asin: "B0BPZSVH6S", title: "Cecotec Freidora de Aire 5,5L Air Fryer Cecofry Fantastik 5500", note: "Entrada de gama compacta con muy buena relación precio-valoración.", img: "https://m.media-amazon.com/images/I/41bAg4m7BzL._AC_UL320_.jpg", price: "48,60", rating: "4,6★" },
      { asin: "B0CG6C26QW", title: "Moulinex Easy Fry Max 5L, Freidora de aire, 10 Programas, 6 Personas", note: "Entrada de gama de marca conocida: 5 L, 1500 W y 10 programas automáticos (patatas, pollo, pescado, pizza...), con más de 4.500 valoraciones.", img: "https://m.media-amazon.com/images/I/516kJw1p0lL._AC_UL320_.jpg", price: "69,99", rating: "4,6★" },
      { asin: "B0DWS7SR2C", title: "Russell Hobbs Freidora de Aire 4,3 L, 9 Programas, Máx. 200 °C, Rapid Air, Táctil", note: "Compacta (4,3 L, 1800 W) con 9 programas y alarma para remover; cesto y bandeja con revestimiento cerámico aptos para lavavajillas.", img: "https://m.media-amazon.com/images/I/51mi5F-cnJL._AC_UL320_.jpg", price: "77,99", rating: "4,5★" },
      { asin: "B0FWKGDJLD", title: "Bosch Freidora de Aire Serie 6, 7,2 L, con Ventana, Crema, MAF671C0", note: "Gama media-alta con ventana iluminada para ver la cocción y 7,2 L (hasta 5 raciones); el fabricante indica que no necesita precalentado.", img: "https://m.media-amazon.com/images/I/61PsxKSwpgL._AC_UL320_.jpg", price: "149,99", rating: "4,7★" },
      { asin: "B0GBXY2YKK", title: "Cosori Freidora de Aire 8,6 L Dual Blaze TwinFry Compact, sin PFAS ni Teflon", note: "Gama alta con dos zonas de cocción (una o dos cubetas, modos SYNC y MATCH) y revestimiento cerámico sin PFAS.", img: "https://m.media-amazon.com/images/I/61WDsr3TuML._AC_UL320_.jpg", price: "159,99", rating: "4,8★" },
    ],
  },
  {
    slug: "batidoras-y-licuadoras",
    img: "/assets/img/guias/batidoras-y-licuadoras.jpg",
    title: "Cómo elegir una batidora de vaso o licuadora",
    dek: "Potencia, cuchillas y tipo de vaso: los criterios para elegir entre una batidora de vaso, una mini licuadora portátil o una de gama alta.",
    updated: "2026-09-16",
    intro: [
      "Bajo el nombre \"batidora\" convive una familia amplia de productos: desde la mini batidora de vaso portátil que se lleva a la calle hasta la batidora de vaso grande para triturar hielo y sopas calientes. Elegir bien pasa por tener claro para qué la vas a usar la mayoría de las veces, no solo por el precio o el diseño.",
      "Esta guía cubre criterios comunes a cualquier batidora de vaso, sin recomendar una marca por encima de otra: sirve para comparar cualquier modelo que encuentres en Amazon o en cualquier otra tienda.",
    ],
    sections: [
      {
        heading: "Potencia y velocidad",
        body: [
          "Para batidos de fruta y verdura blanda, 300-600W son suficientes; para triturar hielo, frutos secos o hacer sopas cremosas sin grumos, conviene subir a 900-1500W o más. Las revoluciones por minuto (RPM) que anuncian muchos fabricantes son una cifra de marketing más que un dato comparable entre marcas: fíjate mejor en la potencia en vatios y en las reseñas sobre triturar hielo concretamente.",
          "Las batidoras con varias velocidades y función pulso dan más control fino que las que solo tienen encendido y apagado, sobre todo para no licuar de más ingredientes que quieres dejar con textura (como salsas con trozos).",
        ],
      },
      {
        heading: "Tipo de vaso y cuchillas",
        body: [
          "El vaso de cristal no retiene olores ni se raya con el tiempo, pero pesa más y es más frágil; el plástico Tritan (sin BPA) es más ligero y resistente a golpes, habitual en las batidoras portátiles con vaso para llevar. El número de cuchillas (normalmente 4 o 6) y el material (acero inoxidable o titanio) influyen en la vida útil del filo, especialmente si vas a triturar hielo con frecuencia.",
          "Las batidoras con vaso portátil incorporado (para llevarte el batido directamente, sin trasvasar) son cómodas para el día a día, pero suelen tener capacidad más reducida que una batidora de vaso grande pensada para toda la familia.",
        ],
      },
      {
        heading: "Programas y facilidad de limpieza",
        body: [
          "Los programas automáticos (batido, hielo picado, autolimpieza) simplifican el uso, aunque en la práctica casi todo el mundo termina usando solo un par de ellos de forma habitual. La función de autolimpieza (agua y jabón, unos segundos a máxima velocidad) ahorra bastante trabajo si usas la batidora varias veces por semana.",
          "Comprueba si el vaso y las cuchillas se pueden desmontar del cuerpo del motor para meterlos en el lavavajillas: es la diferencia entre limpiar la batidora en un minuto o tener que fregar a mano cada vez.",
        ],
      },
      {
        heading: "Batidora de vaso frente a batidora de mano",
        body: [
          "La batidora de vaso rinde mejor para batidos, smoothies y triturar hielo; la batidora de mano (de varilla) es más práctica para cremas y sopas directamente en la olla, sin trasvasar líquido caliente a un vaso. Si tu uso principal son sopas y purés, valora si de verdad necesitas una batidora de vaso o te compensa más una de mano, que suele costar menos y ocupa menos espacio guardada.",
          "Algunos fabricantes venden combos 2 en 1 con vaso y varilla intercambiable: son una opción a considerar si no tienes claro cuál de los dos usos vas a hacer más.",
        ],
      },
    ],
    checklist: [
      "Potencia mínima 600W si vas a triturar hielo o frutos secos con regularidad",
      "Vaso de cristal para más durabilidad o Tritan si priorizas que sea ligero",
      "Vaso portátil incorporado si vas a llevarte el batido fuera de casa",
      "Función de autolimpieza si la vas a usar varias veces por semana",
      "Piezas desmontables aptas para lavavajillas",
    ],
    faq: [
      {
        q: "¿Qué potencia necesito para picar hielo sin problema?",
        a: "A partir de 900W la mayoría de batidoras pican hielo de forma consistente sin forzar el motor. Por debajo de eso, algunos modelos lo consiguen igual, pero conviene revisar las reseñas específicas sobre hielo antes de comprar.",
      },
      {
        q: "¿Compensa una batidora con vaso portátil frente a una de vaso grande?",
        a: "Si sueles preparar batidos individuales para llevar, sí: ahorra el paso de trasvasar. Si cocinas para varias personas a la vez o haces sopas y cremas en cantidad, un vaso grande de 1,5-2L es más práctico.",
      },
      {
        q: "¿El vaso de plástico pierde calidad con el tiempo?",
        a: "El plástico Tritan de calidad resiste bien golpes y lavavajillas durante años, pero puede acabar reteniendo algo de olor con ingredientes muy intensos (ajo, especias fuertes). El cristal no tiene ese problema, a cambio de más peso y riesgo de rotura.",
      },
    ],
    products: [
      { asin: "B0F52MVPX1", title: "Ganiza Batidora de Vaso Portátil 900W con 3 Vasos (2x500ml y 1x700ml)", note: "Pack con varios vasos portátiles, útil para toda la familia sin compartir el mismo vaso.", img: "https://m.media-amazon.com/images/I/81B9g0ga2HL._AC_UL320_.jpg", price: "45,99", rating: "4,5★" },
      { asin: "B0G7JF3V25", title: "Cecotec Batidora de Vaso 20000RPM Power Black Titanium 1300 MAX B Pro", note: "Cuchillas de titanio y precio de entrada muy ajustado.", img: "https://m.media-amazon.com/images/I/61EYFWnj8PL._AC_UL320_.jpg", price: "27,90", rating: "4,0★" },
      { asin: "B0D8F87L9W", title: "Sangcon 5 en 1 Batidora de Vaso Combinación, Smoothie Maker y Procesador de Alimentos", note: "Combo multifunción, útil si además quieres picar en pequeñas cantidades.", img: "https://m.media-amazon.com/images/I/71uo7tHuylL._AC_UL320_.jpg", price: "50,99", rating: "4,0★" },
      { asin: "B0DBPZJ7MH", title: "Amazon Basics Licuadora de Cocina, Jarra de Plástico 1,5L, 600W", note: "Vaso grande de 1,5L, pensado para batidos familiares, no para llevar.", img: "https://m.media-amazon.com/images/I/61RbS1T7bnL._AC_UL320_.jpg", price: "28,51", rating: "4,2★" },
      { asin: "B08WX64QN4", title: "Moulinex Blendeo+, Batidora de Vaso 450W, Jarra de 1,5L, Blanca", note: "Modelo sencillo de marca reconocida, sin muchos extras.", img: "https://m.media-amazon.com/images/I/71E4SwA5JuL._AC_UL320_.jpg", price: "29,99", rating: "4,2★" },
      { asin: "B0D7JW2YTN", title: "Taurus Batidora Licuadora de Vaso 1800W, 2L, 20 Velocidades con Vaso Portátil", note: "Potencia alta y muchas velocidades para quien quiere control fino.", img: "https://m.media-amazon.com/images/I/71QOSQ5TkfL._AC_UL320_.jpg", price: "70,00", rating: "4,0★" },
      { asin: "B0DBR9C6VM", title: "Ninja Detect Power Pro Batidora 2 en 1, 1200W, Jarra de 2L y 2 Vasos", note: "Gama alta con jarra grande y vasos individuales incluidos; el más versátil de la lista.", img: "https://m.media-amazon.com/images/I/61XlPJ4eeVL._AC_UL320_.jpg", price: "209,99", rating: "4,5★" },
      { asin: "B09LD46DWY", title: "Taurus Batidora de Vaso 1500W, 1,5L, Pica Hielo, 4 Cuchillas Inox", note: "Buen punto medio de potencia y precio centrado en picar hielo.", img: "https://m.media-amazon.com/images/I/61A4C7B00WL._AC_UL320_.jpg", price: "44,00", rating: "4,3★" },
      { asin: "B07SB18XRL", title: "H.Koenig Mini Batidora de Vaso 570ml SMOO9, 300W, 4 Cuchillas Inox", note: "La más compacta, pensada para batidos individuales pequeños.", img: "https://m.media-amazon.com/images/I/61rbxWROlLL._AC_UL320_.jpg", price: "32,90", rating: "4,4★" },
      { asin: "B0FKNN9ZL7", title: "Cecotec Batidora de Vaso Power Black Titanium 2500 MAX Pro, 1800W, 22000RPM", note: "Gama alta de Cecotec, con jarra grande y cuchillas de titanio.", img: "https://m.media-amazon.com/images/I/71Nvy66iHQL._AC_UL320_.jpg", price: "59,90", rating: "4,5★" },
      { asin: "B0G64B7S46", title: "Ganiza Batidora de Vaso Minilicuadora 900W, 25000RPM, 3 Vasos Tritan (300/500ml)", note: "Vasos Tritan más pequeños, pensados para llevar batidos individuales.", img: "https://m.media-amazon.com/images/I/71SasiIh88L._AC_UL320_.jpg", price: "37,98", rating: "4,3★" },
      { asin: "B0G7J9HHB5", title: "Cecotec Batidora de Vaso 20000RPM Power Black Titanium 1300 MAX W Pro", note: "Variante en otro acabado de color del mismo modelo de entrada de Cecotec.", img: "https://m.media-amazon.com/images/I/61rj-06bUPL._AC_UL320_.jpg", price: "27,90", rating: "4,1★" },
      { asin: "B00I5ABIFI", title: "WMF Kult X Batidora de Vaso Individual Mix & Go Mini, 300 W, 0,6 L", note: "Batido individual portátil de 0,6 L y 300 W con exterior de acero inoxidable; con cerca de 35.000 valoraciones.", img: "https://m.media-amazon.com/images/I/619Ynq3zKoL._AC_UL320_.jpg", price: "41,99", rating: "4,4★" },
      { asin: "B0GGXXD59S", title: "Bonsenkitchen Batidora de Mano 4 en 1, 1000 W, Acero Inoxidable", note: "Batidora de mano con 12 velocidades y modo turbo; incluye varilla con cuchilla de 4 aspas y batidor eléctrico. Alternativa barata a la de vaso.", img: "https://m.media-amazon.com/images/I/71RvNm2Ol8L._AC_UL320_.jpg", price: "31,44", rating: "4,4★" },
      { asin: "B01JIS0VS0", title: "WMF Kitchenminis Batidora de Vaso 400 W, 0,8 L, 6 Cuchillas, Recipiente de Vidrio", note: "Vaso de vidrio de 0,8 L, 5 velocidades y 6 cuchillas; formato pequeño y cuidado para batidos de una o dos raciones.", img: "https://m.media-amazon.com/images/I/71PBfNDAFAS._AC_UL320_.jpg", price: "83,99", rating: "4,2★" },
      { asin: "B0CX23H3G6", title: "Philips 5000 Batidora de Vaso ProBlend Plus, 1200 W, Vaso 2 L + Accesorios, Negro", note: "Motor de 1200 W, jarra de 2 L (1,5 L útiles) y vaso para llevar; la opción más completa de esta selección.", img: "https://m.media-amazon.com/images/I/61avGWJtECL._AC_UL320_.jpg", price: "89,99", rating: "4,4★" },
    ],
  },
  {
    slug: "cafeteras",
    img: "/assets/img/guias/cafeteras.jpg",
    title: "Cómo elegir una cafetera",
    dek: "Cápsulas, goteo o espresso manual: qué tipo de cafetera se adapta a cómo tomas café realmente, y qué mirar dentro de cada tipo.",
    updated: "2026-09-16",
    intro: [
      "Antes de comparar marcas o precios de cafeteras hay una decisión previa que determina casi todo lo demás: qué tipo de café tomas habitualmente. Una cafetera de cápsulas no compite realmente con una superautomática de grano, ni una de goteo con una espresso manual: son categorías distintas para gustos de café distintos.",
      "Esta guía repasa los tres tipos más comunes en una cocina española (cápsulas, goteo/filtro y espresso, manual o superautomática) y los criterios para elegir dentro de cada uno, sin recomendar una marca por encima de otra.",
    ],
    sections: [
      {
        heading: "Cápsulas: comodidad a cambio de coste por taza",
        body: [
          "Las cafeteras de cápsulas (Nespresso, Dolce Gusto y sistemas similares) ganan en rapidez y limpieza: sin posos, sin molienda, café listo en menos de un minuto. A cambio, el coste por taza es más alto a largo plazo que con café en grano o molido, y quedas ligado al sistema de cápsulas compatible de esa marca concreta.",
          "Dentro de cápsulas, la presión (bares) y si la máquina calienta también leche (para capuccinos) son las variables que más cambian el resultado y el precio entre modelos.",
        ],
      },
      {
        heading: "Goteo y filtro: café suave en cantidad",
        body: [
          "Las cafeteras de goteo son las más económicas de comprar y mantener, y las más prácticas si sueles preparar varias tazas a la vez para casa o para llevar en termo. El resultado es un café más suave que el espresso, sin la crema característica de la presión alta.",
          "La función de mantenimiento de calor en la jarra y el temporizador programable (para tener el café listo a una hora concreta) son los extras que más diferencian unos modelos de goteo de otros.",
        ],
      },
      {
        heading: "Espresso manual o superautomática: café en grano",
        body: [
          "Una cafetera espresso manual exige aprender a usarla (dosis, prensado, tiempo de extracción) pero da más control sobre el resultado final y suele costar menos que una superautomática equivalente en prestaciones. Una superautomática con molinillo integrado automatiza todo el proceso desde el grano hasta la taza, a cambio de un precio mayor y de un mantenimiento (descalcificación, limpieza del circuito) más exigente.",
          "La presión en bares (18-20 bares es lo habitual) no es el único factor de un buen espresso: el sistema de calentamiento (termobloque frente a caldera) y la calidad del vaporizador de leche influyen tanto o más en el resultado final.",
        ],
      },
      {
        heading: "Mantenimiento y limpieza",
        body: [
          "Cualquier cafetera que use agua caliente a presión necesita descalcificarse periódicamente, sobre todo en zonas con agua dura: revisa si el fabricante incluye avisos automáticos de descalcificación y si vende el líquido o las pastillas específicas con facilidad.",
          "Los depósitos de agua y las bandejas antigoteo extraíbles y lavables facilitan mucho el mantenimiento diario frente a los que hay que vaciar con cuidado para no derramar agua dentro de la máquina.",
        ],
      },
    ],
    checklist: [
      "Decide primero el tipo de café que tomas: cápsula, filtro o grano/espresso",
      "En cápsulas, revisa la compatibilidad y el coste por cápsula a largo plazo",
      "En goteo, valora la capacidad de la jarra y si necesitas temporizador",
      "En espresso, compara presión en bares y sistema de calentamiento (termobloque o caldera)",
      "Comprueba la facilidad de descalcificación y limpieza antes de comprar",
    ],
    faq: [
      {
        q: "¿Sale más caro el café de cápsulas que el de grano a largo plazo?",
        a: "Por taza, sí: el café de cápsula suele costar más del doble que el mismo peso en grano o molido. A cambio, ahorras tiempo, limpieza y no necesitas molinillo ni aprender a dosificar.",
      },
      {
        q: "¿Qué diferencia hay entre una cafetera espresso manual y una superautomática?",
        a: "La manual requiere que muelas o dosifiques el café tú y controles el tiempo de extracción; la superautomática lo hace todo sola, desde el grano hasta la taza, con un botón. La superautomática es más cómoda pero también más cara de comprar y de mantener.",
      },
      {
        q: "¿Necesito una cafetera con vaporizador de leche si solo tomo café solo?",
        a: "No: el vaporizador solo es relevante si tomas capuccinos, lattes o cortados con espuma. Si tomas el café solo o con un poco de leche fría, es una función que puedes descartar para abaratar la compra.",
      },
    ],
    products: [
      { asin: "B0DN1MVRFJ", title: "Amazon Basics Cafetera de Filtro, Jarra de Vidrio 1,25L/10 Tazas", note: "Entrada de gama sencilla para café de filtro en cantidad para varias personas.", img: "https://m.media-amazon.com/images/I/61w508LdakL._AC_UL320_.jpg", price: "29,61", rating: "4,2★" },
      { asin: "B0H2FJYDHD", title: "NESCAFÉ Dolce Gusto De'Longhi NEO CAFFÈ, Cafetera de Cápsulas (Pack 3)", note: "Sistema de cápsulas con variedad de bebidas, incluye pack de cápsulas de regalo.", img: "https://m.media-amazon.com/images/I/81v7z1DDq0L._AC_UL320_.jpg", price: "59,00", rating: "4,6★" },
      { asin: "B0763N7WMP", title: "Cecotec Cafetera Express Manual 20 Bares de Presión Power Espresso 20", note: "Espresso manual de entrada de gama con presión alta para el precio.", img: "https://m.media-amazon.com/images/I/71426+uppqL._AC_UL320_.jpg", price: "59,88", rating: "4,1★" },
      { asin: "B0FP2HTVYR", title: "Cecotec Cafetera Superautomática Compacta Cremmaet Cube, 1350W", note: "Superautomática compacta, buena opción si el espacio de encimera es limitado.", img: "https://m.media-amazon.com/images/I/71UAkdsAiwL._AC_UL320_.jpg", price: "179,00", rating: "4,1★" },
      { asin: "B00400OMU0", title: "De'Longhi Magnifica S, Cafetera Superautomática con Molinillo y Espumador de Leche Manual, ECAM22.110.B", note: "Superautomática de grano con panel de botones, función para 2 tazas y vaporizador manual para cappuccinos; con casi 50.000 valoraciones.", img: "https://m.media-amazon.com/images/I/615UBjFMbCL._AC_SF480,480_.jpg", price: "279", rating: "4,2★" },
      { asin: "B00G5YOVZA", title: "Nespresso De'Longhi Inissia EN80.B, Cafetera de Cápsulas, 19 Bares", note: "Uno de los modelos de cápsulas más vendidos de forma sostenida en el tiempo.", img: "https://m.media-amazon.com/images/I/513I0Zj0uxL._AC_UL320_.jpg", price: "79,00", rating: "4,4★" },
      { asin: "B07MQ23F7Q", title: "Cecotec Cafetera de Goteo Coffee 66 Heat, 950W, Función Recalentar", note: "La más económica de goteo, con función de mantener el café caliente.", img: "https://m.media-amazon.com/images/I/51vSW8bYK1L._AC_UL320_.jpg", price: "27,49", rating: "4,2★" },
      { asin: "B087RP269L", title: "Cecotec Cafetera Express Cafelizzia 790 White, 20 Bares, Modo Auto", note: "Espresso manual con calentamiento rápido y modo automático para varias bebidas.", img: "https://m.media-amazon.com/images/I/51R7XaU+OrL._AC_UL320_.jpg", price: "80,90", rating: "4,1★" },
      { asin: "B0HJGT5WF8", title: "AIRMSEN Cafetera de Café Espresso 20 Bar con Molinillo Cónico y Vaporizador de Leche", note: "Incluye molinillo integrado a un precio más bajo que otras superautomáticas.", img: "https://m.media-amazon.com/images/I/71RRfyuG8NL._AC_UL320_.jpg", price: "233,14", rating: "4,1★" },
      { asin: "B0C85NMRXP", title: "KRUPS Virtuoso+, Cafetera Espresso con Bomba, Boquilla de Vapor Dual", note: "Boquilla de vapor dual para espumar leche con más control.", img: "https://m.media-amazon.com/images/I/618-cxEaVKL._AC_UL320_.jpg", price: "149,99", rating: "4,1★" },
      { asin: "B0BQ1TCC6F", title: "Cecotec Cafetera Express Power Espresso Touch ColdBrew, 1350W", note: "Añade función de café frío (cold brew) a las funciones habituales de espresso.", img: "https://m.media-amazon.com/images/I/71PygM137VL._AC_UL320_.jpg", price: "89,90", rating: "4,2★" },
      { asin: "B0CC4NVW32", title: "Casabrews CM5418 Cafetera Espresso 20 Bares con Espumador de Leche", note: "Buen equilibrio de presión y espumador en un formato compacto.", img: "https://m.media-amazon.com/images/I/71oVQjWDmxL._AC_UL320_.jpg", price: "149,99", rating: "4,1★" },
      { asin: "B0000AN3QI", title: "Bialetti Moka Express, Cafetera Italiana para Espresso, 3 Tazas (130 ml)", note: "La cafetera italiana de estufa original, sin electricidad ni cápsulas; el tamaño se mide en tazas (esta es de 3). Muy barata y con casi 25.000 valoraciones.", img: "https://m.media-amazon.com/images/I/61iN9DF1xcL._AC_UL320_.jpg", price: "28,90", rating: "4,4★" },
      { asin: "B09GPLRVN4", title: "Philips L'Or Barista Sublime, Cafetera Espresso de Cápsulas, 19 Bares", note: "Para cápsulas L'OR Barista (simple y doble); ajusta el volumen entre 20 y 270 ml. Gama media con más de 18.000 valoraciones.", img: "https://m.media-amazon.com/images/I/61aKhO6hw9L._AC_UL320_.jpg", price: "74,99", rating: "4,5★" },
      { asin: "B06WGTZ874", title: "De'Longhi Dedica Style, Cafetera Espresso Manual con Espumador Manual", note: "Espresso manual de 15 bares con Thermoblock y espumador de leche; funciona con café molido o monodosis.", img: "https://m.media-amazon.com/images/I/61kiURHfQrL._AC_UL320_.jpg", price: "139,00", rating: "4,2★" },
      { asin: "B00INSX904", title: "KRUPS Roma, Cafetera Superautomática 15 Bares, Depósito 1,7 L, Negra", note: "Superautomática con molinillo cónico de metal (3 niveles de molido) y boquilla de vapor; panel manual con indicadores LED, sin pantalla.", img: "https://m.media-amazon.com/images/I/61XWc7v4BnL._AC_UL320_.jpg", price: "299,99", rating: "4,2★" },
    ],
  },
  {
    slug: "basculas-de-cocina",
    img: "/assets/img/guias/basculas-de-cocina.jpg",
    title: "Cómo elegir una báscula de cocina",
    dek: "Precisión, capacidad máxima y tamaño de plataforma: lo que de verdad diferencia una báscula de cocina barata de una que dura años.",
    updated: "2026-09-16",
    intro: [
      "La báscula de cocina es de los electrodomésticos más baratos de la cocina, pero también uno de los que más se usa si te gusta seguir recetas al gramo: repostería, dietas con macros o simplemente evitar desperdicio de ingredientes. La diferencia entre una báscula que dura años y una que falla a los pocos meses no está siempre en el precio.",
      "Esta guía explica qué mirar en cualquier báscula de cocina digital, sea del precio que sea.",
    ],
    sections: [
      {
        heading: "Precisión y capacidad máxima",
        body: [
          "La precisión (habitualmente 1 gramo) es el dato más importante para repostería o nutrición, donde unos gramos de diferencia cambian el resultado. La capacidad máxima (10-15kg es habitual, algunas llegan a 30-40kg) rara vez es un problema salvo que peses ingredientes muy voluminosos o utensilios grandes sobre la propia báscula.",
          "Cuidado con las básculas que pierden precisión con pesos muy bajos (menos de 5-10 gramos): si vas a pesar levadura, especias o cafeína en polvo en pequeñas cantidades, revisa específicamente ese rango en la ficha o en las reseñas.",
        ],
      },
      {
        heading: "Función tara y unidades",
        body: [
          "La función tara (poner a cero el peso del recipiente vacío antes de añadir el ingrediente) es imprescindible para cualquier uso serio: permite pesar directamente dentro del bol donde vas a mezclar, sin cálculos. El cambio entre gramos, mililitros, onzas y libras es útil si sigues recetas en otros sistemas de medida, algo habitual con recetas en inglés.",
          "Algunas básculas más avanzadas incluyen conexión a app para el recuento de macros o calorías: un extra interesante solo si de verdad vas a usar ese seguimiento nutricional de forma continuada.",
        ],
      },
      {
        heading: "Tamaño y material de la plataforma",
        body: [
          "Una plataforma grande facilita pesar recipientes anchos (boles, bandejas) sin que sobresalgan por los lados; el acero inoxidable resiste mejor la humedad y el uso diario que el plástico, aunque encarece algo el modelo. El grosor y la estabilidad de la base también influyen en que el peso no varíe al tocar ligeramente la báscula.",
          "Si tienes poco espacio en la cocina, valora los modelos plegables o muy delgados que se guardan de pie en un cajón estrecho, frente a los modelos con plataforma fija más voluminosa.",
        ],
      },
      {
        heading: "Alimentación y pantalla",
        body: [
          "La mayoría de básculas funcionan con pilas (AAA habitualmente); los modelos con carga USB-C evitan tener que comprar pilas, pero dependen de recordar cargarlas. Una pantalla LCD grande y con buen contraste se lee mejor con las manos ocupadas cocinando, especialmente si la cocina tiene poca luz sobre la encimera.",
          "El apagado automático tras unos segundos de inactividad alarga la vida de la pila o batería y es un extra habitual incluso en básculas económicas.",
        ],
      },
    ],
    checklist: [
      "Precisión de 1g como mínimo, y mejor si mantiene esa precisión con pesos bajos",
      "Función tara para pesar directamente dentro del recipiente de mezcla",
      "Capacidad máxima acorde a lo que sueles pesar (10-15kg suele ser suficiente)",
      "Plataforma de tamaño cómodo para tus boles y bandejas habituales",
      "Apagado automático para alargar la duración de pilas o batería",
    ],
    faq: [
      {
        q: "¿Necesito una báscula con conexión a app para contar macros?",
        a: "Solo si vas a hacer seguimiento nutricional de forma continua. Para cocinar y repostería, una báscula digital normal con función tara es suficiente y no depende de tener el móvil a mano.",
      },
      {
        q: "¿Por qué mi báscula de cocina da resultados distintos según dónde la coloco?",
        a: "Las básculas digitales necesitan una superficie plana y estable: sobre una encimera irregular, una alfombrilla o cerca del borde pueden dar lecturas inconsistentes. Colócala siempre sobre una superficie firme y nivelada.",
      },
      {
        q: "¿Compensa una báscula de acero inoxidable frente a una de plástico?",
        a: "El acero inoxidable aguanta mejor la humedad y los golpes con el paso de los años, pero una báscula de plástico de buena calidad cumple igual si la cuidas y no la sumerges en agua directamente.",
      },
    ],
    products: [
      { asin: "B06X9NQ8GX", title: "Amazon Basics Báscula de Cocina Digital con Pantalla LCD, Acero Inoxidable", note: "Modelo básico y fiable, acero inoxidable a precio de entrada.", img: "https://m.media-amazon.com/images/I/815FWesbK3L._AC_UL320_.jpg", price: "12,99", rating: "4,7★" },
      { asin: "B0FVM85PN3", title: "HomeFashion Báscula de Cocina 22x16cm, hasta 20kg, Digital", note: "Capacidad alta (20kg) a precio muy ajustado.", img: "https://m.media-amazon.com/images/I/617uRO2E4jL._AC_UL320_.jpg", price: "9,99", rating: "4,6★" },
      { asin: "B08NDVTN5C", title: "GRIFEMA GA2002, Báscula de Cocina con Pantalla LCD, Acero Inoxidable", note: "La más económica de la selección con acero inoxidable.", img: "https://m.media-amazon.com/images/I/61zowTWkD4L._AC_UL320_.jpg", price: "7,99", rating: "4,6★" },
      { asin: "B0DKB52KJ4", title: "Balanza de Cocina Digital con Puerto USB-C", note: "Carga por USB-C, sin necesidad de comprar pilas.", img: "https://m.media-amazon.com/images/I/71N9BdAwkxL._AC_UL320_.jpg", price: "14,99", rating: "4,5★" },
      { asin: "B0B4RTVZVC", title: "Báscula de Cocina Digital 15kg, Acero Inoxidable Multifuncional", note: "Buen punto medio de capacidad y materiales.", img: "https://m.media-amazon.com/images/I/71PyZ3qqAlL._AC_UL320_.jpg", price: "23,99", rating: "4,6★" },
      { asin: "B0C7VC6D92", title: "Báscula de Cocina Digital 10kg, Precisión hasta 1g, Diseño Delgado", note: "Diseño delgado, fácil de guardar en un cajón estrecho.", img: "https://m.media-amazon.com/images/I/61wIruIxTVL._AC_UL320_.jpg", price: "9,99", rating: "4,5★" },
      { asin: "B08WL7WJZ7", title: "HomeFashion Báscula de Cocina con Pantalla LCD, Acero Inoxidable", note: "Muy similar a otros modelos de la marca, precio de entrada.", img: "https://m.media-amazon.com/images/I/71-mYe0p3RL._AC_UL320_.jpg", price: "7,99", rating: "4,6★" },
      { asin: "B08SGBS7RQ", title: "Vitafit Báscula de Cocina Digital 15kg, Precisión 1g, Plataforma Grande", note: "Plataforma amplia, cómoda para boles y bandejas grandes.", img: "https://m.media-amazon.com/images/I/51kW4Xl5KyL._AC_UL320_.jpg", price: "9,42", rating: "4,6★" },
      { asin: "B0H5KC3D82", title: "Arboleaf Báscula de Cocina Inteligente con App Nutricional", note: "Conexión a app para seguimiento de macros y calorías.", img: "https://m.media-amazon.com/images/I/71shJvCB9hL._AC_UL320_.jpg", price: "24,99", rating: "4,4★" },
      { asin: "B0C7BZGPSG", title: "Báscula de Cocina 30kg/66lb con Función Tara y Conteo de Piezas", note: "Capacidad alta y función de conteo de piezas, útil para repostería en cantidad.", img: "https://m.media-amazon.com/images/I/612FDfvbrhL._AC_UL320_.jpg", price: "39,99", rating: "4,4★" },
      { asin: "B0D4D7Z4S1", title: "Báscula de Cocina Grande 40kg, Acero Inoxidable, Precisión 1g", note: "La de mayor capacidad de la selección, para uso intensivo o profesional casero.", img: "https://m.media-amazon.com/images/I/71xTTHMHnzL._AC_UL320_.jpg", price: "46,99", rating: "4,5★" },
      { asin: "B0CP74BLCZ", title: "Báscula de Cocina BOMATA, Precisión 0,1g, Capacidad 5kg", note: "Precisión decimal (0,1g), útil para repostería o dosis muy pequeñas.", img: "https://m.media-amazon.com/images/I/717nrq9RPpL._AC_UL320_.jpg", price: "34,99", rating: "4,5★" },
      { asin: "B002RLFS20", title: "Soehnle Báscula de Cocina Page Profi, 15 kg con Función Hold", note: "Báscula extraplana con Sensor Touch, tara y función HOLD (congela el peso 10 s); superficie de cristal fácil de limpiar.", img: "https://m.media-amazon.com/images/I/61JDv5SZ2nL._AC_UL320_.jpg", price: "39,99", rating: "4,6★" },
      { asin: "B00JP8UMFG", title: "Soehnle Balanza Cuchara Cooking Star, Precisión 0,1 g, 500 g", note: "Báscula de cuchara de 0,1 g de precisión para especias y cantidades pequeñas; cuenco extraíble y función tara.", img: "https://m.media-amazon.com/images/I/51rseUDALfL._AC_UL320_.jpg", price: "21,95", rating: "4,3★" },
      { asin: "B0DDTQ9DFS", title: "PORTENTUM Peso de Cocina con Pantalla LCD, Acero Inoxidable, 1 g a 5 kg", note: "Muy económica y compacta (18 x 14 x 1,5 cm): hasta 5 kg con precisión de 1 g, tara y cambio de unidades.", img: "https://m.media-amazon.com/images/I/71QSrAf38jL._AC_UL320_.jpg", price: "7,99", rating: "4,5★" },
      { asin: "B0GTCTGCS3", title: "Balanza de Cocina Digital con Doble Plato, 500g/0,01g y 15kg/1g", note: "Dos plataformas: una para pesos pequeños (0,01 g) y otra hasta 15 kg; 7 unidades, tara y acero inoxidable. Marca genérica con unas 800 valoraciones.", img: "https://m.media-amazon.com/images/I/71k-luOyQbL._AC_UL320_.jpg", price: "28,99", rating: "4,6★" },
    ],
  },
  {
    slug: "organizadores-de-cocina",
    img: "/assets/img/guias/organizadores-de-cocina.jpg",
    title: "Cómo elegir organizadores y almacenaje para la cocina",
    dek: "Especieros, organizadores de armario y de fregadero: cómo aprovechar mejor el espacio sin comprar accesorios que luego no encajan.",
    updated: "2026-09-15",
    intro: [
      "Los organizadores de cocina son la forma más barata de ganar espacio útil sin hacer obra: especieros extensibles, bandejas para debajo del fregadero, organizadores de sartenes o soportes para utensilios. El problema habitual no es la calidad del producto, sino comprar una medida que no encaja en el hueco real que tienes disponible.",
      "Esta guía explica qué medir y qué mirar antes de comprar cualquier organizador de cocina, sin ceñirse a una marca concreta.",
    ],
    sections: [
      {
        heading: "Mide el hueco antes de comprar",
        body: [
          "El error más habitual con organizadores extensibles o apilables es no medir el ancho, alto y profundidad reales del armario, cajón o zona bajo el fregadero antes de comprar: un organizador \"extensible\" tiene un rango de ajuste concreto, no se adapta a cualquier medida. Anota también la altura libre si vas a apilar dos niveles, y ten en cuenta tuberías o codos bajo el fregadero que reducen el espacio utilizable real.",
          "Para especieros de pared o de puerta, comprueba el peso máximo soportado si vas a colgar botes de cristal llenos, no solo el número de compartimentos.",
        ],
      },
      {
        heading: "Materiales y resistencia a la humedad",
        body: [
          "Bajo el fregadero, la humedad es constante: el acero inoxidable o el plástico resistente al agua aguantan mejor que el metal pintado sin recubrimiento, que puede oxidarse con el tiempo. Para especieros y organizadores de armario, el bambú y la madera tratada dan un acabado más cuidado, pero requieren algo más de mantenimiento que el metal o el plástico si se mojan.",
          "Los organizadores extensibles con mecanismo telescópico o de rieles suelen ser más resistentes al uso diario que los que solo encajan a presión, que con el tiempo pueden perder firmeza.",
        ],
      },
      {
        heading: "Organizadores de sartenes, ollas y utensilios",
        body: [
          "Los organizadores de sartenes con divisores ajustables permiten guardarlas de pie en lugar de apiladas, lo que evita rayar el antiadherente y facilita sacar la que necesitas sin mover el resto. Comprueba que los divisores se puedan reordenar o quitar si tu batería de cocina cambia de tamaño con el tiempo.",
          "Los soportes de encimera para utensilios (cucharas, espátulas) liberan espacio en cajones, pero ocupan superficie visible: valora si prefieres ese hueco libre en la encimera antes de añadir un soporte más.",
        ],
      },
      {
        heading: "Especieros: extensibles, apilables o de puerta",
        body: [
          "Los especieros extensibles se ajustan al ancho del armario y aprovechan estantes poco usados en altura; los apilables multiplican el espacio vertical en una balda; los de puerta usan un hueco que de otro modo queda vacío, aunque tienen algo menos de capacidad. Elige el tipo según qué espacio concreto de tu cocina tienes sin aprovechar, en lugar de comprar el que parezca más completo en la foto.",
          "Los organizadores con etiquetas o marcadores incluidos ahorran tiempo si vas a trasvasar especias a botes uniformes en lugar de guardar los envases originales de distintos tamaños.",
        ],
      },
    ],
    checklist: [
      "Mide el ancho, alto y profundidad reales del hueco antes de comprar",
      "Revisa el rango de ajuste de los organizadores extensibles, no solo el nombre del producto",
      "Prioriza acero inoxidable o plástico resistente a la humedad bajo el fregadero",
      "Comprueba el peso máximo soportado en especieros de pared o puerta",
      "Elige el tipo de especiero (extensible, apilable o de puerta) según el espacio libre real que tienes",
    ],
    faq: [
      {
        q: "¿Los organizadores extensibles se ajustan a cualquier armario?",
        a: "No: cada modelo tiene un rango de ajuste concreto (por ejemplo, de 30 a 50cm). Mide siempre el hueco disponible antes de comprar y compara con el rango indicado en la ficha del producto.",
      },
      {
        q: "¿Qué material aguanta mejor la humedad bajo el fregadero?",
        a: "El acero inoxidable y el plástico resistente al agua son los que mejor resisten la humedad constante de esa zona. El metal pintado sin recubrimiento anticorrosión tiende a oxidarse con el tiempo en ese ambiente.",
      },
      {
        q: "¿Compensa comprar organizadores de sartenes si ya las apilo sin problema?",
        a: "Depende de si te preocupa rayar el antiadherente al apilarlas o si te cuesta sacar la sartén que necesitas sin mover las demás. Si ninguno de los dos es un problema real para ti, puedes prescindir de ese organizador concreto.",
      },
    ],
    products: [
      { asin: "B0FCDBZGD6", title: "Organizador de Fregadero de Cocina, Soporte para Estropajo", note: "Solución sencilla y barata para mantener seco el estropajo junto al fregadero.", img: "https://m.media-amazon.com/images/I/61vxhEWFTHL._AC_UL320_.jpg", price: "11,99", rating: "4,1★" },
      { asin: "B0FJ2BRTT6", title: "Magheo Organizador de Sartenes y Ollas Expandible, 2 Piezas, 9 Divisores", note: "Divisores ajustables para guardar sartenes de pie sin rayarlas.", img: "https://m.media-amazon.com/images/I/81-fLnGZQZL._AC_UL320_.jpg", price: "34,99", rating: "4,4★" },
      { asin: "B07XYMZC9P", title: "Amazon Basics Organizador de Encimera y Pared para Utensilios, Blanco", note: "Soporte sencillo para liberar espacio de cajón, apto para pared o encimera.", img: "https://m.media-amazon.com/images/I/71D3UYnbojL._AC_UL320_.jpg", price: "11,43", rating: "4,6★" },
      { asin: "B0BLHL2DML", title: "Organizador de Cocina de 2 Niveles para Debajo del Fregadero, Extraíble (Pack 2)", note: "Dos niveles extraíbles, aprovecha bien la altura bajo el fregadero.", img: "https://m.media-amazon.com/images/I/71Z4pCQFDmL._AC_UL320_.jpg", price: "26,98", rating: "4,4★" },
      { asin: "B0DK6J5LQ5", title: "SONGMICS HOME Especiero Extensible y Apilable, Juego de 2", note: "Extensible y apilable a la vez, se adapta a distintos anchos de armario.", img: "https://m.media-amazon.com/images/I/71sGsZGl3VL._AC_UL320_.jpg", price: "27,99", rating: "4,5★" },
      { asin: "B0DS4SDTZ7", title: "Organizador para Fregadero de Cocina, Estante de Acero Inoxidable", note: "Acero inoxidable, resistente a la humedad constante de la zona del fregadero.", img: "https://m.media-amazon.com/images/I/71cLcQQGL0L._AC_UL320_.jpg", price: "9,99", rating: "4,2★" },
      { asin: "B0FRS9B3XR", title: "Organizador de Armario de Cocina Expandible, Especiero de Altura Regulable", note: "Altura regulable además de ancho, útil para armarios con estantes irregulares.", img: "https://m.media-amazon.com/images/I/51OH0srewFL._AC_UL320_.jpg", price: "19,99", rating: "4,3★" },
      { asin: "B0DRXF5N9Z", title: "SONGMICS Estante para Especias Extensible, Juego de 2", note: "Buena relación calidad-precio para armarios de ancho medio.", img: "https://m.media-amazon.com/images/I/51TUel+Mq9L._AC_UL320_.jpg", price: "22,94", rating: "4,6★" },
      { asin: "B08MF6GQBH", title: "SONGMICS Especiero de 3 Niveles, Marco de Bambú", note: "Acabado en bambú, más decorativo que las versiones solo metálicas.", img: "https://m.media-amazon.com/images/I/81EQDuBPCvL._AC_UL320_.jpg", price: "24,99", rating: "4,7★" },
      { asin: "B09ZV73T8L", title: "SONGMICS Especiero Metálico Apilable y Ampliable, Juego de 2", note: "Apilable para aprovechar mejor la altura de una balda poco usada.", img: "https://m.media-amazon.com/images/I/61xHkL5MSHL._AC_UL320_.jpg", price: "20,99", rating: "4,5★" },
      { asin: "B09TQHZ5JN", title: "IBUYKE Especiero de 2 Niveles, Organizador de Especias, Marrón", note: "Diseño de dos niveles fijo, sin mecanismo extensible.", img: "https://m.media-amazon.com/images/I/71zF9Zq2vWL._AC_UL320_.jpg", price: "36,99", rating: "4,7★" },
      { asin: "B0FRFB54X4", title: "Organizador de Especias Extensible 2 en 1, Estante Ajustable de Bambú", note: "Combina bambú con mecanismo extensible; sirve también para el baño.", img: "https://m.media-amazon.com/images/I/6182QlStDNL._AC_UL320_.jpg", price: "14,24", rating: "4,5★" },
      { asin: "B0B6N7CR8C", title: "Lifewit Organizador de Cubiertos para Cajón, Bandeja Extensible Compacta", note: "Cubertero extensible (33 a 57 cm) con 8 compartimentos de polipropileno sin BPA; cerca de 26.000 valoraciones.", img: "https://m.media-amazon.com/images/I/71AWv57NcdL._AC_UL320_.jpg", price: "18,99", rating: "4,7★" },
      { asin: "B094JBXLWM", title: "Housolution Organizador de Ollas y Sartenes, Soporte para Tapas", note: "Estante de hierro con dos niveles apilables o separables; según la ficha, admite hasta 13 ollas, tapas y platos.", img: "https://m.media-amazon.com/images/I/61+yf437fJL._AC_UL320_.jpg", price: "19,99", rating: "4,5★" },
      { asin: "B09W9RS4JL", title: "Juego de 6 Organizadores para Frigorífico, 3 Tamaños, para Despensa y Congelador", note: "Contenedores apilables de PET sin BPA con asas para sacarlos fácilmente; útiles para ordenar nevera y despensa.", img: "https://m.media-amazon.com/images/I/81Xsub8BX0L._AC_UL320_.jpg", price: "23,99", rating: "4,5★" },
      { asin: "B0CTC6QJ36", title: "Kitstorack Metal 2 Paquete Organizador Fregadero, 2 Niveles Extraíble", note: "Pack de 2 estantes deslizantes de 2 niveles con altura ajustable (5 posiciones); la opción cara y más completa para el mueble del fregadero.", img: "https://m.media-amazon.com/images/I/71Xmb5ot4NL._AC_UL320_.jpg", price: "56,99", rating: "4,4★" },
    ],
  },
  {
    slug: "sartenes-antiadherentes",
    img: "/assets/img/guias/sartenes-antiadherentes.jpg",
    title: "Cómo elegir sartenes y ollas antiadherentes",
    dek: "Materiales sin PFOA/PFAS, aptas para inducción y grosor del fondo: los criterios para que el antiadherente dure más de una temporada.",
    updated: "2026-09-15",
    intro: [
      "El antiadherente es el revestimiento de sartén y olla que más rápido se degrada si no se cuida bien o si se compra de baja calidad: rayado prematuro, comida que empieza a pegarse a los pocos meses o revestimientos que se descaman son los problemas más habituales. La buena noticia es que hoy es fácil comprar sartenes de calidad libres de PFOA y PFAS a precios razonables.",
      "Esta guía no recomienda una marca por encima de otra: explica qué mirar en cualquier sartén u olla antiadherente antes de comprarla.",
    ],
    sections: [
      {
        heading: "Materiales y seguridad del revestimiento",
        body: [
          "Busca siempre que la ficha del producto especifique \"sin PFOA\" y, a ser posible, \"sin PFAS\": son los compuestos que generaban más dudas de seguridad en los antiadherentes antiguos, y hoy la mayoría de fabricantes ya los han eliminado, pero conviene comprobarlo explícitamente. Los antiadherentes de piedra, cerámica o titanio suelen anunciarse como más resistentes al rayado que el teflón clásico, aunque su durabilidad real depende mucho también del grosor de la base.",
          "El aluminio fundido con antiadherente es el material más habitual en sartenes de gama media: reparte bien el calor y pesa menos que el hierro fundido o el acero inoxidable con núcleo de aluminio.",
        ],
      },
      {
        heading: "Compatibilidad con tu tipo de cocina",
        body: [
          "No todas las sartenes son aptas para inducción: necesitan una base con núcleo magnético (normalmente de acero) que la ficha técnica debe indicar explícitamente. Si tu cocina es de gas o vitrocerámica normal, esa restricción no aplica, pero conviene comprobarlo antes de comprar si no estás seguro del tipo de placa que tienes.",
          "El diámetro también debe ajustarse al fuego o zona de inducción que más uses: una sartén demasiado grande para un fuego pequeño calienta de forma desigual, y una demasiado pequeña para una zona de inducción grande desaprovecha potencia.",
        ],
      },
      {
        heading: "Grosor del fondo y mango",
        body: [
          "Un fondo más grueso (aluminio fundido o multicapa) reparte mejor el calor y evita puntos calientes que queman la comida en el centro mientras el resto queda crudo; los fondos muy finos calientan rápido pero de forma menos uniforme. El mango debe mantenerse frío al tacto durante la cocción y estar bien fijado: los mangos remachados suelen aguantar más años que los atornillados en sartenes muy usadas.",
          "Comprueba si el mango es apto para horno (metálico, sin partes plásticas) si sueles terminar platos gratinando o metiendo la sartén directamente al horno.",
        ],
      },
      {
        heading: "Cuidado para que el antiadherente dure",
        body: [
          "Usar utensilios de silicona, madera o nylon en lugar de metal alarga mucho la vida del revestimiento, igual que evitar el choque térmico (no meter una sartén caliente directamente bajo el agua fría). Aunque el fabricante indique que es apta para lavavajillas, lavar a mano con un estropajo suave suele conservar mejor el antiadherente a largo plazo.",
          "Cocinar siempre con algo de grasa o aceite, incluso en sartenes antiadherentes, reduce el desgaste del revestimiento frente a cocinar completamente en seco a fuego alto de forma habitual.",
        ],
      },
    ],
    checklist: [
      "Comprueba que la ficha indica expresamente \"sin PFOA\" (y a ser posible \"sin PFAS\")",
      "Verifica compatibilidad con inducción si tu cocina es de ese tipo",
      "Prioriza un fondo grueso para un calor más uniforme",
      "Mango bien fijado (remachado) y apto para horno si lo necesitas",
      "Usa utensilios de silicona o madera para alargar la vida del antiadherente",
    ],
    faq: [
      {
        q: "¿Es peligroso seguir usando sartenes antiguas con teflón?",
        a: "Mientras el revestimiento esté en buen estado, sin rayaduras ni descamación, no supone un problema. El riesgo aparece cuando el antiadherente está dañado y se sobrecalienta muy por encima de su temperatura recomendada: en ese punto conviene sustituir la sartén.",
      },
      {
        q: "¿Las sartenes de piedra o cerámica duran más que las de teflón clásico?",
        a: "Suelen anunciarse como más resistentes al rayado, pero su durabilidad real depende mucho de la calidad de fabricación y del cuidado diario. Un teflón de buena calidad bien cuidado puede durar tanto o más que una cerámica de gama baja mal tratada.",
      },
      {
        q: "¿Puedo meter una sartén antiadherente en el lavavajillas sin problema?",
        a: "Si el fabricante lo indica, sí, pero el detergente y el calor del lavavajillas desgastan el revestimiento algo más rápido que lavar a mano con un estropajo suave. Para alargar la vida útil, el lavado a mano suele ser mejor opción a largo plazo.",
      },
    ],
    products: [
      { asin: "B074RPCNMX", title: "Amazon Basics Set de Sartenes Antiadherentes, 3 Unidades (20/25/30cm), Negro", note: "Set completo de tres tamaños a precio muy competitivo.", img: "https://m.media-amazon.com/images/I/81COU6udPbL._AC_UL320_.jpg", price: "29,75", rating: "4,3★" },
      { asin: "B0GTS95742", title: "YASHE Sartén Antiadherente 20cm, Atóxica, sin PTFE ni PFAS", note: "Sin PTFE ni PFAS, tamaño pequeño ideal para huevos o raciones individuales.", img: "https://m.media-amazon.com/images/I/71IfDbMZRfL._AC_UL320_.jpg", price: "19,99", rating: "4,5★" },
      { asin: "B0GK2VL5F3", title: "Family Pack 3 Sartenes de Aluminio Antiadherente 20/24/26cm + Espátula", note: "Incluye espátula de nylon, útil para cuidar el antiadherente desde el primer día.", img: "https://m.media-amazon.com/images/I/910apfbc9tL._AC_UL320_.jpg", price: "49,99", rating: "4,6★" },
      { asin: "B0GT52456V", title: "Blue Diamond Sartén Híbrida de Acero Inoxidable 20cm, sin PFAS", note: "Tecnología híbrida de cerámica y acero inoxidable, sin PFAS.", img: "https://m.media-amazon.com/images/I/81Gi6vsohAL._AC_UL320_.jpg", price: "39,90", rating: "4,1★" },
      { asin: "B0GK1NKY1Y", title: "YASHE Sartén Antiadherente 24cm, Inducción, Atóxica, sin PTFE ni PFAS", note: "Apta para inducción, tamaño mediano para el uso diario más habitual.", img: "https://m.media-amazon.com/images/I/71DYnMZ5meL._AC_UL320_.jpg", price: "29,99", rating: "4,6★" },
      { asin: "B078XXNP69", title: "Monix Martín Berasategui, Set de 3 Sartenes 18/22/26cm", note: "Set firmado por un chef reconocido, buena relación precio-tamaños.", img: "https://m.media-amazon.com/images/I/91YvwWCxigL._AC_UL320_.jpg", price: "31,25", rating: "4,3★" },
      { asin: "B00LTT21LW", title: "BRA Prior, Sartén 24cm, Aluminio Fundido con Antiadherente", note: "Marca española clásica, aluminio fundido de fondo grueso.", img: "https://m.media-amazon.com/images/I/61G1F-NkE+L._AC_UL320_.jpg", price: "20,49", rating: "4,5★" },
      { asin: "B00LTT208Q", title: "BRA Prior, Sartén 20cm, Aluminio Fundido con Antiadherente", note: "Misma gama que la de 24cm, en tamaño pequeño.", img: "https://m.media-amazon.com/images/I/61G1F-NkE+L._AC_UL320_.jpg", price: "15,50", rating: "4,5★" },
      { asin: "B0FC59RC94", title: "La Moustache Sartén Antiadherente 26cm de Aluminio Fundido sin PFOA", note: "La mejor valoración de la selección, apta para todo tipo de cocinas incluida inducción.", img: "https://m.media-amazon.com/images/I/615kq+a969L._AC_UL320_.jpg", price: "16,90", rating: "4,9★" },
      { asin: "B0DDKVLR4W", title: "Kordisen Set de 3 Sartenes Antiadherentes para Inducción, sin PFOA (20/24/28cm)", note: "Set completo pensado específicamente para cocinas de inducción.", img: "https://m.media-amazon.com/images/I/71tXC8SwJyL._AC_UL320_.jpg", price: "57,99", rating: "4,6★" },
      { asin: "B008FX5WQG", title: "MAGEFESA Black Sartén 28cm, Antiadherente Bicapa Reforzado", note: "Recubrimiento bicapa reforzado, tamaño grande para varias raciones.", img: "https://m.media-amazon.com/images/I/71ExYuC7+jL._AC_UL320_.jpg", price: "12,98", rating: "4,0★" },
      { asin: "B00LTT1ZDC", title: "BRA Prior, Sartén 18cm, Aluminio Fundido con Antiadherente", note: "El tamaño más pequeño de la gama BRA Prior, ideal para tortillas individuales.", img: "https://m.media-amazon.com/images/I/61G1F-NkE+L._AC_UL320_.jpg", price: "14,29", rating: "4,5★" },
      { asin: "B079J6DGND", title: "Tefal Daily Cook Sartén 26 cm, Acero Inoxidable", note: "Acero inoxidable con antiadherente extra grueso con partículas de titanio; apta para inducción y lavavajillas, con indicador Thermospot a 180 °C.", img: "https://m.media-amazon.com/images/I/51kzLZSDGtL._AC_UL320_.jpg", price: "41,90", rating: "4,5★" },
      { asin: "B00JJK6XTY", title: "WMF Devil Sartén Antiadherente 28 cm, Acero Inoxidable Cromargan", note: "Sartén de 28 cm apta para todo tipo de fuegos incluida inducción, resistente al calor hasta 260 °C; más de 14.000 valoraciones.", img: "https://m.media-amazon.com/images/I/61H6AzBB0rL._AC_UL320_.jpg", price: "39,99", rating: "4,4★" },
      { asin: "B0086ULLZ4", title: "Kuhn Rikon Easy Induction Sartén Antiadherente de Aluminio, 18 cm", note: "Sartén pequeña de aluminio forjado con 3 capas de antiadherente suizo libre de PFOA y fondo de inducción; apta para lavavajillas.", img: "https://m.media-amazon.com/images/I/81-pCOk3eBL._AC_UL320_.jpg", price: "38,50", rating: "4,3★" },
      { asin: "B07W99LGGT", title: "HexClad Sartén Hybrid Antiadherente 20 cm, Asa Fría, Apta para Horno", note: "Gama alta: superficie híbrida hexagonal de acero y antiadherente, triple capa con núcleo de aluminio y garantía de por vida contra defectos (según la ficha).", img: "https://m.media-amazon.com/images/I/81n3lEN41AL._AC_UL320_.jpg", price: "149,00", rating: "4,1★" },
    ],
  },
  {
    slug: "tostadoras-y-sandwicheras",
    img: "/assets/img/guias/tostadoras-y-sandwicheras.jpg",
    title: "Cómo elegir una tostadora o sandwichera",
    dek: "Ranuras, niveles de tostado y tipo de placas: los criterios para elegir entre una tostadora clásica y una sandwichera o grill de placas.",
    updated: "2026-09-15",
    intro: [
      "Tostadora y sandwichera resuelven necesidades distintas aunque a veces se confunden en la misma búsqueda: la tostadora calienta pan de molde o rebanadas en ranuras verticales, mientras que la sandwichera o grill de placas cocina bocadillos, sándwiches o alimentos a la plancha entre dos superficies calientes. Muchos modelos combinan ambas funciones o incluyen placas intercambiables.",
      "Esta guía cubre los criterios de ambos tipos de aparato, sin recomendar una marca por encima de otra.",
    ],
    sections: [
      {
        heading: "Tostadoras: ranuras y niveles de tostado",
        body: [
          "El número de ranuras (2 o 4) determina cuántas rebanadas puedes tostar a la vez; para una familia de más de dos personas, 4 ranuras evitan tener que hacer varias tandas por la mañana. Los niveles de tostado ajustables (habitualmente 6-7) permiten repetir el punto exacto que te gusta sin ir probando cada vez.",
          "Las ranuras extra anchas son necesarias si sueles tostar pan artesano grueso o bollería, no solo pan de molde estándar; revisa esa medida si es tu caso antes de comprar.",
        ],
      },
      {
        heading: "Sandwicheras y grills de placas",
        body: [
          "Las placas antiadherentes lisas sirven para tostar pan y fundir queso de forma uniforme; las placas con relieve (tipo grill) marcan rayas y son mejores para carne, verduras o panini con más textura. Algunos modelos incluyen placas intercambiables para alternar entre ambos usos sin comprar dos aparatos distintos.",
          "La apertura a 180 grados (que permite usar el aparato como plancha plana completa, no solo cerrado) da más versatilidad para cocinar alimentos que no encajan bien cerrados, como una tortilla o varias hamburguesas a la vez.",
        ],
      },
      {
        heading: "Potencia y tiempo de calentamiento",
        body: [
          "Entre 700 y 1000W es habitual en tostadoras; en sandwicheras y grills, entre 1000 y 2000W, con la potencia más alta traduciéndose en menos tiempo de espera hasta que las placas alcanzan temperatura. Un indicador luminoso que avisa cuándo el aparato está listo para usar evita adivinar el tiempo de precalentado por prueba y error.",
          "Los grills de mayor potencia (1500-2000W) cocinan más rápido carnes y verduras, pero también consumen más electricidad por uso: valora si de verdad necesitas esa potencia extra o si un modelo de gama media cubre tu uso habitual.",
        ],
      },
      {
        heading: "Limpieza y almacenaje",
        body: [
          "Las placas extraíbles y aptas para lavavajillas son mucho más cómodas de limpiar que las fijas, sobre todo en grills donde queda grasa entre las ranuras del relieve. La bandeja recogegrasa extraíble facilita vaciar los restos sin tener que inclinar todo el aparato.",
          "El almacenaje en vertical (algunos modelos se guardan de pie, como un libro) ahorra espacio de armario frente a los que solo se guardan planos, algo a tener en cuenta si la cocina tiene poco espacio de almacenaje.",
        ],
      },
    ],
    checklist: [
      "Elige tostadora de 4 ranuras si sois más de dos personas en casa",
      "Ranuras anchas si sueles tostar pan grueso o bollería",
      "Placas lisas para tostar y fundir, con relieve tipo grill para carne y verduras",
      "Apertura a 180º si quieres usarla también como plancha plana",
      "Placas extraíbles y aptas para lavavajillas para una limpieza más rápida",
    ],
    faq: [
      {
        q: "¿Una sandwichera puede sustituir a una plancha o grill de cocina?",
        a: "Para bocadillos, panini y raciones pequeñas de carne o verdura sí. Para cocinar cantidades grandes o piezas más gruesas, una plancha de cocina con más superficie sigue siendo más práctica.",
      },
      {
        q: "¿Qué diferencia hay entre placas lisas y placas con relieve?",
        a: "Las placas lisas reparten el calor de forma uniforme y son mejores para tostar pan o fundir queso; las placas con relieve marcan rayas de grill y ayudan a que la grasa sobrante escurra, algo más adecuado para carne y verduras.",
      },
      {
        q: "¿Compensa un modelo con placas intercambiables?",
        a: "Si vas a usar el aparato tanto para sándwiches como para grill de carne o verduras con cierta frecuencia, sí: evita comprar dos aparatos distintos. Si solo vas a hacer un uso, un modelo fijo de ese tipo suele salir más barato.",
      },
    ],
    products: [
      { asin: "B0D2L53YV2", title: "Amazon Basics Tostadora 4 Rebanadas, 7 Niveles de Tostado, Bandeja Extraíble", note: "4 ranuras y bandeja de migas extraíble a precio de entrada.", img: "https://m.media-amazon.com/images/I/71SHagRmavL._AC_UL320_.jpg", price: "32,46", rating: "4,5★" },
      { asin: "B0G2YT619D", title: "Olvy Sandwichera Grill Eléctrica Plancha Panini XXL", note: "Tamaño XXL, buena opción si sueles preparar panini grandes.", img: "https://m.media-amazon.com/images/I/71U4rqrQiBL._AC_UL320_.jpg", price: "59,99", rating: "4,3★" },
      { asin: "B004APAE9S", title: "Ariete Grill y Plancha Eléctrica Slim 1911, Doble Función y Sandwichera, 1000W", note: "Combina grill y sandwichera en un formato compacto.", img: "https://m.media-amazon.com/images/I/51x0KeYpUrL._AC_UL320_.jpg", price: "39,99", rating: "4,5★" },
      { asin: "B073Q1R4RJ", title: "Cecotec Parrilla Eléctrica Rock'nGrill 1000, Revestimiento Antiadherente RockStone", note: "Revestimiento de piedra antiadherente en un grill de entrada de gama.", img: "https://m.media-amazon.com/images/I/61lZer0B1KL._AC_UL320_.jpg", price: "32,90", rating: "4,4★" },
      { asin: "B0C8JFGSWW", title: "JATA JEGR1107, Grill Eléctrico de Asar Doble 1000W, Sandwichera y Grill 180º", note: "Apertura a 180º para usarlo también como plancha plana.", img: "https://m.media-amazon.com/images/I/61nEF1ddmGL._AC_UL320_.jpg", price: "23,00", rating: "3,9★" },
      { asin: "B0822N3B24", title: "Cecotec Grill Eléctrico Rock'nGrill 1500 Rapid, Revestimiento RockStone", note: "Más potencia (1500W) que el modelo de entrada de la misma gama.", img: "https://m.media-amazon.com/images/I/61UU2IfguuL._AC_UL320_.jpg", price: "29,90", rating: "4,5★" },
      { asin: "B00GSLVV7G", title: "Tristar SA-3050 Sandwichera Grill Compacta con Compartimento para Cable", note: "La más económica y compacta, con recogecables integrado.", img: "https://m.media-amazon.com/images/I/61wTj0IuDfL._AC_UL320_.jpg", price: "12,99", rating: "4,4★" },
      { asin: "B0F846P87G", title: "Cecotec Parrilla Eléctrica Plancha y Sandwichera Rock'nGrill Rapid, 1500W", note: "Superficie generosa (24,5x17,3cm) con buena potencia.", img: "https://m.media-amazon.com/images/I/61TT8o79EYL._AC_UL320_.jpg", price: "32,90", rating: "4,5★" },
      { asin: "B08X759C85", title: "SOGO Grill y Sandwichera Profesional de Bajo Consumo 2000W, Placas Lisas", note: "Potencia alta (2000W) con enfoque en bajo consumo eléctrico.", img: "https://m.media-amazon.com/images/I/812MaxyxYrL._AC_UL320_.jpg", price: "54,99", rating: "4,2★" },
      { asin: "B01HGK4OK8", title: "Aigostar Sandwichera y Panini con Placas Antiadherentes 1000W, Rojo", note: "Diseño sencillo y colorido, buena opción de entrada de gama.", img: "https://m.media-amazon.com/images/I/71bz4vgMX9L._AC_UL320_.jpg", price: "26,59", rating: "4,2★" },
      { asin: "B0GLXPRGWS", title: "Mellerware Parrilla Eléctrica Hotty Sand 1500W, Apertura 180º, Doble Placa", note: "Doble placa con apertura completa, versátil para varios usos.", img: "https://m.media-amazon.com/images/I/61o8Oifz+ML._AC_UL320_.jpg", price: "39,99", rating: "4,4★" },
      { asin: "B01N2R2P3U", title: "Tristar GR-2650 Parrilla Eléctrica 22,5x14cm, Revestimiento Antiadherente", note: "Formato compacto, adecuado para cocinas pequeñas o uso individual.", img: "https://m.media-amazon.com/images/I/91xY5rq6p2L._AC_UL320_.jpg", price: "20,99", rating: "4,3★" },
      { asin: "B01N9XBDTI", title: "Philips Tostadora de Pan 2 Ranuras, 8 Ajustes, Calientabollos, Negro", note: "Tostadora básica de 8 niveles con recalentar, descongelar y cancelar; superó las 61.000 valoraciones.", img: "https://m.media-amazon.com/images/I/61sh9RMgtyL._AC_UL320_.jpg", price: "24,99", rating: "4,5★" },
      { asin: "B01J5FFW9Y", title: "Philips Tostadora de Pan 2 Ranuras Extraanchas, 7 Intensidades, Gris", note: "Ranuras un 10 % más anchas según la ficha, para pan de molde y rebanadas gruesas; recalentar y descongelar.", img: "https://m.media-amazon.com/images/I/61LnPHVPHvL._AC_UL320_.jpg", price: "39,99", rating: "4,5★" },
      { asin: "B0CPJ23RHZ", title: "Philips 5000 Sandwichera Grill 3 en 1, 750 W, Placas Antiadherentes", note: "Tres juegos de placas intercambiables (panini, sándwich y gofre) extraíbles para limpiar; la más versátil de la selección.", img: "https://m.media-amazon.com/images/I/71Ak8R18NQL._AC_UL320_.jpg", price: "43,90", rating: "4,6★" },
      { asin: "B08XBWWGJM", title: "Moulinex Subito Select Tostadora 2 Ranuras Largas, 7 Niveles de Tostado", note: "Ranuras largas de anchura variable, función Eco (calienta solo un lado), descongelar y recalentar.", img: "https://m.media-amazon.com/images/I/61gAH9VLSjL._AC_UL320_.jpg", price: "48,10", rating: "4,4★" },
    ],
  },
  {
    slug: "recipientes-hermeticos",
    img: "/assets/img/guias/recipientes-hermeticos.jpg",
    title: "Cómo elegir recipientes herméticos de cocina",
    dek: "Materiales seguros, sistema de cierre y aptitud para congelador o microondas: lo que hace que un set de tarros dure años sin mancharse ni oler.",
    updated: "2026-09-14",
    intro: [
      "Los recipientes herméticos son de esas compras que parecen sencillas hasta que un set barato empieza a oler a lo último que guardaste, se agrieta en el congelador o pierde el cierre a los pocos meses de uso diario. Con algunos criterios claros es fácil evitar esos problemas sin necesidad de pagar precios muy altos.",
      "Esta guía repasa qué mirar en cualquier set de recipientes herméticos para cocina, sea de plástico o de cristal.",
    ],
    sections: [
      {
        heading: "Material: plástico sin BPA o cristal",
        body: [
          "El plástico sin BPA es más ligero, resistente a caídas y normalmente más barato; el cristal no retiene olores ni se mancha con alimentos como el tomate o la cúrcuma, pero pesa más y puede romperse con un golpe fuerte. Si vas a guardar alimentos muy grasos o con colorantes fuertes de forma habitual, el cristal envejece mejor a largo plazo.",
          "Revisa siempre que el plástico esté certificado libre de BPA: es un estándar ya habitual en la mayoría de fabricantes, pero conviene comprobarlo en la ficha antes de comprar, sobre todo en sets muy económicos.",
        ],
      },
      {
        heading: "Sistema de cierre y hermeticidad real",
        body: [
          "Los cierres con pestañas laterales (tipo clip) y junta de silicona son los que mejor sellan frente a fugas de líquido y olores; los que solo llevan una tapa a presión simple sin junta suelen fallar antes con líquidos o alimentos húmedos. Con el uso diario, la junta de silicona es la primera pieza en desgastarse: comprobar si se puede sustituir por separado alarga mucho la vida útil del set completo.",
          "Si vas a apilar los recipientes en la nevera o el armario, un diseño modular pensado para encajar unos sobre otros ahorra bastante espacio frente a formas que no apilan bien entre sí.",
        ],
      },
      {
        heading: "Aptitud para congelador, microondas y lavavajillas",
        body: [
          "No todos los recipientes herméticos aguantan bien el congelador: el plástico de baja calidad puede volverse frágil con el frío intenso, y conviene revisar la temperatura mínima soportada en la ficha si vas a congelar de forma habitual. Para calentar directamente en el microondas, asegúrate de que el propio recipiente (no solo la tapa) esté certificado para esa función, ya que algunas tapas deben retirarse antes de calentar.",
          "Aptos para lavavajillas es casi un estándar hoy, pero las juntas de silicona a veces se recomiendan lavar a mano para que no se deformen con el calor y la presión del programa.",
        ],
      },
      {
        heading: "Tamaños del set y organización",
        body: [
          "Los sets con varios tamaños (desde recipientes pequeños para especias hasta grandes para pasta o cereales) cubren más necesidades que comprar varios sets de un solo tamaño. Las etiquetas y marcadores de rotulador (a menudo incluidos en los sets orientados a despensa) ayudan a identificar contenido y fecha sin depender de memoria.",
          "Si el objetivo principal es organizar la despensa de forma visual y ordenada, prioriza sets con formas cuadradas o rectangulares que aprovechen mejor el espacio en estantería que los recipientes redondos.",
        ],
      },
    ],
    checklist: [
      "Plástico certificado sin BPA, o cristal si priorizas que no retenga olores",
      "Cierre con pestañas y junta de silicona para mejor hermeticidad",
      "Comprueba si aguanta congelador y si el propio recipiente es apto para microondas",
      "Revisa si las juntas de silicona se pueden comprar sueltas como repuesto",
      "Sets con varios tamaños para cubrir desde especias hasta pasta o cereales",
    ],
    faq: [
      {
        q: "¿Los recipientes de plástico sin BPA son igual de seguros que el cristal?",
        a: "Sí, siempre que estén certificados sin BPA y sean de calidad alimentaria: son seguros para el uso habitual. El cristal tiene la ventaja añadida de no absorber olores ni colorantes con el tiempo, algo que el plástico puede acabar haciendo tras mucho uso.",
      },
      {
        q: "¿Puedo meter cualquier recipiente hermético en el congelador?",
        a: "No todos: revisa la temperatura mínima soportada en la ficha del producto. Un plástico de baja calidad puede agrietarse con el frío intenso, mientras que los diseñados específicamente para congelador no tienen ese problema.",
      },
      {
        q: "¿Qué hago si la junta de silicona empieza a fallar y pierde hermeticidad?",
        a: "Algunos fabricantes venden juntas de repuesto por separado, lo que alarga mucho la vida del recipiente. Si no es posible reemplazar solo la junta, conviene sustituir esa pieza concreta del set y no necesariamente todo el conjunto.",
      },
    ],
    products: [
      { asin: "B0CPPPGLGT", title: "YASHE Recipientes Herméticos para Alimentos, Botes de Cocina sin BPA", note: "Plástico certificado sin BPA con buena valoración sostenida.", img: "https://m.media-amazon.com/images/I/81MS9WQua3L._AC_UL320_.jpg", price: "26,49", rating: "4,7★" },
      { asin: "B0F3CTF66V", title: "GoMaihe Juego de 24 Tarros Herméticos con Etiquetas y Marcadores", note: "Set grande orientado a organizar despensa, con etiquetas incluidas.", img: "https://m.media-amazon.com/images/I/91ZcZmvPvzL._AC_UL320_.jpg", price: "35,99", rating: "4,7★" },
      { asin: "B0967WM727", title: "Vtopmart Botes de Cocina Almacenaje, Juego de 24 Piezas con Etiquetas", note: "Alternativa similar en tamaño de set y precio, muy bien valorada.", img: "https://m.media-amazon.com/images/I/91k75KGXBFL._AC_UL320_.jpg", price: "35,99", rating: "4,6★" },
      { asin: "B0B2JDJXF1", title: "L LONGANCHANG Botes de Cocina de Plástico, Juego de 8 Piezas Herméticos", note: "Set más reducido, útil si no necesitas tantas piezas como los sets de 24.", img: "https://m.media-amazon.com/images/I/91dQEmyongL._AC_UL320_.jpg", price: "24,98", rating: "4,6★" },
      { asin: "B08DCWKK4B", title: "GoMaihe Recipientes Herméticos para Alimentos con Tapa, 4x4L", note: "Recipientes grandes de 4 litros, pensados para cereales o legumbres en cantidad.", img: "https://m.media-amazon.com/images/I/81zSEec5nDL._AC_UL320_.jpg", price: "26,99", rating: "4,7★" },
      { asin: "B0FL7Z64H7", title: "VINATO Botes de Cocina Almacenaje, Juego de 8 Recipientes Herméticos", note: "Buena relación precio-piezas para un set de tamaño medio.", img: "https://m.media-amazon.com/images/I/81u8u43fN9L._AC_UL320_.jpg", price: "19,99", rating: "4,5★" },
      { asin: "B0CPPQ2L4D", title: "YASHE 24 Piezas Recipientes Herméticos para Alimentos sin BPA", note: "Versión de 24 piezas de la misma gama YASHE sin BPA.", img: "https://m.media-amazon.com/images/I/81RfI1npY4L._AC_UL320_.jpg", price: "39,99", rating: "4,7★" },
      { asin: "B0HCPFCQJ3", title: "Botes de Cocina Almacenaje, Juego de 7 con Junta de Silicona", note: "Set de 7 piezas con junta de silicona en el cierre.", img: "https://m.media-amazon.com/images/I/71mranHidUL._AC_UL320_.jpg", price: "29,99", rating: "4,5★" },
      { asin: "B0DRNSDVT4", title: "GoMaihe Botes de Cocina Almacenaje, Juego de 12 Piezas (800ml)", note: "Tamaño uniforme de 800ml, cómodo para apilar en la despensa.", img: "https://m.media-amazon.com/images/I/81vP6qouzqL._AC_UL320_.jpg", price: "24,99", rating: "4,7★" },
      { asin: "B09HKMBH9Z", title: "Contenedores de Almacenamiento de Alimentos y Pasta, 7 Tarros Herméticos", note: "Orientado específicamente a pasta y cereales de formas alargadas.", img: "https://m.media-amazon.com/images/I/81ccCIFkyEL._AC_UL320_.jpg", price: "29,98", rating: "4,3★" },
      { asin: "B0F3CRVMB8", title: "GoMaihe Juego de 10 Tarros de 2 Litros Herméticos con Tapa", note: "Capacidad grande (2L) por unidad, útil para harinas o legumbres en cantidad.", img: "https://m.media-amazon.com/images/I/91cUhp8-crL._AC_UL320_.jpg", price: "28,99", rating: "4,7★" },
      { asin: "B0FJX2C1DB", title: "FOHERE 16 Piezas Recipientes Herméticos para Alimentos con Tapas sin BPA", note: "Set intermedio de 16 piezas, buen equilibrio entre cantidad y precio.", img: "https://m.media-amazon.com/images/I/81x3DxyBTZL._AC_UL320_.jpg", price: "29,99", rating: "4,4★" },
      { asin: "B00JLRHNKS", title: "Luminarc Pure Box Active Recipiente Hermético Rectangular de Vidrio, 1,22 L", note: "Un solo recipiente de vidrio apilable con válvula de vapor y resistente al choque térmico; el más barato para probar el vidrio.", img: "https://m.media-amazon.com/images/I/51F+fLx-f1L._AC_UL320_.jpg", price: "7,96", rating: "4,6★" },
      { asin: "B0B9S5HZ26", title: "Vtopmart Set de 8 Recipientes de Vidrio Herméticos con Tapa", note: "Vidrio borosilicato con anillo de silicona en la tapa; apto para horno, microondas y congelador. Cerca de 20.000 valoraciones.", img: "https://m.media-amazon.com/images/I/71xlXpdVSUL._AC_UL320_.jpg", price: "19,99", rating: "4,4★" },
      { asin: "B0CF253MLS", title: "edihome Recipientes de Cristal para Alimentos, 18 Piezas (9 + 9 tapas)", note: "Nueve recipientes de borosilicato con tapas de cuatro cierres y junta de goma; aptos para lavavajillas, microondas y congelador.", img: "https://m.media-amazon.com/images/I/81fZeJVB0XL._AC_UL320_.jpg", price: "29,99", rating: "4,6★" },
      { asin: "B07RNQQMT3", title: "KICHLY Recipientes de Vidrio para Alimentos, Pack de 12 Herméticos", note: "12 recipientes de borosilicato de distintos tamaños con tapas de plástico sin BPA y cuatro cierres; más de 26.000 valoraciones.", img: "https://m.media-amazon.com/images/I/91M6CZga7pL._AC_UL320_.jpg", price: "39,99", rating: "4,6★" },
    ],
  },
  {
    slug: "cuchillos-de-cocina",
    img: "/assets/img/guias/cuchillos-de-cocina.jpg",
    title: "Cómo elegir cuchillos de cocina",
    dek: "Acero, dureza y tipo de filo: los criterios para elegir un set de cuchillos que corte bien durante años, no solo el primer mes.",
    updated: "2026-09-14",
    intro: [
      "Un buen cuchillo de cocina cambia la experiencia de cocinar más de lo que parece: cortar sin esfuerzo, con precisión y sin machacar el alimento es la diferencia entre un cuchillo bien elegido y uno que se queda desafilado a las pocas semanas. No hace falta gastar mucho para conseguir un set que cumpla bien durante años, pero sí conviene mirar más allá del diseño.",
      "Esta guía no recomienda una marca concreta: explica qué mirar en cualquier cuchillo o set de cuchillos de cocina.",
    ],
    sections: [
      {
        heading: "Acero: dureza y facilidad de afilado",
        body: [
          "El acero inoxidable alemán o japonés de calidad (a menudo indicado por su dureza en la escala Rockwell, HRC) es el estándar en cuchillos de gama media-alta: cuanto mayor la dureza, mejor mantiene el filo, aunque también resulta algo más difícil de afilar en casa. Los aceros más blandos se afilan con más facilidad pero pierden el filo más rápido con el uso diario.",
          "Los cuchillos forjados en una sola pieza (sin remaches visibles entre hoja y mango) suelen ser más resistentes con el tiempo que los ensamblados con piezas separadas, aunque también tienden a costar más.",
        ],
      },
      {
        heading: "Tipos de cuchillo y para qué sirve cada uno",
        body: [
          "El cuchillo de chef (18-20cm) es el más versátil y el que más se usa en el día a día para picar, cortar y trocear casi cualquier alimento; el cuchillo puntilla o mondador es mejor para pelar y cortes de precisión pequeños; el cuchillo de pan, con hoja dentada, corta sin aplastar la miga. Antes de comprar un set de muchas piezas, valora si realmente vas a usar todos los tipos o si con 3-4 cuchillos básicos ya cubres el 90% de tu uso real.",
          "Los cuchillos de estilo japonés suelen tener un filo más fino y afilado, ideales para cortes de precisión, pero también algo más frágiles frente a huesos o cortes forzados que un cuchillo occidental más robusto tolera mejor.",
        ],
      },
      {
        heading: "Mango, equilibrio y ergonomía",
        body: [
          "El equilibrio entre hoja y mango (que el cuchillo no se sienta más pesado de un lado) influye directamente en el control y en el cansancio de la mano tras un uso prolongado. Los mangos de madera tratada dan un tacto cálido pero requieren más cuidado (no lavavajillas, secar bien); los de acero inoxidable o polímero resisten mejor la humedad y el lavado frecuente.",
          "Prueba, si puedes, el tamaño del mango en relación a tu mano: un mango demasiado grande o pequeño para tu agarre reduce la precisión aunque el acero de la hoja sea excelente.",
        ],
      },
      {
        heading: "Bloque, funda y mantenimiento",
        body: [
          "Un bloque o taco de cuchillos protege el filo entre usos y evita accidentes al buscar un cuchillo suelto en un cajón; las fundas individuales son una alternativa más compacta si no tienes espacio en la encimera para un bloque. Guardar los cuchillos sueltos en un cajón sin protección es la forma más rápida de mellar el filo y de correr riesgo de cortes al rebuscar.",
          "Un afilador o chaira, aunque no sustituye un afilado profesional ocasional, mantiene el filo entre afilados y es una compra que se rentabiliza rápido si usas los cuchillos a diario.",
        ],
      },
    ],
    checklist: [
      "Prioriza acero inoxidable de calidad (alemán o japonés) frente a aceros genéricos muy blandos",
      "Empieza por 3-4 cuchillos básicos (chef, puntilla, pan, sierra) antes que un set de muchas piezas",
      "Comprueba el equilibrio y el tamaño del mango para tu propia mano",
      "Guarda los cuchillos en bloque o funda, nunca sueltos en un cajón",
      "Ten un afilador o chaira para mantener el filo entre afilados profesionales",
    ],
    faq: [
      {
        q: "¿Compensa comprar un set grande de cuchillos o es mejor comprar sueltos?",
        a: "Depende de tu presupuesto y del uso: un set cubre de golpe varios tipos de cuchillo a buen precio por unidad, pero si solo vas a usar 2-3 de forma habitual, puede compensar más comprar esos pocos de mejor calidad por separado.",
      },
      {
        q: "¿Los cuchillos japoneses son mejores que los occidentales?",
        a: "No son mejores en general, son distintos: los japoneses suelen tener un filo más fino y afilado, ideal para cortes de precisión, pero más frágil ante huesos o torsiones. Los occidentales son algo más robustos para un uso de cocina variado y menos delicado.",
      },
      {
        q: "¿Es seguro meter los cuchillos de cocina en el lavavajillas?",
        a: "El calor, el detergente agresivo y el roce con otros utensilios pueden dañar el filo y, en mangos de madera, deformar la pieza con el tiempo. Lavar a mano y secar inmediatamente conserva mejor tanto el filo como el mango a largo plazo.",
      },
    ],
    products: [
      { asin: "B00R3Z49G6", title: "Amazon Basics Juego de Cuchillos de Cocina y Soporte, 14 Piezas, Negro", note: "Set completo con soporte incluido a precio de entrada de gama.", img: "https://m.media-amazon.com/images/I/810IjwSOWZL._AC_UL320_.jpg", price: "23,09", rating: "4,6★" },
      { asin: "B0CL9XHVTY", title: "MasterChef Cuchillos de Cocina, Set de Cuchillo de Chef", note: "Marca reconocida centrada en el cuchillo de chef, el más versátil del día a día.", img: "https://m.media-amazon.com/images/I/51rtrrxEGXL._AC_UL320_.jpg", price: "15,99", rating: "4,4★" },
      { asin: "B07CLYNWQ8", title: "SHAN ZU Juego de Cuchillos de Cocina 3 Piezas, Cuchillo Chef 20cm Profesional", note: "Set reducido con cuchillo chef de tamaño profesional (20cm).", img: "https://m.media-amazon.com/images/I/61KFcmhc8FL._AC_UL320_.jpg", price: "49,99", rating: "4,5★" },
      { asin: "B09DNVC9WD", title: "D.Perlla Juego de Cuchillos de Cocina Profesional 6 Piezas, Acero Alemán", note: "Acero alemán, un punto medio entre precio y calidad de la hoja.", img: "https://m.media-amazon.com/images/I/71AHIXVu6fL._AC_UL320_.jpg", price: "40,99", rating: "4,6★" },
      { asin: "B0CL9T2P5R", title: "MasterChef Juego de Cuchillos de Cocina con Soporte Taco Universal", note: "Incluye taco de madera universal para proteger el filo entre usos.", img: "https://m.media-amazon.com/images/I/51eigcCkwrL._AC_UL320_.jpg", price: "34,99", rating: "4,6★" },
      { asin: "B00H52GC2G", title: "Renberg Tenessy, Cuchillos de Cocina, Set de 15 Piezas con Tacoma de Madera", note: "El set más numeroso de piezas de la selección, con tacoma incluido.", img: "https://m.media-amazon.com/images/I/712b1auXDeL._AC_UL320_.jpg", price: "14,99", rating: "4,3★" },
      { asin: "B0DQXNCHDX", title: "HOSHANHO Juego de Cuchillos de Cocina 5 Piezas, Estilo Japonés", note: "Estilo japonés con filo fino, gama alta de la selección.", img: "https://m.media-amazon.com/images/I/71-CSB5OFgL._AC_UL320_.jpg", price: "111,13", rating: "4,7★" },
      { asin: "B0811RK4GL", title: "Yabano Cuchillos de Cocina, 16 Piezas, Acero Inoxidable Profesional", note: "Set numeroso de acero inoxidable con buena valoración.", img: "https://m.media-amazon.com/images/I/71Bn-ok5+0S._AC_UL320_.jpg", price: "59,99", rating: "4,6★" },
      { asin: "B0CGXNJH6M", title: "WALDWERK Bloque de Cuchillos, Juego de 7 Piezas con Afilador", note: "Incluye afilador integrado en el propio bloque, cómodo para mantenimiento diario.", img: "https://m.media-amazon.com/images/I/716pQWkMdPL._AC_UL320_.jpg", price: "59,99", rating: "4,5★" },
      { asin: "B08MTCRCT4", title: "Arcos Juego de Cuchillos de Cocina Profesionales, Acero Inoxidable", note: "Marca española con largo recorrido en cuchillería profesional y doméstica.", img: "https://m.media-amazon.com/images/I/71rsXYYHxjL._AC_UL320_.jpg", price: "29,99", rating: "4,5★" },
      { asin: "B0DM7XZ9BL", title: "D.Perlla Juego de Cuchillos de Cocina Profesional con Bloque, Acero Inoxidable", note: "Versión con bloque incluido de la gama D.Perlla.", img: "https://m.media-amazon.com/images/I/71J27OUkY0L._AC_UL320_.jpg", price: "49,99", rating: "4,5★" },
      { asin: "B005LR72SK", title: "Arcos Juego de Cuchillos con Bloque, Acero Inoxidable, 6 Piezas", note: "Set clásico de Arcos con bloque, 6 piezas bien equilibradas para el uso diario.", img: "https://m.media-amazon.com/images/I/51cXHoGE6tL._AC_UL320_.jpg", price: "44,93", rating: "4,5★" },
      { asin: "B07BCPNGDJ", title: "Tefal Ice Force Cuchillo Chef 20 cm, Acero Inoxidable", note: "Cuchillo cebollero monobloque forjado, de hoja tratada criogénicamente; una opción de entrada muy económica.", img: "https://m.media-amazon.com/images/I/312+0v8bYWL._AC_UL320_.jpg", price: "13,99", rating: "4,6★" },
      { asin: "B005LR6FAG", title: "Arcos Cuchillo de Cocina Forjado, Serie Riviera, Hoja 200 mm", note: "Cuchillo de chef forjado en acero Nitrum de Arcos con mango de POM resistente a detergentes; mide 327 mm y pesa 280 g.", img: "https://m.media-amazon.com/images/I/31-xdqkvcpL._AC_UL320_.jpg", price: "32,49", rating: "4,7★" },
      { asin: "B0C1BQTQKL", title: "HOSHANHO Cuchillo Santoku 18 cm, Acero Japonés 10Cr15CoMoV", note: "Santoku de hoja de triple capa, filo a 15° y mango de madera pakka; gama media de estilo japonés.", img: "https://m.media-amazon.com/images/I/71U+eyi8zRL._AC_UL320_.jpg", price: "36,00", rating: "4,6★" },
      { asin: "B09L869HZ7", title: "WILDMOK Cuchillo de Chef 20,5 cm, Acero Damasco VG10 de 67 Capas", note: "Gama alta de estilo japonés: núcleo VG10 (10Cr) y mango de resina de espiga completa. Ojo: solo unas 240 valoraciones.", img: "https://m.media-amazon.com/images/I/710+nP0ueFL._AC_UL320_.jpg", price: "62,69", rating: "4,7★" },
    ],
  },
];

// Artículos de blog: contenido general de guía, no fichas de producto.
// A diferencia de las guías (intro/sections/checklist/faq), un artículo de
// blog es un único cuerpo de párrafos (`body`), como en articulo.js.
const ARTICLES = [
  {
    slug: "como-organizar-una-cocina-pequena",
    img: "/assets/img/blog/como-organizar-una-cocina-pequena.jpg",
    title: "Cómo organizar una cocina pequeña sin hacer obra",
    dek: "Aprovechar la altura, los huecos muertos y el interior de los armarios antes de pensar en tirar nada.",
    updated: "2026-09-13",
    body: [
      "Una cocina pequeña no es sinónimo de cocina desordenada, pero sí exige ser más metódico a la hora de decidir qué se guarda y cómo. Antes de plantear una reforma o de tirar utensilios, casi siempre hay espacio sin aprovechar dentro de los armarios y cajones que ya existen.",
      "La mayoría de armarios de cocina dejan sin usar buena parte del espacio vertical entre estantes: <a href=\"/guias/organizadores-de-cocina.html\">un especiero apilable o un organizador de dos niveles</a> convierte ese hueco muerto en espacio de almacenaje real sin ampliar nada físicamente. Lo mismo aplica a la pared sobre la encimera, donde un riel con ganchos o un especiero de pared libera cajones para otras cosas. Antes de comprar cualquier organizador, mide la altura libre entre estantes: muchos organizadores apilables tienen una altura mínima necesaria para encajar debajo, y ese dato suele estar en la ficha del producto.",
      "Organizar sin reducir primero solo cambia el desorden de sitio: revisa utensilios duplicados (¿hacen falta tres espátulas iguales?), electrodomésticos que no se han usado en el último año y recipientes sin tapa que ya no sirven de nada. Este paso, aunque incómodo, suele liberar más espacio real que cualquier organizador comprado después. Una buena señal de que algo puede irse es que exista una alternativa ya en casa que cumpla la misma función.",
      "El interior de las puertas de los armarios es de los espacios más desaprovechados en cocinas pequeñas: organizadores de puerta para tapas, film transparente o bolsas de congelación aprovechan ese hueco sin robar espacio a los estantes. Bajo el fregadero, un organizador de dos niveles o extraíble multiplica el espacio útil frente a apilar productos de limpieza directamente sobre el suelo del armario, aunque conviene tener en cuenta la tubería y los codos al medir ese espacio, porque reducen la profundidad utilizable real más de lo que parece a simple vista.",
      "Para profundizar en cada tipo de solución, <a href=\"/guias/organizadores-de-cocina.html\">la guía de organizadores y almacenaje de cocina de este sitio</a> repasa materiales, medidas y tipos de especiero con más detalle.",
    ],
  },
  {
    slug: "errores-comunes-al-elegir-un-robot-de-cocina",
    img: "/assets/img/blog/errores-comunes-al-elegir-un-robot-de-cocina.jpg",
    title: "Errores comunes al elegir un robot de cocina",
    dek: "De comprar más funciones de las que vas a usar a no comprobar la disponibilidad de repuestos: los fallos más habituales antes de decidir.",
    updated: "2026-09-13",
    body: [
      "El robot de cocina es una de las compras de pequeño electrodoméstico donde más fácil es dejarse llevar por el número de funciones anunciadas en lugar de pensar en el uso real que se le va a dar. Estos son los errores más habituales que llevan a comprar un robot que después no cumple las expectativas, y ninguno tiene que ver con la marca concreta: son fallos de planteamiento antes de comparar modelos.",
      "1. Elegir por número de funciones en lugar de por uso real. <a href=\"/guias/robots-de-cocina-multifuncion.html\">Un robot con 40 funciones</a> suena más completo que uno con 15, pero muchas de esas funciones extra son variaciones de la misma cuchilla o el mismo programa con otro nombre comercial. Antes de comparar por cantidad, haz una lista honesta de qué vas a cocinar realmente cada semana y busca el robot que cubra bien esas tareas concretas.",
      "2. No comprobar la capacidad real del bol. Es habitual comprar un robot con un bol pensado para 1-2 personas y notar después que siempre hay que hacer la receta en dos tandas para una familia de 4. Al revés también ocurre: comprar un bol enorme para una sola persona que después es incómodo de limpiar y de guardar por su tamaño.",
      "3. Ignorar la disponibilidad de repuestos. Las cuchillas, juntas y cestillos son piezas que se desgastan con el uso normal: comprar un robot de una marca sin presencia establecida en España, sin repuestos disponibles a medio plazo, puede dejar el aparato inutilizable en un par de años por una pieza que no se puede reemplazar.",
      "4. No tener en cuenta el ruido y la limpieza diarios. Un robot muy potente pero ruidoso puede acabar usándose menos de lo esperado si en casa hay horarios de descanso ajustados. De la misma forma, un robot con muchas piezas que no se pueden meter en el lavavajillas se convierte en una tarea de fregado a mano que desanima a usarlo con la frecuencia que se pensaba al comprarlo.",
      "<a href=\"/guias/robots-de-cocina-multifuncion.html\">La guía de robots de cocina multifunción de este sitio</a> desarrolla con más detalle los criterios de potencia, capacidad y funciones para no caer en estos errores.",
    ],
  },
  {
    slug: "que-bateria-de-cocina-necesitas-realmente",
    img: "/assets/img/blog/que-bateria-de-cocina-necesitas-realmente.jpg",
    title: "Qué batería de cocina necesitas realmente (y qué puedes dejar fuera)",
    dek: "Sartenes, ollas y cazuelas: cuántas piezas cubren de verdad el uso diario sin acumular utensilios que no se usan.",
    updated: "2026-09-12",
    body: [
      "Los sets grandes de batería de cocina prometen tenerlo todo resuelto de una sola compra, pero en la práctica la mayoría de hogares usan de forma habitual solo 4 o 5 piezas de un set de 10 o 12. No se trata de comprar menos por comprar menos, sino de gastar el presupuesto en las piezas que realmente vas a usar cada semana.",
      "<a href=\"/guias/sartenes-antiadherentes.html\">Una sartén mediana (24-26cm) para el día a día</a>, una olla mediana (para pasta, legumbres o sopas de 2-4 personas) y una sartén pequeña (20cm) para huevos o raciones individuales cubren la mayoría de necesidades habituales en una cocina de una o dos personas. Para familias más numerosas, una olla grande adicional para cocinar en cantidad suele ser la cuarta pieza más rentable. Si solo pudieras quedarte con tres piezas, estas tres cubren de forma razonable el 80% del uso semanal en la mayoría de cocinas domésticas.",
      "Una sartén grande (28-30cm) es útil para cocinar en cantidad, pero en cocinas de 1-2 personas puede quedarse infrautilizada frente a la mediana. Los woks, cazuelas específicas para paella o cocottes de hierro fundido rinden muy bien para platos concretos, pero solo compensan si preparas ese tipo de plato con cierta frecuencia: antes de añadir una pieza especializada al carro, pregúntate con qué frecuencia real cocinarías ese plato concreto.",
      "Un set completo suele salir más barato por pieza que comprar todo suelto, pero solo compensa si vas a usar la mayoría de las piezas incluidas. Si sabes que solo necesitas 3-4 piezas concretas, comprarlas sueltas de mejor calidad cada una puede salir más rentable a largo plazo que un set grande con piezas que acabarán sin usar. Otra opción intermedia es comprar un set pequeño y añadir piezas sueltas más adelante según se detecte una necesidad real.",
      "<a href=\"/guias/sartenes-antiadherentes.html\">La guía de sartenes y ollas antiadherentes de este sitio</a> entra en detalle sobre materiales y cuidado para que las piezas que sí uses duren más tiempo.",
    ],
  },
  {
    slug: "guia-rapida-para-sustituir-plastico-en-la-cocina",
    img: "/assets/img/blog/guia-rapida-para-sustituir-plastico-en-la-cocina.jpg",
    title: "Guía rápida para reducir el plástico de un solo uso en la cocina",
    dek: "Recipientes reutilizables, tapas de silicona y otros cambios sencillos que se notan en la despensa y en la basura.",
    updated: "2026-09-12",
    body: [
      "Reducir el plástico de un solo uso en la cocina no exige un cambio radical de un día para otro: hay sustituciones sencillas que se pueden ir incorporando poco a poco y que se notan tanto en el gasto mensual como en la cantidad de basura generada.",
      "Sustituir bolsas de congelación y film transparente de un solo uso por <a href=\"/guias/recipientes-hermeticos.html\">recipientes herméticos reutilizables</a> es de los cambios que más basura evita a largo plazo, y además suele conservar mejor los alimentos frente a bolsas que se rompen o pierden hermeticidad. La inversión inicial en un set de recipientes se amortiza rápido si antes comprabas film o bolsas de congelación con regularidad: el ahorro se nota ya en pocos meses.",
      "Las tapas de silicona reutilizables se adaptan a distintos tamaños de bol o plato y sustituyen buena parte del uso de film transparente para tapar comida en la nevera. Los recipientes con tapa hermética también cumplen esa función sin necesidad de film en la mayoría de casos cotidianos. Para cubrir masas de repostería en fermentación, un paño de cocina limpio es una alternativa tradicional que funciona igual de bien que el film en ese uso concreto.",
      "Cambiar todos los hábitos de golpe suele generar frustración si algún sustituto no funciona bien para tu caso concreto: es más sostenible identificar qué producto de un solo uso compras con más frecuencia y sustituirlo primero, dejando el resto para más adelante. Con el tiempo, la mayoría de hogares terminan combinando varias alternativas reutilizables según el uso concreto, sin necesidad de eliminar el 100% del plástico de un solo uso desde el primer día.",
      "<a href=\"/guias/recipientes-hermeticos.html\">La guía de recipientes herméticos de cocina de este sitio</a> explica con más detalle qué materiales y cierres duran más en el uso diario.",
    ],
  },
  {
    slug: "errores-freidora-aire-comida-reseca",
    img: "/assets/img/blog/errores-freidora-aire-comida-reseca.jpg",
    title: "Freidora de aire: errores comunes que resecan la comida",
    dek: "Sobrecargar el cesto, no remover a mitad de cocción y otros fallos habituales que dejan la comida seca en lugar de crujiente.",
    updated: "2026-09-19",
    body: [
      "La freidora de aire promete un resultado crujiente por fuera y jugoso por dentro, pero es fácil terminar con comida reseca si se cometen algunos errores muy comunes al usarla, casi siempre relacionados con la cantidad de alimento y el tiempo de cocción, no con el aparato en sí.",
      "El error más frecuente es llenar el cesto hasta arriba pensando en ahorrar tiempo. Cuando el aire caliente no puede circular libremente alrededor de cada pieza, unas zonas quedan poco hechas y otras se secan de más intentando compensar. <a href=\"/guias/freidoras-de-aire.html\">Como se explica en la guía de freidoras de aire de este sitio</a>, una referencia práctica es no superar dos tercios del volumen anunciado del cesto para que el resultado sea uniforme.",
      "Otro fallo habitual es no remover ni voltear el alimento a mitad de cocción, sobre todo en piezas irregulares como alitas de pollo o verduras cortadas en trozos distintos. Un volteo a mitad de tiempo redistribuye el calor y evita que la cara que queda pegada al cesto se reseque mientras la otra apenas se dora.",
      "Usar siempre el mismo tiempo y temperatura para alimentos distintos también reseca resultados: un filete de pollo fino necesita bastante menos tiempo que un muslo entero, y un programa preestablecido genérico no distingue ese matiz. Ajustar manualmente unos minutos menos y comprobar el punto antes de forzar el tiempo completo evita perder jugosidad, especialmente en carnes magras que se secan con facilidad si se pasan de cocción.",
      "Por último, no añadir nada de grasa en alimentos frescos (no precocinados ni rebozados) es otro motivo habitual de sequedad: una fina capa de aceite ayuda a retener humedad además de mejorar el dorado. Los alimentos ya rebozados o congelados, en cambio, no suelen necesitar ese aceite añadido porque ya llevan grasa incorporada de fábrica.",
    ],
  },
  {
    slug: "como-mantener-el-filo-de-tus-cuchillos",
    img: "/assets/img/blog/como-mantener-el-filo-de-tus-cuchillos.jpg",
    title: "Cómo mantener el filo de tus cuchillos de cocina en casa",
    dek: "Chaira, tabla de corte adecuada y hábitos de lavado: lo que marca la diferencia entre un cuchillo que sigue cortando bien y uno que se desafila enseguida.",
    updated: "2026-09-19",
    body: [
      "Un cuchillo que corta bien no depende solo de la calidad del acero en el momento de comprarlo: el mantenimiento diario influye tanto o más en cuánto tiempo se conserva ese filo utilizable. Unos pocos hábitos sencillos alargan considerablemente el tiempo entre afilados profesionales.",
      "El uso de una chaira o afilador con regularidad (no un afilado completo, sino un realineado rápido del filo) es el hábito que más diferencia se nota en el día a día. <a href=\"/guias/cuchillos-de-cocina.html\">Como se detalla en la guía de cuchillos de cocina de este sitio</a>, la chaira no sustituye un afilado profesional ocasional, pero mantiene el filo entre esos afilados y es una compra que se rentabiliza rápido con el uso diario.",
      "La tabla de corte también influye más de lo que parece: cortar sobre superficies duras como mármol, cristal o cerámica desgasta el filo mucho más rápido que hacerlo sobre madera o polietileno. Una tabla de plástico o madera de calidad protege el filo a cada corte, mientras que las superficies muy duras lo mellan de forma acumulativa aunque no se note en cada uso individual.",
      "Lavar el cuchillo a mano y secarlo de inmediato, en lugar de dejarlo en el fregadero o meterlo en el lavavajillas, evita tanto el deterioro del filo por el roce con otros utensilios como la oxidación en mangos de madera. El calor y los detergentes agresivos del lavavajillas también pueden afectar al acero con el uso repetido a lo largo de los meses.",
      "Guardar los cuchillos sueltos en un cajón, chocando entre sí y contra otros utensilios, es de las formas más rápidas de mellar un filo bien cuidado. Un bloque, una funda individual o una barra magnética de pared protegen el filo entre usos y, de paso, reducen el riesgo de cortes al rebuscar en un cajón lleno de utensilios.",
    ],
  },
  {
    slug: "como-evitar-que-se-estropee-el-antiadherente",
    img: "/assets/img/blog/como-evitar-que-se-estropee-el-antiadherente.jpg",
    title: "Sartenes antiadherentes: cómo evitar que se estropee el recubrimiento",
    dek: "Utensilios, temperatura y lavado: los hábitos que más acortan la vida de una sartén antiadherente sin que el fabricante tenga la culpa.",
    updated: "2026-09-19",
    body: [
      "Es habitual pensar que una sartén antiadherente se estropea simplemente por el paso del tiempo, pero en la mayoría de los casos el recubrimiento se deteriora antes de tiempo por unos pocos hábitos de uso que se pueden corregir fácilmente sin cambiar de sartén.",
      "Usar utensilios metálicos (espátulas, tenedores o cucharas de metal) para remover o servir directamente sobre el antiadherente es una de las causas más comunes de que el recubrimiento se raye y pierda eficacia con el tiempo. <a href=\"/guias/sartenes-antiadherentes.html\">Como recoge la guía de sartenes antiadherentes de este sitio</a>, los utensilios de silicona, madera o nailon evitan ese desgaste y alargan bastante la vida útil del recubrimiento.",
      "Cocinar a fuego muy alto de forma habitual también deteriora el antiadherente más rápido de lo esperado: la mayoría de recubrimientos están pensados para fuego medio, y el calor excesivo puede degradar la superficie con el uso repetido, además de aumentar el riesgo de que la comida se pegue precisamente por el sobrecalentamiento del aceite o la grasa.",
      "Dejar la sartén enfriarse de golpe bajo el grifo justo después de cocinar, en caliente, provoca un choque térmico que puede acelerar el desgaste del recubrimiento con el paso de los meses. Dejarla templar unos minutos antes de lavarla es un hábito sencillo que cuesta poco y protege bastante la superficie.",
      "Apilar sartenes directamente unas sobre otras en el armario, sin ninguna protección entre ellas, también raya el antiadherente con el roce repetido cada vez que se saca o se guarda una pieza. Un paño, una funda protectora o simplemente guardar las sartenes de pie con separadores evita ese contacto directo entre superficies.",
    ],
  },
  {
    slug: "robot-de-cocina-para-quien-compensa",
    img: "/assets/img/blog/robot-de-cocina-para-quien-compensa.jpg",
    title: "Robot de cocina multifunción: para quién compensa y cuál comprar (2026)",
    dek: "No todo el mundo necesita un robot de gama alta con pantalla y WiFi: cómo saber si tu forma de cocinar justifica el gasto.",
    updated: "2026-09-19",
    body: [
      "El robot de cocina multifunción es una de esas compras que generan más dudas de las que parece a simple vista: para algunas personas cambia por completo la forma de cocinar en casa, y para otras acaba siendo un electrodoméstico caro que ocupa espacio en la encimera sin usarse apenas.",
      "Compensa claramente para quien cocina raciones caseras con cierta frecuencia entre semana y valora ahorrar tiempo en tareas repetitivas: picar, batir, amasar o triturar de forma constante. <a href=\"/guias/robots-de-cocina-multifuncion.html\">Como explica la guía de robots de cocina multifunción de este sitio</a>, las funciones que de verdad se usan a diario son pocas (trocear, batir, amasar, montar), así que la pregunta clave no es cuántas funciones tiene el robot, sino cuántas de esas funciones básicas vas a usar realmente cada semana.",
      "También compensa para quien hace repostería con cierta regularidad y valora la báscula integrada: pesar sin sacar otro cacharro ahorra bastante tiempo real, y seguir una receta al gramo es más sencillo con esa función. Para alguien que cocina de forma ocasional o que ya tiene batidora, picadora y báscula por separado, un robot multifunción puede no aportar tanto como parece en la comparación de precio inicial.",
      "No compensa tanto para quien vive solo o cocina para una persona de forma esporádica: el tiempo que ahorra el robot frente a hacerlo a mano es proporcional a la cantidad de veces que se usa, y para raciones pequeñas puchas cargar y limpiar el robot puede llevar más tiempo del que ahorra en la propia tarea.",
      "Antes de decidirse por un modelo de gama alta con pantalla táctil, función de cocción y WiFi, merece la pena preguntarse con sinceridad si esas funciones extra se van a usar de verdad o si un modelo más sencillo, centrado en trocear, batir y amasar, cubriría igual el uso real que se le va a dar en casa.",
    ],
  },
  {
    slug: "cafetera-goteo-capsulas-o-superautomatica",
    img: "/assets/img/blog/cafetera-goteo-capsulas-o-superautomatica.jpg",
    title: "Cafetera: diferencias entre goteo, cápsulas y superautomática",
    dek: "Antes de comparar marcas o precios, la decisión que más condiciona el resultado es qué tipo de café tomas habitualmente.",
    updated: "2026-09-19",
    body: [
      "Comparar cafeteras por precio o por marca sin tener clara antes la categoría lleva a comparaciones que no tienen mucho sentido: una cafetera de cápsulas, una de goteo y una superautomática de grano resuelven necesidades de café distintas, no son versiones mejores o peores de lo mismo.",
      "Las cafeteras de cápsulas ganan en rapidez y comodidad: café listo en menos de un minuto, sin molienda ni posos que limpiar. <a href=\"/guias/cafeteras.html\">Como detalla la guía de cafeteras de este sitio</a>, a cambio el coste por taza es más alto a largo plazo que con café en grano o molido, y además quedas ligado al sistema de cápsulas compatible de esa marca concreta, algo a tener en cuenta si sueles comparar precios entre supermercados.",
      "Las cafeteras de goteo son la opción más económica de comprar y de mantener, y las más prácticas si sueles preparar varias tazas a la vez para casa o para llevar. El resultado es un café más suave, sin la crema característica del espresso, así que si buscas específicamente esa textura, esta categoría no es la que la va a dar por mucho que suba de precio el modelo.",
      "Las cafeteras espresso, manuales o superautomáticas, son la opción para quien parte de café en grano y quiere más control (o más automatización) sobre el resultado. La manual exige aprender a dosificar y prensar, pero cuesta menos que una superautomática equivalente; la superautomática con molinillo integrado automatiza todo el proceso a cambio de un precio y un mantenimiento mayores, sobre todo por la descalcificación periódica del circuito.",
      "La pregunta que de verdad ahorra dinero antes de comprar no es qué cafetera es mejor en abstracto, sino qué tipo de café tomas la mayoría de las veces: si la respuesta es café solo rápido entre semana, una de cápsulas o de goteo cumple de sobra sin pagar de más por funciones de espresso que no se van a aprovechar.",
    ],
  },
  {
    slug: "por-que-una-bascula-de-cocina-mejora-la-reposteria",
    img: "/assets/img/blog/por-que-una-bascula-de-cocina-mejora-la-reposteria.jpg",
    title: "Por qué una báscula de cocina mejora tanto la repostería",
    dek: "En repostería, medir por volumen (tazas, cucharadas) introduce un margen de error que pesar en gramos elimina casi por completo.",
    updated: "2026-09-19",
    body: [
      "En la cocina del día a día, medir ingredientes \"a ojo\" o con tazas y cucharadas suele funcionar sin mayor problema: un poco más o menos de aceite en un sofrito no cambia demasiado el resultado. En repostería, en cambio, esas mismas diferencias de cantidad sí que se notan, y ahí es donde una báscula de cocina marca una diferencia real frente a medir por volumen.",
      "El motivo es sencillo: un mismo volumen de harina, azúcar o mantequilla puede pesar cantidades distintas según cómo esté compactado en el recipiente, la humedad ambiente o incluso la forma de llenar la taza de medida. <a href=\"/guias/basculas-de-cocina.html\">Como explica la guía de básculas de cocina de este sitio</a>, la precisión de 1 gramo que ofrecen la mayoría de básculas digitales elimina ese margen de error, algo que en masas de repostería (donde las proporciones entre ingredientes son más sensibles que en un guiso) se traduce directamente en resultados más consistentes receta tras receta.",
      "La función tara, presente en prácticamente cualquier báscula digital actual, es la que hace este proceso rápido en la práctica: se coloca el bol vacío sobre la báscula, se pone a cero, se añade el primer ingrediente, se vuelve a poner a cero, y así sucesivamente sin necesidad de usar más recipientes ni hacer cálculos de resta. Esto agiliza bastante seguir recetas con varios ingredientes que se van añadiendo de uno en uno.",
      "Para quien empieza en repostería, además, pesar en gramos facilita seguir recetas de fuentes distintas sin tener que convertir entre tazas, cucharadas y mililitros, unidades que varían según el país de origen de la receta y que son una fuente habitual de errores en las primeras veces que se prueba algo nuevo.",
      "No hace falta gastar mucho para notar esta mejora: una báscula digital sencilla, con función tara y precisión de 1 gramo, ya cubre de sobra las necesidades de la repostería casera habitual, sin necesidad de funciones extra como la conexión a app si no se va a usar ese seguimiento nutricional de forma continuada.",
    ],
  },
  {
    slug: "tostadora-o-sandwichera-cual-elegir",
    img: "/assets/img/blog/tostadora-o-sandwichera-cual-elegir.jpg",
    title: "Tostadora o sandwichera: cuál elegir según tu desayuno",
    dek: "Parecen electrodomésticos intercambiables, pero cubren desayunos y meriendas distintos: cuál compensa según lo que sueles comer.",
    updated: "2026-09-19",
    body: [
      "Tostadora y sandwichera se acaban comparando a menudo como si fueran el mismo electrodoméstico con distinto nombre, pero en realidad están pensadas para resultados diferentes, y elegir bien depende sobre todo de qué desayunas o meriendas con más frecuencia en casa.",
      "La tostadora está pensada para tostar pan de molde, rebanadas de pan de barra o bollería, dejando el pan crujiente por fuera sin fundir nada dentro. Es la opción más rápida para un desayuno sencillo de tostadas con aceite, tomate o mermelada, y suele limpiarse con menos esfuerzo al no tener placas con relieve donde se pueda quedar pegado el relleno.",
      "La sandwichera, en cambio, está pensada específicamente para sándwiches y bocadillos calientes con relleno: las placas con relieve sellan los bordes del pan y funden el queso o cualquier otro ingrediente por dentro mientras tuesta el pan por fuera. Si en casa se preparan sándwiches mixtos o bocadillos calientes con cierta frecuencia, la sandwichera da un resultado que una tostadora normal no puede reproducir.",
      "Para quien no tiene claro cuál de los dos usos va a hacer más, existen modelos combinados con placas intercambiables que permiten tostar pan normal y también hacer sándwiches con la misma máquina, aunque suelen ocupar algo más de espacio de encimera que una tostadora sencilla. <a href=\"/guias/tostadoras-y-sandwicheras.html\">La guía de tostadoras y sandwicheras de este sitio</a> repasa con más detalle qué mirar en potencia, tipo de ranura y placas antes de decidirse por un modelo u otro.",
      "La decisión, en resumen, depende de la costumbre de cada casa: si el desayuno habitual es pan tostado solo, la tostadora es suficiente y más barata; si se preparan sándwiches o bocadillos calientes con relleno de forma habitual, la sandwichera (o un modelo combinado) aprovecha mejor la compra.",
    ],
  },
  {
    slug: "como-conservar-alimentos-frescos-mas-tiempo",
    img: "/assets/img/blog/como-conservar-alimentos-frescos-mas-tiempo.jpg",
    title: "Cómo conservar los alimentos frescos más tiempo en la nevera",
    dek: "El tipo de recipiente y el cierre influyen tanto como la temperatura de la nevera en cuánto dura un alimento antes de estropearse.",
    updated: "2026-09-19",
    body: [
      "Buena parte del desperdicio de comida en una cocina doméstica no viene de comprar de más, sino de que los alimentos se estropean antes de lo esperado por cómo se guardan en la nevera. El tipo de recipiente y, sobre todo, la calidad del cierre influyen en esto más de lo que suele pensarse.",
      "Un recipiente con cierre hermético de verdad (no solo una tapa que encaja a presión sin sellar bien) retrasa la entrada de aire y de humedad exterior, dos de los factores que más aceleran que un alimento se estropee o pierda textura en la nevera. <a href=\"/guias/recipientes-hermeticos.html\">Como explica la guía de recipientes herméticos de este sitio</a>, los cierres con varias pestañas o clips alrededor de toda la tapa sellan mejor que los que solo cierran por un lado, algo que se nota especialmente con líquidos y alimentos cortados que sueltan jugo.",
      "El material también importa: el vidrio no retiene olores ni se raya con el uso, lo que evita que sabores fuertes (ajo, especias) contaminen otros alimentos guardados después en el mismo recipiente. El plástico de calidad, más ligero, cumple igual de bien si se elige libre de BPA y se evita meterlo en el microondas con alimentos muy grasos o ácidos, que pueden desgastarlo con el tiempo.",
      "Separar los alimentos por tipo de recipiente en lugar de amontonarlos todos en el mismo cajón también ayuda: las verduras de hoja verde, por ejemplo, duran más en un recipiente algo ventilado que en uno completamente hermético sin ninguna salida de aire, porque generan humedad propia que necesita evaporarse. No todos los alimentos se benefician igual de un cierre hermético total.",
      "Etiquetar con la fecha de apertura o de cocinado, algo que muchos organizadores y recipientes ya incluyen con marcadores borrables en la propia tapa, es un hábito sencillo que evita tanto comer algo pasado de fecha como tirar comida que en realidad todavía estaba en buen estado.",
    ],
  },
  {
    slug: "batidora-de-vaso-o-de-mano-cual-elegir",
    img: "/assets/img/blog/batidora-de-vaso-o-de-mano-cual-elegir.jpg",
    title: "Batidora de vaso o de mano: cuál elegir según lo que cocines",
    dek: "No son electrodomésticos intercambiables: cada una rinde mejor en tareas distintas, y muchas cocinas acaban necesitando las dos.",
    updated: "2026-09-19",
    body: [
      "Es habitual dudar entre comprar una batidora de vaso o una de mano (de varilla) pensando que hacen básicamente lo mismo, pero en la práctica cada una rinde mejor en tareas distintas, y la elección depende sobre todo de qué se cocina con más frecuencia en casa.",
      "La batidora de vaso rinde mejor para batidos, smoothies y triturar hielo: el vaso cerrado y las cuchillas en la base están pensados específicamente para mezclar líquidos y fruta hasta conseguir una textura uniforme. <a href=\"/guias/batidoras-y-licuadoras.html\">Como recoge la guía de batidoras y licuadoras de este sitio</a>, a partir de 900W la mayoría de batidoras de vaso pican hielo de forma consistente, algo a tener en cuenta si los batidos con hielo son un uso habitual.",
      "La batidora de mano, en cambio, es más práctica para cremas y sopas directamente en la olla, sin necesidad de trasvasar líquido caliente a un vaso, con el riesgo de quemaduras o derrames que eso implica. También es más cómoda para triturar cantidades pequeñas, para hacer mahonesa casera o para mezclar directamente en el propio recipiente donde se va a servir, sin ensuciar un vaso adicional.",
      "Si el uso principal en casa son sopas, purés y cremas, una batidora de mano suele ser suficiente y cuesta menos que una de vaso equivalente en potencia, además de ocupar menos espacio guardada. Si en cambio lo habitual son batidos, smoothies o triturar hielo con regularidad, la batidora de vaso da mejor resultado y es más cómoda para esa tarea concreta.",
      "Para quien hace ambas cosas con cierta frecuencia, existen combos que incluyen vaso y varilla intercambiable en un mismo cuerpo de motor, una opción a considerar antes de comprar las dos por separado si no está claro cuál de los dos usos va a predominar con el tiempo.",
    ],
  },
  {
    slug: "como-guardar-sartenes-sin-rayar-el-antiadherente",
    img: "/assets/img/blog/como-guardar-sartenes-sin-rayar-el-antiadherente.jpg",
    title: "Cómo guardar las sartenes sin rayar el antiadherente",
    dek: "Apilar sartenes directamente unas sobre otras es de las formas más rápidas de estropear el recubrimiento antes de tiempo.",
    updated: "2026-09-19",
    body: [
      "Cuidar una sartén antiadherente al cocinar (fuego moderado, utensilios de silicona o madera) sirve de poco si después se guarda mal en el armario: apilar sartenes directamente unas sobre otras, sin nada entre ellas, es una de las causas más comunes de que el recubrimiento se raye antes de lo esperado, incluso en sartenes de buena calidad.",
      "Un organizador de sartenes con divisores verticales evita este problema por completo, porque permite guardarlas de pie, cada una en su propio hueco, sin que las superficies antiadherentes se toquen entre sí al sacar o guardar una pieza. <a href=\"/guias/organizadores-de-cocina.html\">Como explica la guía de organizadores de cocina de este sitio</a>, conviene comprobar que los divisores se puedan reordenar o quitar, porque una batería de cocina cambia de tamaño con el tiempo y el organizador debería poder adaptarse a eso.",
      "Si no hay espacio para un organizador vertical, una alternativa sencilla y barata es colocar un paño de cocina, un protector de fieltro o una funda específica entre cada sartén al apilarlas. No evita del todo el roce, pero amortigua bastante el contacto directo entre superficies antiadherentes, que es lo que provoca la mayoría de las rayaduras por almacenaje.",
      "Otro error habitual es guardar sartenes y tapas de metal juntas sin protección, dejando que la tapa roce directamente contra el antiadherente cada vez que se abre el armario. Separar tapas y sartenes, o usar un soporte específico para tapas, evita este contacto que pasa fácilmente desapercibido hasta que el desgaste ya es visible.",
      "Estos hábitos de almacenaje cuestan poco tiempo y casi nada de dinero comparado con el precio de una sartén nueva, y son, junto con el fuego moderado y los utensilios adecuados al cocinar, de los factores que más alargan la vida útil real de una sartén antiadherente.",
    ],
  },
];

// Bloque de "destacados" con un producto por categoría clave, para el hero
// que aparece en todas las páginas (ver featuredProductsSection en lib.js).
// Se reutilizan los datos ya cargados en GUIDES para no duplicar imagen/precio.
function pickFeatured(guideSlug, asin) {
  const g = GUIDES.find((x) => x.slug === guideSlug);
  const p = g.products.find((x) => x.asin === asin);
  return { ...p, category: g.slug, categoryTitle: g.title };
}

const FEATURED = [
  pickFeatured("robots-de-cocina-multifuncion", "B0BJQPQVHP"),
  pickFeatured("freidoras-de-aire", "B0G931B3RP"),
  pickFeatured("batidoras-y-licuadoras", "B0DBR9C6VM"),
  pickFeatured("cafeteras", "B0FP2HTVYR"),
  pickFeatured("basculas-de-cocina", "B0B4RTVZVC"),
  pickFeatured("sartenes-antiadherentes", "B0FC59RC94"),
  pickFeatured("tostadoras-y-sandwicheras", "B0F846P87G"),
  pickFeatured("cuchillos-de-cocina", "B08MTCRCT4"),
];

module.exports = { GUIDES, ARTICLES, FEATURED };
