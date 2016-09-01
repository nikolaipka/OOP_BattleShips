function SpeedBall(ctx, x, y, radius, color) {
	
	SmallBall.call(this, ctx, x, y, radius, color);
	
}

SpeedBall.prototype = Object.create(SmallBall.prototype);
SpeedBall.prototype.constructor = SpeedBall;


SpeedBall.prototype.giveBonus = function(userball) {
	userball.speed *= 2;
}