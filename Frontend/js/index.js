
/**
 * Genera el HTML para la tarjeta de una flor.
 * @param {object} flor - Objeto de la flor de la API.
 */
const createFlowerCard = (flor) => {
    return `
        <div class="flor-card">
            <img src="${flor.imagen}" alt="Imagen de ${flor.nombre}">
        </div>
    `;
};

/**
 * Genera el HTML para la tarjeta de un producto de cafetería.
 * @param {object} producto - Objeto del producto de cafetería de la API.
 */
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
                    <button class="btn btn-anadir">Añadir</button>
                    <button class="btn btn-ver">Ver</button>
                </div>
            </div>
        </div>
    `;
};

/**
 * Muestra las primeras 4 flores en el contenedor.
 */
const renderFloresDelMes = () => {
    const container = document.getElementById('flores-del-mes-container');
    // Se asume que 'apiEssencia' está disponible globalmente
    const floresDestacadas = apiEssencia.productos_floristeria.slice(0, 4); 
    
    if (container) {
        container.innerHTML = floresDestacadas.map(createFlowerCard).join('');
    }
};

/**
 * Obtiene 'num' elementos aleatorios de un array.
 * IMPORTANTE: Esta versión ha sido modificada para SOLO obtener elementos de los primeros 12 productos (los cafés).
 * @param {Array} arr - El array del que se extraen los elementos.
 * @param {number} num - El número de elementos aleatorios a obtener.
 * @returns {Array} Un nuevo array con los elementos seleccionados.
 */
const getRandomElements = (arr, num) => {
    // 1. Limitar la fuente de datos a los primeros 12 productos (índices 0 a 11).
    const limitedArr = arr.slice(0, 12);
    
    // 2. Ejecutar la lógica de selección aleatoria sobre el array limitado.
    const shuffled = [...limitedArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
// --------------------------------------------------------------------------------

/**
 * Gestiona el almacenamiento y la recuperación de 5 cafés aleatorios con caducidad diaria.
 * Utiliza localStorage para almacenar la selección y asegurar que cambie una vez al día.
 * @param {Array<Object>} todosLosCafes - El array completo de productos (apiEssencia.productos_cafeteria).
 * @returns {Array<Object>} - 5 cafés aleatorios de la selección diaria.
 */
const getDailyRandomCafes = (todosLosCafes) => {
    const CACHE_KEY = 'daily_barista_recommendation_cafes';
    // 24 horas en milisegundos
    const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; 

    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = new Date().getTime();

    if (cachedData) {
        const data = JSON.parse(cachedData);
        // Comprueba si el caché existe y NO ha caducado
        if (now < data.expiry) {
            console.log("Cargando recomendación de cafés del día desde el caché.");
            return data.productos;
        }
    }

    // Si no hay caché o ha caducado, genera nuevos productos aleatorios
    console.log("Generando nueva recomendación de cafés del día y almacenando en caché.");
    
    // Usamos getRandomElements, que ya limita a los 12 primeros productos.
    const newProducts = getRandomElements(todosLosCafes, 5); 
    
    const cacheObject = {
        productos: newProducts,
        expiry: now + CACHE_EXPIRY_MS
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
    return newProducts;
};

// --------------------------------------------------------------------------------

/**
 * Muestra 5 productos de cafetería aleatorios (solo los 12 cafés, con rotación diaria).
 */
const renderRecomendacionBarista = () => {
    const container = document.getElementById('recomendacion-barista-container');
    // Se asume que 'apiEssencia' está disponible globalmente

    // Usamos la nueva función para obtener la selección con caducidad diaria.
    const productosAleatorios = getDailyRandomCafes(apiEssencia.productos_cafeteria);

    if (container) {
        // Se asume que 'createCoffeeCard' está definida en otro lugar.
        container.innerHTML = productosAleatorios.map(createCoffeeCard).join('');
    }
};

// Se ejecuta cuando el contenido del HTML ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    renderFloresDelMes();
    renderRecomendacionBarista();
});