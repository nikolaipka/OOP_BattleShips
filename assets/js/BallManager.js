function BallManager() {
	
	var balls = [];
	
	this.getBalls = function () {
		return balls;
	}
	
	this.setBalls = function (value) {
		balls.push(value)
	}	
}

BallManager.prototype.createBall = function() {

}

BallManager.prototype.spawn = function() {
	
}