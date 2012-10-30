function Menu() {

}

Menu.prototype.launchGame = function () {
	game = new Game();
	currentObject = game;
}

Menu.prototype.options = function () {
	options = new Options();
	currentObject = options;

}

Menu.prototype.scores = function () {
	scores = new Scores();
	currentObject = scores;

}

Menu.prototype.exitGame = function () {
	game = undefined;
	currentObject = menu;
}

Menu.prototype.update = function (modifier) {
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
		
		keysDown[37] = false;
	}
	if (keysDown[39]) { // Player holding right
		
		keysDown[39] = false;
	}
	
	if (keysDown[32]) { // Player holding enter
		keysDown[32] = false;
	}
	
	if (keysDown[13]) { // Player holding space
		if(selectValue === 1){
			this.launchGame();
			console.log('jeux lancé');
		}
		
		if(selectValue === 2){
			this.scores();
		}
		
		if(selectValue === 3){
			this.options();
		}
		keysDown[13] = false;
	}
	
	this.render();
}

Menu.prototype.render = function () {
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
}