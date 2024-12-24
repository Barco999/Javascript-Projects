const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const select = document.getElementById('btn');
const color = document.querySelector('.color');

select.addEventListener("click",function ()
{
    const randomnumber=Math.floor((Math.random()) * colors.length);   
   document.body.style.backgroundColor = colors[randomnumber]; 
   color.textContent = colors[randomnumber];
});


