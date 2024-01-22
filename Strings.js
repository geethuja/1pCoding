/*
 what : Template Strings in ES6 , strings enclosed in backticks ``
 Why : it allows single and double quotes inside a string
 How : let text = `He's often called "SpiderMan".`
*/

let text = `He's often called "SpiderMan".`
console.log(text)

/*
String methods
---------------
text.length
text.charAt(0)
text.charCodeAt(4)
text.at(2)

slice(start, end)
substring(start, end)
substr(start, length)

toLowerCase();
toUpperCase();
concat(" ", "world")
trim()
trimStart()
trimEnd()
padStart()  // add zeros infront of string
padEnd()
repeat()
replace()
replaceAll()
split(",")

search methods
indexOf()
lastIndexOf()
search()
indexOf() and search(), are they equal?
The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions)

match()
matchAll()
includes()
startsWith()
endsWith()
*/

console.log(text.length)

/* differnce between === and == operator */
let x = "Manu";
let y = new String("Manu");
if(x == y)
console.log('Both are SAME.')

let a = new String("Juan");
let b = new String("Juan");
console.log(a===b)
// answer is false ; why ? comparing two javascript objects always returns false

let sample = "If God is with Us who can against Us";
let index = sample.indexOf('God')
console.log(index)
let search = sample.search("Us")
console.log(search)

let match = sample.match("Us")
console.log(match)

let matchAll = sample.matchAll("Us")
console.log(Array.from(matchAll))

let includes = sample.includes("with")
console.log(includes)

/* 
Template Strings allow variables in strings:

*/
let firstName = "Geethuja"
let lastName = "Tom"
let fullName = `Welcome to QA Automation Pro, ${firstName}, ${lastName}!`;
console.log(fullName)