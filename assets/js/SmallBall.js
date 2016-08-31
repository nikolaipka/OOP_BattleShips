function SmallBall(ctx, x, y, radius, color) {
	Ball.call(this, ctx, x, y, radius, color)
}

SmallBall.prototype = Object.create(Ball.prototype);
SmallBall.prototype.constructor = SmallBall;

