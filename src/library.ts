import axios from 'axios';
import _ from 'lodash';
axios.get('https://fooapi.com');
console.log(_.shuffle([1, 2, 3, 4]))
namespace myApp {
  const hello = 'hello in namespace';
  export const name = 'Quill';
  export interface Nameable {
    name: string;
  }
}

let nameable: myApp.Nameable;
hello

//let name: string;
//function name() {}
//enum name {}
// class name {}
// interface name {
//   first: string
// }
// interface name {
//   second: number
// }
// namespace name{
//   const first: string = 'Peter';
// }
// namespace name{
//   const first: string = 'Peter';
// }