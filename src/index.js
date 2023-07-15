import './styles/main.scss';
import { clearTasks } from './Modules/clearTasks.js';

let tasks = [];
let listContainer;

const addTask = (inputBox) => {
  tasks.push({
    description: inputBox.value,
    index: tasks.length + 1,
    complete: false,
  });
  inputBox.value = '';
  saveData(tasks);
  return tasks;
};

const createCheckButton = (task) => {
  const button = document.createElement('button');
  button.innerHTML = task.complete ? 'Uncheck' : 'Check';
  button.addEventListener('click', () => {
    task.complete = !task.complete;
    saveData(tasks);
    showTasks(listContainer);
  });
  return button;
};

const createDeleteButton = (task, index) => {
  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.addEventListener('click', () => {
    tasks.splice(index, 1);
    saveData(tasks);
    showTasks(listContainer);
  });
  return button;
};

const createUpdateButton = (task, index) => {
  const button = document.createElement('button');
  button.textContent = 'Update';
  button.addEventListener('click', () => {
    const li = document.getElementById(`task-${index}`);
    const updateInput = document.createElement('input');
    updateInput.type = 'text';
    updateInput.value = task.description;
    updateInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        task.description = updateInput.value;
        saveData(tasks);
        showTasks(listContainer);
      }
    });
    li.innerHTML = '';
    li.appendChild(updateInput);
    updateInput.focus();
  });
  return button;
};

const saveData = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadData = () => {
  const loadedTasks = localStorage.getItem('tasks');
  return loadedTasks ? JSON.parse(loadedTasks) : [];
};

document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('input-box');
  listContainer = document.querySelector('.list-container');
  const addButton = document.querySelector('.add-btn');
  const clearButton = document.querySelector('.clear-all');

  tasks = loadData();

  showTasks(listContainer);

  addButton.addEventListener('click', () => {
    tasks = addTask(inputBox);
    saveData(tasks);
    showTasks(listContainer);
  });

  
clearButton.addEventListener('click', () => {
  clearTasks(tasks, saveData, showTasks, listContainer);
});

});

const showTasks = (listContainer) => {
  listContainer.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.id = `task-${index}`;
    li.style.textDecoration = task.complete ? 'line-through' : 'none';
    li.innerHTML = task.description;
    li.appendChild(createCheckButton(task, index));
    li.appendChild(createUpdateButton(task, index));
    li.appendChild(createDeleteButton(task, index));
    listContainer.appendChild(li);
  });
};
