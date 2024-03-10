# Recursion

Рекурсия – это процесс, при котором функция вызывает сама себя.  
### Факториал
Пример:
```js
function factorial (num) {
  return num === 0
    ? 1
    : num * factorial(num - 1) 
}
```

### Другие примеры рекурсии
```js
function sumUpToN(n) {
  return n === 1 
    ? 1 
    : n + sumUpToN(n - 1);
}
console.log(sumUpToN(5))    // 15
```  
Или вот его другой пример:
```js
function sumArray(arr, index = 0) {
  if (index === arr.length) {
    return 0; // Базовый случай: сумма пустого массива равна 0.
  } else {
    return arr[index] + sumArray(arr, index + 1); // Рекурсивный вызов для следующего элемента массива.
  }
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Вывод: 15 (1 + 2 + 3 + 4 + 5)

```

