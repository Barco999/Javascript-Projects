var hamburger = document.querySelector('.sidebar-toggle');

var sidebar = document.querySelector('.sidebar');
var close = document.querySelector('.close-btn');
window.addEventListener('DOMContentLoaded',() => {
    sidebar.classList.remove('show-sidebar')
});
hamburger.addEventListener("click",() => {
    sidebar.classList.toggle('show-sidebar')
})
close.addEventListener("click",() => {
    sidebar.classList.remove('show-sidebar')
})
