async function getData(url)
{
    try{
        let response = await fetch(url);  
        let data = await response.json();

        return data;
       
    }
    catch(err){
        console.log("Error :", err);
    }
}

function showData(data,location)
{
    data.map(({strCAtegoryThumb, strCategory,strCategoryThumb})  =>
    {
        let main=document.createElement("div");

        let imge=document.createElement("img")
        
        let headLine = document.createElement("h1");

        imge.setAttribute('src',strCategoryThumb)

        headLine.innerText = strCategory;

        main.append(headLine,imge)

        location.append(main);
    });
}
export  {getData,showData};
