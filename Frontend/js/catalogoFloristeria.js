document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-grid');
    const verMasContainer = document.getElementById('ver-mas-container');
    const verMasBtn = document.getElementById('ver-mas-btn');

    if (!container || !verMasContainer || !verMasBtn) {
        return;
    }

    const todosLosProductos = apiEssencia.productos_floristeria;
    const productosPorCarga = 8;
    let productosMostrados = 0;

    const cargarProductos = () => {
        const loteDeProductos = todosLosProductos.slice(productosMostrados, productosMostrados + productosPorCarga);

        loteDeProductos.forEach(product => {
            const productCardHTML = `
                <a href="detalleFloristeria.html?id=${product.id}" class="trending-card catalogo-card">
                    <div class="product-image-container">
                        <img src="${product.imagen}" alt="${product.nombre}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.nombre}</h3>
                        <p class="product-desc">${product.detalle}</p>
                        <p class="product-price">${product.precio_euros.toFixed(2).replace('.', ',')}€</p>
                        <div class="product-actions">
                            <button class="btn btn-primary">Ver</button>
                        </div>
                    </div>
                </a>
            `;
            container.insertAdjacentHTML('beforeend', productCardHTML);
        });

        productosMostrados += loteDeProductos.length;

        if (productosMostrados >= todosLosProductos.length) {
            verMasContainer.style.display = 'none';
        } else {
            verMasContainer.style.display = 'block';
        }
    };

    verMasBtn.addEventListener('click', cargarProductos);

    cargarProductos();
});