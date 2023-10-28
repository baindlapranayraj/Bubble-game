// Selectors
let pbtn = document.querySelector("#pbtn");
let timer = document.querySelector(".timer");
let hit = document.querySelector(".hit");
let score = document.querySelector(".scoreVal");
let parentBub = document.querySelector("#pbtn");

// Bubble Creation
function makebubble(){
    var clutter = "";
    // let bubble = document.createElement("div")
    //  bubble.classList.add("bubble")
    //  pbtn.appendChild(bubble);
    //  bubble.innerText = Math.floor(Math.random()*10+1);
    for(let i = 0;i <=151; i++){
    
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    parentBub.innerHTML = clutter;
}

// Run time
var liveTimer = 20;
function runTime(){
   let timerIn = setInterval( function(){
        if(liveTimer>0){
            liveTimer--;
            timer.textContent = liveTimer;
        }
        else{
            clearInterval(timerIn);
            pbtn.innerHTML = `<h1>Game Over Loser</h1>`
        }
    },1000);

}

//Hit number
var randomVal = 0;
function getNewHit(){
    randomVal =Math.floor(Math.random()*10+1);
    hit.innerText = randomVal;
}

//Score 
let scoreLive = 0;
function scoreEval(){
    scoreLive = scoreLive + 10;
    score.innerText = scoreLive;

}

//Event Handle
    parentBub.addEventListener("click",function(det){
        let target = det.target;
        let clickedNum = parseInt(target.textContent)

        if(clickedNum === randomVal){
            scoreEval();
            makebubble();
            getNewHit();
        }

    })



getNewHit();
runTime();
makebubble();