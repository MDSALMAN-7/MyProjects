let signUpBtn = document.getElementsByClassName("signupbtn");
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');

let text = document.querySelector('.text');

signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    title.innerText = 'Sign in';
    text.innerText = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '60px';
    title.innerText = 'Sign up';
    text.innerText = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});
