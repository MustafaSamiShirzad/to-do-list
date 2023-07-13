const demo = () => {
  let value = 0;
  const array = [];
  const btnArray = [];
  let i = 0;
  let id = 10000;
  const inputHolder = document.querySelector('.input-holder');
  inputHolder.addEventListener('keyup', (event) => {
    const li = document.createElement('li');
    li.className = 'to-do-list-item';
    const ulElement = document.querySelector('.li-item-container');
    if (event.keyCode === 13 && inputHolder.value.trim().length > 0) {
      const obj = {
        description: inputHolder.value,
        complete: false,
        index: (value += 1),
      };
      array.push(obj);
      const div = document.createElement('div');
      const listDescription = document.createElement('label');
      listDescription.className = 'list-description';
      div.classList.add('checkbox-and-description');
      const checkbox = document.createElement('button');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      div.appendChild(checkbox);
      const idValue = `cb${id += 1}`;
      li.id = idValue;

      listDescription.innerHTML = array[i++].description;
      listDescription.classList.add(false);
      localStorage.setItem(idValue, inputHolder.value);
      div.appendChild(listDescription);
      listDescription.addEventListener('click', () => {
        listDescription.contentEditable = true;
        listDescription.focus();
      });
      const button = document.createElement('button');
      button.className = 'vertical-ellipsis gen-btn';
      button.innerHTML = '&#8942;';
      div.appendChild(button);
      li.appendChild(div);
      // ****************check box event listener******************
      checkbox.addEventListener('click', () => {
        checkbox.innerHTML = '&#10003;';
        checkbox.style.color = 'white';
        checkbox.style.backgroundColor = 'blue';
        checkbox.classList.add('active');
        listDescription.style.textDecoration = 'line-through';
        setTimeout(() => {
          li.style.display = 'none';
        }, 1000);
        btnArray.push(li.id);
        // ****************another function for trigerring*****************
        checkbox.addEventListener('click', () => {
          div.style.textDecoration = 'none';
          checkbox.innerHTML = '';
          checkbox.style.backgroundColor = 'white';
        });
      });
      document
        .querySelector('.clear-all-button')
        .addEventListener('click', () => {
          btnArray.forEach((btn) => {
            document.getElementById(btn).style.display = 'none';
          });
        });
      li.style.listStyle = 'none';
      ulElement.appendChild(li);
      inputHolder.value = '';
    }
  });
};
export { demo };
