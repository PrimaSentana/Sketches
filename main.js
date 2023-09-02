const container = document.querySelector('.container');

function makeGrid(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const cells = document.createElement('div');
        container.appendChild(cells).className = 'grid-item'; 
        cells.addEventListener('click', (cell) => {
            cell.target.style.backgroundColor = '#354f52';
        });
    };
};

makeGrid(64, 64);

