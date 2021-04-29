"use strict";
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -3.14;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 20
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false];
book.push(20);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 1] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 2] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
};
coffee.size = CoffeeSize.SHORT;
var anything = true;
anything = 'hello';
anything = ['hello', 20, true];
anything = {};
var banana = 'banana';
banana = anything;
var unionType = 10;
var unionTypes = [20, 'hello'];
var apple = 'apple';
var clothSize = 'medium';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
var tmp;
var tmpNull = null;
var tmpUndefined = undefined;
var anotherAdd = function add(num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (number) { return number * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(20, function (doubleNum) {
    return doubleNum;
});
var anyInput;
var text;
var unknownInput;
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
