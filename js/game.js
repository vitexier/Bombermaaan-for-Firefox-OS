

function Game() {
	this.x = screenWidth / 2;
	this.y = screenHeight / 2;
	//addEventListener('click', alert('toto'), false);
	//addEventListener('touchend', this.pressup, true);
}

Game.prototype.pressdown = function (e){
	consol.log("Touch event down");
}

Game.prototype.pressdown = function (e){
	consol.log("Touch event up ");
}

var action = {"haut":false,"bas":false,"gauche":false,"droite":false};

Game.prototype.event = function () {
	if (keysDown[keys.up]) { // Player holding up
		action.haut = true;
		if (keysDown[keys.right] && !action.droite ||
				keysDown[keys.left] && !action.gauche) {
			keysDown[keys.up] = false;
			action.haut = false;
		}
		if (keysDown[keys.down]) {
			keysDown[keys.up] = false;
			keysDown[keys.down] = false;
			action.haut = false;
			action.bas = false;
		}
	} else {
		action.haut = false;
		if (keysDown[keys.up] === undefined && 
				keysDown[keys.down] === false && 
				!keysDown[keys.left] && !keysDown[keys.right]) {
			keysDown[keys.down] = true;
			action.bas = true;
		}
	}
	
	if (keysDown[keys.down]) { // Player holding down
		action.bas = true;
		if (keysDown[keys.right] && !action.droite ||
				keysDown[keys.left] && !action.gauche) {
			keysDown[keys.down] = false;
			action.bas = false;
		}
	} else {

		action.bas = false;
		if (keysDown[keys.down] === undefined && 
				keysDown[keys.up] === false && 
				!keysDown[keys.left] && !keysDown[keys.right]) {
			keysDown[keys.up] = true;
			action.haut = true;
		}
	}	
	
	if (keysDown[keys.left]) { // Player holding left
		action.gauche = true;
		if (keysDown[keys.up] && action.haut ||
				keysDown[keys.down] && action.bas) {
			keysDown[keys.left] = false;
			action.gauche = false;
		}
		if (keysDown[keys.right]) {
			keysDown[keys.left] = false;
			keysDown[keys.right] = false;
			action.gauche = false;
			action.droite = false;
		}
	} else {
		action.gauche = false;
		if (keysDown[keys.left] === undefined && 
				keysDown[keys.right] === false && 
				!keysDown[keys.up] && !keysDown[keys.down]) {
			keysDown[keys.right] = true;
			action.droite = true;
		}
	}
	
	if (keysDown[keys.right]) { // Player holding right
		action.droite = true;
		if (keysDown[keys.up] && action.haut ||
				keysDown[keys.down] && action.bas) {
			keysDown[keys.right] = false;
			action.droite = false;
		}
	} else {
		action.droite = false;
		if (keysDown[keys.right] === undefined && 
				keysDown[keys.left] === false && 
				!keysDown[keys.up] && !keysDown[keys.down]) {
			keysDown[keys.left] = true;
			action.gauche = true;
		}
	}

	if (keysDown[keys.escape]) {
		menu.exitGame();
		keysDown[keys.escape] = false;
	}
}

Game.prototype.update = function (length) {
	this.event();
	
	if (action.haut) {
		this.y -= length * 100;
	 } else if (action.droite) {
		this.x += length * 100;
	} else if (action.bas) {
		this.y += length * 100;
	} else if (action.gauche) {
		this.x -= length * 100;
	}
	
	this.render();
}

Game.prototype.render = function () {
	ctx.fillStyle="black";
	ctx.fillRect(0,0,screenWidth,screenHeight);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "16px SquareFont";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	
	ctx.fillText("X : " + this.x, 50, 100);
	ctx.fillText("Y : " + this.y, 50, 120);

	ctx.drawImage(bomberman, 0, 0, 32, 56, this.x, this.y, 32, 56);
	
}