const grid = document.querySelector('.grid');
const change_btn = document.querySelector('#change-btn');
const header = document.querySelector('.header');
const clear_btn = document.querySelector('#clear');
const textSize = document.querySelector('.textSize')

let currentSize = 16;

function setSize() {
    let value = prompt('Enter canvas size:');
    if (value > 64) {
        value = 64;
    } else if (value === null) {
        value = currentSize;
    }

    let size = parseInt(value);

    return size;
}

function createCanvas() {
    currentSize = setSize();
    textSize.textContent = `Current size: ${currentSize}`;
    console.log(currentSize);
    
    grid.innerHTML = '';
    setupGrid(currentSize);
}

function clearCanvas() {
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
