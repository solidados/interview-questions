# Basic types
- number
- string
- boolean
- array
- tuple
- enum

## number
Числовой тип данных, представляющий как целые, так и десятичные числа.
```typescript
let count: number = 5;
```
## string
Строковый тип данных, представляющий текстовые значения.
```typescript
let name: string = "John";
```
## boolean
Логический тип данных, представляющий значение `true` или `false`.
```typescript
let isActive: boolean = true;
```
## array
Массив, представляющий набор элементов одного типа.
```typescript
let numbersArray: number[] = [1, 2, 3, 4, 5];
````
## tuple
Кортеж, представляющий массив фиксированной длины, где типы элементов могут быть разными.
```typescript
let tuple: [string, number] = ["John", 30];
```
## enum
Перечисление, представляющее набор именованных числовых констант.
```typescript
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Red;
```
## any
Тип данных, который позволяет присваивать переменной значения любого типа.
```typescript
let value: any = "Hello";
value = 5; // Допустимо
```
## null & undefined
Отдельные типы, представляющие значения null и undefined соответственно.
```typescript
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```
## object
Тип, который представляет все не примитивные значения, т.е. все, что не являются `number`, `string`, `boolean`, `symbol`, `null` или `undefined`.


> Кроме того, TypeScript поддерживает также создание пользовательских типов, объединение типов, использование универсальных типов (generics) и многое другое, что позволяет разработчикам создавать более безопасный и читаемый код.
