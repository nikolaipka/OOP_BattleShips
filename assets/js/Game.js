document.addEventListener('DOMContentLoaded', function() {
	
		var ctx = document.querySelector('canvas').getContext('2d');
		var me = new UserBall(ctx, 100, 130, 10, 'yellow');
		var small = new SmallBall(ctx, 333, 512, 5, 'red');
		me.draw();		
		small.draw();

		

}, false)