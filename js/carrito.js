

// CARRITO


// Array para almacenar los productos
let carrito = [];



// ELEMENTOS DEL DOM


const selectorProducto = document.getElementById("seleccion-producto");
const botonAniadirCarrito = document.getElementById("añadir-al-carrito");
const contenedorArticulosCarrito = document.getElementById("articulos-carrito");
const elementoTotalFinal = document.getElementById("total-final");
const plazoDias = document.getElementById("number");
const descuentoAplicado = document.getElementById("descuento-aplicado");



// AÑADIR PRODUCTO AL CARRITO


botonAniadirCarrito.addEventListener("click", function () {

    const valorSeleccionado =
        selectorProducto.value;


    // Comprobar que se ha seleccionado un producto
    if (!valorSeleccionado) {

        alert("Selecciona un producto válido");

        return;
    }


    // La opción "info" no tiene precio
    if (valorSeleccionado === "info") {

        alert("Selecciona un producto con precio");

        return;
    }


    // Separar nombre y precio
    const [nombreProducto, precioProducto] =
        valorSeleccionado.split(":");


    const precio =
        parseFloat(precioProducto);


    // Añadir producto al carrito
    carrito.push({

        nombre: nombreProducto,

        precio: precio

    });


    // Limpiar el selector
    selectorProducto.value = "";


    // Limpiar los extras
    document
        .querySelectorAll(".checkbox-extra")
        .forEach(function (checkbox) {

            checkbox.checked = false;

        });


    // Actualizar carrito
    actualizarCarrito();


    // Actualizar total
    actualizarTotalFinal();

});



// MOSTRAR CARRITO


function actualizarCarrito() {

    // Limpiar el contenido anterior
    contenedorArticulosCarrito.innerHTML = "";


    // Si el carrito está vacío

    if (carrito.length === 0) {

        contenedorArticulosCarrito.innerHTML =
            `
            <span class="carrito-vacio">
                No hay productos en el carrito
            </span>
            `;

        return;
    }


    // Crear cada producto

    carrito.forEach(function (producto, index) {

        const articuloCarrito =
            document.createElement("div");


        articuloCarrito.classList.add(
            "articulo-carrito"
        );


        articuloCarrito.innerHTML =
            `
            <span class="nombre-producto">
                ${producto.nombre} -
                ${producto.precio.toFixed(2)} €
            </span>

            <button
                type="button"
                class="eliminar-articulo"
                data-index="${index}">
                Eliminar
            </button>
            `;


        // Añadir producto al contenedor
        contenedorArticulosCarrito.appendChild(
            articuloCarrito
        );

    });


    // BOTONES ELIMINAR


    const botonesEliminar =
        document.querySelectorAll(
            ".eliminar-articulo"
        );


    botonesEliminar.forEach(function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const index =
                    boton.dataset.index;


                eliminarArticulo(index);

            }
        );

    });

}



// ELIMINAR PRODUCTO


function eliminarArticulo(index) {

    // Eliminar producto del array
    carrito.splice(index, 1);


    // Actualizar carrito
    actualizarCarrito();


    // Actualizar total
    actualizarTotalFinal();

}



// OBTENER DESCUENTO SEGÚN EL PLAZO


function obtenerDescuento() {

    const dias =
        parseInt(plazoDias.value);


    let descuento = 0;


    // 0 - 10 días → 0%
    if (dias <= 10) {

        descuento = 0;

    }

    // 15 - 20 días → 10%
    else if (dias <= 20) {

        descuento = 0.10;

    }

    // 25 - 30 días → 20%
    else if (dias <= 30) {

        descuento = 0.20;

    }


    return descuento;

}



// MOSTRAR DESCUENTO APLICADO


function actualizarDescuento() {

    const descuento =
        obtenerDescuento();


    const porcentaje =
        descuento * 100;


    descuentoAplicado.textContent =
        `Descuento aplicado: ${porcentaje}%`;

}



// CALCULAR TOTAL FINAL


function actualizarTotalFinal() {


 // SUMAR PRODUCTOS DEL CARRITO
   

    let total =
        carrito.reduce(
            function (suma, producto) {

                return suma + producto.precio;

            },
            0
        );



 // PRODUCTO SELECCIONADO
    

    const valorSeleccionado =
        selectorProducto.value;


    
      // El producto seleccionado SOLO se muestra
      // temporalmente en el presupuesto.

       //Si ya está en el carrito, no se vuelve a sumar.


    if (
        valorSeleccionado &&
        valorSeleccionado !== "info"
    ) {

        const [nombreProducto, precioProducto] =
            valorSeleccionado.split(":");


        const precioSeleccionado =
            parseFloat(precioProducto);


        
           //Comprobar si ya existe exactamente
           //el mismo producto en el carrito.
        

        const productoYaExiste =
            carrito.some(function (producto) {

                return (
                    producto.nombre === nombreProducto &&
                    producto.precio === precioSeleccionado
                );

            });


        if (!productoYaExiste) {

            total += precioSeleccionado;

        }

    }


   
 // SUMAR EXTRAS
    

    const extrasSeleccionados =
        document.querySelectorAll(
            ".checkbox-extra:checked"
        );


    extrasSeleccionados.forEach(
        function (checkbox) {

            const [, precioExtra] =
                checkbox.value.split(":");


            total +=
                parseFloat(precioExtra);

        }
    );


   
 // OBTENER DESCUENTO
    

    const descuento =
        obtenerDescuento();


    
 // APLICAR DESCUENTO
   

    total =
        total - (total * descuento);


    
 // MOSTRAR DESCUENTO
   

    actualizarDescuento();


    
// MOSTRAR TOTAL
  

    elementoTotalFinal.textContent =
        `TOTAL FINAL: ${total.toFixed(2)} €`;

}



// EVENTO DEL SELECTOR DE PRODUCTO


selectorProducto.addEventListener(
    "change",
    function () {

        actualizarTotalFinal();

    }
);



// EVENTOS DE LOS EXTRAS


const checkboxesExtras =
    document.querySelectorAll(
        ".checkbox-extra"
    );


checkboxesExtras.forEach(
    function (checkbox) {

        checkbox.addEventListener(
            "change",
            function () {

                actualizarTotalFinal();

            }
        );

    }
);



// EVENTO DEL PLAZO


plazoDias.addEventListener(
    "input",
    function () {

        actualizarTotalFinal();

    }
);



// INICIAR CARRITO Y TOTAL


actualizarCarrito();

actualizarTotalFinal();









































