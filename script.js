// Select color input
let color = document.querySelector('#colorPicker');
// Select size input
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
let canvas= document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', makeGrid);

function makeGrid(evt) {
    evt.preventDefault();
    canvas.innerText="";
    for (let i=0; i<height.value;i++) {
        let row = document.createElement('tr');
        canvas.append(row)
        for (let j=0;j<width.value;j++) {
            let column = document.createElement('td');
            row.append(column);
        }

    }
}
//add color to the pixel grid
function colorizer(e) {
    e.target.style.backgroundColor=color.value;
    }

canvas.addEventListener('mousedown', colorizer);


