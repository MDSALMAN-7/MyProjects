// Write a function to count the number of chars in a string without using length property.

let count = 0;
function CountChars(str){
    for(var char in str){
        count++;
    }
    console.log(`${str} => ${count}`);
}
CountChars("Welcome to JavaScript");