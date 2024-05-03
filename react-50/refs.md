# Refs
Что такое Refs в React?

Позволяет создавать так называемые "ссылки"

`Ref` создаётся при помощи функции `createRef()`, и далее можно использовать специальный атрибут элемента, который можно использовать 
внутри JSX кода. И при помощи такой референции получается ссылка на определённый DOM-элемент.

Это необходимо в нескольких случаях:
- как в примере - перенести фокус на элемент,
- выделить текст
- взаимодействовать с анимацией
- взаимодействовать со сторонними библиотеками, где нужно получить доступ до DOM-элемента. (то есть вместо того, чтобы обращаться к 
  `document.querySelector()`, который очень непроизводительный в отношении Реакта, можно использовать более производительный подход 
  – `Refs`)

## Пример классового компонента
```jsx
class MyComponent extends React.Component {
  constructor (props){
    super(oprops);
    
    this.inputRef = React.createRef();
  }
  
  render() {
    return <input type="text" ref={this.inputRef} />
  }
  
  componentDidMount() {
    this.inputRef.current.focus();
  }
}
```

## Пример функционального компонента
```jsx
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
};

export default MyComponent;

```
