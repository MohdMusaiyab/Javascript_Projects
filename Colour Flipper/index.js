let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn=document.querySelector(".btn");
let clr=document.querySelector(".colors");
btn.addEventListener("click",changecolor)
function changecolor()
{
   function gen()
   {
    let x=Math.floor(Math.random()*arr.length);
    return x;
   }
   let hex="#";
   for(let i=0;i<6;i++)
   {
    hex+=arr[gen()];
   }
   clr.textContent=hex;
   document.body.style.backgroundColor=hex;
}
