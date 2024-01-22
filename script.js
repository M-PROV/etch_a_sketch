const containerEl = document.getElementById('container');

function createGrid(input) {
    for (i = 0; i < input; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.height = 960/input + "px";
        
        for (j = 0; j < input; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            col.addEventListener('mouseover', function() {
                col.style.backgroundColor = 'black';
            });
            row.appendChild(col);
        }
        containerEl.appendChild(row);
    }
}

function makeGrid() {
    let gridSize = document.getElementById('gridSize').value
    if (parseInt(gridSize) <= 64 && parseInt(gridSize) >= 4) {
    containerEl.replaceChildren();
    
    createGrid(gridSize);
} else {
    alert('Enter a value between 4 & 64');
}
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function makeRainbow() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let rgb = document.querySelectorAll('.col');
    for (const color of rgb) {
    color.addEventListener('mouseover', function() {
        color.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    });
}
}