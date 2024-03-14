// validation codes for inputs

var email= document.forms ['form']['email'];
let password= document.forms ['form']['password'];

let email_error= document.getElementById ('error-email');
let password_error= document.getElementById ('pass-email');

function validation() {
   if (email.value.length < 9){
       email.style.border = "1px solid red";
       email_error.style.display = "block";
       email.focus();
       return false;
   } 
   if (password.value.length < 6){
    password.style.border = "1px solid red";
    password_error.style.display = "block";
    password.focus();
    return false;
} 
}

