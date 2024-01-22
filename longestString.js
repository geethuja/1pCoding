// Write a JavaScript program to find the longest string from a given array of strings.
//1. solution
function longest_string(arr){
    return new Array(
        arr.sort(function(a,b){
            if(a>b) return 1;
            if(a<b) return -1;
            else return 0;
        })[arr.length - 1]
    );
}

console.log(longest_string(["a","aaaaa","aaaaaaaaaaaaa","aa","aaaa"]))
















// 2. solution
let findLongestSring = (array) => {
    let newArray = [];
    for(let i = 0; i< array.length; i++){
        newArray.push(array[i].length);
    }
    let maxIndex = newArray.indexOf(Math.max(...newArray))
    return array[maxIndex];
};

console.log(findLongestSring([
    "geethu",
    "i am good",
    "I can do it",
    "god will help me",
    "I can do all things through Jesus who strengthens me !",
    "If God is with us, who can be against us ?",
    "I am Open",
    "I am ready",
    "thank you"
]));

// 3. easy solution

/*let large = (array) =>
array.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
*/
let large = (array) => array.reduce((a,b)=>(a.length > b.length ? a: b))

console.log(large([
    "geethu",
    "i am good",
    "I can do it",
    "god will help me",
    "I can do all things through Jesus who strengthens me !",
    "If God is with us, who can be against us ?",
    "I am Open",
    "I am ready",
    "thank you"
]));

