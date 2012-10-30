

var map = new Map("map");
var action = {"haut":false,"bas":false,"gauche":false,"droite":false};

var joueur = new Personnage("Bomberman.png", 7, 14, DIRECTION.BAS);
map.addPersonnage(joueur);


window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	setInterval(function() {
		map.dessinerMap(ctx);
		if(action["haut"]==true && action["bas"]==false){joueur.deplacer(DIRECTION.HAUT, map);}			
		else if(action["bas"]==true && action["haut"]==false){joueur.deplacer(DIRECTION.BAS, map);}
		else if(action["gauche"]==true && action["droite"]==false){joueur.deplacer(DIRECTION.GAUCHE, map);}
		else if(action["droite"]==true && action["gauche"]==false){joueur.deplacer(DIRECTION.DROITE, map);}
		}, 20);

	
	// Gestion du clavier
	window.onkeydown = function(event) {
		var e = event || window.event;
		var key = e.which || e.keyCode;
		switch(key) {
			case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
				this.action["haut"] = true;
				break;
			case 40 : case 115 : case 83 : // Flèche bas, s, S
				this.action["bas"] = true;
				break;
			case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
				this.action["gauche"] = true;
				break;
			case 39 : case 100 : case 68 : // Flèche droite, d, D
				this.action["droite"] = true;
				break;
			default : 
				//alert(key);
				// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
				return true;
		}
		return false;
	}
		window.onkeyup = function(event) {
		var e = event || window.event;
		var key = e.which || e.keyCode;
		switch(key) {
			case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
				if(this.action == 38||122||119||90||87)this.action["haut"] = false;
				break;
			case 40 : case 115 : case 83 : // Flèche bas, s, S
				if(this.action == 40||115||83)this.action["bas"] = false;
				break;
			case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
				if(this.action == 37||113||97||81||65)this.action["gauche"] = false;
				break;
			case 39 : case 100 : case 68 : // Flèche droite, d, D
				if(this.action == 39||100||68)this.action["droite"] = false;
				break;
			default : 
				
				// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
				return true;
		}
		return false;
	}
}

