// Movimiento del ícono del carrito al hacer clic
document.addEventListener("DOMContentLoaded", function() {
    const carritoIcon = document.getElementById('carrito-icon');

    carritoIcon.onmouseover = () => {
        carritoIcon.style.transform = "scale(1.3)";
        carritoIcon.style.color = "#FF5733";
        carritoIcon.style.transition = "0.3s";
    };

    carritoIcon.onmouseout = () => {
        carritoIcon.style.transform = "scale(1)";
        carritoIcon.style.color = "#fff"; // ajusta según el color original de tu navbar
    };
});

// Funcionalidad de favoritos con jQuery
$(document).ready(function() {
    $(".btn-fav").click(function() {
        const card = $(this).closest(".product-card");
        const nombre = card.data("producto");

        // Toggle clase "favorito"
        card.toggleClass("favorito");

        // Cambiar apariencia del botón
        if (card.hasClass("favorito")) {
            $(this).text("💖 Favorito");
            alert(`"${nombre}" fue añadido a favoritos.`);
        } else {
            $(this).text("❤ Favorito");
            alert(`"${nombre}" fue eliminado de favoritos.`);
        }
    });
});
