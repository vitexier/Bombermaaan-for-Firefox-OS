function Game() {
	this.x = 0;
	this.y = 0;
}

Game.prototype.update = function (modifier) {
	if (keysDown[38]) { // Player holding up
		this.y += 1;
	}
	if (keysDown[40]) { // Player holding down
		this.y -= 1;
	}
	if (keysDown[37]) { // Player holding left
		this.x -= 1;
	}
	if (keysDown[39]) { // Player holding right
		this.x += 1;
	}

	if (keysDown[27]) {
		menu.exitGame();
		keysDown[27] = false;
	}
	
	this.render();
}

Game.prototype.render = function () {
	ctx.fillStyle="black";
	ctx.fillRect(0,0,screenWidth,screenHeight);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "64px SquareFont";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	
	ctx.fillText("X : " + this.x, (screenWidth/2), 100);
	ctx.fillText("Y : " + this.y, (screenWidth/2), 200);
}