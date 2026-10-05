
// OPCIONES DE GEOLOCALIZACIÓN


let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};



// UBICACIÓN POR DEFECTO


// Si el usuario no permite compartir su ubicación,
// utilizaremos estas coordenadas.

const latitudDefecto = 38.27059;
const longitudDefecto = -0.60552;


// COMPROBAR GEOLOCALIZACIÓN


if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );

} else {

    // El navegador no dispone de geolocalización
    crearMapa(latitudDefecto, longitudDefecto);

}



// POSICIÓN DEL USUARIO


function success(position) {

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Crear mapa con la posición del usuario
    crearMapa(latitude, longitude);
}



// ERROR DE GEOLOCALIZACIÓN


function error() {

    // Si el usuario deniega la ubicación,
    // mostramos el mapa con la ubicación por defecto.

    crearMapa(latitudDefecto, longitudDefecto);

}



// CREAR MAPA


function crearMapa(latitude, longitude) {

    // Crear mapa
    let map = L.map("map", {
        center: [latitude, longitude],
        zoom: 12
    });


  
 // MAPA OPENSTREETMAP
    

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "Mi primera OpenStreetMap"
        }
    ).addTo(map);



    // RUTA
   

    L.Routing.control({

        waypoints: [

            L.latLng(latitude, longitude),

            L.latLng(38.27059, -0.60552)

        ],

        language: "es"

    }).addTo(map);
}


