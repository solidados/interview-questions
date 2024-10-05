# Types in typescript
## Primitive types
### string
```typescript
const name: string = 'John'
```
### number
```typescript
let num: number = 123
```
### boolean
```typescript
const isLoading: boolean = true
```
### null & undefined
```typescript
let someVar: null = null
let anotherVar: undefined = undefined
```
### symbol
```typescript
const uniqueId: symbol = Symbol('id')
```
### bigint
```typescript
let bigNum: bigint = 1n
```

## Complex types
### object
```typescript
const person: object = {name: 'John', age: 34}
```
### array
```typescript
const someNumbers: number[] = [1, 2, 3]
const fullName: Array<string> = ['John', 'Smith']
```

### Tuple
```typescript
const user: [string, number] = ['John', 34]
```

## Union types
```typescript
let anyTypeVar: string | number
anyTypeVar = 'ABC123'
anyTypeVar = 123
```

## Intersection types
```typescript
interface Person {
  name: string,
  age: number
}
interface Employee {
  emplId: number
}
type EmployeePerson = Person & Employee

const employee: EmployeePerson = {
  name: 'John',
  age: 34,
  id: 12345
}
```

## Literal types
Limit the value of variable with a certain value and type
```typescript
let direction: 'North' | 'South' | 'West' | 'East'
direction = 'South'
```

## Any type
Turn the type check off and allows the variable to accept any type
```typescript
let a: any = 10
a = 'ten'
a = true
```

## Unknown type
Safe analog of `any`. Value requires type checks before use
```typescript
let val: unknown = 'Hello'
if (typeof val === 'string') console.log(val.toUpperCase())
```

## Never type
Is a type that never happens. mostly used for functions that never return a value (e.g.: cycles, or `throw` exception functions)
```typescript
function throwError(message: string): never {
  throw new Error(message)
}
function infinteLoop(): never {
  while (true) {}
}
```

## Void type
Represents an absence of returned type
```typescript
function printToConsole(message: string): void {
  console.log(message)
}
```

## Enumerable type (Enum)
```typescript
enum Direction {
  north = 1,
  south = 2,
  west = 3,
  east = 4,
}
let move: Direction = Direction.north
```

## Interfaces and Classes
interface used to describe an Object's structure
### interface
```typescript
interface IUser {
  name: string,
  age: number,
  greet(): void
}

const userOne: IUser = {
  name : 'John Smith',
  age  : 34,
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
```
### class
```typescript
class UserTwo implements IUser {
  constructor(public name: string, public age: number) {}
  
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const userTwo = new User("Джейн", 28);
user.greet();
```

## Generics
