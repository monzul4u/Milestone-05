const searchMeal = () =>{
    searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?c=list/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meals =>{
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result'
        foodDiv.innerHTML =`
        <div class="round">
        <h3 >${meal.strCategory}</h3>
        <img src= "https://www.themealdb.com/images/category/beef.png">
        
        </div>
        <div>
        <button onclick="getIngradients('${meal.strDescription}')" class="btn-success">Search</button>
        </div>
        `
        mealContainer.appendChild(foodDiv);
    })
        
}

     const getIngradients = (meal) => {
         const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
         fetch(url)
         .then(res => res.json())
         .then(data => displayDescription(data.meals))
     }

     const displayDescription = categories =>{
         const desDiv = document.getElementById("meal-description")
        desDiv.innerText = categories;
     }
