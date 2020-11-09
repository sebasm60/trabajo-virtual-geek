'use scrict';

let message = document.querySelector('h1');
/*let name = document.querySelector('#liOne');
De esta forma muestro el primer nombre en la lista
*/
let name = document.querySelector('#liTwo');

message.innerHTML = message.innerHTML + name.innerHTML;

    