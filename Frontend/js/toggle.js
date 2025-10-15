document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 2. Definir la función para alternar la clase 'active'
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase 'active' en el contenedor del menú
            navMenu.classList.toggle('active');

            // Opcional: Cambiar el icono de hamburguesa a una 'X' al abrirlo
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});