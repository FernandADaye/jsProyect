const numeros = [5, 5, 8]; 
let maximo = numeros[0]; 
let numerosIguales = [];

numeros.forEach(numero => {
    if (numero > maximo) {
        maximo = numero;
    } else if (numero === maximo && !numerosIguales.includes(numero)) {
        numerosIguales.push(numero); 
    }
});

console.log("El número más grande es:", maximo);
if (numerosIguales.length > 0) {
    console.log("Los números iguales son:", numerosIguales.join(", "));
}
