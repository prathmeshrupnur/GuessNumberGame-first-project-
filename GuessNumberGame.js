'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "🎉🎊 Correct Number!";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent= 10;
document.querySelector('.guess').value = 55;
console.log(document.querySelector('.guess').value);*/
//-------------------- event listner-----------------
let a = Math.trunc(Math.random() * 20) + 1;


let score = 20;
score = Number.parseInt(score);

let highscore = 0;

document.querySelector('.score').textContent = score;
console.log(typeof(score));
console.log(a);
document.querySelector('.check').addEventListener('click',function()
{
    //console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);
    if(!guess)
    {
        document.querySelector('.message').textContent = "⛔ No Number";
    }
    else if(a === guess)
    {
        document.body.style.background="#60b347";
        document.querySelector('.message').textContent = "🎊 Correct Number ";

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }

    else if(a!=guess)
    {
        if(score > 1)
        {
            --score;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = guess > a ? "📈 Too high" : "📉 Too low";

        }
        else
        {
            document.querySelector('.message').textContent="💥 you lost the Game!";
            document.querySelector('.score').textContent=0;
        }
    }
    
   /* else if(guess > a)
    {
        if(score > 1)
        {
        --score;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "📈 Too high";
        }
        else
        {
            document.querySelector('.message').textContent="💥 you lost the Game!";
            document.querySelector('.score').textContent=0;
        }
    }
    else if(guess < a)
    {
        if(score > 1)
        {
        --score;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "📉 Too low";
        }
        else
        {
            document.querySelector('.message').textContent="💥 you lost the Game!";
            document.querySelector('.score').textContent=0;
        }
    }*/
});


document.querySelector('.again').addEventListener('click',function()
{
   score = 20;
   a =(Math.trunc( Math.random() * 20)) + 1;

   document.querySelector('.message').textContent = "Start guessing...";

   document.querySelector('.score').textContent = score;
   document.querySelector('.guess').value = '';

   document.body.style.background="rgb(41, 7, 43)";
});