function SmallBall(ctx, x, y, radius, color) {
	Ball.call(this, ctx, x, y, radius, color)
}

SmallBall.prototype = Object.create(Ball.prototype);
SmallBall.prototype.constructor = SmallBall;

SmallBall.prototype.isHit = function (userball, results) {
	var ballman = new BallManager(1);
	var ctx = this.getCtx(); 									// reference error		
	if ((userball.getX() > this.getX() -30 && userball.getX() < this.getX() + 20) &&
		(userball.getY() > this.getY() -30 && userball.getY() < this.getY() + 20)) {
		//	console.log('HIT!!!');
	
		//clearRect(x-radius = 0  | y-radius = 0 | radis*2 = width/height)
		ctx.clearRect(this.getX() - this.getRadius(), this.getY() - this.getRadius(),
					  2 * this.getRadius(), 2 * this.getRadius());

		if (this.getColor() == 'red') {
			userball.speed += 0.33;
		} else {
			results.scoresCalculate();
		}
		if (results.scores == 50) {
			results.gameoverWin(); 
		} 
		ballman.createBall(this);
		
	}
};