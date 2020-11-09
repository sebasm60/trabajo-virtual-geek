'use strict';

function calculateIva (price) {

    const iva = 21;
    const productIva = price * iva / 100;
    const total = price + productIva;

    return `Precio sin iva ${price}, Iva ${productIva}, total ${total}`;
}

let iva = calculateIva(10);

console.log(iva);