import axios from 'lodash';
declare module 'lodash' {
  export interface LoDashStatic {
    hello: string;
  }
}