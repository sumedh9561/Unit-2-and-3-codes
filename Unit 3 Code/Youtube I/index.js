let api="AIzaSyAweHTdh7lT3e947u_TOks2nvMhXIOphTs";

//    async function pelethi(){
//          let urll= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${api}`;
//         let ress= await fetch(urll)
//         let dd= await ress.json();
//         append(dd.items)
//     }
//     pelethi();
    let  search= async ()=>{
        var input=document.querySelector(".search-bar").value;
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${api}`
          let res= await fetch(url);
          let data = await res.json();
        //   console.log(data);
        append(data.items)
    }
    let append = async(data) =>{
        let box=document.querySelector("#result");
        data.forEach(({id:{videoId},snippet:{title} })=>{
            // console.log(videoId,title)
            var div=document.createElement("div")
            
            let iframe=document.createElement("iframe");
            iframe.src=`https://www.youtube.com/embed/${videoId}`
            iframe.allow="fullscreen";
            let ti=document.createElement("h3");
            ti.innerText=title;
            ti.style.color="white"
            div.append(iframe,ti)
            let video={
                 title,
                 videoId,
             };
            //  console.log(video)
            // playvideo(video)
            div.onclick= function() {
             playvideo(video);
                 };
              box.append(div);
        })
    }
         let playvideo= (video)=>{
          localStorage.setItem("video",JSON.stringify(video));
          window.location.href="video.html";
         }