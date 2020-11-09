'use scrict';

const title = '<h1>Lorem ipsum</h1>';
const picture = '<img src="http://via.placeholder.com/350x150"></img>';
const paragraph = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'; 
const content = document.querySelector('div');

content.innerHTML = title + picture + paragraph;
