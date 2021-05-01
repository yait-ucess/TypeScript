class Person {
  constructor(public readonly name: string, protected readonly age: number) {
  }

  incrementAge() {
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Teacher extends Person {
  get subject() {
    if(!this._subject) {
      throw new Error('There is no subject.');
    }
    return this._subject;
  }

  set subject(value) {
    if(!this._subject) {
      throw new Error('There is no subject.');
    }    
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
  }
}

const teacher = new Teacher('Quill', 38, 'Math');
teacher.subject = 'Music';
console.log(teacher.subject);