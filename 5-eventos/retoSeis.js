'use strict';

const bgColorChange = document.querySelector('body');
bgColorChange.addEventListener('keydown', () => {
    if (event.which === 82) {
        document.querySelector('body').classList.add('red');        
       (document.querySelector('body').classList.contains('purple'))?document.querySelector('body').classList.remove('purple'):false;
    } else if (event.which === 77) {
        document.querySelector('body').classList.add('purple')
        (document.querySelector('body').classList.contains('red'))?document.querySelector('body').classList.remove('red'):false;        
    }
});