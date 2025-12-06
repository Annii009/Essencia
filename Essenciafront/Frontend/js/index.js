const API_BASE_URL = "http://localhost:8038";
const normalizarImagen = ruta => ruta ? ruta.replace("..", "") : "";

// ---------- FLORES DEL MES ----------

const createFlowerCard = flor => `
    <a href="detalleFloristeria.html?id=${flor.productosFloristeriaId}" class="flor-card">
        <img src="${normalizarImagen(flor.imagenRuta)}" alt="Imagen de ${flor.nombre}">
    </a>
`;

const renderFloresDelMes = async () => {
    const container = document.getElementById('flores-del-mes-container');
    if (!container) return;

    try {
        const res = await fetch(`${API_BASE_URL}/api/ProductosFloristeria`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const productos = await res.json();

        console.log("Flores del mes:", productos);
        const floresDestacadas = productos.slice(0, 4);
        container.innerHTML = floresDestacadas.map(createFlowerCard).join('');
    } catch (err) {
        console.error("Error flores del mes:", err);
        container.innerHTML = "<p>Error al cargar flores.</p>";
    }
};


const createCoffeeCard = producto => `
    <div class="cafe-card">
        <div class="cafe-header">
            <img src="${normalizarImagen(producto.imagenRuta)}" alt="Imagen de ${producto.nombre}">
            <i class="far fa-heart heart-icon"></i>
        </div>
        <div class="cafe-content">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <div class="cafe-actions">
                <button class="btn btn--ver">Ver</button>
            </div>
        </div>
    </div>
`;

const getRandomElements = (arr, num) => {
    const limitedArr = arr.slice(0, 12);
    const shuffled = [...limitedArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const getDailyRandomCafes = todosLosCafes => {
    const CACHE_KEY = 'daily_barista_recommendation_cafes';
    const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000;

    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = Date.now();

    if (cachedData) {
        const data = JSON.parse(cachedData);
        if (now < data.expiry) return data.productos;
    }

    const newProducts = getRandomElements(todosLosCafes, 5);

    const cacheObject = {
        productos: newProducts,
        expiry: now + CACHE_EXPIRY_MS
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
    return newProducts;
};

const renderRecomendacionBarista = async () => {
    const container = document.getElementById('recomendacion-barista-container');
    if (!container) return;

    try {
        const res = await fetch(`${API_BASE_URL}/api/ProductosCafeteria`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const productos = await res.json();

        console.log("Cafetería para barista:", productos);
        const productosAleatorios = getDailyRandomCafes(productos);
        container.innerHTML = productosAleatorios.map(createCoffeeCard).join('');
    } catch (err) {
        console.error("Error recomendación barista:", err);
        container.innerHTML = "<p>Error al cargar recomendaciones.</p>";
    }
};


document.addEventListener('DOMContentLoaded', () => {
    renderFloresDelMes();
    renderRecomendacionBarista();
});
