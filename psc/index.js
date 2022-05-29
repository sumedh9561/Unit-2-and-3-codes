let id;

async function getData(){

    let query= document.getElementById("query").value;
    
    let url = `https://swapi.dev/api/people/?search=${query}`

    let res = await fetch(url);

    let data = await res.json();

    console.log(data);

    return data.results;
}

function append (data){
    let container = document.getElementById("results");
    container.innerHTML=null;

    data.forEach(function(el){
        let p=document.createElement("p");
        p.innerText=el.name;

        container.append(p)
    });
}
async function main(){
    let data = await getData();

    append(data);
}
function debouncing(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
}