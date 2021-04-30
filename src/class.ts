class Person {
  constructor(public readonly name: string, protected readonly age: number;) {
  }

  incrementAge() {
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
  }
}

const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();