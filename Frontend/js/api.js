const apiEssencia = {
  "productos_cafeteria": [
    {
      "id": 1,
      "nombre": "Amanecer Americano",
      "imagen": "../imagenes/cafeteria/cafe1.png",
      "ingredientes": ["Café de tueste medio", "Agua purificada"],
      "descripcion": "El clásico que nunca falla. Suave, aromático y ligero, ideal para comenzar el día.",
      "precio_euros": 2.50,
      "alergenos": []
    },
    {
      "id": 2,
      "nombre": "Niebla Matutina (Latte)",
      "imagen": "../imagenes/cafeteria/cafe2.png",
      "ingredientes": ["Doble espresso", "Leche entera vaporizada"],
      "descripcion": "La combinación perfecta de intensidad y suavidad. Un trago de café y espuma sedosa.",
      "precio_euros": 3.00,
      "alergenos": ["Lácteos"]
    },
    {
      "id": 3,
      "nombre": "El Trío de Milán (Cappuccino)",
      "imagen": "../imagenes/cafeteria/cafe3.png",
      "ingredientes": ["Espresso", "Leche caliente", "Abundante espuma de leche"],
      "descripcion": "La tradicional bebida italiana, equilibrada en sabor y coronada con una densa capa de espuma.",
      "precio_euros": 3.20,
      "alergenos": ["Lácteos"]
    },
    {
      "id": 4,
      "nombre": "Corazón Negro (Espresso)",
      "imagen": "../imagenes/cafeteria/cafe4.png",
      "ingredientes": ["Café de tueste oscuro", "Agua caliente"],
      "descripcion": "La esencia pura. Corto, intenso y con una crema perfecta. Solo para los más valientes.",
      "precio_euros": 2.00,
      "alergenos": []
    },
    {
      "id": 5,
      "nombre": "Armonía Perfecta (Café con Leche)",
      "imagen": "../imagenes/cafeteria/cafe5.png",
      "ingredientes": ["Café de filtro", "Leche entera"],
      "descripcion": "Un café con leche cremoso y reconfortante. El equilibrio entre el café y la leche.",
      "precio_euros": 2.80,
      "alergenos": ["Lácteos"]
    },
    {
      "id": 6,
      "nombre": "Toque de Luz (Macchiato)",
      "imagen": "../imagenes/cafeteria/cafe6.png",
      "ingredientes": ["Espresso", "Una 'mancha' de leche espumada"],
      "descripcion": "Un espresso con solo un toque de leche para suavizar la intensidad. Fuerte y elegante.",
      "precio_euros": 2.70,
      "alergenos": ["Lácteos"]
    },
    {
      "id": 7,
      "nombre": "Origen Etiopía Yirgacheffe (Filtrado)",
      "imagen": "../imagenes/cafeteria/cafe7.png",
      "ingredientes": ["Café de especialidad Etiopía Yirgacheffe", "Agua caliente"],
      "descripcion": "Café de cuerpo ligero con vibrantes notas afrutadas de jazmín y cítricos. Preparado en filtro.",
      "precio_euros": 4.50,
      "alergenos": []
    },
    {
      "id": 8,
      "nombre": "Colombia Supremo (Chemex)",
      "imagen": "../imagenes/cafeteria/cafe8.png",
      "ingredientes": ["Café de especialidad Colombia Supremo", "Agua caliente"],
      "descripcion": "Un café limpio y equilibrado con notas a caramelo y nuez. Preparación elegante y precisa en Chemex.",
      "precio_euros": 4.80,
      "alergenos": []
    },
    {
      "id": 9,
      "nombre": "Capricho de Kenia (V60)",
      "imagen": "../imagenes/cafeteria/cafe9.png",
      "ingredientes": ["Café de especialidad Kenia AA", "Agua caliente"],
      "descripcion": "Intenso y complejo, con acidez brillante y toques de grosella negra y vino. Servido en método V60.",
      "precio_euros": 4.70,
      "alergenos": []
    },
    {
      "id": 10,
      "nombre": "Gota de Brasil (Flat White)",
      "imagen": "../imagenes/cafeteria/cafe10.png",
      "ingredientes": ["Doble ristretto de especialidad Brasil", "Leche vaporizada (poca espuma)"],
      "descripcion": "Un espresso intenso de especialidad brasileño con un sabor a chocolate y nuez, coronado con una fina capa de leche cremosa.",
      "precio_euros": 3.90,
      "alergenos": ["Lácteos"]
    },
    {
      "id": 11,
      "nombre": "Elixir de Sumatra (Cold Brew)",
      "imagen": "../imagenes/cafeteria/cafe11.png",
      "ingredientes": ["Café de especialidad Sumatra Mandheling", "Agua fría"],
      "descripcion": "Extracción en frío de 18 horas para un café de baja acidez, con notas terrosas y achocolatadas. Servido con hielo.",
      "precio_euros": 4.20,
      "alergenos": []
    },
    {
      "id": 12,
      "nombre": "Guatemala Antigua (Cortado)",
      "imagen": "../imagenes/cafeteria/cafe12.png",
      "ingredientes": ["Doble espresso de especialidad Guatemala Antigua", "Pequeña cantidad de leche vaporizada"],
      "descripcion": "Café con cuerpo, dulzor de chocolate y especias. Un espresso cortado con la proporción justa de leche.",
      "precio_euros": 3.60,
      "alergenos": ["Lácteos"]
    },
    {
      "id": 13,
      "nombre": "Pecado Fundido (Chocolate Clásico)",
      "imagen": "../imagenes/cafeteria/chocoTaza.png",
      "ingredientes": ["Chocolate negro (70% cacao)", "Leche entera", "Azúcar de caña"],
      "descripcion": "Nuestro chocolate caliente espeso y tradicional, perfecto para los días fríos.",
      "precio_euros": 3.50,
      "alergenos": ["Lácteos", "Soja (posiblemente)"]
    },
    {
      "id": 14,
      "nombre": "Nube de Invierno (Chocolate con Nata)",
      "imagen": "../imagenes/cafeteria/chocoTaza2.png",
      "ingredientes": ["Chocolate negro", "Leche", "Nata montada fresca"],
      "descripcion": "El clásico Pecado Fundido coronado con un generoso copete de nata montada.",
      "precio_euros": 4.00,
      "alergenos": ["Lácteos", "Soja (posiblemente)"]
    },
    {
      "id": 15,
      "nombre": "El Viajero de París (Croissant)",
      "imagen": "../imagenes/cafeteria/cruasan.png",
      "ingredientes": ["Masa de hojaldre de mantequilla", "Huevo (para brillo)"],
      "descripcion": "Crujiente por fuera, tierno por dentro. Elaborado con mantequilla de alta calidad.",
      "precio_euros": 1.80,
      "alergenos": ["Gluten", "Lácteos", "Huevo"]
    },
    {
      "id": 16,
      "nombre": "Susurros de Mantequilla (Minicroissants)",
      "imagen": "../imagenes/cafeteria/cruasanesBlancos.png",
      "ingredientes": ["Masa de hojaldre", "Mantequilla"],
      "descripcion": "Un trío de pequeños croissants naturales, ideales para picar o acompañar.",
      "precio_euros": 2.50,
      "alergenos": ["Gluten", "Lácteos"]
    },
    {
      "id": 17,
      "nombre": "Tesoro Escondido (Minicroissants de Crema)",
      "imagen": "../imagenes/cafeteria/cruasanesCrema.png",
      "ingredientes": ["Minicroissant", "Crema pastelera casera"],
      "descripcion": "Mini croissants rellenos de nuestra suave y dulce crema pastelera de vainilla.",
      "precio_euros": 3.00,
      "alergenos": ["Gluten", "Lácteos", "Huevo"]
    },
    {
      "id": 18,
      "nombre": "Tentación Oscura (Minicroissants de Chocolate)",
      "imagen": "../imagenes/cafeteria/cruasanesNegros.png",
      "ingredientes": ["Minicroissant", "Relleno de ganache de chocolate"],
      "descripcion": "Mini croissants con un intenso y fundente relleno de chocolate negro.",
      "precio_euros": 3.00,
      "alergenos": ["Gluten", "Lácteos", "Soja (posiblemente)"]
    },
    {
      "id": 19,
      "nombre": "Lágrimas de Chocolate (Galleta)",
      "imagen": "../imagenes/cafeteria/galletas.png",
      "ingredientes": ["Harina de trigo", "Mantequilla", "Azúcar moreno", "Chips de chocolate negro"],
      "descripcion": "Galleta estilo 'cookie' con grandes trozos de chocolate. Crujiente en los bordes y tierna por dentro.",
      "precio_euros": 2.20,
      "alergenos": ["Gluten", "Lácteos", "Huevo", "Soja (posiblemente)"]
    },
    {
      "id": 20,
      "nombre": "Elixir Zen (Matcha Latte)",
      "imagen": "../imagenes/cafeteria/matcha1.png",
      "ingredientes": ["Té Matcha ceremonial", "Leche vegetal o entera vaporizada"],
      "descripcion": "Una bebida energizante sin el nerviosismo del café, con el sabor herbal del té verde japonés.",
      "precio_euros": 3.80,
      "alergenos": ["Lácteos (si se elige leche entera)"]
    },
    {
      "id": 21,
      "nombre": "Jardín Japonés (Matcha con Leche)",
      "imagen": "../imagenes/cafeteria/matcha2.png",
      "ingredientes": ["Té Matcha ceremonial", "Leche fría o caliente"],
      "descripcion": "Matcha suavemente batido con leche. Un placer verde y saludable.",
      "precio_euros": 3.50,
      "alergenos": ["Lácteos (si se elige leche entera)"]
    },
    {
      "id": 22,
      "nombre": "Espiral de Ceylán (Rollito de Canela)",
      "imagen": "../imagenes/cafeteria/rollitoCanela.png",
      "ingredientes": ["Masa de brioche", "Canela de Ceylán", "Glaseado de queso crema"],
      "descripcion": "Suave, esponjoso y con el toque especiado de la canela. Un dulce irresistible.",
      "precio_euros": 2.80,
      "alergenos": ["Gluten", "Lácteos", "Huevo"]
    },
    {
      "id": 23,
      "nombre": "Trilogía de Cacao (Tarta Tres Chocolates)",
      "imagen": "../imagenes/cafeteria/tarta3Chocos.png",
      "ingredientes": ["Chocolate negro", "Chocolate con leche", "Chocolate blanco", "Nata", "Base de galleta"],
      "descripcion": "Tres capas de placer: blanco, con leche y negro. Para los verdaderos amantes del chocolate.",
      "precio_euros": 4.50,
      "alergenos": ["Gluten", "Lácteos", "Soja"]
    },
    {
      "id": 24,
      "nombre": "Volcán de Frutas Prohibidas",
      "imagen": "../imagenes/cafeteria/tarta3Chocos2.png",
      "ingredientes": ["Bizcocho de chocolate", "Ganache", "Mermelada de frutos rojos"],
      "descripcion": "Intenso bizcocho de chocolate bañado y cubierto con una cascada de frutos rojos.",
      "precio_euros": 4.80,
      "alergenos": ["Gluten", "Lácteos", "Huevo"]
    },
    {
      "id": 25,
      "nombre": "Suspiro de Nata (Tarta de Queso)",
      "imagen": "../imagenes/cafeteria/tartaBlanca.png",
      "ingredientes": ["Queso crema", "Nata fresca", "Huevo", "Base de galleta"],
      "descripcion": "Nuestra tarta de queso horneada, suave y cremosa, con un sabor ligeramente ácido.",
      "precio_euros": 4.00,
      "alergenos": ["Gluten", "Lácteos", "Huevo"]
    },
    {
      "id": 26,
      "nombre": "El Jardín de las Fresas",
      "imagen": "../imagenes/cafeteria/tartaFresas.png",
      "ingredientes": ["Bizcocho genovés", "Nata montada", "Fresas naturales"],
      "descripcion": "Fina tarta de bizcocho, nata aireada y las mejores fresas de temporada.",
      "precio_euros": 4.20,
      "alergenos": ["Gluten", "Lácteos", "Huevo"]
    },
    {
      "id": 27,
      "nombre": "El Otoño de Eva (Tarta de Manzana)",
      "imagen": "../imagenes/cafeteria/tartaManzana.png",
      "ingredientes": ["Manzana 'Golden'", "Canela", "Masa de hojaldre", "Mantequilla"],
      "descripcion": "El postre tradicional con manzanas caramelizadas y un toque de canela. Jugosa y tibia.",
      "precio_euros": 3.80,
      "alergenos": ["Gluten", "Lácteos"]
    },
    {
      "id": 28,
      "nombre": "Boscaje Encantado",
      "imagen": "../imagenes/cafeteria/tartaNegro.png",
      "ingredientes": ["Mousse de queso", "Gelatina de frutos del bosque", "Base de chocolate"],
      "descripcion": "Una tarta fría y ligera, con el sabor ácido de las bayas silvestres.",
      "precio_euros": 4.00,
      "alergenos": ["Gluten", "Lácteos", "Soja (posiblemente)"]
    },
    {
      "id": 29,
      "nombre": "Volcán de Queso y Bayas",
      "imagen": "../imagenes/cafeteria/tartaQueso.png",
      "ingredientes": ["Tarta de queso horneada", "Salsa casera de frutos rojos"],
      "descripcion": "Nuestra Tarta de Queso (Suspiro de Nata) cubierta con una explosión de sabor a frutos rojos.",
      "precio_euros": 4.50,
      "alergenos": ["Gluten", "Lácteos", "Huevo"]
    },
    {
      "id": 30,
      "nombre": "La Tierra de Oz (Tarta de Zanahoria)",
      "imagen": "../imagenes/cafeteria/tartaZanahorias.png",
      "ingredientes": ["Zanahoria rallada", "Especias (canela, nuez moscada)", "Nueces", "Glaseado de queso crema"],
      "descripcion": "Húmeda, especiada y con el toque crujiente de las nueces. Cubierta con un glaseado de queso crema.",
      "precio_euros": 4.20,
      "alergenos": ["Gluten", "Lácteos", "Huevo", "Frutos secos (nueces)"]
    },
    {
      "id": 31,
      "nombre": "Verde Despertar (Tostada de Aguacate)",
      "imagen": "../imagenes/cafeteria/tostadaAguacate.png",
      "ingredientes": ["Pan de semillas tostado", "Aguacate laminado", "Tomate cherry", "AOVE"],
      "descripcion": "Una opción saludable y fresca. Pan crujiente con aguacate, aceite de oliva virgen extra y tomate.",
      "precio_euros": 5.00,
      "alergenos": ["Gluten", "Sésamo (si el pan lleva)"]
    },
    {
      "id": 32,
      "nombre": "El Tesoro Ibérico",
      "imagen": "../imagenes/cafeteria/tostadaJamon1.png",
      "ingredientes": ["Pan de cristal", "Tomate triturado", "Aceite de oliva", "Jamón Ibérico de Bellota"],
      "descripcion": "El lujo del desayuno español. Jamón ibérico de la mejor calidad sobre pan y tomate.",
      "precio_euros": 6.50,
      "alergenos": ["Gluten"]
    },
    {
      "id": 33,
      "nombre": "El Clásico Serrano",
      "imagen": "../imagenes/cafeteria/tostadaJamon2.png",
      "ingredientes": ["Pan rústico", "Tomate natural rallado", "Aceite de oliva", "Jamón Serrano"],
      "descripcion": "La versión sencilla y deliciosa, con jamón serrano y el toque esencial del tomate.",
      "precio_euros": 5.80,
      "alergenos": ["Gluten"]
    }
  ],
  "productos_floristeria": [
    {
      "id": 500,
      "nombre": "Amapolas",
      "imagen": "../imagenes/flores/amapolas.png",
      "detalle": "Un vibrante ramo de amapolas que irradia energía y pasión, perfecto para celebrar la alegría.",
      "descripcion": "Las amapolas cortadas son sensibles. Corta los tallos en ángulo y sumérgelos inmediatamente en agua caliente por unos segundos antes de colocarlos en agua fresca. Son originarias de regiones de clima templado de Eurasia y Norteamérica.",
      "precio_euros": 25.00
    },
    {
      "id": 501,
      "nombre": "Camelias",
      "imagen": "../imagenes/flores/camelias.png",
      "detalle": "Delicadas camelias en tonos pastel, símbolo de admiración y sofisticación. Un regalo de pura elegancia.",
      "descripcion": "La Camelia es originaria de Asia Oriental (China, Japón). Requiere un suelo ácido, bien drenado y protección del sol directo fuerte para evitar que sus hojas se quemen.",
      "precio_euros": 32.00
    },
    {
      "id": 502,
      "nombre": "Campanillas",
      "imagen": "../imagenes/flores/campanillas.png",
      "detalle": "Un fresco bouquet de campanillas silvestres, evocando la tranquilidad de los bosques y la frescura de la mañana.",
      "descripcion": "Las campanillas (Campanula spp.) prefieren la sombra parcial o plena y suelos húmedos, pero bien drenados. Muchas especies Tesoson nativas de las regiones templadas del hemisferio norte.",
      "precio_euros": 20.00
    },
    {
      "id": 503,
      "nombre": "Claveles",
      "imagen": "../imagenes/flores/claveles.png",
      "detalle": "Claveles en tonos vivos, un clásico lleno de encanto que expresa amor puro y fascinación.",
      "descripcion": "Para alargar la vida del clavel, cambia el agua diariamente y haz un corte diagonal en los tallos cada dos días. El clavel común (Dianthus caryophyllus) es nativo de la región mediterránea.",
      "precio_euros": 18.00
    },
    {
      "id": 504,
      "nombre": "Claveles Pastel",
      "imagen": "../imagenes/flores/claveles2.png",
      "detalle": "Claveles suaves en tonalidades pastel, transmitiendo dulzura y afecto sincero. Ideal para un gesto delicado.",
      "descripcion": "Cambiar el agua y recortar los tallos de los claveles con frecuencia es crucial. Son flores robustas originarias del Mediterráneo y cultivadas globalmente.",
      "precio_euros": 19.00
    },
    {
      "id": 505,
      "nombre": "Ramo Colorado",
      "imagen": "../imagenes/flores/colorado.png",
      "detalle": "Un ramo silvestre con una explosión de colores cálidos que recuerdan los campos al atardecer.",
      "descripcion": "Este tipo de arreglos silvestres deben mantenerse en un lugar fresco, lejos de la luz solar directa y fuentes de calor. Requieren agua limpia y fresca con nutrientes para ramos.",
      "precio_euros": 28.00
    },
    {
      "id": 506,
      "nombre": "Corazones Sangrantes",
      "imagen": "../imagenes/flores/corazones-sangrientes.png",
      "detalle": "Exóticas flores en forma de corazón, un regalo único para expresar un amor profundo y misterioso.",
      "descripcion": "El Corazón Sangrante (Dicentra spectabilis) es originario de Asia, específicamente de Siberia, Corea, China y Japón. Prefiere la sombra o sombra parcial y suelo uniformemente húmedo.",
      "precio_euros": 35.00
    },
    {
      "id": 507,
      "nombre": "Crocus",
      "imagen": "../imagenes/flores/crocus.png",
      "detalle": "Un bouquet de crocus en tonos lilas, anunciando la llegada de la primavera y nuevos comienzos.",
      "descripcion": "Los Crocus son plantas bulbosas de fácil cuidado, originarias de Asia Menor y del sur de Europa. Necesitan pleno sol o sombra parcial y suelos bien drenados.",
      "precio_euros": 22.00
    },
    {
      "id": 508,
      "nombre": "Dalias",
      "imagen": "../imagenes/flores/dalias.png",
      "detalle": "Dalias en tonos cálidos y anaranjados, ofreciendo una explosión de color y alegría para cualquier ocasión.",
      "descripcion": "Las Dalias (Dahlia) son nativas de México y Centroamérica. En jarrones, requieren cambiar el agua a diario y mantenerlas lejos de la fruta, ya que el etileno acelera su marchitamiento.",
      "precio_euros": 30.00
    },
    {
      "id": 509,
      "nombre": "Flor de Loto",
      "imagen": "../imagenes/flores/florDeLoto.png",
      "detalle": "Delicadas flores que evocan la paz y la pureza de la flor de loto. Un regalo que inspira calma.",
      "descripcion": "La Flor de Loto (Nelumbo nucifera) es nativa de Asia y Australia. Para su cuidado, el agua en la que se coloca debe estar limpia y debe protegerse de la luz solar directa intensa.",
      "precio_euros": 38.00
    },
    {
      "id": 510,
      "nombre": "Girasoles",
      "imagen": "../imagenes/flores/girasoles.png",
      "detalle": "Girasoles majestuosos que irradian felicidad y optimismo. Un pedacito de sol para alegrar el día.",
      "descripcion": "Los Girasoles (Helianthus annuus) son originarios de Norteamérica. Necesitan mucha agua; revisa el nivel dos veces al día, ya que sus grandes cabezas evaporan el agua rápidamente.",
      "precio_euros": 29.00
    },
    {
      "id": 511,
      "nombre": "Hortensias",
      "imagen": "../imagenes/flores/hortensias.png",
      "detalle": "Un voluminoso ramo de hortensias azules, que aportan un toque de frescura y romanticismo campestre.",
      "descripcion": "Las Hortensias son originarias de Asia y América. Si la cabeza de la flor se marchita, sumerge toda la cabeza en un baño de agua fresca por 20 minutos para rehidratarla.",
      "precio_euros": 34.00
    },
    {
      "id": 512,
      "nombre": "Latanas",
      "imagen": "../imagenes/flores/latanas.png",
      "detalle": "Un colorido arreglo de latanas que aporta un toque tropical y lleno de vitalidad a cualquier espacio.",
      "descripcion": "Las Lantanas son nativas de las regiones tropicales de América. Son flores resistentes y con poco mantenimiento que prosperan en pleno sol y resisten bien la sequía.",
      "precio_euros": 23.00
    },
    {
      "id": 513,
      "nombre": "Lirios Blancos",
      "imagen": "../imagenes/flores/lirios.png",
      "detalle": "Elegantes lirios blancos, símbolos de pureza e inocencia. Un ramo que irradia sofisticación.",
      "descripcion": "Los Lirios (Lilium) son nativos del hemisferio norte templado. Retira el polen de las anteras tan pronto como se abran para evitar manchas en los pétalos y prolongar su vida.",
      "precio_euros": 37.00
    },
    {
      "id": 514,
      "nombre": "Margaritas",
      "imagen": "../imagenes/flores/margaritas.png",
      "detalle": "Un clásico bouquet de margaritas blancas y amarillas, lleno de alegría y sencillez. Perfecto para cualquier ocasión.",
      "descripcion": "Las Margaritas (Leucanthemum vulgare) son nativas de Europa y Asia templada. Mantén sus tallos en agua limpia con frecuencia y quita las hojas que queden sumergidas.",
      "precio_euros": 17.00
    },
    {
      "id": 515,
      "nombre": "Nardo Azul",
      "imagen": "../imagenes/flores/nardoAzul.png",
      "detalle": "Nardos en un cautivador tono azul, una flor elegante y con un aroma sutil. Exclusividad en cada pétalo.",
      "descripcion": "El Nardo (Polianthes tuberosa) es nativo de México. Para flores cortadas, colócalas en un lugar fresco y cambia el agua cada dos días para mantener la calidad de su fragancia.",
      "precio_euros": 40.00
    },
    {
      "id": 516,
      "nombre": "Orquídeas Blancas",
      "imagen": "../imagenes/flores/orquideas.png",
      "detalle": "Exóticas orquídeas blancas, un símbolo de belleza y lujo. Un regalo impresionante y duradero.",
      "descripcion": "Las Orquídeas Phalaenopsis (las más comunes) son originarias del sudeste asiático. Requieren luz indirecta brillante, alta humedad y riego solo cuando el sustrato está casi seco.",
      "precio_euros": 50.00
    },
    {
      "id": 517,
      "nombre": "Orquídeas Mixtas",
      "imagen": "../imagenes/flores/orquideas2.png",
      "detalle": "Un vibrante arreglo de orquídeas de varios colores, creando una armonía exótica y sofisticada.",
      "descripcion": "Las orquídeas prosperan en luz brillante filtrada (no sol directo) y detestan el exceso de riego. Su hábitat natural suele ser tropical, creciendo sobre árboles (epífitas).",
      "precio_euros": 52.00
    },
    {
      "id": 518,
      "nombre": "Paniculata Blanca",
      "imagen": "../imagenes/flores/paniculata.png",
      "detalle": "Delicados ramilletes de paniculata, conocidos como 'velo de novia'. Pura ternura y romanticismo.",
      "descripcion": "La Paniculata o Gypsophila es originaria de Eurasia, África y Australia. Para usarla como flor seca, cuélgala boca abajo en un lugar oscuro y seco hasta que el tallo esté rígido.",
      "precio_euros": 15.00
    },
    {
      "id": 519,
      "nombre": "Paniculata Lila",
      "imagen": "../imagenes/flores/paniculata2.png",
      "detalle": "Paniculata teñida en suaves tonos lilas, aportando un toque de fantasía y delicadeza.",
      "descripcion": "Esta flor es muy popular como 'relleno' en ramos. Al ser teñida, evita que el agua salpique fuera del jarrón, ya que el tinte podría manchar algunas superficies.",
      "precio_euros": 16.00
    },
    {
      "id": 520,
      "nombre": "Paniculata Multicolor",
      "imagen": "../imagenes/flores/paniculata3.png",
      "detalle": "Paniculata en una explosión de colores vibrantes, ideal para celebraciones y momentos alegres.",
      "descripcion": "Para mantener su color vibrante, evita exponerla directamente al sol si está teñida. Es una flor de larga duración tanto en fresco como en seco.",
      "precio_euros": 18.00
    },
    {
      "id": 521,
      "nombre": "Peonías",
      "imagen": "../imagenes/flores/peonias.png",
      "detalle": "Lujosas peonías en plena floración, un símbolo de prosperidad y amor. Un ramo espectacular.",
      "descripcion": "Las Peonías son nativas de Asia, Europa y Norteamérica. Si los capullos no abren, puedes darles un corte fresco al tallo y colocarlos en agua tibia para estimular la apertura.",
      "precio_euros": 45.00
    },
    {
      "id": 522,
      "nombre": "Ramo Fuego y Sol",
      "imagen": "../imagenes/flores/ramo1.png",
      "detalle": "Un vibrante ramo que combina la pasión del rojo con la energía del amarillo y naranja, creando un efecto de calidez.",
      "descripcion": "Para ramos mixtos, retira las flores marchitas inmediatamente para evitar que liberen gases que acorten la vida del resto de las flores. Mantén el agua con nutrientes para flores.",
      "precio_euros": 30.00
    },
    {
      "id": 523,
      "nombre": "Ramo Sabor a Primavera",
      "imagen": "../imagenes/flores/ramo2.png",
      "detalle": "Fresco y colorido, este ramo celebra la vitalidad de la primavera con una mezcla armoniosa de flores.",
      "descripcion": "Cambia el agua del jarrón cada dos días, asegurándote de que el agua esté a temperatura ambiente. La mayoría de estas flores provienen de cultivos de invernadero para asegurar su frescura.",
      "precio_euros": 33.00
    },
    {
      "id": 524,
      "nombre": "Ramo Campo de Colores",
      "imagen": "../imagenes/flores/ramo3.png",
      "detalle": "Una selección variada de flores que emulan la belleza de un campo en plena floración, lleno de vida y alegría.",
      "descripcion": "Mantén el ramo lejos de corrientes de aire y fuentes de calor. El aire seco y el calor excesivo son los principales enemigos de la longevidad de las flores cortadas.",
      "precio_euros": 31.00
    },
    {
      "id": 525,
      "nombre": "Rosas Blancas",
      "imagen": "../imagenes/flores/rosasBlancas.png",
      "detalle": "Elegantes rosas blancas, símbolo de inocencia, pureza y nuevos comienzos. Un clásico atemporal.",
      "descripcion": "Las Rosas son nativas de Asia. Para su cuidado, elimina las hojas que queden bajo el nivel del agua para prevenir bacterias y siempre haz un corte diagonal en el tallo.",
      "precio_euros": 28.00
    },
    {
      "id": 526,
      "nombre": "Rosas Negras",
      "imagen": "../imagenes/flores/rosasNegras.png",
      "detalle": "Rosas negras, exóticas y enigmáticas. Un regalo único que evoca misterio y elegancia sofisticada.",
      "descripcion": "La rosa negra es, en realidad, una rosa roja o granate muy oscura lograda mediante hibridación o teñido. Sigue los mismos cuidados básicos que las rosas tradicionales.",
      "precio_euros": 38.00
    },
    {
      "id": 527,
      "nombre": "Rosas Rojas",
      "imagen": "../imagenes/flores/rosasRojas.png",
      "detalle": "El clásico ramo de rosas rojas, el símbolo definitivo del amor profundo y la pasión ardiente.",
      "descripcion": "La rosa es una de las flores más cultivadas en el mundo, con centros de producción importantes en Ecuador y Kenia. Usa el sobre de nutrientes florales en el agua para un mayor disfrute.",
      "precio_euros": 35.00
    },
    {
      "id": 528,
      "nombre": "Flor de Cerezo (Sakuras)",
      "imagen": "../imagenes/flores/sakuras.png",
      "detalle": "Delicadas ramas de flor de cerezo, capturando la efímera belleza de la primavera japonesa.",
      "descripcion": "La flor de cerezo (Sakura) es originaria de Asia Oriental, siendo Japón el país más famoso. Para ramas cortadas, golpea suavemente la base del tallo para ayudar a que absorba agua.",
      "precio_euros": 27.00
    },
    {
      "id": 529,
      "nombre": "Tulipanes",
      "imagen": "../imagenes/flores/tulipanes.png",
      "detalle": "Un ramo vibrante de tulipanes en tonos rojos y naranjas, que simboliza la alegría y el amor perfecto.",
      "descripcion": "Los Tulipanes son originarios de Asia Central y Turquía. Siguen creciendo en el jarrón; colócalos en poca agua y en un lugar fresco para controlar su crecimiento y que se mantengan erguidos.",
      "precio_euros": 26.00
    },
    {
      "id": 530,
      "nombre": "Violetas",
      "imagen": "../imagenes/flores/violetas.png",
      "detalle": "Pequeñas y encantadoras violetas en tonos lavanda, perfectas para un detalle dulce y nostálgico.",
      "descripcion": "Las violetas (Viola odorata) son nativas de Europa y Asia. Las violetas en maceta prefieren la sombra parcial y un suelo constantemente húmedo pero bien drenado.",
      "precio_euros": 19.00
    }
  ]
}
