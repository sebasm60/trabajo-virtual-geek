'use strict';

const list = document.querySelector('ul');
list.addEventListener('click', (e) => {

    const target = e.target;
    const spam = target.querySelector('.favorite');

    if (target.matches('li')) {
        (target.classList.contains('teacher--selected'))?target.classList.toggle('teacher--selected'):target.classList.toggle('teacher--selected');
        (spam.innerHTML === 'Añadir')? spam.innerHTML = 'Quitar': spam.innerHTML = 'Añadir';
    }
});