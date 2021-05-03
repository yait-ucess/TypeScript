function copy<T extends { name: string }>(value: T): T {
  let user: T;
  return value;
}
console.log(copy({ name: 'Quill'}));