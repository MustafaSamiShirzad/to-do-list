import './styles/main.scss';
import { ul } from './Modules/ulitems.js';

const ulElement = document.createElement('ul');
ulElement.innerHTML = ul;
const clearAll = document.createElement('button');
clearAll.classList.add('clear-all-button');
clearAll.innerText = 'Clear all completed';
document.querySelector('.list-container').append(ulElement, clearAll);
