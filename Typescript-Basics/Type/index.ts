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

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [20, 'hello'];

type ClothSize = 'small' | 'medium' | 'large';

const apple = 'apple';
let clothSize: ClothSize = 'medium';

const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}

function add(num1: number, num2: number): number {
  return num1 + num2
}

function sayHello(): void {
  console.log('Hello!');
}


let tmp: undefined;
let tmpNull: null = null;
let tmpNull2: null = undefined;
let tmpUndefined: undefined = undefined;
let tmpUndefined2: undefined = null;