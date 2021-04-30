class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
let person2;
const quill = new Person('Quill');
quill.greeting();
const anotherQuill = {
    name: 'anotherQuill',
    greeting: quill.greeting
};
anotherQuill.greeting();
