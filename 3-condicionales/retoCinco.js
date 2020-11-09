'Use strict';

const changerClass = document.querySelector('div');
const title = document.querySelector('h1');
const text = document.querySelector('p');

if (changerClass.classList.contains('success')) {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos.';
} else if (changerClass.classList.contains('warning')) {
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga Cuidado.';
} else if (changerClass.classList.contains('error')){
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error.';
}

