## this

this – это ключевое слово ссылается на текущий объект, в контексте которого выполняется код. Однако его 
значение зависит от того, как вызывается функция.

> Другими словами **контекст вызова** `this` – это всегда объект, от имени которого вызывается функция

### Глобальный контекст
В глобальном контексте выполнения `this` ссылается на объект `window` в браузере, или на объект `global` в Node.js
```js
function sayHi() {
  console.log(`THIS: ${this}`) // window (browser) || global (Node.js)
}
```

### В контексте метода объекта
Если функция является методом объекта, тогда `this` ссылается на сам этот объект.
```js
const user = {
  name: 'John',
  greet: sayHi,
  }
}

user.greet() // { name: 'John', greet: f }
```

### В функции, вызванной function()
Если функция вызывается как `function()`, и она не является методом объекта или стрелочной функцией, то `this` может 
быть определено разными способами:
- в `"strict mode"` `this = undefined`
- в нестрогом режиме `this` ссылается на window/global

```js
function example() {
  console.log(this); // undefined (в строгом режиме) или
                     // window/global (в нестрогом режиме)
}
example();
```

### В стрелочных функциях
Стрелочные функции не имеют собственного `this`. Вместо этого `this` берётся из контекста, в котором они были созданы.
```js
const arrowFunction = () => {
  console.log(this); // `this` будет взято из окружающего контекста
};
arrowFunction();

// То есть ещё пример:

function foo() {
  const bar = () => console.log(this)
}
```

Однако, если `foo` вызывается в контексте какого-то объекта, то `this` внутри стрелочной функции `bar` будет 
ссылаться на этот объект:
```js
const obj = {
  foo() {
    const bar = () => console.log(this);
    bar();
  }
};

// Вызываем foo в контексте объекта
obj.foo(); // this будет ссылаться на объект obj
```

## bind
### Установка контекста функции
Позволяет явно установить значение `this` для функции.  
> Это полезно, например, при передаче метода объекта как `callback` функции (функции обратного вызова)
```js
const obj = { value: 42 };

function getValue() {
  return this.value;
}

const boundGetValue = getValue.bind(obj);

console.log(boundGetValue()); // 42
```
### Частичное применение аргументов
`bind()` позволяет частично применять аргументы, фиксируя их значения и создавая новую функцию с предопределёнными 
аргументами.
```js
function add(a, b){
  return a + b;
}

const addAlwaysFive = add.bind(null, 5);

console.log(addAlwaysFive(3)) // 8
```
### Использование в методах объектов
`bind()` часто используется при определении методов объекта, чтобы сохранить ссылку на исходный объект внутри метода.
```js
const calculator = {
  value: 0,
  add(x) {
    this.value += x;
  }
}

const addTen = calculator.add.bind(calculator, 10)
addTen();
console.log(calculator.value) // 10
```
> Метод `bind()` полезен в ситуациях, когда требуется явное управление контекстом функции и предварительная фиксация 
> параметров.

## call
Метод `call()` используется для вызова функции с указанным значением `this` и передачей аргументов в виде списка, вместо массива.
```js
foo.call(thisArg, arg1, arg2)
```
`foo` – функция, которую нужно вызвать
`thisArg` – значение, которое будет использовать в качестве `this` внутри функции `foo`
`arg1, arg2` – аргументы, которые будут переданы в функцию `foo`
```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName(city, country) {
    console.log(`${this.firstName} ${this.lastName} ${city} ${country}`);
  }
}

const patric = new Person('Patric', 'Jane');
const teresa = new Person('Teresa', 'Lisbon');

// Используем call() для вызова метода fullName у объектов patric и teresa
john.fullName.call(patric, 'New York', 'USA'); // Patric Jane, New York, USA
jane.fullName.call(teresa, 'London', 'UK');    // Teresa Lisbon, London, UK
```

## apply
Метод `apply()` является одним из методов функций в JavaScript и используется для вызова функции с заданным контекстом (значением `this`)
и аргументами, представленными в виде **массива** или **масссиво-подобного** объекта.
```js
myFunction.apply(thisArg, [argsArray])
```
`thisArg` – Значение, которое будет использовано в качестве значения this при вызове функции.
`argsArray` – Массив аргументов или подобный массив объект.
>Применение метода `apply()` может быть полезным, например, при вызове функций с измененным контекстом или при динамическом определении 
аргументов.

```js
function greet(greeting) {
  console.log(`${greeting} ${this.name}`);
}

const person = {
  name: 'John'
};

// Используем apply() для вызова функции greet с контекстом объекта person и аргументом 'Hello'
greet.apply(person, ['Hello']); // Вывод: Hello John
```
---
## Conclusion
1. `bind(thisArg)`: Создает новую функцию с тем же телом, что и исходная, но с фиксированным значением `this`.
```js
const logInfo = console.log.bind(console, 'Info:');
logInfo('This is an information message.');

```
---
2. `bind(thisArg, arg1, arg2, ...)`: Создает новую функцию с тем же телом, что и исходная, но с фиксированным значением `this` и **аргументами**.
```js
const greetPerson = greet.bind(person);
greetPerson('Hola'); // Вывод: Hola Jane
```
---
3. `call(thisArg, arg1, arg2, ...)`: Вызывает функцию с указанным значением `this` и **аргументами**.
```js
function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: 'John' };
sayHello.call(person); // Вывод: Hello, John
```
---
4. `apply(thisArg, [argsArray])`: Вызывает функцию с указанным значением `this` и **массивом аргументов**.
```js
function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}

const person = { name: 'Jane' };
greet.apply(person, ['Hi']); // Вывод: Hi Jane
```

<– [Table of Contents](./README.md/#table-of-contents)
