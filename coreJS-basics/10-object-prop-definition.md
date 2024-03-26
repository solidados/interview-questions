# Object's property definition
**Вопрос: как определить наличие свойства в объекте?**

Существует два способа это сделать:

### `hasOwnProperty()`
Этот метод есть у каждого объекта.
```javascript
const obj = {
  a: 5,
  b: 'string'
}

console.log( obj.hasOwnProperty('a') ); // true
```

### <property_name> `in` <Object_name> operator
Этот оператор так же вернёт `true`, если такое поле есть в объекте.
```javascript
console.log('b' in obj) // true
```
