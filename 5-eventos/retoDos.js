'use strict';

const button = document.querySelector('button').addEventListener('click', () => console.log(`Hola, ${saveName()}`));

function saveName () {
    return document.querySelector('input').value;
}