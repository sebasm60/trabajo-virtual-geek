'use strict';

let name = "Sebastian jimenez";
const message = document.querySelector('h1');

if (name === 'Sebastian Jimenez') {
    message.innerHTML = `Bienbenid@, ${name}`;
} else  {
    message.innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
}