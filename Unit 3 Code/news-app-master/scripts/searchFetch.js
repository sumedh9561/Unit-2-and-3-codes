let search_Tesla =async (query)=>{
    

    let res = await fetch (`https://masai-mock-api.herokuapp.com/news?q=${query}`);

    let data = await res.json();  
    let news = data.articles;
    return news;
   
}

let appendSearch = (data,container)=>{
    // document.getElementById("results").innerHTML=null;
    container.innerHTML=null;
    data.map(({title,urlToImage,description,content})=>{
        let div = document.createElement("div");
        div.className = "news";

        div.addEventListener("click",()=>{
            let obj = {
                title,
                urlToImage,
                description,
                content,
            }

            appendToNews(obj);
        })


        let img = document.createElement("img");
        img.src= urlToImage;

        let newsTitle = document.createElement("h3");
        newsTitle.innerText = title;

        
        let newsDescription = document.createElement("p");
        newsDescription.innerText = description;

        div.append(img,newsTitle,newsDescription);

        container.append(div);
    })
}

let newsArr = []
let appendToNews=(obj)=>{
    newsArr.push(obj);

    localStorage.setItem("news",JSON.stringify(newsArr));
    window.location.href="news.html";
}


export {search_Tesla,appendSearch};