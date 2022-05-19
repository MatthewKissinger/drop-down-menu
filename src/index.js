//create a class system and styling system
import './drop-menu.scss';

export function toggleDropMenu() {
    // DOM Cache
let dropContainers = document.querySelectorAll('.drop-container');

dropContainers.forEach(container => {
    container.addEventListener('mouseover', function(e) {
        if (!e.target.matches('li')) {
            this.getElementsByTagName('ul')[0].classList.remove('hide');
        }
    })
});

dropContainers.forEach(container => {
    container.addEventListener('mouseleave', function() {
        this.getElementsByTagName('ul')[0].classList.add('hide');
    })
});
}


// Initial call for testing
toggleDropMenu();





