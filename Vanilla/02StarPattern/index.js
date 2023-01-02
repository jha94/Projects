let container = document.getElementById('star-container');

// querySelectorAll returns array of matching selectors
let star = document.querySelectorAll('.star');
let filled = 0;
container.addEventListener('click', (e)=>{
    let currClicked = e.target.dataset.index;
    for(let i=0;i<filled;i++){
        // to edit the css class name we can use classList
        star[i].classList.remove('star-filled')
    }
    for(let i=0;i<currClicked;i++){
        star[i].classList.add('star-filled')
    }
    document.getElementById('counter').innerText = `Rating Count : ${currClicked}`
    filled = currClicked
})