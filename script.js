

/*let input =document.querySelector("#input");
let Addbtn =document.querySelector("#Add");
let inputFinal =document.querySelector("#inputFinal");

Addbtn.addEventListener("click", (e)=>{
      e.preventDefault();
    let task=input.value;
  

    if(task===""){
        alert("Please Enter The Task");
         return;
    }
     

let li=document.createElement("li");

li.innerHTML=`${task} <button class="delbtn">Delete</button>`;

inputFinal.appendChild(li);

input.value="";

let db = li.querySelector(".delbtn");
db.addEventListener("click" ,()=>{
    li.remove();
});
});*/

let taskinput =document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList =document.getElementById("taskList");

  addBtn.addEventListener("click" ,()=>{
      let Task= taskinput.value;
if(Task===""){
    alert("Please Enter Task First");
    return;
}
let li = document.createElement("li");
 li.innerHTML=`${Task} <button class=DeleteBtn>Delete</button>`;

 taskList.appendChild(li);
 taskinput.value="";

let DB=li.querySelector(".DeleteBtn");
DB.addEventListener("click", () =>{
    li.remove();
});
});


