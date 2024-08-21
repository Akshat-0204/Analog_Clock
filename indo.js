let hourHand = document.querySelector('.hour-hand');
let sechand = document.querySelector('.second-hand');
let minHand = document.querySelector('.minute-hand')

function clock(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();

    hrs = (((hrs*60)/12)*6) + 90;
    hourHand.style.transform = `rotate(${hrs}deg)`;


    mins = (mins*6) + 90;
    minHand.style.transform = `rotate(${mins}deg)`;

    let sec = time.getSeconds();
    sec = (sec*6)+ 90;
    sechand.style.transform = `rotate(${sec}deg)`;
}

setInterval(clock, 1000);
clock();