const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
//const signupLink = document.querySelector("form .signup-link a");

var password = document.getElementById("password")
var confirm_password = document.getElementById("confirm_password");


signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
});
// signupLink.onclick = (()=>{
//   signupBtn.click();
//   return false;
// });

function validateForm()
{
  console.log(password.value);
  console.log(confirm_password.value);
  console.log(password.value!==confirm_password.value);
  if(password.value!==confirm_password.value)
  {
    alert("Password feilds did not match!");
    location.reload();
    return false;
  }
  return true;
}