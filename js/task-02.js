const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titleOfIngredients = document.querySelector('#ingredients');

const listOfIngredients = ingredients.forEach(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;

  titleOfIngredients.append(ingredient);
})




