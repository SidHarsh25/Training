
function start()
{
document.getElementById("mole").style.visibility = "hidden";
document.getElementById('mud').style.visibility="hidden";
document.getElementById("start").style.visibility="hidden";
var allMoles = document.querySelectorAll(".mole");
var allMuds = document.querySelectorAll('.dirt');
var allPoints = document.querySelectorAll('.points');
var score = 0;


Array.from(allMuds).forEach(i=>i.style.visibility="visible");
Array.from(allMoles).forEach(i=>{
    i.style.visibility="visible";
    i.addEventListener('click', ()=>{
        document.getElementById("currentPoint").innerHTML = parsInt(score) + 1;
        console.log(score," click "+i);
        })
});

Array.from(allPoints).forEach(i=>i.style.visibility="visible");

setInterval(() => {
var random = Math.floor(Math.random()*allMoles.length) +1
allMoles[random-1].style.visibility = "visible";
setTimeout(() => {
    Array.from(allMoles).forEach(i=>i.style.visibility="hidden");
    }, 1000);
    }, 2000);
}

