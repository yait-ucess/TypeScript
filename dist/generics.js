function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'Quill', age: 20 }, 'age'));
class LightDataBase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDataBase = new LightDataBase();
stringLightDataBase.add('Apple');
stringLightDataBase.add('Banana');
stringLightDataBase.add('Orange');
stringLightDataBase.remove('Apple');
console.log(stringLightDataBase.get());
