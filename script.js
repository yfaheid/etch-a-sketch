const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    let height = 500 / 16;
    let width = 500 / 16;
    square.style.height = `${height}px`;
    square.style.width = `${width}px`;
    grid.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('hover');
    })
})


function newGrid() {
    let number = prompt('How many squares per side?');
    if (number > 100) {
        alert('too big!');
    }
    else {
        grid.innerHTML = '';
        for (let i = 0; i < number * number; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            let height = 500 / number;
            let width = 500 / number;
            square.style.height = `${height}px`;
            square.style.width = `${width}px`;
            grid.appendChild(square);
        }
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        })
    })
}