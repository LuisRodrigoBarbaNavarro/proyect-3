// Verificar si el usuario ha iniciado sesión
var authenticatedUser = localStorage.getItem("authenticatedUser");

if (!authenticatedUser) {
    // El usuario no ha iniciado sesión, redirige a la página de error
    window.location.href = "../html/error.html";
}

// Establecer un temporizador de 10 segundos para cerrar la sesión
setTimeout(function () {
    // Limpiar la sesión local y redirigir a la página de inicio de sesión
    localStorage.removeItem("authenticatedUser");
    window.location.href = "../html/index.html";
}, 999999999); // 10000 milisegundos = 10 segundos