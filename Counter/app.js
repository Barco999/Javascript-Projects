

let val = document.getElementById('value');
//let value= val.innerText();
let dec = document.getElementById('dec');
let res = document.getElementById('res');
let inc = document.getElementById('inc');

console.log(val, dec, res, inc);
dec.addEventListener("click",function(){
   val.textContent = parseInt(val.textContent) -1
});
inc.addEventListener("click",function(){
    val.textContent = parseInt(val.textContent) + 1
 });
res.addEventListener("click",function(){
    val.textContent = 0
 });

