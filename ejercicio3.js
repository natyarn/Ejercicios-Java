let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("¿Qué operación deseas realizar? (+, -, *, /)");

let resultado;
switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = numero1 / numero2;
        break;
    default:
        alert("Operación no válida");
        resultado = "Error";
}
alert(`El resultado es: ${resultado}`);
