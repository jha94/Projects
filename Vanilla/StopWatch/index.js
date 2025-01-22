let second = 0;
let minute = 0;
const secondDiv = document.getElementById('second');
const minuteDiv = document.getElementById('minute');
const pausebtn = document.getElementById('pause');
const playBtn = document.getElementById('play');
const resetBtn = document.getElementById('reset');

function timer(){
  return  setInterval(()=>{
        second+=1;
        secondDiv.innerHTML = second;
        if(second===10){
            secondDiv.innerHTML=0;
            second=0;
            minute+=1;
            minuteDiv.innerHTML = minute;
        }
    }, 1000);
}

let sec;

pausebtn.addEventListener('click', ()=>{
    clearInterval(sec)
})

playBtn.addEventListener('click', ()=>{
    sec = timer()
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(sec);
    minute=0;
    second=0
    secondDiv.innerHTML = 0;
    minuteDiv.innerHTML = 0;
})


