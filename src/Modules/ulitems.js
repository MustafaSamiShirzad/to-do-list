let ctr = 0;
const arrayOfObj = [
  {
    description: 'Washing Dishes this morning',
    complete: false,
    index: ctr += 1,
  },
  {
    description: 'Going to market',
    complete: false,
    index: ctr += 1,
  },
  {
    description: 'Gym',
    complete: false,
    index: ctr += 1,
  },
  {
    description: 'Going to School',
    complete: false,
    index: ctr += 1,
  },
];

const func = () => {
  const ul = [];
  const li = document.createElement('li');
  for (let i = 0; i < arrayOfObj.length; i += 1) {
    li.innerHTML = `<li class="to-do-list-item"><div><button class="checkbox"></button>${arrayOfObj[i].description}</div><span class="vertical-ellipsis">&#8942;</span></li>`;
    ul.push(li.innerHTML);
  }
  const ulList = ul.join('<br>');
  return ulList;
};

const ul = `<ul>${func()}</ul>`;
export { ul };
