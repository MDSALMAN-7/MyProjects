// function ChangeCase(str){
//     let firstChar = str.charAt(0);
//     let restChars = str.substring(1);
//     console.log(`${firstChar.toUpperCase()+restChars.toLowerCase()}`);
// }
// ChangeCase("welcomE");

// let str = "welCoMe";


// Write a function that returns given string is sentence case. [First letter caps and others in lowercase]

function ChangeCase(str){
    let firstChar = str.charAt(0);
    let restChars = str.substring(1);

    console.log(`${firstChar.toUpperCase()+restChars.toLowerCase()}`);
}
ChangeCase("wElComE");
