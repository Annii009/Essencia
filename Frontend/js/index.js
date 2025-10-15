const PUERTO_LOCAL = '5500'; 
const BASE_URL = `http://localhost:${PUERTO_LOCAL}/`;

/**
 * Función auxiliar para construir la URL absoluta de una imagen.
 * @param {string} rutaRelativa - La ruta de la imagen de la API (ej: "../imagenes/...").
 * @returns {string} La ruta absoluta completa de la imagen.
 */
const getAbsoluteImageUrl = (rutaRelativa) => {
    if (rutaRelativa.startsWith('http')) {
        return rutaRelativa;
    }

    let rutaLimpia = rutaRelativa
        .replace('../imagenes/', 'imagenes/') 
        .replace('./imagenes/', 'imagenes/') 
        .replace('imagenes/', 'imagenes/'); 

    return `${BASE_URL}${rutaLimpia}`;
};

/**
 * Genera el HTML para la tarjeta de una flor.
 * @param {object} flor - Objeto de la flor de la API.
 */
const createFlowerCard = (flor) => {
    const imageUrl = getAbsoluteImageUrl(flor.imagen); 
    
    return `
        <div class="flor-card">
            <img src="${imageUrl}" alt="Imagen de ${flor.nombre}">
        </div>
    `;
};

/**
 * Genera el HTML para la tarjeta de un producto de cafetería.
 * @param {object} producto - Objeto del producto de cafetería de la API.
 */
const createCoffeeCard = (producto) => {
    const imageUrl = getAbsoluteImageUrl(producto.imagen);

    return `
        <div class="cafe-card">
            <div class="cafe-header">
                <img src="${imageUrl}" alt="Imagen de ${producto.nombre}">
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
 * Muestra las primeras 4 flores en el contenedor.
 */
const renderFloresDelMes = () => {
    const container = document.getElementById('flores-del-mes-container');
    const floresDestacadas = apiEssencia.productos_floristeria.slice(0, 4); 
    
    if (container) {
        container.innerHTML = floresDestacadas.map(createFlowerCard).join('');
    }
};

/**
 * Obtiene n elementos aleatorios de un array.
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
    const productosAleatorios = getRandomElements(apiEssencia.productos_cafeteria, 5);

    if (container) {
        container.innerHTML = productosAleatorios.map(createCoffeeCard).join('');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderFloresDelMes();
    renderRecomendacionBarista();
});