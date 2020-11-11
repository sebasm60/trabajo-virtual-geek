'use strict';

const parrafo = document.querySelector('p').addEventListener('mouseover', addParagraph);

function addParagraph () {
    const addIpsum = document.querySelector('body');

    addIpsum.innerHTML = addIpsum.innerHTML + `<p>Sed delectus esse in vero velit est ipsam voluptate in 
    placeat modi et consequatur animi. Nam nostrum rerum et porro doloremque qui quam nihil ut omnis
    quas. Et saepe eligendi ex perferendis aliquam quo voluptatem provident ut internos suscipit ut 
    nulla tenetur.</p>`;
}