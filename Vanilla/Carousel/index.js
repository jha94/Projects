const next = document.getElementById('next');
const listItems = document.querySelectorAll('.content li');
const previous = document.getElementById('previous');
let current = 0;

next.addEventListener('click', ()=>{
    setCarousel('next')
})

previous.addEventListener('click', ()=>{
    setCarousel('back')
})

function setCarousel(type){
    listItems[current].classList.remove('current');
    current=type==='next'?current+1:current-1;
    listItems[current].classList.add('current')
    current>0?previous.classList.add('previousVisible'):previous.classList.remove('previousVisible');
    current<listItems.length-1?next.classList.remove('next'):next.classList.add('next');
}
