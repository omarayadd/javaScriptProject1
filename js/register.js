let userName = document.querySelector("#userName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")
let signUpBtn = document.querySelector("#signUP")


signUpBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(userName.value ==="" || email.value==="" || password.value==="" || confirmPassword.value===""){
        alert("please fill missing data")
    }
    else if(userName.value.trim()===localStorage.getItem("userName")){
        alert("user name already exists")
    }
    else if(password.value.trim()!== confirmPassword.value.trim()){
        alert("Password is not matched")
    }
    else{
        localStorage.setItem("userName", userName.value.trim())
        localStorage.setItem("email", email.value.trim())
        localStorage.setItem("password", password.value.trim())
       setTimeout(()=>{
        window.location = 'loging.html'
       }, 1500) 
    }
})