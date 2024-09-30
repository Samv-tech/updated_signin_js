let signinBtn = document.getElementById("signinBtn");
let signupBtn = document.getElementById("signupBtn");
let usernameField = document.getElementById("usernameField");
let passwordField = document.getElementById("passwordField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    usernameField.style.maxHeight='0';
    passwordField.style.maxHeight='0';
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    usernameField.style.maxHeight='50px';
    passwordField.style.maxHeight='50px';
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}