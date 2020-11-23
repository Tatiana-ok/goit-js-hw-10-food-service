import menuTemplate from './templates/menu.hbs';
import menuItems from './menu.json';
const menuRef = document.querySelector('js-menu');

const markup = menuTemplate(menuItems);
menuRef.insertAdjacentHTML('beforeend', markup);

