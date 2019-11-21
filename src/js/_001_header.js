/*** HEADER JS ***/

class Gogi {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const gogi = new Gogi("Alex", 85);
const showGogi = () => {
    console.log(gogi);
};