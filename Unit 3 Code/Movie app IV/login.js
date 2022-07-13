document.querySelector("form").addEventListener("submit", checkuser)
function checkuser(){
    let form=document.querySelector("form")
    let email=form.email.value;
    let pass=form.pass.value;
    let data=JSON.parse(localStorage.getItem("userdetails"))
    data.map(function(el){
     if(email==el.email&&pass==el.pass){
       
         alert("login successful");
         window.location.href="index.html"
         
        
     }
     else{
         alert("Invalid Credentials")
     }

    })
}