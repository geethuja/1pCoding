/*
Write a JavaScript program to remove all characters from a given string that appear more than once.
*/
function removeRepeatChars(str){
    let arr = str.split("");
    console.log(arr);
    console.log(arr.length)
    for(let i = 0; i < arr.length - 1; i++ ){
        for(let j = i + 1 ; j < arr.length; j++ ){
            if(arr[i] === arr[j]){
                for(let k = 0; k < arr.length ; k++){
                    str = str.replace(arr[i],"");
                }
            }
        }
    }
    return str;
}

console.log(removeRepeatChars("QA Automation Pro6756786787667677"));