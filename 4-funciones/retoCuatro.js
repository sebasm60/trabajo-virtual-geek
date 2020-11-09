'use strict';

function calculador(booleano, ancho, padding, borde) {
   return (booleano === true)? 'El ancho del border-box es:' + (ancho + padding + borde):
   'El ancho del content-box es: ' + ancho;
}

let anchura = calculador(false, 10, 10, 10);

console.log(anchura);