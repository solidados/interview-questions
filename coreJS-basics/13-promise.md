# Promise
**Вопрос: что такое `Promise`?**

> `Promise` – это специальный объект, предназначенный для работы с асинхронным кодом, и который содержит своё состояние.

Состояния `Promise`:  
Сначала:
- **pending**  

Потом одно из:
- **fulfilled**
- **rejected**

Промисы пришли в Javascript на замену функциям обратного вызова (callback-functions), с помощью которых работали с асинхронными действиями.

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('READY');
  }, 1000);
})
.then(data => console.log(data)) // READY
.catch(error => console.error(error.message)) // error
```
