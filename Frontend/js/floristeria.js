function createRandomGenerator(seed) {
    let state = seed;
    const m = 0x80000000;
    const a = 1103515245;
    const c = 12345;

    return function () {
        state = (a * state + c) % m;
        return state / m;
    };
}

function selectDailyProducts() {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    const random = createRandomGenerator(dayOfYear);
    const allProducts = [...apiEssencia.productos_floristeria];
    const dailyProducts = [];

    for (let i = 0; i < 3; i++) {
        if (!allProducts.length) break;
        const index = Math.floor(random() * allProducts.length);
        dailyProducts.push(allProducts[index]);
        allProducts.splice(index, 1);
    }

    return dailyProducts;
}

function renderTrending() {
    const container = document.getElementById('trending-products');
    const items = selectDailyProducts();

    container.innerHTML = items
        .map(producto => {
            const priceDisplay = "5,99";
            return `
                <div class="trending-card">
                    <div class="product-image-container">
                        <img src="${producto.imagen}" alt="${producto.nombre}" 
                             onerror="this.src='./imagenes/placeholder.jpg'">
                    </div>
                    <div class="product-info">
                        <p class="product-name">Café colombia</p>
                        <p class="product-desc">${producto.detalle}</p>
                        <p class="product-price">${priceDisplay}€</p>
                        <div class="product-actions">
                            <button class="btn btn-primary">Ver</button>
                        </div>
                    </div>
                </div>
            `;
        })
        .join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const trendingContainer = document.getElementById('trending-products');
    
    const trendingProducts = apiEssencia.productos_floristeria.slice(0, 3);

    trendingContainer.innerHTML = trendingProducts.map(product => `
        <a href="detalleFloristeria.html?id=${product.id}" class="trending-card">
            <div class="product-image-container">
                <img src="${product.imagen}" alt="${product.nombre}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.nombre}</div>
                <div class="product-desc">${product.detalle}</div>
                <div class="product-price">${product.precio_euros.toFixed(2)}€</div>
                <div class="product-actions">
                    <button class="btn btn--green">Ver detalle</button>
                </div>
            </div>
        </a>
    `).join('');

    const scrollContainer = document.querySelector('.gallery__scroll');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    if(leftBtn && rightBtn && scrollContainer) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});

