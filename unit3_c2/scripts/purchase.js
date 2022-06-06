let userData=JSON.parse(localStorage.getItem("user"))
var store = JSON.parse(localStorage.getItem("purchase")) || []
let purchase = document.getElementById("purchase")
 store.forEach(function(el){
     let div = document.createElement("div")
     let img = document.createElement("img")
     img.src = el.image
     let h3= document.createElement("h3")
     h3.innerText = el.name
     let h2 =document.createElement("h2")
     h2.innerText= el.price
     div.append(img,h3,h2)
     purchase.append(div)
 })
 let amount = document.getElementById("wallet_balance")
 amount.innerText =  userData.amount