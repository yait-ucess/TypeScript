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
const upperHello = toUpperCase('Hello');
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

const designer = {
    name: 'Quill',
    1: 'Operator',
};
const downloadedData = {
    id: 1
};
console.log(downloadedData.user?.name?.first);
