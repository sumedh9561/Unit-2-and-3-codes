function orderFood(){

    let box = document.createElement('div');
    box.setAttribute('id','box')

    let img = document.createElement('img');
    img.setAttribute('id','ordered-image')

    let p=document.createElement('p');
    p.setAttribute('id','order_p')


    let order_no = Math.floor(Math.random()*101);

    let order = document.getElementById("items").value;

    let s = check();

    let mypromise = new Promise(function(resolve,reject){
        let time=Math.random() *1000;

        setTimeout(function(){
            if(s===true){
                resolve(order_no);
            }
            else{
                reject();
            }
        }, time);
    });

    mypromise.then(function(res){

        if(order=='vada pao')
        {
            img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVRgLN5Izf4200cikd21HcT3q-DrZk3kftg&usqp=CAU'
            p.innerText= 'vada pao is ready'
            // console.log('your order ${res} is ready')
        }
        if(order=='paneer tikka')
       {
           img.src="https://www.cookwithmanali.com/wp-content/uploads/2021/06/Hariyali-Paneer-Tikka.jpg"
           p.innerText='Paneer tikka is ready'
       }
       if(order=='shawarma')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivnAQI4snqgYFljnOUDcpJO3fcsWCSeO78w&usqp=CAU"
           p.innerText='shawarma tikka is ready'
       }
       if(order=='veg thupka')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wR4WwrMRWxEMv1hhjaRHP9-otiIL1D1rbA&usqp=CAU"
           p.innerText='veg thupka tikka is ready'
       }
       if(order=='spring roll')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_7tiE3sLzMbIm7E2qtvFr5musCkfBY0boQ&usqp=CAU"
           p.innerText='spring roll is ready'
       }
       if(order=='litti chokha')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwbOJHhJ15KHU9qkDi5lXGoAI2lUm98iYZw&usqp=CAU"
           p.innerText='litti chokha is ready'
       }
       if(order=='fried momos')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUEb6NvdazHPkqiaabMIZfMm-lKWw8sPXeg&usqp=CAU"
           p.innerText='fried momos is ready'
       }
       if(order=='hakka noodles')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqoh-gWvwncx-Z4x57pCMnNjiW514I2atUQ&usqp=CAU"
           p.innerText='hakka noodles is ready'
       }
       if(order=='chicken kosha')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDa-llEc-f8sP6cqjzW2VLiizB_gbNLW2DcQ&usqp=CAU"
           p.innerText='chicken kosha is ready'
       }
       if(order=='veg kabaab')
       {
           img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa4knGR3-9m5uNHlmmE1RnAu_mkYAyUBK9Q&usqp=CAU"
           p.innerText='veg kabaab is ready'
       }


    });


    box.append(img,p);
    document.getElementById('output').append(box);

    

}
function check(){
    return true;
}

