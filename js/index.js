var isclicked = false;
function clickHandler() {
    isclicked = true;
    location.href = '/pages/shayuri.html';
}
var heart = document.getElementById('heart'); 
heart.addEventListener('click', clickHandler); 