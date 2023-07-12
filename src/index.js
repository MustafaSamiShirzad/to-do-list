import './styles/main.scss';
import { ul } from './Modules/ulitems.js';

const ulElement = document.createElement('ul');
ulElement.innerHTML = ul;
document.querySelector('.list-container').append(ulElement);
