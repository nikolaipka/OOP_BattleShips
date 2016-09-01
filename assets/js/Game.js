document.addEventListener('DOMContentLoaded', function() {
		var isStarted = true;
		var ctx = document.querySelector('canvas').getContext('2d');
		var userball = new UserBall(ctx, 100, 130, 20, 'yellow');
		var small = new SmallBall(ctx, 333, 512, 10, 'red');
		var ballmanager = new BallManager(1);
		
		var results = new Result(0);
		
		userball.draw();
		ballmanager.createBall(small);
		userball.init();
		
		(function() {
		var time = 0;
		var date = new Date(time);
		
		var interval = setInterval(function() {
	  		date.setSeconds(time++);
			document.getElementById("time").innerHTML = 'Time passed: '+ date.toISOString().substr(11, 8);
		}, 1000);
		})();
		
		function loop() {
			if (isStarted) {
				ctx.clearRect(0, 0, 1000, 650);			
				userball.move();
				userball.draw();
				small.draw();
				small.isHit(userball, results)
				userball.wallHitCheck();
					if (userball.wallHit) {
						results.gameoverLost();
					}
			}

			requestAnimationFrame(loop);
		}
		requestAnimationFrame(loop);


		

}, false)