const API_BASE_URL = "http://localhost:8038";

let todosLosProductos = [];
const productosPorCarga = 8;
let productosMostrados = 0;

const normalizarImagen = ruta => ruta ? ruta.replace("..", "") : "";

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-grid');
    const verMasContainer = document.getElementById('ver-mas-container');
    const verMasBtn = document.getElementById('ver-mas-btn');

    if (!container || !verMasContainer || !verMasBtn) return;

    try {
        const res = await fetch(`${API_BASE_URL}/api/ProductosFloristeria`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        todosLosProductos = await res.json();
        console.log("Floristería desde API:", todosLosProductos);

        const cargarProductos = () => {
            const loteDeProductos = todosLosProductos.slice(
                productosMostrados,
                productosMostrados + productosPorCarga
            );

            loteDeProductos.forEach(product => {
                const productCardHTML = `
                    <a href="detalleFloristeria.html?id=${product.productosFloristeriaId}" class="trending-card catalogo-card">
                        <div class="product-image-container">
                            <img src="${normalizarImagen(product.imagenRuta)}" alt="${product.nombre}">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${product.nombre}</h3>
                            <p class="product-desc">${product.detalle}</p>
                            <p class="product-price">${product.precioEuros.toFixed(2).replace('.', ',')}€</p>
                            <div class="product-actions">
                                <button class="btn btn-primary">Ver</button>
                            </div>
                        </div>
                    </a>
                `;
                container.insertAdjacentHTML('beforeend', productCardHTML);
            });

            productosMostrados += loteDeProductos.length;
            verMasContainer.style.display =
                productosMostrados >= todosLosProductos.length ? 'none' : 'block';
        };

        verMasBtn.addEventListener('click', cargarProductos);
        cargarProductos();
    } catch (err) {
        console.error("Error al cargar productos de floristería:", err);
        container.innerHTML = "<p>Error al cargar productos.</p>";
        verMasContainer.style.display = 'none';
    }
});
