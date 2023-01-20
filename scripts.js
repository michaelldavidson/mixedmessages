//Sets up choices for the program

let meals = ['Pizza', 'Burger', 'Pasta', 'Chicken'];
let mealImages =['./images/pizza.jpg', './images/burger.jpg', './images/pasta.jpg', './images/chicken.jpg'];

let drinks = ['Coffee', 'Tea', 'Juice', 'Water', 'Soda', 'Beer', 'Wine'];
let drinkImages =[];

let desserts = ['Ice Cream', 'Cake', 'Fruit Salad', 'Pie'];
let dessertImages =[];

//Sets up events to be changed
const button = document.getElementById('button');

const mealTarget = document.getElementById('meal-name');
const drinkTarget = document.getElementById('drink-name');
const dessertTarget = document.getElementById('dessert-name');

const mealImage = document.getElementById('meal-image');
const drinkImage = document.getElementById('drink-image');
const dessertImage = document.getElementById('dessert-image');

// Functions that randomize the choices

const chooseMeal = () => {
    let choice = Math.floor(Math.random()*meals.length)
    let mealChoice = meals[choice];
    mealTarget.innerHTML = mealChoice;
    mealImage.src = mealImages[choice];
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
