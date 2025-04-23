// Write a function to print total count of vowels in a string.

// method number = 1
// let count = 0;
// function CountVowels(str){
//     for (var char of str.toLowerCase()){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(`Total Number of Vowels in ${str} : ${count}`);
// }
// CountVowels("WelIComiwo");


// METHOD N0. 2
let count = 0;
let vowels = "aeiou";

function CountVowels(str){
    for(var char of str.toLowerCase()){
        if(vowels.indexOf(char)!==-1){
            count++;
        }
    }
    console.log(`Total Count of Vowels in ${str} : ${count}`);
}
CountVowels("Welidkjaoownsofweoio");


