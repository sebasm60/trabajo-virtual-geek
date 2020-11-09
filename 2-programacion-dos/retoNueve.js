'use strict';

const name = 'Juliana';
const secondName = 'Perez';
const lastName = 'Gonzales';
const message = `El nombre de mi compañera es: ${name} ${secondName} ${lastName}, 
y esta compuesto por ${name.length + secondName.length + lastName.length} caracteres.`;

const content = document.querySelector('h1');

content.innerHTML = message;