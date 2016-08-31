function UserBall(ctx, x, y, radius, color) {
	Ball.call(this, ctx, x, y, radius, color)
	
	this.isMovingUp = false;
	this.isMovingRight = false;
	this.isMovingLeft = false;
	this.isMovingDown = false;
	
	var _speed = 5;
	var _lives = 3;
	var _points = 0;
	

	this.getSpeed = function () {
		return _speed;
	}	
	this.setSpeed = function (value) {
		_speed = value;
	}	
	this.getLives = function () {
		return _lives;
	}	
	this.setLives = function (value) {
		_lives = newLives;
	}	
	this.getPoints = function () {
		return _points;
	}	
	this.setPoints = function (value) {
		_points = value;
	}
}


UserBall.prototype = Object.create(Ball.prototype);
UserBall.prototype.constructor = UserBall;

UserBall.prototype.init = function(key, value) {
	
	var init = function() {
		var _this = this;
		document.addEventListener('keyup', function(e){
			_this.handleKey(e.keyCode, false);
		});
		
		document.addEventListener('keydown', function(e){
			_this.handleKey(e.keyCode, true);
		});
	}
	
	if (key == 37) {
		this.isMovingLeft = value;
	}
	
	if (key == 38) {
		this.isMovingTop = value;
	}
	
	if (key == 39) {
		this.isMovingRight = value;
	}
	
	if (key == 40) {
		this.isMovingBottom = value;
	}
}

UserBall.prototype.takeBonus = function () {
	
}