let precioDolares = parseFloat(prompt("Ingresa el precio del producto en dólares:"));
let precioPesos = precioDolares * 1130;
let precioFinal = precioPesos * 1.21;

alert(`El precio final con IVA es: $${precioFinal.toFixed(2)} pesos.`);
