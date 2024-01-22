/* What : 
function is block of code designed to perform a particular task
Why :
- we can reuse code 
- used many times
- same code with differnt arguments to produce different results

*/
let x = multiply(4,6);
function multiply(a1,a2){
    return a1 * a2;
}

console.log(x);

let temperature = toCelsius(87);
function toCelsius(fahrenheit){
    return (5/9) * fahrenheit-32;
}
console.log(temperature);
