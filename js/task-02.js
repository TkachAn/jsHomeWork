const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
let i = 0;
const liEl = ingredients.map(()=>{
  const e = document.createElement('li');
  e.classList.add('item');
  e.textContent = ingredients[i++];
  // console.log(e);
  return e;
});
list.append(...liEl);

console.log(list);