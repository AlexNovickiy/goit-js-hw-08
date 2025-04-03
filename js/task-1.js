const categoriesArrayItems = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesArrayItems.length}`);

categoriesArrayItems.forEach(category => {
    const currentCategory = category.querySelector('h2').textContent;
    const countCategoryItems = category.querySelectorAll('.list-item-animal').length;

    console.log(`Category: ${currentCategory}`);
    console.log(`Elements: ${countCategoryItems}`);
});




