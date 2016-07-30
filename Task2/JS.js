
document.addEventListener('DOMContentLoaded', function() {
	
	var data = [];
	var button = document.getElementById('button');
	var img = document.getElementById('img');
	var i = 0;
	
	button.addEventListener('click', function () {
		Ajax.request('GET', 'info.php', true, function(response) {
			data = JSON.parse(response);
			
			});
		}, false);
	
			setInterval(function() {
			
			if (data[i]) {
				img.src = data[i];
				i++;				
			}
			
			i == 3 ? i = 0 : false;
		
		}, 500);
	
}, false);
