'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const content = document.querySelector('ul');

content.innerHTML = `<li><image src =${firstDogImage}></image>${firstDogName}</li>
<li><image src=${secondDogImage}></image>${secondDogName}</li>
<li><image src=${thirdDogImage}></image>${thirdDogName}</li>`;