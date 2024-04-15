let calificacion = 1823

if (calificacion >= 1 && calificacion <= 10) {
    if (calificacion < 6) {
        console.log("te quedas otro año ");
    } else if (calificacion <= 8) {
        console.log("Regular");
    } else if (calificacion === 9) {
        console.log("Bien");
    } else {
        console.log("Excelente");
    }
} else {
    console.log("expulsado ");
}
