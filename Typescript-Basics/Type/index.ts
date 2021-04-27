let hasValue = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -3.14;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 20
}

const fruits = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1500, false];
book.push(20);
console.log(book[2]);

enum CoffeeSize {
  SHORT,
  TALL = 'TALL',
  GRANDE = 1,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.GRANDE
}

coffee.size = CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 20, true];
anything = {};

let banana = 'banana';
banana = anything;
console.log(banana);

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [20, 'hello'];
