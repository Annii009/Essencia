
// --- DATOS SIMULADOS DE LA API ---
const apiEssencia = {
    // ... (otros datos de cafeteria omitidos para brevedad)
    "productos_floristeria": [
        // He simplificado los datos de la floristería a solo 10 para el ejemplo,
        // pero la lógica funciona con los 31 que proporcionaste.
        { "id": 500, "nombre": "Ramo Amapolas y Rosas", "imagen": "./imagenes/trending-amapolas.jpg", "detalle": "Café importado de colombia con toque de frutas del bosque y un toque mentolado.", "precio_euros": 5.99 },
        { "id": 501, "nombre": "Ramo Rosas y Peonías", "imagen": "./imagenes/trending-rosas.jpg", "detalle": "Café importado de colombia con toque de frutas del bosque y un toque mentolado.", "precio_euros": 5.99 },
        { "id": 502, "nombre": "Ramo Nardo Azul", "imagen": "./imagenes/trending-nardo.jpg", "detalle": "Café importado de colombia con toque de frutas del bosque y un toque mentolado.", "precio_euros": 5.99 },
        { "id": 503, "nombre": "Claveles Rojos", "imagen": "./imagenes/flores/claveles.jpg", "detalle": "Fascinación y amor puro en un solo ramo.", "precio_euros": 18.00 },
        { "id": 504, "nombre": "Lirios Blancos", "imagen": "./imagenes/flores/lirios.jpg", "detalle": "Elegancia y pureza, un clásico de la floristería.", "precio_euros": 37.00 },
        { "id": 505, "nombre": "Girasoles Alegres", "imagen": "./imagenes/flores/girasoles.jpg", "detalle": "Un pedacito de sol para alegrar el día.", "precio_euros": 29.00 },
        { "id": 506, "nombre": "Tulipanes Mixtos", "imagen": "./imagenes/flores/tulipanes.jpg", "detalle": "Símbolo de amor perfecto y primavera.", "precio_euros": 26.00 },
        { "id": 507, "nombre": "Orquídeas Phalaenopsis", "imagen": "./imagenes/flores/orquideas.jpg", "detalle": "Exótica belleza y lujo duradero.", "precio_euros": 50.00 },
        { "id": 508, "nombre": "Peonías Lujosas", "imagen": "./imagenes/flores/peonias.jpg", "detalle": "Un ramo espectacular de prosperidad.", "precio_euros": 45.00 },
        { "id": 509, "nombre": "Margaritas Silvestres", "imagen": "./imagenes/flores/margaritas.jpg", "detalle": "Sencillez y alegría en cada pétalo.", "precio_euros": 17.00 }
    ]
};

/**
 * Generador Pseudo-Aleatorio Simple (LCG)
 * Utiliza el día del año como semilla (seed) para asegurar la consistencia diaria.
 * @param {number} seed - El número inicial (ej: día del año).
 * @returns {function} Una función que devuelve un número aleatorio entre 0 y 1.
 */
function createRandomGenerator(seed) {
    let state = seed;
    const m = 0x80000000; // 2^31
    const a = 1103515245;
    const c = 12345;

    return function () {
        // LCG: X_{n+1} = (a * X_n + c) mod m
        state = (a * state + c) % m;
        return state / m; // Devuelve un número entre 0 y 1
    };
}

/**
 * Selecciona 3 productos aleatorios de forma consistente para el día actual.
 */
function selectDailyProducts() {
    const today = new Date();
    // Obtener el día del año (0 a 365) para usarlo como semilla
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay); // Semilla

    const random = createRandomGenerator(dayOfYear);
    const allProducts = [...apiEssencia.productos_floristeria];
    const numRequired = 3;
    const dailyProducts = [];

    // Algoritmo de muestreo aleatorio sin reemplazo basado en la semilla
    for (let i = 0; i < numRequired; i++) {
        if (allProducts.length === 0) break;

        // Usa la función random basada en la semilla
        const randomIndex = Math.floor(random() * allProducts.length);

        // Añade el producto y lo quita de la lista de todos los productos
        dailyProducts.push(allProducts[randomIndex]);
        allProducts.splice(randomIndex, 1);
    }

    return dailyProducts;
}

/**
 * Genera el HTML de la sección Trending con los productos seleccionados.
 */
function renderTrending() {
    const trendingContainer = document.getElementById('trending-products');
    const trendingItems = selectDailyProducts(); // Llama a la nueva función de selección

    let htmlContent = '';
    trendingItems.forEach(producto => {
        // Se mantiene el texto y precio del mockup original (5.99€, "Café colombia...")
        // para replicar la imagen, a pesar de que los productos sean flores.
        const priceDisplay = (5.99).toFixed(2).replace('.', ',');
        htmlContent += `
                <div class="trending-card">
                    <div class="product-image-container">
                        <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='./imagenes/placeholder.jpg'">
                        <button class="wishlist-btn"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
                    </div>
                    <div class="product-info">
                        <p class="product-name">Café colombia</p>
                        <p class="product-desc">${producto.detalle}</p>
                        <p class="product-price">${priceDisplay}€</p>
                        <div class="product-actions">
                            <button class="btn-anadir">Añadir</button>
                            <button class="btn-ver">Ver</button>
                        </div>
                    </div>
                </div>
            `;
    });

    trendingContainer.innerHTML = htmlContent;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderTrending);
