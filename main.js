const grid = document.querySelector('.grid');
const change_btn = document.querySelector('#change-btn');
const header = document.querySelector('.header');
const clear_btn = document.querySelector('#clear');

let currentSize = 16;

function clearCanvas() {
    grid.innerHTML = '';
    setupGrid(currentSize);
}

function createCanvas() {
    let changeSize = prompt('Enter canvas size:');
    if (changeSize > 64) {
        changeSize = 64;
        const warning = document.createElement('p');
        warning.textContent = 'Canvas can only max 64px!';
        header.appendChild(warning);
    }
    currentSize = parseInt(changeSize);
    console.log(currentSize);
    grid.innerHTML = '';
    setupGrid(currentSize);
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRow = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        const cells = document.createElement('div')
        cells.classList.add('grid-items')
        grid.appendChild(cells)
        cells.addEventListener('mousedown', (cell) => {
            cell.target.style.backgroundColor = '#333333';
        })
    }
}

change_btn.addEventListener('click', (createCanvas));

clear_btn.addEventListener('click', (clearCanvas));

window.onload = () => {
    createCanvas();
}