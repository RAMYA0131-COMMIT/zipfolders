let url='https://www.superheroapi.com/api.php/6fff236defeac5fff485e315d811247f'
 const display=async()=>{         
 let id=Math.ceil(Math.random()*730)
let res=await fetch(`${url}/${id}`)
let data=await res.json()
 document.getElementById('section').innerHTML=`<img src=${data.image.url} height=200 width=200><h2>name :$
 {data.name}</h2><h3> occupation :${data.work.occupation}</h3><h4> Id :${data.id}</h4><h4>Age:${data.age}</h4>`
 }