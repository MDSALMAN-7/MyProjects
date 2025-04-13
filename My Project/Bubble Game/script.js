let score = 0;
let timer = 5;
let hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}

function makeBubble(){
    let clutter = "";
    for(i=1; i<=70; i++){
    let randomNumber = Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector(".p-bottom").innerHTML = clutter;
}

function runTimer(){
    let stoptimer=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }else{
            clearInterval(stoptimer);
            document.querySelector(".p-bottom").innerHTML = `<h1>Game over</h1>`;
        }
    },1000)
}


document.querySelector(".p-bottom")
.addEventListener('click',function(dets){
   let clickedNumber = Number( dets.target.textContent);
   if(clickedNumber === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
})


runTimer();
makeBubble();
getNewHit();
