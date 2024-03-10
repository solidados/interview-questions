# Promises & async/await
Это всё механизмы Javascript, предназначенные для управления асинхронными операциями и для облегчения работы с асинхронным кодом.

## Promises
Это объект, которые представляет результат успешного или неуспешного завершения асинхронной операции и её результат.  

Promise имеет три состояния:  
- pending
- fulfilled
- rejected

Пример:  
```js
const myPromise = new Promise((resolve, reject) => {
  true
    ? resolve('Операция успешно завершилась')
    : reject('Ошибка операции выполнения')
})

myPromise
  .then(result => console.log(result))
  .catch(err => console.error(err))
```

## Async/Await
По сути своей – это "синтаксический сахар" над Promises, который предоставляет более удобный синтаксис написания асинхронного кода.
Ключевое слово `async` используется перед функцией, которая возвращает Promise.  
Ключевое слово `await` используется внутри функции для ожидания завершения работы Promise.

```js
async function myAsyncFunction() {
  try {
    const result = await myPromise
    console.log(result)
  }
  catch (err) {
    console.error(err.message)
  }
}
```
