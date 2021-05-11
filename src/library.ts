import axios from 'axios';
// axios.get('');

// import _ from 'lodash';
//console.log(_.shuffle([1, 2, 3, 4]))
namespace myApp {
  const hello = 'hello in namespace';
  export const name = 'Quill';
  export interface Nameable {
    name: string;
  }
}

let nameable: myApp.Nameable;