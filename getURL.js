//ES6 - get URL 
//console.log(`${document.URL}`);

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function tripleSum( x, y ){
    if(x == y)
        return 3*(x+y);
    else
        return x+y;
};

console.log(tripleSum(10,10));
console.log(tripleSum(10,20));