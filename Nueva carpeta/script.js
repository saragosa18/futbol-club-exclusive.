// Cambiar el mensaje de bienvenida

const botonMensaje = document.getElementById("boton-mensaje");
const mensajeBienvenida = document.getElementById("mensaje-bienvenida");

botonMensaje.addEventListener("click", function () {
    if (mensajeBienvenida.textContent.includes("deporte")) {
        mensajeBienvenida.textContent =
            "¡Únete a nuestro equipo y disfruta del fútbol con tus compañeros!";
    } else {
        mensajeBienvenida.textContent =
            "Un club donde el deporte, el compañerismo y la diversión están al alcance de todos.";
    }
});

// Mostrar u ocultar el horario

const botonHorario = document.getElementById("boton-horario");
const tablaHorarios = document.getElementById("tabla-horarios");

botonHorario.addEventListener("click", function () {
    if (tablaHorarios.style.display === "none") {
        tablaHorarios.style.display = "table";
        botonHorario.textContent = "Ocultar horario";
    } else {
        tablaHorarios.style.display = "none";
        botonHorario.textContent = "Mostrar horario";
    }
});