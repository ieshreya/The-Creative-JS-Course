// Global Selections and Variables
const colroDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHex = document.querySelectorAll('.color h2');
let initiaColors;

// Functions

function generateHex() {
	const hexColor = chroma.random();
	return hexColor;
}
 
 


// start from vid 4, 06:20		- generate first color


function randomColors() {
	colroDivs.forEach((div, index) => {
		const hexText = div.children[0];
		const randomColor = generateHex();

		div.style.backgroundColor = randomColor;
		hexText.innerText = randomColor;
		// contrast check
		checkTextContrast(randomColor, hexText)

	});
}

function checkTextContrast(color, text) {
	const luminance = chroma(color).luminance();
	if (luminance > 0.5) {
		text.style.color = "black";
	} else {
		text.style.color = "white";
	}
}



randomColors();


// start from video 6