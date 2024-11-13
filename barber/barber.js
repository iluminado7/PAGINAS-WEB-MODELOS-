document.querySelector(".close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

const popup = document.getElementById("popup");
const header = document.getElementById("inicio");
const closeButton = document.querySelector(".close-popup");

closeButton.addEventListener("click", function() {
    popup.style.display = "none";
    // Habilitar funciones del encabezado una vez cerrado el pop-up
    header.style.pointerEvents = "auto";
});

// Deshabilitar funciones del encabezado mientras el pop-up esté abierto
header.style.pointerEvents = "none";
