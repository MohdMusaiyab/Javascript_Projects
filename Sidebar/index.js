let btn=document.querySelector(".fas");
btn.addEventListener("click",sidebar);
let side=document.querySelector(".sidebar");
function sidebar()
{   
    side.classList.toggle("show-sidebar");
}
let closebtn=document.querySelector(".close-btn");
closebtn.addEventListener("click",remove);
function remove()
{
    side.classList.toggle("show-sidebar");
}