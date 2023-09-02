const container = document.querySelector('.container');

function makeGrid(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const cells = document.createElement('div');
        container.appendChild(cells).className = 'grid-item';
    };
};

makeGrid(64, 64);

