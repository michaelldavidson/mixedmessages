//Sets up choices for the program

let meals = ['Pizza', 'Burger', 'Pasta', 'Chicken Wings', 'Nachos', 'Steak', 'Noodles', 'Ramen'];
let mealImages =['./images/pizza.jpg', './images/burger.jpg', './images/pasta.jpg', './images/chicken.jpg', './images/nachos.jpg', './images/steak.jpg', './images/noodles.jpg', './images/ramen.jpg'];

let drinks = ['Coffee', 'Tea', 'Iced Coffee', 'Milkshake', 'Beer', 'Wine'];
let drinkImages =['./images/coffee.jpg', './images/tea.jpg', './images/icedcoffee.jpg', './images/milkshake.jpg', './images/beer.jpg', './images/wine.jpg'];

let desserts = ['Ice Cream', 'Cake', 'Pie', 'Donuts', 'Ais Kachang', 'Halo Halo'];
let dessertImages =['./images/icecream.jpg', './images/cake.jpg', './images/pie.jpg', './images/donuts.jpg', './images/aiskachang.jpg', './images/halohalo.jpg'];

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
    let choice = Math.floor(Math.random()*drinks.length)
    let drinkChoice = drinks[choice];
    drinkTarget.innerHTML = drinkChoice;
    drinkImage.src = drinkImages[choice];
}

const chooseDessert = () => {
    let choice = Math.floor(Math.random()*desserts.length)
    let dessertChoice = desserts[choice];
    dessertTarget.innerHTML = dessertChoice;
    dessertImage.src = dessertImages[choice];
}

//Makes Buttons active

button.addEventListener('click', chooseMeal)
button.addEventListener('click', chooseDrink)
button.addEventListener('click', chooseDessert)
