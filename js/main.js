var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var cursorSelected = ">";
var cursorUnselected = "";

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
//canvas.fillStyle="black";
//canvas.fillRect(0,0,200,100);
document.body.appendChild(canvas);


// Update game objects
var update = function (modifier) {
	if (keysDown[38]) { // Player holding up
		
		if(selectValue >1) {
			selectValue--;
		}
		keysDown[38] = false;
	}
	if (keysDown[40]) { // Player holding down
		
		if(selectValue < 3){
			selectValue++;
		}
		keysDown[40] = false;
	}
	if (keysDown[37]) { // Player holding left
		//console.log('left');
		keysDown[37] = false;
	}
	if (keysDown[39]) { // Player holding right
		
		keysDown[39] = false;
	}
	
	if (keysDown[32]) { // Player holding right
		console.log('go');
		keysDown[32] = false;
	}

	
};


var render = function () {

	//Création du menu
	ctx.fillStyle="black";
	ctx.fillRect(0,0,screenWidth,screenHeight);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "128px SquareFont";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.fillText("Bombermaaan", eval(screenWidth/2) ,100);
	
	ctx.font = "30px Test";
	ctx.textAlign = "center";
	ctx.textBaseline = "center";
	
	switch(selectValue) {
		case 1: ctx.drawImage(bomberman, 0, 0, 32, 32, screenWidth/3 , 300, 32, 32)
				ctx.fillText(" New Game ", screenWidth/2,300);
				ctx.fillText(" Scores ", screenWidth/2,335);
				ctx.fillText(" Options ", screenWidth/2,370);
				break;
		case 2: ctx.drawImage(bomberman, 0, 0, 32, 32, screenWidth/3 , 335, 32, 32)
				ctx.fillText(" New Game ", screenWidth/2,300);
				ctx.fillText(" Scores ", screenWidth/2,335);
				ctx.fillText(" Options ", screenWidth/2,370);
				break;
		case 3: ctx.drawImage(bomberman, 0, 0, 32, 32, screenWidth/3 , 370, 32, 32)
				ctx.fillText(" New Game ", screenWidth/2,300);
				ctx.fillText(" Scores ", screenWidth/2,335);
				ctx.fillText(" Options ", screenWidth/2,370);
				break;	
			
				
	}

};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};


var then = Date.now();
setInterval(main, 1); // Execute as fast as possible