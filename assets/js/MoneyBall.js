function MoneyBall (ctx, x, y, size, color) {
	
	SmallBall.call(this, ctx, x, y, size, color);
}

MoneyBall.prototype = Object.create(SmallBall.prototype);
MoneyBall.prototype.constructor = MoneyBall;

MoneyBall.prototype.giveBonus = function (player) {
	player.setPoints(player.getPoints() + 111);
}