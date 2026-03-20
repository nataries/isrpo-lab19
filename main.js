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