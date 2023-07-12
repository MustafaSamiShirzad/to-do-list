import './styles/main.scss';
import { ul } from './Modules/ulitems.js';

const ulElement = document.createElement('ul');
ulElement.innerHTML = ul;
const clearAll = document.createElement('button');
clearAll.innerHTML = '<button class="clear-all-button">Clear all completed</button>';
document.querySelector('.list-container').append(ulElement, clearAll);
