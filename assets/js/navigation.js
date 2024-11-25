
// Obtener todas las etiquetas <a> del menú
const links = document.querySelectorAll('.nav-link');

// Obtener la URL actual
const currentUrl = window.location.href;

// Recorrer los enlaces y comparar con la URL actual
links.forEach(link => {
    if (link.href === currentUrl) {
    link.classList.add('active');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.one-1');
    const contentWrapper = document.querySelector('.content-wrapper');
    const menuCheckbox = document.querySelector('#servicios');

    // Función para actualizar las clases de los elementos
    function updateGradientBackground() {
        if (Array.from(checkboxes).some(cb => cb.checked)) {
            contentWrapper.classList.add('gradient-background');
        } else {
            contentWrapper.classList.remove('gradient-background');
        }
    }

    // Evento para cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateGradientBackground();
        });
    });

    // Evento para el clic en el elemento 'contentWrapper'
    contentWrapper.addEventListener('click', function() {
        // Si el menú está abierto, cerrarlo y actualizar las clases
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
            updateGradientBackground();
        }
    });
});