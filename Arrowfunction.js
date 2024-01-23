// how to shorter below code ?
/*
const square = function (number){
    return number * number;
}
*/

const square = number =>  number * number;

console.log(square(6))

// this and arrow function

const person = {
    talk(){
        var self = this;
        setTimeout(()=>{
            console.log("this", this);
        }, 1000);        
    }
}
person.talk();

// arrow functions dont rewind this keyword