# Reducer
Что такое **reducer** и какие параметры он принимает?

```js
function reducer( state, action ) {
  switch ( action.type ) {
    case  "INCREMENT": 
      return state;
    case  "DECREMENT": 
      return state;
  }
}
```

**Reducer** это чистая функция, которая принимает параметрами **state** и **action**.

Внутри **Reducer** отслеживается тип полученного **action** и в зависимости от этого изменяется состояние, и возвращаем новый объект 
этого состояния.  
> Чистая функция всегда должна возвращать новый объект

