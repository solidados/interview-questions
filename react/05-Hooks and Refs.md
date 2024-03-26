05-Hooks (types, use cases, rules).md

# Hooks in React
Хуки позволяют использовать состояние и другие возможности React без написания классов.
Они предоставляют более прямой доступ к API таких понятий:  
- props
- state
- context
- refs
- life cycle

### Refs
> **Refs** – это механизм, который позволяет получить прямой доступ к элементам DOM, или компонентам React
```javascript
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

```
В этом примере `useRef` создает объект `ref`, который может быть привязан к элементу `<input>`. Затем, при нажатии на кнопку _"Focus Input"_, `handleClick` вызывает метод `focus()` для полученного элемента, фокусируя его.
