// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


import {search_Tesla,appendSearch} from"./searchFetch.js";


// localStorage.setItem("news",JSON.stringify(newsArr));

let newsData = JSON.parse(localStorage.getItem("news"));


console.log(newsData);


    let container = document.getElementById("detailed_news");

    newsData.map(({title,urlToImage,description,content})=>{

        let div = document.createElement("div");
        div.className="news";


        let img = document.createElement("img");
        img.src= urlToImage;

        let newsTitle = document.createElement("h3");
        newsTitle.innerText = title;

        
        let newsDescription = document.createElement("p");
        newsDescription.innerText = description;

        let newContent = document.createElement("p");
        newContent.innerText = content;

        div.append(img,newsTitle,newsDescription,content);

        container.append(div);


    })

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