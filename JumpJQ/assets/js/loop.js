const KEY_JUMP = 38;
const KEY_DUCK = 40;

const MY_TOP = 568;
const MY_RIGHT = 370;
var bulletPool = 20;
const BULLET_WIDTH = 12;
const BULLET_HEIGHT = 12;

var curLeft;
var curTop;

var gameOver = 'no';



function keyAssign(keyCode, state) {	
		if (keyCode == KEY_JUMP) {
			me.jump = state;
		}
		if (keyCode == KEY_DUCK) {
			me.duck = state;
		}
}

function jumpDuck() {
	if (me.duck) {
		$('#me').animate({
			top: '634px',
			height: '68px',
			width: '70px'			
				
		}, 500);
	}
	if (me.jump) {
		$('#me').animate({
			top: '436px'
		}, 500);
	}

}

function animOver() {
	$('#me').animate({
		top: '568px',
		height: '132px',
	}, 300);
}

function createBullets(){	
		var dom = $( "<div/>", {
						"class": "bullet"
				});
		dom.css({
			'top': '150px',
			'left': '895px',
			'display': 'block'
		});
		dom.appendTo('#container');		
			var b = {
					dom: dom
					};
	
}

function ShootingLoop() {
	var up =  (Math.floor((Math.random() * 137) + 555)); //random top for ammo 537
    $('.bullet')
    	.css({
    		'left' : 895,
    		'top': up  + 'px',
    		});
    //console.log($(".bullet").position().top);
    $('.bullet').animate ({ left: '-=895px' }, { 							// animate
     duration: 3000,
     step: function (now, fx) {												// step
   //console.log($(".bullet").css("left", now));
     }, 
     easing: 'linear',														// type		
     complete: function() {													// callback
    	
    	bulletPool--;
    	if (!bulletPool) {
    		 $('.bullet')
         	.css({
         		'display': 'none'
         	});
    		gameOv = 'win';
    		checkforwin();
    		
    		
    		return;
    	}    	
    	ShootingLoop();
    	
     }
    });
}

function collision() {
	
}



function checkforwin(){
	if (gameOv === 'loose') {
		$('#me').css({'display':'none'});
		$('#enemy').css({'display':'none'});
		$('#game-over').css({'display':'block'});
	}
	if (gameOv === 'win') {
		$('#me').css({'display':'none'});
		$('#meWin').css({'display':'block'});
		$('#enemy').css({'display':'none'});
		$('#game-win').css({'display':'block'});
	};
}

$(function() {
	
	createBullets();
	ShootingLoop();
	
		
	$(document).on('keydown', function(event) {
		keyAssign(event.keyCode, true);
		jumpDuck();
		
	});
	$(document).on('keyup', function(event) {
		keyAssign(event.keyCode, false);
		animOver();
	});
});