

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
                        
                    </div>
                    <div class="product-info">
                        <p class="product-name">Café colombia</p>
                        <p class="product-desc">${producto.detalle}</p>
                        <p class="product-price">${priceDisplay}€</p>
                        <div class="product-actions">
                            <button class="btn btn-secondary">Añadir</button>
                            <button class="btn btn-primary">Ver</button>
                        </div>
                    </div>
                </div>
            `;
    });

    trendingContainer.innerHTML = htmlContent;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderTrending);



document.addEventListener('DOMContentLoaded', function() {
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const gallery = document.querySelector('.scroll-gallery');

    if (gallery && scrollLeftBtn && scrollRightBtn) {
        const scrollAmount = 316;

        scrollLeftBtn.addEventListener('click', () => {
            gallery.scrollLeft -= scrollAmount;
        });

        scrollRightBtn.addEventListener('click', () => {
            gallery.scrollLeft += scrollAmount;
        });
    }
});