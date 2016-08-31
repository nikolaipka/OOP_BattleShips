function HPBall(cxt, x, y, radius, color) {
	
	SmallBall.call(this, ctx, x, y, radius, color);
	
}

HPBall.prototype = Object.create(SmallBall.prototype);
HPBall.prototype.constructor = HPBall;

HPBall.prototype.giveBonus = function() {
	
}