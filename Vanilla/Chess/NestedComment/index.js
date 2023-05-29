let commentContainer = document.getElementById('comment-container');

function createInputBox(){
    let div = document.createElement('div');
    div.setAttribute('class', "comment-details");
    div.innerHTML+=`<input type="text" placeholder="add text here" class="input">
    <button class="btn submit">Submit</button>`
    return div;
}

function addReply(text){
    let div = document.createElement('div');
    div.setAttribute('class', 'all-comment');
    div.innerHTML+=`<div class="card">
                    <span class="text">${text}</span>
                    <span id="reply" class="reply" >Add Reply</span>
                </div>`;
    return div;
}

commentContainer.addEventListener('click', (e)=>{
    let replyClicked = e.target.classList.contains('reply');
    let submitClicked = e.target.classList.contains('submit');
    let closestCard = e.target.closest('.all-comment');

    if(replyClicked){
        // add input box
        closestCard.appendChild(createInputBox())
    }
    if(submitClicked){
        // add reply card
        const commentDetails = e.target.closest('.comment-details');
        const val = commentDetails.children[0].value;
        if(val){
            closestCard.appendChild(addReply(val))
            commentDetails.remove();
        }

    }

})