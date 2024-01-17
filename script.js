const containerEl = document.getElementById('container');

function createGrid(input) {
    let flexBasis = 1/input * 100;
    for(i=0; i<(input ** 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('divSquare');
        containerEl.appendChild(cell);
        cell.style.flex = '0 0 ' + flexBasis +'%';
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = 'black';
        });
    }
}

createGrid(16);