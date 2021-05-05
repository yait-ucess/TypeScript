// type Engineer = {
//   name: string;
//   role: string;
// }
// type Blogger = {
//   name: string;
//   follower: number;
// }
// type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger{}
// const quill: EngineerBlogger = {
//   name: 'quill',
//   role: 'front-end',
//   follower: 1000
// }
// type NumberBoolean = number | boolean;
// type StringNumber = string | number;
// type Mix = NumberBoolean & StringNumber;
// function toUpperCase(x: string): string;
// function toUpperCase(x: number): number;
// function toUpperCase(x: string | number):string | number {
//   if (typeof x === 'string') {
//     return x.toUpperCase();
//   }
//   return x;
// }
// interface TmpFunc {
//   (x: string): number;
//   (x: number): number;
// }
// const upperHello: TmpFunc = function(x: string | number) { return 0 };
// interface FuncA {
//   (a: number, b: string): number;
//   (a: string, b: number): number;
// }
// interface FuncB {
//   (a: string): number;
// }
// let intersectionFunc: FuncA & FuncB;
//intersectionFunc = function (a: number | string, b?: number | string) { return 0 }
// interface FuncA {
//   (a: number): number;
// }
// interface FuncB {
//   (a: string): string;
// }
// let unionFunc: FuncA | FuncB;
// type NomadWorker = Engineer | Blogger;
// function describeProfile(nomadWorker: NomadWorker) {
//   console.log(nomadWorker.name);
//   if ('role' in nomadWorker) {
//     console.log(nomadWorker.role);
//   }
//   if ('follower' in nomadWorker) {
//     console.log(nomadWorker.follower);
//   }
// }
// class Dog {
//   kind: 'dog' = 'dog'
//   speak() {
//     console.log('bow-wow');
//   }
// }
// class Bird {
//   kind: 'bird' = 'bird'
//   speak() {
//     console.log('tweet-tweet');
//   }
//   fly() {
//     console.log('flutter');
//   }
// }
// type Pet = Dog | Bird;
// function havepet(pet: Pet) {
//   pet.speak();
//   switch(pet.kind) {
//     case 'bird': pet.fly();
//   }
//   if (pet instanceof Bird) {
//     pet.fly();
//   }
// }
// const input = document.getElementById('input')!;
// interface Designer {
//   name: string
//   [index: number]: string;
// }
// const designer: Designer = {
//   name: 'Quill',
//   1: 'Operator',
// }
// interface DownloadedData {
//   id: number;
//   user?: {
//     name?: {
//       first: string;
//       last: string;
//     }
//   };
// }
// const downloadedData: DownloadedData = {
//   id: 1
// }
// console.log(downloadedData.user?.name?.first);
// const userData = downloadedData.user ?? 'no-user';
// type id = DownloadedData['id' | 'user'];
function advanceFn(...args) {
    console.log();
}
advanceFn(0, 'web', true, 0, 1, 2, 3);
let milk = 'milk';
const array = [10, 20];
const peter = {
    name: 'peter',
    age: 38
};
