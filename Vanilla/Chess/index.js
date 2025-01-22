const board = document.getElementById('board');
const evenBox = '<div id="evenBox"></div>';
const oddBox = '<div id="oddBox"></div>';

for(let index=0;index<4;index++){
    board.innerHTML+=evenBox.repeat(8);
    board.innerHTML+=oddBox.repeat(8)
}