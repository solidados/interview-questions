# Higher order functions

Функции высшего порядка – это функции, которые принимают функции в качестве аргументы или возвращают функции как результат работы.  
Этот подход позволяет работать с функциями, как с данными, и создавать более абстрактные и гибкие конструкции.

1. Функция передана в качестве аргумента
```js
function applyOperation(x, y, operation) {
  return operation(x, y);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(applyOperation(2, 3, add));        // Вывод: 5
console.log(applyOperation(2, 3, multiply));   // Вывод: 6
```  

2. Функция возвращающая другую функцию
```js
function powerOf(exponent) {
  return function (base) {
    return Math.pow(base, exponent);
};
}

const square = powerOf(2);
const cube = powerOf(3);

console.log(square(4));   // Вывод: 16
console.log(cube(2));      // Вывод: 8

```
