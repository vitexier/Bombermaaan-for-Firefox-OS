function Options() {

}

Options.prototype.update = function (modifier) {
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
		keysDown[13] = false;
	}
	
	if (keysDown[keys.escape]){
		currentObject = menu;
		keysDown[keys.escape] = false;
	}
	
	this.render();
}

Options.prototype.render = function () {
	//Création du menu
	ctx.fillStyle="black";
	ctx.fillRect(0,0,screenWidth,screenHeight);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "64px SquareFont";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.fillText("Options", eval(screenWidth/2) ,50);
	
	ctx.font = "30px Test";
	ctx.textAlign = "center";
	ctx.textBaseline = "center";
	
	
}