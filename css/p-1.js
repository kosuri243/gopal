
let btnl=document.querySelector('#btnl');
btnl.addEventListener('click',function(){
    fetchdata();
})
let fetchdata=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        if(response.status!==200){
            console.log(`Somthing went wrong:${response.status}`);
            return;
        }
        let filecontent=response.data;
        let list='';
        for(let i=0;i<filecontent.length;i++){
            list+=`<ul>
            <li> Id:${filecontent[i].id}</li>
            <li>Name:${filecontent[i].name}</li>
            <li>UserName:${filecontent[i].username}</li>
            <li>Email id:${filecontent[i].email}</li>
            </ul>`;
            document.querySelector('#displayl').innerHTML=list;
        }
    }).Catch((err)=>{
        console.error(err);
    });
};
let btnta=document.querySelector('#btnta');
btnta.addEventListener('click',function(){
    fetchdatat();
})
let fetchdatat=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        if(response.status!==200){
            console.log(`Somthing went wrong:${response.status}`);
            return;
        }
        let filecontentt=response.data;
        let listta='';
        for(let i=0;i<filecontentt.length;i++){
            listta+=`<tr>
            <td>${filecontentt[i].id}</td>
            <td>${filecontentt[i].name}</td>
            <td>${filecontentt[i].username}</td>
            <td>${filecontentt[i].email}</td>
            </tr>`;
            document.querySelector('#table').innerHTML=listta;
        }
    }).catch((err)=>{
        console.log(err);
    });
};
let btntc=document.querySelector('#btnc');
btntc.addEventListener('click',function(){
    fetchdatac();
})
let fetchdatac=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        if(response.status!==200){
            console.log(`Somthing went wrong:${response.status}`);
            return;
        }
        let filecontentc=response.data;
        let listc='';
        for(let i=0;i<filecontentc.length;i++){
            listc+=`<div id="ccard">
            <h2> Id: ${filecontentc[i].id}</h2>
            <h2>Name: ${filecontentc[i].name}</h2>
            <h2>UserName: ${filecontentc[i].username}</h2>
            <h2>EmailId: ${filecontentc[i].email}</h2>
            </div>`;
            document.querySelector('#cccard').innerHTML=listc;
        }
    }).catch((err)=>{
        console.error(err);
    });
};
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

