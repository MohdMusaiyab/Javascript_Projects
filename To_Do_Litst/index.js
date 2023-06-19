let submit_btn=document.querySelector(".submit-btn");
let container=document.querySelector(".list-container ul");
let val=document.getElementById("input-value");
submit_btn.addEventListener("click",function()
{
 if(val.value=="")
 {
    alert("Please write Something")
 }    
 else{
    let li=document.createElement("li");
    li.innerHTML=val.value;
    let edit=document.createElement("button");
    let clear=document.createElement("button");
    clear.innerHTML="Clear"
    //Yha se bnaya hai
    edit.innerHTML="Edit"
    container.appendChild(li);
    li.appendChild(edit);
    li.appendChild(clear);
 }
 val.value=""; 
 let clear=document.querySelector(".clear-btn");
if(container.children.length>=1)
{
   clear.classList.add("show");
}
})
let clearall=document.querySelector(".clear-btn");
clearall.addEventListener("click",function()
{ 
   while(container.firstChild)
   {
      container.removeChild(container.firstChild);
   }
   clearall.style.display='none';
   val="";
})
