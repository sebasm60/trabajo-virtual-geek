'use strict';

const button = document.querySelector('button');
button.addEventListener('click', showListEvent);
const showInConsole = document.querySelector('ul');

showInConsole.addEventListener('click', function (e) {
    const target = e.target;

    if (target.matches('li')) {
        console.log(target.innerHTML);
    }
});

function showListEvent() {

    const list = document.querySelector('#lista');
    const inception = 'Inception';
    const theButterFlyEffect = 'TheButterFlyEffect';
    const eternalSunshineOfTheSM = 'EternalSunshineOfTheSM';
    const blueVelvet = 'BlueVelvet';
    const split = 'Split';

    list.innerHTML = `
    <li id = "movieOne">${inception}</li>
    <li id = "movieTwo">${theButterFlyEffect}</li>
    <li id = "movieThree">${eternalSunshineOfTheSM}</li>
    <li id = "movieFour">${blueVelvet}</li>
    <li id = "movieFive">${split}</li>`
    ;     
}