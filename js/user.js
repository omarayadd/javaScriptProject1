headerName = document.querySelector('#header-welcome')
logIn = document.querySelector('#loginPage')
signUp = document.querySelector('#registerPage')
Icons = document.querySelector('#header-userOptions')
userIcon = document.querySelector("#userIcon")
userOptions = document.querySelector(".header-user-options")
logOut = document.querySelector("#logOut")

userIcon.addEventListener('click', function(e){
    e.preventDefault()
    if(userOptions.style.display=="block"){
        userOptions.style.display = "none"
    }
    else{
    userOptions.style.display = "block"
    }
})

logOut.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.clear()
    setTimeout(()=>{
        window.location = 'index.html'
    }, 1500)
})


if(localStorage.getItem("userName")){
    headerName.textContent = "Welcome " + localStorage.getItem("userName")
    logIn.remove()
    signUp.style.display = "none"
    Icons.style.display = "flex"
}


