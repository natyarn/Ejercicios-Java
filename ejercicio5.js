let minutos = parseInt(prompt("Ingresa un número de minutos:"));
let segundos = minutos * 60;
let horas = minutos / 60;

alert(`${minutos} minutos son ${segundos} segundos o ${horas.toFixed(2)} horas.`);
