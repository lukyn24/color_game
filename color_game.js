var colors = generateRandomColors(6);

var numSquares = 6;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "none";
		squares[i].style.display = "block";
	}
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
	var clickedColor = this.style.backgroundColor;
	if (clickedColor == pickedColor) {
		messageDisplay.textContent = "Correct!";
		reset.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!";
	}
	});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb;
}