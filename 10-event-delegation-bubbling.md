## Event bubbling
Это механизм всплытия событий в DOM.  
Когда происходит событие на элементе, например клик по кнопке, то это событие всплывает вверх по иерархии дерева DOM. То есть, сначала 
обрабатывается событие на самом вложенном элементе, затем на его родителе, и так далее до корневого элемента.  
Пример:
```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent Div Clicked')
  });

  document.getElementById('child').addEventListener('click', (e) => {
    e.stopPropagation(); // Это предотвращает всплытие события выше по иерархии.
    console.log('Button Clicked');
  });
</script>
```
1. Без `stopPropagation()`: Если не использовать `e.stopPropagation()`, то при клике на кнопку ('_Button Clicked_') обработчик события также 
будет вызван и для **родительского блока** ('_Parent Div Clicked_'), так как событие будет всплывать дальше по иерархии DOM дерева.

2. С `stopPropagation()`: Если использовать `e.stopPropagation()`, то при клике на кнопку ('_Button Clicked_') всплытие события будет 
остановлено, и обработчик для **родительского блока** ('_Parent Div Clicked_') не будет вызван.

> Таким образом, использование `e.stopPropagation()` в данном контексте предотвращает всплытие события и его обработку родительским 
> элементом. Если убрать `e.stopPropagation()`, то обработчик родительского блока также будет вызван.

## Event delegation
Это метод, при котором обработчик события устанавливается на **общего родителя** нескольких элементов, чтобы обрабатывать события 
от **дочерних**. Это позволяет уменьшить количество обработчиков событий и облегчить работу с элементами, которые добавляются или 
удаляются динамически.

Пример:
```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById('myList').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      console.log(`Item clicked: ${e.target.textContent}`);
    }
  });
</script>
```
> Здесь обработчик события установлен на `<ul>`, и при клике на любой из элементов `<li>`, обработчик определяет, какой элемент был кликнут.
