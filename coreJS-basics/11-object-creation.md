# Object creation
**Вопрос: какие существуют способы создания объекта?**

Объекты в javascript можно создавать несколькими способами:

### functional approach
```javascript
function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

const user = new User('John', 'Smith');
console.log(user); // User { name: 'John', surname: 'Smith' }
```

### literal notation approach
```javascript
MyObject = {
  id: 1,
  name: 'Simple'
}
```

### Class approach
```javascript
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

const user = new User('Some', 'Name');
console.log(user); // User { name: 'Some', surname: 'Name' }
```
