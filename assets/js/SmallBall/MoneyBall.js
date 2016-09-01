function ScoreBall(ctx, x, y, size, color) {
	
	SmallBall.call(this, ctx, x, y, size, color);
}

ScoreBall.prototype = Object.create(SmallBall.prototype);
ScoreBall.prototype.constructor = ScoreBall;

ScoreBall.prototype.giveBonus = function(userball) {
	userball.score += 10;
}