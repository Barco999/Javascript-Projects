
var btn = document.querySelector('.modal-btn');
var overlay = document.querySelector('.modal-overlay');

btn.addEventListener("click", () => { overlay.classList.add("open-modal")});

var close = document.querySelector('.close-btn');
close.addEventListener("click", () => { overlay.classList.toggle("open-modal")})