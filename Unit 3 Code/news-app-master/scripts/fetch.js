// let api = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz";


let search_result =async (query)=>{
    

    let res = await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`);

    let data = await res.json();

    let news = data.articles;

    console.log(data.articles);
    return news;
}

let append = (data,container)=>{
    document.getElementById("results").innerHTML=null;
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



export {search_result,append}