let display = document.getElementById('inputBox');
let buttons =  document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
buttons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1); // here user is deleting the number 
            display.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string=''; // when user is click this ac button input box in empty
            display.value=string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string); // Here doing Arithmatic operation
            display.value=string;
        } 
        else{
            string += e.target.innerHTML; // User is typing number here
            display.value=string;
        }    
    });
});