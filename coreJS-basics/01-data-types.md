# Data types
**Вопрос: Какие типы данных существуют в Javascript?**  

В Javascript существует 8 основных типов данных:
- [String](#string)
- [Number](#number)
- [Boolean](#boolean)
- [null](#null)
- [undefined](#undefined)
- [Object](#object)
- [Symbol](#symbol)
- [BigInt](#bigint)

### String
```javascript
let str = 'I am a String';
```

### Number
```javascript
let num = 5;
```

### Boolean
```javascript
let truth = true;
let lie = false;
```

### null
Это специальное **значение**, которое представляет собой "ничего"/"пусто", или "значение не известно". Обычно это значение задаётся явно.
```javascript
let a = null;
```

### undefined
Если переменная объявлена, но не инициализирована, то есть ей не присвоено значение, то её значением будет `undefined`.
```javascript
let a;
console.log(a); // undefined
```

### Object
```javascript
const obj = { name: 'John Smith' };
```

### Symbol
Это уникальный идентификатор в объектах
```javascript
const symb = new Symbol("id");
```

### BigInt
Используется для создания очень больших чисел, более чем `2^53 - 1`;
```javascript
let bigNum = 123456789192837465729377573299877654332n;
```
