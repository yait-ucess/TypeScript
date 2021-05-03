var _a, _b, _c;
//interface EngineerBlogger extends Engineer, Blogger{}
const quill = {
    name: 'quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = function (x) { return 0; };
let unionFunc;
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havepet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird': pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
const input = document.getElementById('input');
const designer = {
    name: 'Quill',
    1: 'Operator',
};
const downloadedData = {
    id: 1
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
function advanceFn(...args) {
    console.log(args[0]);
}
console.log(advanceFn(0, 1, 2, 3));
