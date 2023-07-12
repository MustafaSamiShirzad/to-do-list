const arrayOfObj = [
  {
    description: 'Washing Dishes this morning',
    complete: false,
    index: 1,
  },
  {
    description: 'Going to market',
    complete: false,
    index: 2,
  },
  {
    description: 'Gym',
    complete: false,
    index: 3,
  },
  {
    description: 'Going to School',
    complete: false,
    index: 4,
  },
];

const func = () => {
  const ul = [];
  const li = document.createElement('li');
  for (let i = 0; i < arrayOfObj.length; i += 1) {
    li.innerHTML = `<li class="to-do-list-item"><button class="checkbox"></button>${arrayOfObj[i].description}</li>`;
    ul.push(li.innerHTML);
  }
  const ulList = ul.join('<br>');
  return ulList;
};

const ul = `<ul>${func()}</ul>`;
export { ul };
