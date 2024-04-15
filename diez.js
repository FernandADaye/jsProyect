let opcion = "course"; // Cambia aquí por la opción deseada
let beca = "facebook"; // Cambia aquí por la beca deseada

let precios = {
    "course": { precio: 4999, duracion: 2 },
    "carrera": { precio: 3999, duracion: 6 },
    "master": { precio: 2999, duracion: 12 }
};

let descuentos = {
    "facebook": 0.8,
    "google": 0.85,
    "jesua": 0.5
};

if (!(opcion.toLowerCase() in precios)) {
    console.log("Opción no válida");
} else {
    let precioMensual = precios[opcion.toLowerCase()].precio;
    let duracion = precios[opcion.toLowerCase()].duracion;

    if (beca.toLowerCase() in descuentos) {
        precioMensual *= descuentos[beca.toLowerCase()];
    }

    console.log("precio con descuento es " + precioMensual );
    console.log("en total" + precioMensual * duracion);
}
