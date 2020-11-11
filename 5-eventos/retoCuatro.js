'use strict';

const button = document.querySelector('button');
button.addEventListener('click', showListEvent);

function showListEvent() {

    const list = document.querySelector('ul');
    const inception = 'Inception';
    const theButterFlyEffect = 'TheButterFlyEffect';
    const eternalSunshineOfTheSM = 'EternalSunshineOfTheSM';
    const blueVelvet = 'BlueVelvet';
    const split = 'Split';

    list.innerHTML = `
    <ol id = "movieOne">${inception}</ol>
    <ol id = "movieTwo">${theButterFlyEffect}</ol>
    <ol id = "movieThree">${eternalSunshineOfTheSM}</ol>
    <ol id = "movieFour">${blueVelvet}</ol>
    <ol id = "movieFive">${split}</ol>`
    ; 
    
    showMovieName();
}

function showMovieName () {
    const movieNameOne = document.querySelector('#movieOne');
    movieNameOne.addEventListener('click', () => console.log(movieNameOne.innerHTML));

    const movieNameTwo = document.querySelector('#movieTwo');
    movieNameTwo.addEventListener('click', () => console.log(movieNameTwo.innerHTML));

    const movieNameThree = document.querySelector('#movieThree');
    movieNameThree.addEventListener('click', () => console.log(movieNameThree.innerHTML));

    const movieNameFour = document.querySelector('#movieFour');
    movieNameFour.addEventListener('click', () => console.log(movieNameFour.innerHTML));

    const movieNameFive = document.querySelector('#movieFive');
    movieNameFive.addEventListener('click', () => console.log(movieNameFive.innerHTML));
}