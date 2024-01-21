/*
1. products storage as array of objects
2. sort products by name
3. sort product by price
*/

let products = [
    {id:1, name: 'Apple iPhone 15 Pro Max', price: 349.90 },
    {id:2, name: 'Motorola Moto g14', price: 129.99 },
    {id:3, name: 'Xiaomi Redmi 13C', price: 139.00 },
    {id:4, name: 'Redmi Note 12', price: 158.92},
    {id:5, name: 'Samsung Galaxy A14', price : 164.00 }
];

// sort products by name 
console.log('Products sorted by price: ');
let result = products.sort((a,b) => b.price - a.price);
console.log(result)

console.log('Products sorted by name: ');
let sortedByName = products.sort((a,b) => a.name.localeCompare(b.name))
console.log(sortedByName)

console.log(products.sort())

console.log('Products sorted by name length: ');
// sort by product nme length
let SortProductNamelength = products.sort((a,b) => {
    return a.name.length - b.name.length
});

console.log(SortProductNamelength)


const numbers = [2, 5, 500, 27 ];
const sortedNumbers = numbers.sort((a,b) => {
    if(a < b) {
        return -1
    }else if (a > b){
        return 1
    }else {
        return 0
    }
});

console.log(sortedNumbers)

const sortedNumbersEasy = numbers.sort((a,b) => {
    return a-b
});

/*
2-5= -3
500- 5 =495
*/

console.log(sortedNumbersEasy)

