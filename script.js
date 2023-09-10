//proc initial grid of 16x16
initialGrid();

// initial grid of 16x16
function initialGrid() {
    const grid = document.querySelector('#grid');
    let x = 16;
    for (let i = 0; i < x; i++) {
        const i = document.createElement('div');
        i.classList.add('row');
        i.addEventListener('mouseover', (colorChange()));
        grid.append(i);
        for (let k = 0; k < x; k++) {
            const k = document.createElement('div');
            k.classList.add('column');
            k.addEventListener('mouseover', (colorChange()));
            i.appendChild(k);
        }
    }
}

function colorChange() {
    document.getElementsByClassName('.column').style.color = "black";
}

// button asks for number of squares and procs calculateGrid()
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let x = prompt("Number of Squares?");
    calculateGrid(x);
});

// create custom grid
function calculateGrid(x) {
    // checks if there is anything to delete first
    if (checkIfExists = document.querySelector('.row') !== null ) {
        let numb = document.querySelector('.row').childElementCount;

        for (let i = 0; i < numb; i ++) {
            const row = document.querySelector('.row');
            row.remove();
        }
    }
    // x limits to (0-100)
    if (x > 100) {
        x = 100;
    }
    if (x < 0) {
        x = 0;
    }

    // creates create based of user input with (x)
    const grid = document.querySelector('#grid');
    for (let i = 0; i < x; i++) {
        const i = document.createElement('div');
        i.classList.add('row');
        i.addEventListener('mouseover', (colorChange()));
        grid.append(i);
        for (let k = 0; k < x; k++) {
            const k = document.createElement('div');
            k.addEventListener('mouseover', (colorChange()));
            k.classList.add('column');
            i.appendChild(k);
        }
    }
}
