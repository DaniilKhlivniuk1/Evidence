var time = 30;
var timer = document.querySelector (".timer")
setInterval (function () {
time--
if (time < 0) {
    time = 0;
}
timer.textContent = time;
}, 1000)
    
