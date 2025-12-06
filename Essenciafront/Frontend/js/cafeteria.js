const API_BASE_URL = "http://localhost:8038";

const TARTAS_IDS = [23, 25, 27];
const SALADOS_IDS = [31, 32, 33];

let productosCafeteria = [];

const normalizarImagen = ruta => ruta ? ruta.replace("..", "") : "";

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/api/ProductosCafeteria`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        productosCafeteria = await res.json();
        console.log("Productos desde API:", productosCafeteria);

        renderTartas();
        renderSalados();
    } catch (err) {
        console.error("Error al cargar productos de cafetería:", err);
    }
});

const renderTartas = () => {
    const container = document.getElementById('tartas-container');
    if (!container) return;

    // Filtramos solo las 3 tartas
    const tartas = productosCafeteria.filter(p =>
        TARTAS_IDS.includes(p.productosCafeteriaId)
    );

    container.innerHTML = tartas.map(tarta => `
        <div class="card-item">
            <div class="card-header">
                <img src="${normalizarImagen(tarta.imagenRuta)}" alt="${tarta.nombre}">
                <i class="far fa-heart heart-icon"></i>
            </div>
            <div class="card-content">
                <h4>${tarta.nombre}</h4>
                <p>${tarta.descripcion}</p>
                <div class="price">${tarta.precioEuros.toFixed(2).replace('.', ',')}€</div>
            </div>
            <div class="card-actions">
                <button class="btn btn--rose btn--small">Ver</button>
            </div>
        </div>
    `).join('');
};

const renderSalados = () => {
    const container = document.getElementById('salados-container');
    if (!container) return;

    // Filtramos solo los 3 salados
    const salados = productosCafeteria.filter(p =>
        SALADOS_IDS.includes(p.productosCafeteriaId)
    );

    container.innerHTML = salados.map(plato => `
        <div class="card-item">
            <div class="card-header">
                <img src="${normalizarImagen(plato.imagenRuta)}" alt="${plato.nombre}">
            </div>
            <div class="card-content">
                <h4>${plato.nombre}</h4>
                <p>${plato.descripcion}</p>
            </div>
            <div class="card-actions">
                <button class="btn btn--outline-rose btn--small" style="width: 100%;">Comprar</button>
            </div>
        </div>
    `).join('');
};
