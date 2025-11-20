const createFlowerCard = (flor) => {
    return `
        <a href="detalleFloristeria.html?id=${flor.id}" class="flor-card">
            <img src="${flor.imagen}" alt="Imagen de ${flor.nombre}">
        </a>
    `;
};

const createCoffeeCard = (producto) => {
    return `
        <div class="cafe-card">
            <div class="cafe-header">
                <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}">
                <i class="far fa-heart heart-icon"></i>
            </div>
            <div class="cafe-content">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <div class="price">${producto.precio_euros.toFixed(2)}€</div>
                <div class="cafe-actions">
                    <button class="btn btn--ver">Ver</button>
                </div>
            </div>
        </div>
    `;
};

const renderFloresDelMes = () => {
    const container = document.getElementById('flores-del-mes-container');
    const floresDestacadas = apiEssencia.productos_floristeria.slice(0, 4); 
    
    if (container) {
        container.innerHTML = floresDestacadas.map(createFlowerCard).join('');
    }
};

const getRandomElements = (arr, num) => {
    const limitedArr = arr.slice(0, 12);
    const shuffled = [...limitedArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const getDailyRandomCafes = (todosLosCafes) => {
    const CACHE_KEY = 'daily_barista_recommendation_cafes';
    const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000;

    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = new Date().getTime();

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

const renderRecomendacionBarista = () => {
    const container = document.getElementById('recomendacion-barista-container');
    const productosAleatorios = getDailyRandomCafes(apiEssencia.productos_cafeteria);

    if (container) {
        container.innerHTML = productosAleatorios.map(createCoffeeCard).join('');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderFloresDelMes();
    renderRecomendacionBarista();
});