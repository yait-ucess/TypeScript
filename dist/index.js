let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -3.14;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 20
};
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['business', 1500, false];
book.push(20);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 1] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 2] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
};
coffee.size = CoffeeSize.SHORT;
let anything = true;
anything = 'hello';
anything = ['hello', 20, true];
anything = {};
let banana = 'banana';
banana = anything;
let unionType = 10;
let unionTypes = [20, 'hello'];
const apple = 'apple';
let clothSize = 'medium';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
let tmp;
let tmpNull = null;
let tmpUndefined = undefined;
const anotherAdd = function add(num1, num2) {
    return num1 + num2;
};
const doubleNumber = number => number * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(20, doubleNum => {
    return doubleNum;
});
let anyInput;
let text;
let unknownInput;
unknownInput = 'hello';
unknownInput = 20;
unknownInput = true;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
    while (true) {
    }
}
console.log(error('This is error messages'));
