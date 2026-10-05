


    

// PRESENTACION


const presentacionContenedor1 = document.getElementById("presentacion-contenedor1");

fetch("./assets/data/datos.json")
    .then(response => {

        if (!response.ok) {
            throw new Error("No se ha podido cargar datos.json");
        }

        return response.json();
    })
    .then(data => {

        console.log("Datos de presentación:", data.presentacion);

        presentacionContenedor1.innerHTML = "";

        data.presentacion.forEach(item => {

            presentacionContenedor1.innerHTML += `

                <div class="presentacion-contenedor1">

                    <h2 class="titulo">
                        ${item.titulo}
                    </h2>

                    <div class="imagenes-medicos">

                        <img
                            class="imagen-medico1"
                            src="${item.imagenes[0]}"
                            alt="Médico veterinario"
                        >

                        <img
                            class="imagen-medico2"
                            src="${item.imagenes[1]}"
                            alt="Médicos veterinarios"
                        >

                    </div>

                      <p class="descripcion">
                        ${item.descripcion}
                      </p>

                     <a
                        href="./views/galeria.html" target="_blank" rel="noopener noreferrer">COSIGUE información para participar en NUESTROS sorteos</a>
                        
                    
                     </a>

                </div>
            `;
        });

    })
    .catch(error => {
        console.error("Error al cargar la presentación:", error);
    });



    