const nameable = {
    name: 'Quill'
};
class Developer {
    constructor(age, experience) {
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
