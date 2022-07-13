//store the products array in localstorage as "products"

function products(t,d,p,i){
    this.type =t;
    this.desc =d;
    this.price =p;
    this.image =i;
}

function storeData(e){
    e.preventDefault();

    let form = document.getElementById("products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let s1 = new products(type,desc,price,image)

    console.log(s1)

    let data=JSON.parse(localStorage.getItem("products")) || []

    data.push(s1)

    localStorage.setItem("products" ,JSON.stringify(data));

    console.log(s1)
}

