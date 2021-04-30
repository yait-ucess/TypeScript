function echo(message) {
    if (message) {
        return message;
    }
}
var nullableMessage = null;
var undefinedableMessage = undefined;
var onlyNull = undefined;
var onlyUndefined = null;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
echo.call(null, 'hi');
