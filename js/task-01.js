const numberOfCategories = document.querySelectorAll('.item');
console.log('number of categories:', numberOfCategories.length);

numberOfCategories.forEach(element => {
    const categoryTitle = element.firstElementChild.textContent;
    console.log('Category:', categoryTitle);

    const numberOfCategoryItems = element.lastElementChild.querySelectorAll('li');
    console.log('Elements:', numberOfCategoryItems.length);
})


