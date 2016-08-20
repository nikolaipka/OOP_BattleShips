

$(function(){
	var warn = $('#warning');
	$('#login').on('submit', function(e) {
		e.preventDefault();
	});
	$('#adding-form-page').on('submit', function(e) {
		e.preventDefault();
	});
	// login success and table show in case login is legit
	$('#btn').on('click', function() {
		var name = $('#name').val();
		var pwd = $('#pwd').val();
		$.ajax({
			url: 'verification.php',
			success: function(result) {
			data = JSON.parse(result);
			console.log(name, pwd)
				if (name != data.username || pwd != data.password) {
					$("#warning").css({'display':'block'});
				} else {
					$('.form').hide();
					$('#table').show();
				}
			}
		});
	});
	// add event for add button click, table hide and adding form is shown
	$('#addbtn').on('click', function() {
		$('#table').hide();
		$('#adding-form-page').show();
	});
	// adding new row
var rowNumber = 1;
var rowData = [];
	$('#adding-form').on('submit', function() {		
		$.post("add.php", $(this).serialize())
			.done(function(data) {
				income = JSON.parse(data);
				var trHTML = '<tr>';
				var edit = '<td><i class="fa fa-minus-square fa-2x edit" aria-hidden="true"></i>';
				var del = '<i class="fa fa-pencil fa-2x delete" aria-hidden="true"></i></td>'
				trHTML += '<td>' + rowNumber + '</td>';
				for (var key in income) {					
					trHTML += '<td>' + income[key] + '</td>';
				}
				trHTML += edit;
				trHTML += del;
				
			//	trHTML += '<td><i class="fa fa-minus-square fa-1x" aria-hidden="true"><i class="fa fa-pencil fa-1x" aria-hidden="true"></i></td>';
				trHTML += '</tr>';	
				$('#grid').append(trHTML);
				rowNumber++;
				
				var row;
				$.ajax({
		            type: 'POST',
		            url: 'add.php',
		            data: { row: rowData},
		            success: function(response) {
		            	table_data = response;
		            }
				});
				
				
				$('#adding-form-page').hide();
				$('#table').show();
			})
			 // 33 row end
			return false;		
	}) // 34 row end


	
}); //3 row end