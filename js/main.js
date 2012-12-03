var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var selectValue = 1;

var bomberman = new Image();
bomberman.src = "resources/images/bomberman.png";

// Handle keyboard controls
var keysDown = {};

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

addEventListener("keydown", function (e) {
	if (keysDown[e.keyCode] !== false) {
		keysDown[e.keyCode] = true;
	}
}, false);

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = screenWidth;
canvas.height = screenHeight;

document.body.appendChild(canvas);

var menu = new Menu();
var game;
var options;
var scores;

var currentObject = menu;

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	currentObject.update(delta / 1000);

	then = now;
};


var then = Date.now();
setInterval(main, 1); // Execute as fast as possible