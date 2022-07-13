// let url ="https://www.meme.net/babubhaiya";

// function download(url){
//     setTimeout(function (){
//         console.log(`Downloding ${url}`);
//         process(url);
//     },5000);
    
// }
// function process(url){
//     console.log(`processing ${url}`);
// }
// download(url);


// step -4
// ************************************************************************************


// let url1 ="https://www.meme.net/babubhaiya";
// let url2 ="https://www.meme.net/babubhaiya";
// let url3 ="https://www.meme.net/babubhaiya";


// function download(url, callback){
//     setTimeout(function (){
//         console.log(`Downloding ${url}`);
//         callback(url);
//     },5000);
    
// }
// download(url1,function process(url){
//     console.log(`processing ${url}`);
//     download(url2,function process(url){
//         console.log(`processing ${url}`);
//         download(url3,function process(url){
//             console.log(`processing ${url}`);
//         });
        
//     });
    
// });



//**************************************************************************************************************** */


//3-url1 - url2/p - url3/p

// call back 
// what the hell is this ?
// callback hell :- Interview que 1st
//3-url1 - url2/p - url3/p

//let p = new Promise() // constructor function

// let p = new Promise (function(resolve,reject){
//   resolve("resolve");
// });
// console.log(p)


//********************************************************************************** */



// payment system 
// buffering image ----->sucess image
// pay --> setTimeout--> img.src=success Image


function backServer(){
    //logic
    return true;// false

}
let payment_Promise = new Promise(function(resolve, reject){
    let pin = bankServer();
     
    setTimeout(function (){
    if(pin){
        resolve("payment successfill");
    }else{
        reject("Try again later.");
    }
},3000);
});

// handling the Promise
// .then.catch
//async await

payment_Promise.then(function(res){
    console.log(res);
});

console.log(payment_Promise)