//create a class system and styling system
import './main.scss';

// DOM Cache
let dropContainer = document.querySelector('.drop-container');

let dropMenu = document.querySelector('.drop-menu');

dropContainer.addEventListener('mouseover', function(e) {
    if (!e.target.matches('li')) {
        dropMenu.classList.remove('hide');
    }
})

dropContainer.addEventListener('mouseleave', function() {
    dropMenu.classList.add('hide');
})

