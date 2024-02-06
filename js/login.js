userName = document.querySelector("#userName")
password = document.querySelector("#password")
signInBtnn = document.querySelector("#signIn")

signInBtnn.addEventListener('click', function(e){
    e.preventDefault()
    if(userName.value ==="" || password.value===""){
        alert("Enter userName and Password")
    }
    else{
        if(localStorage.getItem("userName") && localStorage.getItem("password")  && userName.value.trim() === localStorage.getItem("userName") && password.value.trim()===localStorage.getItem("password")){   
            setTimeout(()=>{
                window.location = 'index.html'
            }, 1000)
        }
        else{
            alert("Wrong UserName or Password")
        }
    }
})
