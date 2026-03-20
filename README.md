# Лабораторная работа №19. Введение в JavaScript. Сравнение с C#

**ФИО:** Заставная Наталия Владимировна

**Группа:** ИСП-231 

**Дата:** 20.03.2026

## Описание

В ходе работы были изучены циклы (for, while, do..while), вложенные циклы, а также функции. 

**Функция в JavaScript** — это блок кода, который можно вызывать многократно.

```
function sayHello(name){
    console.log(`Hello, ${name}`);
}
sayHello("Тимофей");

```

Пример функции с замыканием (closure):

```
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
```

Стрелочные функции

```
const sumFunc2 = (a, b) => a + b;
```

**Массив в JavaScript** — это упорядоченная коллекция элементов.

Пример создания массива: 

```
let numbersArr = [1, 2, 3, 4, 5];
```
Также были разобраны основные методы работы со списками: удаление и добавление элементов, наличие элемента в массиве и вывод индекса по элементу.

**Объект в JavaScript** — это набор свойств в формате ключ → значение.

Базовый пример создания объекта объекта с методом:

```
let user2 = {
    name: "Ivan",
    age: 20,
    isStudent: true,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};
```

## Структура проекта
+ `main.js` - файл с кодом на JavaScript
+ `index.html` - файл с HTML-кодом страницы
+ `README.md` текстовая документация по проекту
+ папка `img` со скриншотами ключевых шагов по проекту

