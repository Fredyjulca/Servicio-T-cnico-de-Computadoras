document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de Servicio Técnico cargada correctamente.");

    const boton = document.querySelector(".boton");

    if (boton) {
        boton.addEventListener("click", function () {
            console.log("El usuario desea solicitar un servicio.");
        });
    }
});
