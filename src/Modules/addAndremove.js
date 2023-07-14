const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTask = () => {
  if (inputBox.value === '') {
    inputBox.placeholder = 'Enter your task';
  } else {
    const li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    const button = document.createElement('button');
    button.className = 'editBtn';
    button.innerHTML = 'edit';
    li.appendChild(span);
    button.addEventListener('click', () => {
      const newValue = window.prompt('Enter your value ');
      li.innerHTML = newValue;
      li.appendChild(span);
      li.appendChild(button);
      saveData();
    });
    li.appendChild(button);
  }
  inputBox.value = '';
  saveData();
};

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);
const saveData = () => {
  localStorage.setItem('data', listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem('data');
};
showTask();
document.querySelector('.add-btn').addEventListener('click', () => {
  addTask();
});

export { addTask };