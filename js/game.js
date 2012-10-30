function Game() {
	this.x = screenWidth / 2;
	this.y = screenHeight / 2;
}

var action = {"haut":false,"bas":false,"gauche":false,"droite":false};

Game.prototype.event = function () {
	if (keysDown[38]) { // Player holding up
		action.haut = true;
		if (keysDown[39] && !action.droite ||
				keysDown[37] && !action.gauche) {
			keysDown[38] = false;
			action.haut = false;
		}
		if (keysDown[40]) {
			keysDown[38] = false;
			keysDown[40] = false;
			action.haut = false;
			action.bas = false;
		}
	} else {
		action.haut = false;
		if (keysDown[38] === undefined && 
				keysDown[40] === false && 
				!keysDown[37] && !keysDown[39]) {
			keysDown[40] = true;
			action.bas = true;
		}
	}
	
	if (keysDown[40]) { // Player holding down
		action.bas = true;
		if (keysDown[39] && !action.droite ||
				keysDown[37] && !action.gauche) {
			keysDown[40] = false;
			action.bas = false;
		}
	} else {
		action.bas = false;
		if (keysDown[40] === undefined && 
				keysDown[38] === false && 
				!keysDown[37] && !keysDown[39]) {
			keysDown[38] = true;
			action.haut = true;
		}
	}
	
	if (keysDown[37]) { // Player holding left
		action.gauche = true;
		if (keysDown[38] && action.haut ||
				keysDown[40] && action.bas) {
			keysDown[37] = false;
			action.gauche = false;
		}
		if (keysDown[39]) {
			keysDown[37] = false;
			keysDown[39] = false;
			action.gauche = false;
			action.droite = false;
		}
	} else {
		action.gauche = false;
		if (keysDown[37] === undefined && 
				keysDown[39] === false && 
				!keysDown[38] && !keysDown[40]) {
			keysDown[39] = true;
			action.droite = true;
		}
	}
	
	if (keysDown[39]) { // Player holding right
		action.droite = true;
		if (keysDown[38] && action.haut ||
				keysDown[40] && action.bas) {
			keysDown[39] = false;
			action.droite = false;
		}
	} else {
		action.droite = false;
		if (keysDown[39] === undefined && 
				keysDown[37] === false && 
				!keysDown[38] && !keysDown[40]) {
			keysDown[37] = true;
			action.gauche = true;
		}
	}

	if (keysDown[27]) {
		menu.exitGame();
		keysDown[27] = false;
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