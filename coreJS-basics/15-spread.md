# Spread operator
**Вопрос: для чего нужен оператор `spread`?**

Оператор `...` имеет множество предназначений, но конкретно `spread` (`...`) необходим, чтобы **_разворачивать_** массивы и объекты.

### Spread and Arrays
```javascript
// Без `spread` оператора:
const mid = [ 3, 4 ];
const arr = [ 1, 2, mid, 5, 6 ];
console.log(arr); // [ 1, 2, [ 3, 4 ], 5, 6 ]

// С использованием `spread`
const mid = [ 3, 4 ];
const arr = [ 1, 2, ...mid, 5, 6 ];
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
```

### Spread and Objects
```javascript
const firstObj = { a: 1, b: 2 };
const secondObj = { ...firstObj, c: 3, d: 4 };
console.log(secondObj); // { a: 1, b: 2, c: 3, d: 4 }
```
