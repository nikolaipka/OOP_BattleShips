function BallManager(balls) {
	
	var _balls = balls;
	
	this.getBalls = function () {
		return _balls;
	}
	
	this.setBalls = function (value) {
		balls.push(value)
	}	
}

BallManager.prototype.createBall = function (small) {
	
	for (var i = 0; i < this.getBalls() ; i++) {
		var randomColorsArray = ['red', 'orange', 'aqua'];
		var randomColorsArrayKeys = Math.floor(Math.random() * randomColorsArray.length);
		
		var randPos = this.spawn();
		small.setColor(randomColorsArray[randomColorsArrayKeys]);
		small.setX(randPos[0]);
		small.setY(randPos[1]);
		small.draw(randPos[0], randPos[1])
	}
};

BallManager.prototype.spawn = function () {
	var position = [];	
	var randX = Math.floor(Math.random() * 900) + 10;  //prevent offscrean X spawn
	var randY = Math.floor(Math.random() * 600) + 10;  //prevent offscrean Y spawn
	position.push(randX);
	position.push(randY);
	return position;
};