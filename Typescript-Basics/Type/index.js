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
console.log(book[2]);
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
console.log(anything);
