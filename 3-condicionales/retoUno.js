'use strict';

const avatarUrlVacio = '<img src = "http://placehold.it/300x300"></img>';
let avatarUrl = '<img src = "http://www.fillmurray.com/300/300"></img>';

const avatarBox = document.getElementById('avatar');

avatarBox.innerHTML = (avatarUrlVacio && avatarUrl) || (avatarUrl || avatarUrlVacio);