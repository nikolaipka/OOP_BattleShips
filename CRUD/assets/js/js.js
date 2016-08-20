document.addEventListener('DOMContentLoaded', function(){
	var warn = document.getElementById('warning')
	var el = document.getElementById('login');
	var button = document.getElementById('btn');
		el.addEventListener('submit', function(e){
			e.preventDefault();
		}, false)
	
		button.addEventListener('click', function(){
			var name = document.getElementById('name').value;
			var pwd = document.getElementById('pwd').value;
			Ajax.request('GET', 'verification.php', true, function(response) {
				data = JSON.parse(response);
				if (name != data.username || pwd != data.password) {
					warn.style.display = "block";
				} else {
					
				}
			});
		}, false);

	
}, false);