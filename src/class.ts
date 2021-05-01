class Person {
  static species = 'Homo Sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }

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

console.log(Person.isAdult(23));