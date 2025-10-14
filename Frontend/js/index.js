// script.js

// NOTA: La constante 'apiEssencia' es accesible desde api.js

// --- Funciones para generar HTML dinámico ---

/**
 * Genera el HTML para la tarjeta de una flor
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
 * Genera el HTML para la tarjeta de un producto de cafetería
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
                    <button class="btn btn-añadir">Añadir</button>
                    <button class="btn btn-ver">Ver</button>
                </div>
            </div>
        </div>
    `;
};

/**
 * Selecciona y renderiza las flores en la sección "Flores del mes".
 * Muestra las primeras 4 flores.
 */
const renderFloresDelMes = () => {
    const container = document.getElementById('flores-del-mes-container');
    const floresDestacadas = apiEssencia.productos_floristeria.slice(0, 4); 
    
    if (container) {
        container.innerHTML = floresDestacadas.map(createFlowerCard).join('');
    }
};

/**
 * Función para obtener n elementos aleatorios de un array.
 * @param {Array} arr - El array de origen.
 * @param {number} num - El número de elementos a seleccionar.
 * @returns {Array} Un nuevo array con elementos aleatorios.
 */
const getRandomElements = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

/**
 * Selecciona 5 productos aleatorios y los renderiza en el carrusel.
 */
const renderRecomendacionBarista = () => {
    const container = document.getElementById('recomendacion-barista-container');
    // Seleccionar 5 productos de cafetería al azar
    const productosAleatorios = getRandomElements(apiEssencia.productos_cafeteria, 5);

    if (container) {
        container.innerHTML = productosAleatorios.map(createCoffeeCard).join('');
    }
};

// Ejecutar las funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderFloresDelMes();
    renderRecomendacionBarista();
});