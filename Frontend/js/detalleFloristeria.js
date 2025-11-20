document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));

    const product = apiEssencia.productos_floristeria.find(p => p.id === productId);

    if (product) {
        document.getElementById('detail-image').src = product.imagen;
        document.getElementById('detail-image').alt = product.nombre;
        document.getElementById('detail-title').textContent = product.nombre;
        document.getElementById('detail-short-desc').textContent = product.detalle;
        document.getElementById('detail-long-desc').textContent = product.descripcion;
        document.getElementById('detail-price').textContent = `${product.precio_euros.toFixed(2)}€`;
        document.title = `ESSENCIA - ${product.nombre}`;
        
        renderRelatedProducts(productId);
    } else {
        document.querySelector('.product-main').innerHTML = '<h2>Producto no encontrado</h2>';
    }
});

function renderRelatedProducts(currentId) {
    const container = document.getElementById('related-grid');
    
    const otherProducts = apiEssencia.productos_floristeria.filter(p => p.id !== currentId);
    
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    container.innerHTML = selected.map(product => `
        <a href="detalleFloristeria.html?id=${product.id}" class="related-card">
            <img src="${product.imagen}" alt="${product.nombre}">
            <div class="related-info">
                <h3>${product.nombre}</h3>
                <span class="price">${product.precio_euros.toFixed(2)}€</span>
            </div>
        </a>
    `).join('');
}