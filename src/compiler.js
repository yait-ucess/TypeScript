function echo(message) {
    if (message) {
        return message;
    }
}
let nullableMessage = null;
let undefinedableMessage = undefined;
let onlyNull = undefined;
let onlyUndefined = null;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
echo.call(null, 'hi');
