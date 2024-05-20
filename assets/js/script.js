document.addEventListener("DOMContentLoaded", function() {
    // Comprobar si hay un hash en la URL (un enlace con #producto1, #producto2, etc.)
    if(window.location.hash) {
        // Obtenemos el ID del producto desde el hash
        var productId = window.location.hash.substring(1);
        // Intentamos encontrar el elemento con el ID del producto
        var productElement = document.getElementById(productId);
        // Si lo encontramos, lo desplazamos a la parte superior de la ventana
        if(productElement) {
            productElement.scrollIntoView();
        }
    }
});
