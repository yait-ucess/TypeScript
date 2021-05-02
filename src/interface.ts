interface addFunc {
  (num1: number, num2: number): number;
}

interface Nameable {
  name?: string;
  nickName?: string;
}

const nameable: Nameable = {
  name: 'Quill'
}

interface Human extends Nameable {
  name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human{
  name?: string;
  constructor(public age: number, public experience: number) {}
  greeting(message?: string) {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  }
}
