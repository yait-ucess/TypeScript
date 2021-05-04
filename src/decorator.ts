function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  }  
}

function Component(template: string, selector: string) {
  console.log('Component Factory');
  return function <T extends { new(...args: any[]): { name: string } } >(constructor: T) {
    
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name;
        }
      }
    }
  }
}

console.dir(Logging);
function PropertyLogging(target: any, propertyKey: string) {
  console.log('PropertyLogging');
  console.log(target);
  console.log(propertyKey);
}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('MethodLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

@Logging('Logging User')
@Component('<h1>{{ name }}</h1>', '#app')
class User {
  @PropertyLogging
  name = 'Quill';
  constructor(public age: number) {
    console.log('User was created!');
  }
  @MethodLogging
  greeting() {
    console.log('Hello');
  }
}

const user1 = new User(20);