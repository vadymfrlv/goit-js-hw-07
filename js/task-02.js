const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientListRef = document.querySelector('#ingredients');

const createIngredientList = ingredients => {
  return ingredients.map(ingredient => {
    const newListItem = document.createElement('li');
    newListItem.classList.add('item');
    newListItem.textContent = ingredient;

    return newListItem;
  });
};

const elements = createIngredientList(ingredients);
ingredientListRef.append(...elements);

//! 2nd attempt
// const listRef = document.querySelector('#ingredients');

// const listItems = ingredients.map(elem => {
//   const newListItem = document.createElement('li');
//   newListItem.classList.add('item');
//   newListItem.textContent = elem;
//   return newListItem;
// });

// listRef.append(...listItems);

//! 1st attempt
// const listRef = document.querySelector('#ingredients');

// const createIngredientList = ingredient => {
//   const listItem = document.createElement('li');

//   listItem.classList.add('item');
//   listItem.textContent = ingredient;

//   return listItem;
// };

// const ingredientList = ingredients.map(elem => createIngredientList(elem));

// listRef.append(...ingredientList);
