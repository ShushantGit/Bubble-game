var score=0;
let time=60;
let hitrn=0;
var lm;
lm=document.querySelector("#lowerMain");


function makeBubble()
{
    let clutter="",i;
    
    
    for(i=1;i<=147;i++)
    {
        var formula=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble"><h3>${formula}</h3></div>`;
        console.log(i)
    }
    
    lm.innerHTML=clutter;
}

function runTimer() {
    let timerInterval=setInterval(() => {
        if(time>0)
        {
            time--;
            document.querySelector('#timerValue').textContent=time;  
        }
        else
        {
            clearInterval(timerInterval);
            lm.innerHTML="";
            lm.innerHTML=`<h1 id="try">TRY AGAIN</h1>`;
        }
    }, 1000);
}

function makehit()
{
    hitrn=Math.floor(Math.random()*10);
    hitvalue=document.querySelector("#hitvalue");
    hitvalue.innerHTML=hitrn;
}

function inScore()
{    
    score=score+10;
    sv.innerHTML=score;
    makeBubble();
    makehit();
}

function deScore()
{
    score=score-5;
    sv.innerHTML=score;

}

makehit();
makeBubble();
runTimer();

let sv=document.querySelector("#scoreValue");

    lm.addEventListener("click",(elem)=>{
        var details=Number(elem.target.textContent);
        if(hitrn==details)
        {
            console.log(details);
            inScore();
        }
        else
        {
            console.log(details);
            deScore();
        }
    })
