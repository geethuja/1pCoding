const firstNum = [1,2,3];
const secondNum = [4,5,6];

// how to do combine two arrays previously
// const combinedNum = firstNum.concat(secondNum);

// ES6
//const combinedNum = [...firstNum, ...secondNum];

// we can add more elements to array
const combinedNum = [...firstNum,'a', ...secondNum, 'b'];

console.log(combinedNum)


// Array of objects combined

const first = { name: "geethu" };
const second = { age: 34 };
const combined = { ...first, ...second, location:"pala"}

console.log(combined)

const clone ={...first}
console.log(clone)