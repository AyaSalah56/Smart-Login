var uEmail = document.getElementById("email");
var upass = document.getElementById("pass");
var loginBtn = document.getElementById("login");
var container = [];
var logoutBtn =  document.getElementById("logout");

var openeye = document.getElementById("openeye");
var closeeye = document.getElementById("closeeye");
var input=document.getElementById("pass");


var currentUser 
function Exist() {
    if (localStorage.getItem("users") != null) {
        container = JSON.parse(localStorage.getItem("users"));
        console.log(container,uEmail.value,upass.value);
        for(var i = 0; i <container.length; i++) {
            console.log(container[i].email.toLowerCase());
            console.log(uEmail);
            if (container[i].email.toLowerCase() == uEmail.value.toLowerCase() && container[i].pass.toLowerCase() == upass.value.toLowerCase()) {
                localStorage.setItem('useername', container[i].uname);
                // currentUser =  container[i].uname;
                // console.log(currentUser);
                return true;
            }
          
        }
        return false
    }
}
if(loginBtn){
    loginBtn.addEventListener("click", function () {
        userlogin = {
            loginEmail: uEmail.value,
            loginPass: upass.value,
        }
        if (uEmail.value != "" && upass.value != "") {
            if (Exist()) {
                
                window.location = './home.html';
            }
            else {
                document.getElementById("incorect").innerHTML = "incorrect email or password";
                document.getElementById("dangr").innerHTML = "";
            }
        }
        else {
            document.getElementById("incorect").innerHTML = "";
            document.getElementById("dangr").innerHTML = "All inputs is required";
        }
    })
}

if(document.getElementById("userName")){
    console.log(currentUser);
    document.getElementById("userName").innerHTML = " welcome " + localStorage.getItem("useername") ;
    function logout() {
        localStorage.removeItem('useername') ;
    }
    console.log(logoutBtn);
    logoutBtn.addEventListener("click" , function(){
        console.log("hello");
        logout() ;
        window.location.href = "./index.html"
    })
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

