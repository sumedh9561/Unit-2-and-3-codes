document.querySelector("#form").addEventListener("submit", storeIt)

function storeIt(){
    
    var data={
        
     name : form.name.value,
     email : form.email.value,
     address : form.address.value,
     amount : form.amount.value,
    }
   console.log(data)
   localStorage.setItem("user",JSON.stringify(data))
}


