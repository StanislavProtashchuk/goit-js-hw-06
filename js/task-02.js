const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titleOfIngredients = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredient.classList.add('item');
  return ingredient;
});

titleOfIngredients.append(...listOfIngredients);  




