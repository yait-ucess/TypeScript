// function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
//   value[key];
//   return value;
// }
// console.log(copy({ name: 'Quill', age: 20}, 'age'));
// type K = keyof { name: {}; number: number}

// class LightDataBase<T extends string | number | boolean> {
//   private data: T[] = [];
//   add(item: T) {
//     this.data.push(item);
//   }
//   remove(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   get() {
//     return this.data;
//   }
// }
// const stringLightDataBase = new LightDataBase<string>();
// stringLightDataBase.add('Apple');
// stringLightDataBase.add('Banana');
// stringLightDataBase.add('Orange');
// stringLightDataBase.remove('Apple');
// console.log(stringLightDataBase.get());

// interface TmpDataBase<T> {
//   id: number;
//   data: T[];
// }

// const tmpDataBase: TmpDataBase<number> = {
//   id: 3,
//   data: [20]
// }

interface ToDo {
  title: string;
  text: string;
}

type ToDoable = Partial<ToDo>
type ReadTodo = Readonly<ToDo>