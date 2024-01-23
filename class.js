
// define person object,
/*
const person = {
    name : "Geethu",
    walk() {
        console.log("Walk");
    }
};
*/
// class name  first letter hasto be capital
class Person {

    constructor(name){
        this.name = name;
    }

    walk() {
        console.log("Walk");
    }
}
// objects define
const person = new Person("geethu");
person.walk()
