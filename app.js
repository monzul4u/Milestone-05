fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayMeals(data.categories));

const displayMeals = categories => {
    const foodDiv = document.getElementById("meal-item");
    categories.forEach(mealItem => { 

    const mealDiv = document.createElement('div');
    mealDiv.className = "food-item"
    const mealInfo = `
    <div class='food-name'>${mealItem.strCategory}</div>
    <button class="btn-success" onclick="mealDescription('${mealItem.strCategory}')">Description</button>

    `;
    mealDiv.innerHTML = mealInfo;
    foodDiv.appendChild(mealDiv);
    });
}

const mealDescription = detail => {
 const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
 console.log(url);
 fetch(url)
 .then(res => res.json())
 .then(data => renderFoodInfo(data.meals));
}

const renderFoodInfo = categories => {
    const foodDiv = document.getElementById("food-description")
    foodDiv.innerHTML = `
    <h1>${mealItem.strCategory}</h1>
    <p>${mealItem.strMeal}</p>
    <img src="${mealItem.strMealThumb}">
    `
}












