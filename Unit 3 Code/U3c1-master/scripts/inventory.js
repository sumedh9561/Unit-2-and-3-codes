var prodData = JSON.parse(localStorage.getItem("products")) || []

prodData.map(function(elem, index){
    let div = document.createElement("div");
   
    let image=  document.createElement("img")
    image.src = elem.image;

    let type = document.createElement("p")
    type.innerText = elem.type;

    let desc = document.createElement("p")
    desc.innerText=elem.desc;

    let price = document.createElement("p")
    price.innerText =elem.price;

    // let Image=  document.createElement("img")
    // Image.src = elem.Image;

    let remove_product = document.createElement("button")
    remove_product.innerText ="Remove";
    remove_product.addEventListener("click" , function(){
        removedata(elem, index);
    })

    div.append(image,type,desc,price,remove_product)

    document.querySelector("#all_products").append(div)
})

function removedata(ele, index){
    prodData.splice(index,1)
    localStorage.setItem("products" , JSON.stringify(prodData))
    window.location.reload();
}