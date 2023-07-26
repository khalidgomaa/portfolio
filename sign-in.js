let form=document.getElementById("form")
let username=document.getElementById("username")
let password=document.getElementById("password")
let confpassword=document.getElementById("confpassword")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validatePassword();

})
let getuser=localStorage.getItem("username")
let getpassword=localStorage.getItem("password")
let getconfpassword=localStorage.getItem("confpassword")




function validatePassword() {
    if(username.value != ''&&password.value != ''&& confpassword.value !=''){
    if(username.value===getuser
        &&getpassword===password.value
&&getconfpassword ===confpassword.value
       
        ){

            alert("successfully ")
            window.location.href= "http://127.0.0.1:5500/home/index.html"
        }
        else{
            console.log('wrong')
            console.log(getuser)
            console.log(username.value)
            
            console.log(getpassword)
            console.log(password.value)

            console.log(getconfpassword)
            console.log(confpassword.value)

        }
}}