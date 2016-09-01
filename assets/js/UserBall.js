function UserBall(ctx, x, y, radius, color) {
	Ball.call(this, ctx, x, y, radius, color)
	
	this.isMovingUp = false;
	this.isMovingRight = false;
	this.isMovingLeft = false;
	this.isMovingDown = false;
	this.speed = 3;
	
	this.wallHit = false;
	this.hp = 3;
	this.score = 0;
	
}


UserBall.prototype = Object.create(Ball.prototype);
UserBall.prototype.constructor = UserBall;

UserBall.prototype.moveKeyCode = function (key, state) {
	
	if (key == 39) {
		this.isMovingRight = state;
	}
	if (key == 38) {
		this.isMovingUp = state;
	}
	if (key == 40) {
		this.isMovingDown = state;
	}
	if (key == 37) {
		this.isMovingLeft = state;
	}
	
};

UserBall.prototype.move = function () {

	if  (this.isMovingUp && (this.getY() - this.getRadius()) > 0) {
		this.setY((this.getY() - this.speed), true);
	}

	if  (this.isMovingDown && (this.getY() + this.getRadius()) < 651) {
		this.setY((this.getY() + this.speed), true);
	}

	if  (this.isMovingLeft && (this.getX() - this.getRadius()) > 0) {
		this.setX((this.getX() - this.speed), true);
	}

	if  (this.isMovingRight && (this.getX() + this.getRadius()) < 1001) {
		this.setX((this.getX() + this.speed), true);
	}
};

UserBall.prototype.init = function () {
	var _that = this;
	document.addEventListener('keydown',function (e){
		var key = e.keyCode;
		_that.moveKeyCode(key,true);
	},false);
	document.addEventListener('keyup',function (e){
		var key = e.keyCode;
		_that.moveKeyCode(key,false);
	},false);
};

UserBall.prototype.wallHitCheck = function() {
	if(this.getX() > 981 || this.getX() < 21 || this.getY() > 630 || this.getY() < 20) {
		this.wallHit = true;
	}
};

/*UserBall.prototype.hpMinus = function() {
	var ctx = this.getCtx();
	this.hp--
	ctx.clearRect(this.getX() - this.getRadius(), this.getY() - this.getRadius(),
			  2 * this.getRadius(), 2 * this.getRadius());
}
*/