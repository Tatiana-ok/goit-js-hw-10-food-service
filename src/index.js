const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

import menuTemplate from './templates/menu.hbs';
import menuItems from '../menu.json';
const menuRef = document.querySelector('.js-menu');
const switcher = document.querySelector('.theme-switch__control');
const body = document.querySelector('body');
const inputSwitcher = document.querySelector('.theme-switch__toggle');

const markup = menuTemplate(menuItems);
menuRef.insertAdjacentHTML('beforeend', markup);

setTheme();

switcher.addEventListener('change', switchTheme);
// body.classList.add(Theme.Light);
function switchTheme (evt) {
    if (evt.target.checked){
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK);
    } if (!evt.target.checked){
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
};

function setTheme() {
    const currentTheme = localStorage.getItem('Theme');
    if(currentTheme) {
        body.classList.add(currentTheme);
    };

    if(currentTheme === Theme.DARK) {
        inputSwitcher.setAttribute('checked', true);
    }
}