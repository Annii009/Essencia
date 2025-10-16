
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
 * @param {Array} arr - El array del que se extraen los elementos.
 * @param {number} num - El número de elementos aleatorios a obtener.
 * @returns {Array} Un nuevo array con los elementos seleccionados.
 */
const getRandomElements = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

/**
 * Muestra 5 productos de cafetería aleatorios.
 */
const renderRecomendacionBarista = () => {
    const container = document.getElementById('recomendacion-barista-container');
    // Se asume que 'apiEssencia' está disponible globalmente
    const productosAleatorios = getRandomElements(apiEssencia.productos_cafeteria, 5);

    if (container) {
        container.innerHTML = productosAleatorios.map(createCoffeeCard).join('');
    }
};

// Se ejecuta cuando el contenido del HTML ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    renderFloresDelMes();
    renderRecomendacionBarista();
});