document.addEventListener('DOMContentLoaded', () => {
    renderTartas();
    renderSalados();
});

const TARTAS_IDS = [23, 25, 27]; 
const SALADOS_IDS = [31, 32, 33];

const renderTartas = () => {
    const container = document.getElementById('tartas-container');
    if (!container) return;

    const tartas = apiEssencia.productos_cafeteria.filter(p => TARTAS_IDS.includes(p.id));

    container.innerHTML = tartas.map(tarta => `
        <div class="card-item">
            <div class="card-header">
                <img src="${tarta.imagen}" alt="${tarta.nombre}">
                <i class="far fa-heart heart-icon"></i>
            </div>
            <div class="card-content">
                <h4>${tarta.nombre}</h4>
                <p>${tarta.descripcion}</p>
                <div class="price">${tarta.precio_euros.toFixed(2).replace('.', ',')}€</div>
            </div>
            <div class="card-actions">
                <button class="btn btn--outline-rose btn--small">Añadir</button>
                <button class="btn btn--rose btn--small">Ver</button>
            </div>
        </div>
    `).join('');
};

const renderSalados = () => {
    const container = document.getElementById('salados-container');
    if (!container) return;

    const salados = apiEssencia.productos_cafeteria.filter(p => SALADOS_IDS.includes(p.id));

    container.innerHTML = salados.map(plato => `
        <div class="card-item">
            <div class="card-header">
                <img src="${plato.imagen}" alt="${plato.nombre}">
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