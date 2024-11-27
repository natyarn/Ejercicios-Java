let a = prompt("Ingresa el valor de a:");
let b = prompt("Ingresa el valor de b:");

let temp = a;
a = b;
b = temp;

document.write(`a = ${a}<br>b = ${b}`);
