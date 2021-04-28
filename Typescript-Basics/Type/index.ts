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

const anotherAdd = function add(num1: number, num2: number) {
  return num1 + num2
}

const doubleNumber: (num: number) => number = number => number * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(20, doubleNum => {
  return doubleNum
});

let anyInput: any;
let text: string;

let unknownInput: unknown;

unknownInput = 'hello';
unknownInput = 20;
unknownInput = true;

if(typeof unknownInput === 'string') {
  text = unknownInput;
}

function error(message: string): never {
  throw new Error(message);
  while (true) {
    
  }
}

console.log(error('This is error messages'));