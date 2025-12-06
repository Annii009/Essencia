const API_BASE_URL = "http://localhost:8038";
const normalizarImagen = ruta => ruta ? ruta.replace("..", "") : "";

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));

    try {
        const res = await fetch(`${API_BASE_URL}/api/ProductosFloristeria`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const productos = await res.json();

        const product = productos.find(p => p.productosFloristeriaId === productId);

        if (product) {
            document.getElementById('detail-image').src = normalizarImagen(product.imagenRuta);
            document.getElementById('detail-image').alt = product.nombre;
            document.getElementById('detail-title').textContent = product.nombre;
            document.getElementById('detail-short-desc').textContent = product.detalle;
            document.getElementById('detail-long-desc').textContent = product.descripcionCuidados;
            document.getElementById('detail-price').textContent = `${product.precioEuros.toFixed(2)}€`;
            document.title = `ESSENCIA - ${product.nombre}`;

            renderRelatedProducts(productos, productId);
        } else {
            document.querySelector('.product-main').innerHTML = '<h2>Producto no encontrado</h2>';
        }
    } catch (err) {
        console.error("Error cargando detalle de floristería:", err);
        document.querySelector('.product-main').innerHTML = '<h2>Error al cargar el producto</h2>';
    }
});

function renderRelatedProducts(productos, currentId) {
    const container = document.getElementById('related-grid');
    if (!container) return;

    const otherProducts = productos.filter(p => p.productosFloristeriaId !== currentId);

    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    container.innerHTML = selected.map(product => `
        <a href="detalleFloristeria.html?id=${product.productosFloristeriaId}" class="related-card">
            <img src="${normalizarImagen(product.imagenRuta)}" alt="${product.nombre}">
            <div class="related-info">
                <h3>${product.nombre}</h3>
                <span class="price">${product.precioEuros.toFixed(2)}€</span>
            </div>
        </a>
    `).join('');
}
