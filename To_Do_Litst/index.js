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
    container.appendChild(li);
 }
 val.value="";
})