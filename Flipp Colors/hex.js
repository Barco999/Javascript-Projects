const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const select = document.getElementById('btn');
const color = document.querySelector('.color');

select.addEventListener("click",function ()
{
    let hexcolor= "#";
    for(let i=0;i<6;i++)
    {
        let randomn = Math.floor((Math.random()) * hex.length);
        
       
        hexcolor += hex[randomn];
        console.log(hexcolor);
    } 
    //const c = ${hex[randomnumber1]}${hex[randomnumber2]}${hex[randomnumber3]}${hex[randomnumber4]}; 
    console.log(hexcolor);
   document.body.style.backgroundColor = hexcolor; 
   color.textContent = hexcolor;
});
