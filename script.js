const boton = document.querySelector("#cambiar-tema");
boton.addEventListener("click", function () {
    document.body.classList.toggle("oscuro"); if (document.body.classList.contains("oscuro")) {
        boton.textContent = "Activar modo claro";
    } else {
        boton.textContent = "Activar modo oscuro";
    }
}); const contador = document.querySelector("#contador");
const fechaLanzamiento = new Date("2026-11-19T00:00:00");
const ahora = new Date();
const diferencia = fechaLanzamiento - ahora;
const diasRestantes = Math.max(0, Math.floor(diferencia / (1000 * 60 * 60 * 24)));
const horasRestantes = Math.floor(Math.max(0, diferencia) / (1000 * 60 * 60)) % 24;
const minutosRestantes = Math.floor(Math.max(0, diferencia) / (1000 * 60)) % 60;
if (diferencia <= 0) {
    contador.textContent = "llego el GTA 6!!!";
} else {
    contador.textContent = "Faltan " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos para GTA VI."
} const contadorPapa = document.querySelector("#contador-papa");
const fechaCumpleañosPapa = new Date("2026-12-09T00:00:00");
const diferenciaPapa = fechaCumpleañosPapa - ahora;
const diasRestantesPapa = Math.max(0, Math.ceil(diferenciaPapa / (1000 * 60 * 60 * 24)));
if (diferenciaPapa <= 0) {
    contadorPapa.textContent = "¡Feliz cumpleaños papá!¡pasala lindo,disfruta y te quiero mucho!";
} else {
    contadorPapa.textContent = "Faltan " + diasRestantesPapa + " días para el cumpleaños de mi papá.";
}