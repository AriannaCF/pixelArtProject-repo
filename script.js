// Select color input
let color = document.querySelector('#colorPicker');
// Select size input
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
//Select pixel canvas
let canvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', makeGrid);

function makeGrid(evt) {
	evt.preventDefault();
	//first loop increases grid height by adding rows to the canvas
	canvas.innerText = "";
	for(let i = 0; i < height.value; i++) {
		let row = document.createElement('tr');
		canvas.append(row);
		//inner loop appends table cells to each row to increase grid width
		for(let j = 0; j < width.value; j++) {
			let column = document.createElement('td');
			row.append(column);
		}
	}
}
//add color to the pixel grid
function colorizer(e) {
	//use event delegation to target the individual table cells once they are appended to the table
	e.target.style.backgroundColor = color.value;
}
//final event listener adds chosen  color to canvas
canvas.addEventListener('mousedown', colorizer);