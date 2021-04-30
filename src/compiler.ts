function echo(message: string) {
  return message;
}

let nullableMessage: string = null;
let undefinedableMessage: string = undefined;
let onlyNull: null = undefined;
let onlyUndefined: undefined = null;

if (nullableMessage) {
  nullableMessage.toUpperCase();
}

echo.call(null, 'hi');