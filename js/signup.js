var userName = document.getElementById("uname");
var userEmail = document.getElementById("email");
var userpass = document.getElementById("pass");
var signupBtn = document.getElementById("signup");
var user = {};
var container = [];
var flag;
var openeye = document.getElementById("openeye");
var closeeye = document.getElementById("closeeye");
var input=document.getElementById("pass");
function isExist() {
    if (localStorage.getItem("users") != null) {

        container = JSON.parse(localStorage.getItem("users"));
        for (var i = 0; i < container.length; i++) {
            if (container[i].email.toLowerCase() == userEmail.value.toLowerCase() )
               {return true;} 
        }
         return false;
    }
}

signupBtn.addEventListener("click", function () {
    user = {
        uname: userName.value,
        email: userEmail.value,
        pass: userpass.value,
    }
    if (userName.value != "" && userEmail.value != "" && userpass.value != "") {
        if (isExist()) {
            document.getElementById("founded").innerHTML = "email already exists 😢";
            document.getElementById("scss").innerHTML = "";
            document.getElementById("dangr").innerHTML = "";
            document.getElementById("validEmail").innerHTML = "";
        }
        else {
            if( validate())
           {
            container.push(user);
            localStorage.setItem("users", JSON.stringify(container));
            document.getElementById("founded").innerHTML = "";
            document.getElementById("scss").innerHTML = "Success 🎉👌✔";
            document.getElementById("dangr").innerHTML = "";
            document.getElementById("validEmail").innerHTML = "";
           }
           else
           {
            document.getElementById("founded").innerHTML = "";
            document.getElementById("scss").innerHTML = "";
            document.getElementById("dangr").innerHTML = "";
            document.getElementById("validEmail").innerHTML = "email must have at least 3 character and end with @gmail.com 😥";
           }
        }
    }
    else {
            document.getElementById("founded").innerHTML = "";
            document.getElementById("scss").innerHTML = "";
            document.getElementById("dangr").innerHTML = "All inputs is required 👉👈";
            document.getElementById("validEmail").innerHTML = "";
    }
})
function validate()
{
    var regex2 = /[a-zA-Z_1-9]{3,}\@gmail\.com/ ;
   return regex2.test(userEmail.value) ;
}

closeeye.addEventListener("click" , function(){
    input.setAttribute('type', 'text');
    closeeye.classList.replace('d-flex' , 'd-none');
    openeye.classList.replace('d-none' , 'd-flex');
})

openeye.addEventListener("click" , function(){
    input.setAttribute('type', 'password');
    openeye.classList.replace('d-flex' , 'd-none');
    closeeye.classList.replace('d-none' , 'd-flex');
})