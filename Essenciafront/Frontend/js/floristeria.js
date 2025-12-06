const API_BASE_URL = "http://localhost:8038";
const normalizarImagen = ruta => ruta ? ruta.replace("..", "") : "";

function createRandomGenerator(seed) {
    let state = seed;
    const m = 0x80000000;
    const a = 1103515245;
    const c = 12345;

    return function () {
        state = (a * state + c) % m;
        return state / m;
    };
}

function selectDailyProducts(productos) {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    const random = createRandomGenerator(dayOfYear);
    const allProducts = [...productos];
    const dailyProducts = [];

    for (let i = 0; i < 3; i++) {
        if (!allProducts.length) break;
        const index = Math.floor(random() * allProducts.length);
        dailyProducts.push(allProducts[index]);
        allProducts.splice(index, 1);
    }

    return dailyProducts;
}

function renderTrending(productos) {
    const container = document.getElementById('trending-products');
    if (!container) return;

    const items = selectDailyProducts(productos);

    container.innerHTML = items.map(producto => `
        <div class="trending-card">
            <div class="product-image-container">
                <img src="${normalizarImagen(producto.imagenRuta)}"
                     alt="${producto.nombre}"
                     onerror="this.src='./imagenes/placeholder.jpg'">
            </div>
            <div class="product-info">
                <p class="product-name">${producto.nombre}</p>
                <p class="product-desc">${producto.detalle}</p>
                <p class="product-price">${producto.precioEuros.toFixed(2).replace('.', ',')}€</p>
                <div class="product-actions">
                    <button class="btn btn-primary">Ver</button>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', async () => {
    const trendingContainer = document.getElementById('trending-products');
    const scrollContainer = document.querySelector('.gallery__scroll');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    try {
        const res = await fetch(`${API_BASE_URL}/api/ProductosFloristeria`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const productos = await res.json();
        console.log("Floristería para trending:", productos);

        if (trendingContainer) {
            renderTrending(productos);
        }

        if (scrollContainer && leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
            });

            rightBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    } catch (err) {
        console.error("Error cargando productos para trending:", err);
        if (trendingContainer) {
            trendingContainer.innerHTML = "<p>Error al cargar flores destacadas.</p>";
        }
    }
});
