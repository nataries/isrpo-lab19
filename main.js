// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//Практическое задание №1
// let count = 0;
// for(let i = 1; i < 11; i++) {
//     count+=i;
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }
// console.log(count);

// let count = 0;
// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }

// let number = 5;
// while (number >= 0) {
//     console.log(number);
//     number--;
// }

// let doValue = 0;
// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3);

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

//Практическое задание №4
// for(let i = 1; i<=10; i++) {
//     if(i === 5) {
//         continue;
//     }
//     if (i === 8) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <=3; i++) {
//     for (let j = 1; j <=3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     row = '';
//     for (let j = 1; j <i; j++) {
//         row+='*';
//     }
//     console.log(row);
// }

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 5));

// function multiply(x, y){
//     return x * y;
// }
// console.log(multiply(5, 8))

// function sayHello(name){
//     console.log(`Hello, ${name}`);
// }
// sayHello("Тимофей");

// function printInfo(name, age){
//     console.log(`Your name is ${name}, your age is ${age}`);
// }
// printInfo("Kakashi", 20);

// function greet(name = "Гость") {
//     console.log("Привет, " + name);
// }
// greet();
// greet("Анастасия");

//6.7. Практическое задание №3
// function calculateDiscount(price, discount = 10) {
//     return price - ((price * discount) / 100);
// }

// console.log(calculateDiscount(200));
// console.log(calculateDiscount(200, 50));

// const add = function(a, b) {
//     return a + b;
// };
// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const sumFunc2 = (a, b) => a + b;
// const double = x => x*2;
// const sayGreeting = () => console.log("Hello");
// const square = x => x * x;

// const calculate = (a, b) => {
//     let result = a+b;
//     return result * 2;
// }

// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);

// console.log(numbersArr[0]);
// console.log(numbersArr[1]);

// let colorsArr = ["green", "red", "blue"];
// console.log(colorsArr[0]);
// console.log(colorsArr[2]);
// colorsArr[1] = "yellow";
// console.log(colorsArr);

// console.log(numbersArr.length);
// numbersArr.push(10);
// console.log(numbersArr);

// numbersArr.pop();
// console.log(numbersArr);

// let students = [];
// students.push("Елена");
// students.push("Владимир");
// students.push("Николай");
// students.pop();
// console.log(students);

// let numbers2 = [10, 20, 30];
// for (let i = 0; i < numbers2.length; i++) {
//     console.log(numbers2[i]);
// }

// for (let value of numbers2) {
//     console.log(value);
// }

// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);

// console.log(numbers2.includes(10));
// console.log(numbers2.indexOf(20));

// let cities = ["Барселона", "Москва", "Будапешт", "Волгоград"];
// for (let value of cities) {
//     if (cities.includes("Барселона")) {
//         console.log(cities.indexOf("Барселона"));
//     }
// }

// let count = 7;
// let user2 = {
//     name: "Ivan",
//     age: 20,
//     isStudent: true,
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// user2.sayHello();

// console.log(user2);

// console.log(user2.name);
// console.log(user2.age);

// console.log(user2["name"]);

// let book = {
//     title: "Унесенные ветром",
//     author: "Маргарет Митчелл",
//     year: 1936,
// };
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);
// book.year = 1940;
// console.log(book.year);


// let car = {
//     brand: "Toyota",
//     year: 2007,
//     getInfo: function () {
//         console.log(`Brand: ${this.brand}, year: ${this.year}`);
//     },
// };
// car.getInfo();

// for (let key in user2) {
//     console.log(key + ": " + user2[key]);
// }

let product = {
    vid: "watermelon",
    ves: 12,
    tip: "berry",
};

for(let key in product) {
    console.log(key + ": " + product[key]);
}