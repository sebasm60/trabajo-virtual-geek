'use strict';

const changerClass = document.querySelector('div');
const title = document.querySelector('h1');
const text = document.querySelector('p');

(changerClass.classList.contains('success')) ? (title.innerHTML='CORRECTO', text.innerHTML= 'Los datos son correctos'):
(changerClass.classList.contains('warning')) ? (title.innerHTML = 'AVISO', text.innerHTML = 'Tenga cuidado.'):
(changerClass.classList.contains('error')) ? (title.innerHTML = 'ERROR', text.innerHTML ='Ha surgido un error.'):
title.innerHTML = title.innerHTML, text.innerHTML = text.innerHTML;

