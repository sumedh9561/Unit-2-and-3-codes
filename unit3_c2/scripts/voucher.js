var userData = JSON.parse(localStorage.getItem("user"))

const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"

async function allItems(){
    try {
        

        let res = await fetch(url)
        let items = await res.json()
        
        for(let products of items){
            
            appendVouchers(products.vouchers)

            
        }
        

        //console.log(product)
        //
    }
    catch (err){
        console.log(err)
    }
}
allItems()
console.log(userData.amount)

function appendVouchers(items){
    let container = document.getElementById("container")

    items.forEach(function(el){
        let div = document.createElement("div")
        let img= document.createElement("img")
        img.src = el.image
        let h3= document.createElement("h3")
        h3.innerText = el.name
        let h2 =document.createElement("h2")
        h2.innerText= el.price
        let button = document.createElement("button")
        button.innerText = "BUY"
        button.className="buy_voucher"
        button.addEventListener("click",function(){
            if(userData.amount>=el.price){
                var store = JSON.parse(localStorage.getItem("purchase")) || []
                var storeItem={
                    image: el.image,
                    name: el.name,
                    price: el.price
                    
                }
                store.push(storeItem)
                localStorage.setItem("purchase",JSON.stringify(store))
                userData.amount = userData.amount - el.price;
                
                alert("Hurray! purchase successful")
                document. location. reload()
                localStorage.setItem("user",JSON.stringify(userData))
                
            }else{
                alert("Sorry! insufficient balance")
            }
            
        })
        div.append(img,h3,h2,button)
        container.append(div)

    })
}




let amount = document.getElementById("wallet_balance")
amount.innerText =  userData.amount


