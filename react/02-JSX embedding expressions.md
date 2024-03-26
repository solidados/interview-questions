## JSX embedding expressions, attributes, children

---
**JSX (JavaScript XML)** - это расширение синтаксиса JavaScript, которое позволяет писать код в стиле XML/HTML (Extensible Markup 
Language) внутри JavaScript. Оно используется в React для объявления элементов пользовательского интерфейса. JSX преобразуется в обычные 
JavaScript вызовы, что позволяет React использовать его вместе с JavaScript.

```javascript
const element = <h1>Hello, world!</h1>;
```
Здесь `<h1>Hello, world!</h1>` - это JSX, который преобразуется в вызов `React.createElement('h1', null, 'Hello, world!')`.
