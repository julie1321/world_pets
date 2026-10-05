
// FORMULARIO

const formulario = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

// VALIDAR NOMBRE
function validarNombre() {
    const valor = nombre.value.trim();
    const error = document.getElementById("nombreError");

    const nombrePattern =
        /^(?=.{3,15}$)[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;

    if (valor === "") {
        error.textContent = "El nombre es obligatorio.";
        nombre.classList.add("invalido");
        nombre.classList.remove("valido");
        return false;
    }

    if (!nombrePattern.test(valor)) {
        error.textContent =
            "El nombre debe contener solo letras y tener entre 3 y 15 caracteres.";
        nombre.classList.add("invalido");
        nombre.classList.remove("valido");
        return false;
    }

    error.textContent = "";
    nombre.classList.add("valido");
    nombre.classList.remove("invalido");
    return true;
}

// VALIDAR APELLIDOS
function validarApellidos() {
    const valor = apellidos.value.trim();
    const error = document.getElementById("apellidosError");

    const apellidosPattern =
        /^(?=.{3,40}$)[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;

    if (valor === "") {
        error.textContent = "Los apellidos son obligatorios.";
        apellidos.classList.add("invalido");
        apellidos.classList.remove("valido");
        return false;
    }

    if (!apellidosPattern.test(valor)) {
        error.textContent =
            "Los apellidos deben contener solo letras y tener entre 3 y 40 caracteres.";
        apellidos.classList.add("invalido");
        apellidos.classList.remove("valido");
        return false;
    }

    error.textContent = "";
    apellidos.classList.add("valido");
    apellidos.classList.remove("invalido");
    return true;
}

// VALIDAR TELÉFONO
function validarTelefono() {
    const valor = telefono.value.trim();
    const error = document.getElementById("telefonoError");

    const telefonoPattern = /^[6789]\d{8}$/;

    if (valor === "") {
        error.textContent = "El teléfono es obligatorio.";
        telefono.classList.add("invalido");
        telefono.classList.remove("valido");
        return false;
    }

    if (!telefonoPattern.test(valor)) {
        error.textContent =
            "El teléfono debe tener exactamente 9 dígitos.";
        telefono.classList.add("invalido");
        telefono.classList.remove("valido");
        return false;
    }

    error.textContent = "";
    telefono.classList.add("valido");
    telefono.classList.remove("invalido");
    return true;
}

// VALIDAR EMAIL
function validarEmail() {
    const valor = email.value.trim();
    const error = document.getElementById("emailError");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === "") {
        error.textContent = "El email es obligatorio.";
        email.classList.add("invalido");
        email.classList.remove("valido");
        return false;
    }

    if (!emailPattern.test(valor)) {
        error.textContent = "Introduce un email válido.";
        email.classList.add("invalido");
        email.classList.remove("valido");
        return false;
    }

    error.textContent = "";
    email.classList.add("valido");
    email.classList.remove("invalido");
    return true;
}

// VALIDAR CARRITO
function validarCarrito() {
    const error = document.getElementById("producto-error");
    const productos = document.querySelectorAll(".articulo-carrito");

    if (carrito.length === 0) {
        error.textContent =
            "Debes añadir al menos un producto al carrito.";
        return false;
    }

    error.textContent = "";
    return true;
}

// VALIDACIONES MIENTRAS SE ESCRIBE
nombre.addEventListener("input", validarNombre);
apellidos.addEventListener("input", validarApellidos);
telefono.addEventListener("input", validarTelefono);
email.addEventListener("input", validarEmail);

// ENVÍO DEL FORMULARIO
formulario.addEventListener("submit", function (event) {

    // PRIMERO COMPROBAMOS EL CARRITO
    const carritoValido = validarCarrito();

    if (!carritoValido) {
        event.preventDefault();
        return;
    }

    // COMPROBAMOS LOS CAMPOS
    const nombreValido = validarNombre();
    const apellidosValidos = validarApellidos();
    const telefonoValido = validarTelefono();
    const emailValido = validarEmail();

    // COMPROBAMOS LA POLÍTICA DE PRIVACIDAD
    const privacidad = document.getElementById("privacidad");

    if (!privacidad.checked) {
        event.preventDefault();
        alert("Debes aceptar la política de privacidad.");
        return;
    }

    // SI HAY ALGÚN CAMPO INCORRECTO, NO SE ENVÍA
    if (
        !nombreValido ||
        !apellidosValidos ||
        !telefonoValido ||
        !emailValido
    ) {
        event.preventDefault();
        return;
    }
});

// RESET
formulario.addEventListener("reset", function () {
    setTimeout(function () {

        const campos = [
            nombre,
            apellidos,
            telefono,
            email
        ];

        campos.forEach(function (campo) {
            campo.classList.remove("valido");
            campo.classList.remove("invalido");
        });

        document.getElementById("nombreError").textContent = "";
        document.getElementById("apellidosError").textContent = "";
        document.getElementById("telefonoError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("productoError").textContent = "";

    }, 0);
});































