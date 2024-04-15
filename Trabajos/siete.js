let dia = "viernes";

if (dia.toLowerCase() === "lunes") {
    console.log("Es lunes");
} else if (dia.toLowerCase() === "viernes") {
    console.log("Es viernes");
} else if (dia.toLowerCase() === "sábado" || dia.toLowerCase() === "domingo") {
    console.log("Es fin de semana");
} else {
    console.log("No es un día válido");
    }