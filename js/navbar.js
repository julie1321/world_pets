




                /******* NAV-LINKS **********/

const navbarLinks = document.querySelector(".navbar-links");

// Detectamos si estamos dentro de la carpeta views
const estamosEnViews = window.location.pathname.includes("/views/");

// Elegimos la ruta correcta de datos.json
const rutaDatos = estamosEnViews
    ? "../assets/data/datos.json"
    : "./assets/data/datos.json";


fetch(rutaDatos)
    .then(response => {

        if (!response.ok) {
            throw new Error(
                `No se pudo cargar datos.json: ${response.status}`
            );
        }

        return response.json();
    })

    .then(data => {

        data.navItems.forEach((link) => {

            let href = link.href;

            // Corregimos las rutas cuando estamos dentro de /views/
            if (estamosEnViews) {

                if (link.href === "index.html") {

                    href = "../index.html";

                } else if (link.href.startsWith("./views/")) {

                    href = "../views/" + link.href.replace("./views/", "");
                }
            }


            // Creamos el enlace
            const enlace = document.createElement("a");

            enlace.href = href;
            enlace.textContent = link.title;


            
            // MARCAR LA PÁGINA ACTUAL
            

            const paginaActual = window.location.pathname;

            const rutaEnlace = new URL(
                enlace.href,
                window.location.href
            ).pathname;


            // Comprobamos si el enlace corresponde
            // con la página en la que estamos
            if (
                paginaActual === rutaEnlace ||
                (paginaActual.endsWith("/") && rutaEnlace.endsWith("/index.html"))
            ) {
                enlace.classList.add("activo");
            }


            // Añadimos el enlace al menú
            navbarLinks.appendChild(enlace);

        });

    })

    .catch(error => {

        console.error("Error al cargar los datos:", error);

    });







              //BUSCADOR//

const buscar = document.getElementById("buscar");

if (buscar) {
    buscar.addEventListener("click", function () {
        if (window.location.pathname.includes("/views/")) {
            window.open("../views/contacto.html", "_blank");
        } else {
            window.open("./views/contacto.html", "_blank");
        }
    });
}
        




       