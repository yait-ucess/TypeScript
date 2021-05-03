function copy<T, U>(value: T): T {
  let user: T;
  return value;
}
console.log(copy({ name: 'Quill'}));