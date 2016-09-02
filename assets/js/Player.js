/**
 * 
 */

function Player() {
	this.hits = 0;
	this.misses = 0;
	
	this.ship1 = new Ship(12, 3, true);
	this.ship2 = new Ship(5, 7, false);
	this.ship3 = new Ship(18, 5, false);
}

Player.prototype.shoot = function() {
	
	var miss = this.misses;
	var hit = this.hits;
	
	var position1 = this.ship1.position();
	var position2 = this.ship2.position();
	var position3 = this.ship3.position();
	
	document.getElementById('container').addEventListener('click', function(event) {


		for (var i = 0; i <= 2; i++) {
				
			if (event.target.id != position1[i] || event.target.id != position2[i] || event.target.id != position3[i]) {
				event.target.style.backgroundColor = "grey";
				miss++;
				//console.log(event.target.id)
			}
			if (miss == 250 && hit != 9) {
				alert("You lost!");
				return;
			}
		}
		
		for(var j = 0; j <= 2; j++) {
			if (event.target.id == position1[j] || event.target.id == position2[j] || event.target.id == position3[j]) {
				event.target.style.backgroundColor = "red";
				hit++;
					
				if (hit == 9 && miss < 250) {
					alert("You won!");
					return;
				}
			}
		}
		
	}, false);
}