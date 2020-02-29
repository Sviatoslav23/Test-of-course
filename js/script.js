let content = document.querySelector('#content');
let content2 = document.querySelector('#content2');
let rows = document.querySelector('#rows');
let squares = document.querySelector('#squares');
let block = document.querySelector('.block');
let block2 = document.querySelector('.block2');
let block_last = document.querySelector('.block_last');
let block4 = document.querySelector('.block4');
let block5 = document.querySelector('.block5');
let block_last2 = document.querySelector('.block_last2');

function changeToRows() {
    content.style.display = "block";
    content2.style.display = "block";
    block_last.style.marginRight = '50px';
    block_last2.style.marginRight = '50px';
    block.style.display = 'flex';
    block2.style.display = 'flex'; block_last.style.display = 'flex';
    block4.style.display = 'flex';
    block5.style.display = 'flex';
    block_last2.style.display = 'flex';
}
function changeToSquares() {
    content.style.display = "flex";
    content2.style.display = "flex";
    block.style.display = "block";
    block2.style.display = 'block';
    block_last.style.display = 'block';
    block4.style.display = 'block';
    block5.style.display = 'block';
    block_last2.style.display = 'block';
}