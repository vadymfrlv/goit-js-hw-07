const numberOfCategoriesRef = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${numberOfCategoriesRef.length}`);

numberOfCategoriesRef.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`);
});
