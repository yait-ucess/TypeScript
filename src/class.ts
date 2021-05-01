abstract class Person {
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
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
  explainJob() {
    console.log(`I'm teacher. and I teach ${this.subject}.`);
  }
  get subject(): string {
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
console.log(teacher.greeting);