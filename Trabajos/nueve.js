let costo = 50;
let helado = "oreo"; // Cambia aquí por el helado deseado

if (helado.toLowerCase() === "oreo") {
  costo += 10;
} else if (helado.toLowerCase() === "kitkat") {
  costo += 15;
} else if (helado.toLowerCase() === "brownie") {
  costo += 20;
} else {
  console.log("no soy oxxo");
}

console.log("pagame " + costo);
