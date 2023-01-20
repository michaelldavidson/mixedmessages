//Sets up choices for the program

let meals = ['Pizza', 'Burger', 'Pasta', 'Chicken'];
let mealImages =[];

let drinks = ['Coffee', 'Tea', 'Juice', 'Water', 'Soda', 'Beer', 'Wine'];
let drinkImages =[];

let desserts = ['Ice Cream', 'Cake', 'Fruit Salad', 'Pie'];
let dessertImages =[];

//Sets up events to be changed
const button = document.getElementById('button');

const mealTarget = document.getElementById('meal-name');
const drinkTarget = document.getElementById('drink-name');
const dessertTarget = document.getElementById('dessert-name');

// Functions that randomize the choices

const chooseMeal = () => {
    let mealChoice = meals[Math.floor(Math.random()*meals.length)]
    mealTarget.innerHTML = mealChoice
}

const chooseDrink = () => {
    let drinkChoice = drinks[Math.floor(Math.random()*drinks.length)]
    drinkTarget.innerHTML = drinkChoice
}

const chooseDessert = () => {
    let dessertChoice = desserts[Math.floor(Math.random()*desserts.length)]
    dessertTarget.innerHTML = dessertChoice
}

//Makes Buttons active

button.addEventListener('click', chooseMeal)
button.addEventListener('click', chooseDrink)
button.addEventListener('click', chooseDessert)
