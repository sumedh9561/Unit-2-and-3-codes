// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

// document.getElementById("sidebar").innerHTML=country();

import {search_result,append} from "./fetch.js";


import {search_Tesla,appendSearch} from"./searchFetch.js";



search_result("in").then((data)=>{
    console.log(data);
    let main_page = document.getElementById("results");
    append(data,main_page);
})


let sidebar = document.getElementById("sidebar").children;
console.log(sidebar);

function searchByCountry(){
    console.log(this.id);

    search_result(this.id).then((data)=>{
        console.log(data);

        let container = document.getElementById("results");

        append(data,container);
    })
}

for(var x of sidebar){
    console.log(x);
    x.addEventListener("click",searchByCountry);
}


let arr = []
let search=(e)=>{
    if(e.key=="Enter"){

       
        window.location.href="search.html";


        let query = document.getElementById("search_input").value;

        arr.push(query)
        localStorage.setItem("news",JSON.stringify(arr));
       
    }
}

document.getElementById("search_input").addEventListener("keydown",search);


