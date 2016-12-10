$(function(){

	//$('.btnGet').click(function(){
		//var email = $('#email').val();
		//var pass = $('#pass').val();
		//var radio = $('input[name=opt]:ckecked', '#formGet').val();
		// var val1 = $('#text1').val();
		// var val2 = $('#text2').val();
		// var comment = $('#comment').val();

		//console.log('Email: ' + email);
		//console.log('Pass: ' + pass);
		//console.log('Radio: ' + radio);
		// console.log('Text1: ' + val1);
		// console.log('Text2: ' + val2);
		// console.log('Comment: ' + comment);
		// var data = 'Text1: ' + val1 + ' ' + 'Text2: ' + val2 + ' ' + 'Comment: ' + comment;

		// $('.result-get').html(data);

		// $.ajax({
		// 	type: 'GET',
		// 	url: 'get.php',
		// 	data: {'text1': val1, 'text2':val2, 'comment':comment},
		// 	success: function(data) {
		// 		$('.result-get').val('');
		// 		$('.result-get').html(data);
		// 	},
		// 	error: function(data) {
		// 		console.log(data);
		// 	}
		//}); //end ajax
	
	//});// btnGet  click;

	$('.btnPost').click(function(){

	})// btnGet  click

	$('form.ajax').on('click', function(){
		var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};

			that.find('[name]').each(function(index, value) {
				var that = $(this),
					name = that.attr('name'),
					value = that.val();

				data[name] = value;
			});

			$.ajax({
				url: url,
				type: type,
				data: data,
				success: function(response) {
					console.log(response);
					$('.result-post').html(response);
				}
			}); //end ajax

		return false;
	}); //end form ajax

	$('btnName').on('click', function(){
		var fname = $('#fname').val(),
		    lname = $('#lname').val(),
		    number = $('#number option:select').val();

		    console.log(fname);
		    console.log(lname);
		    console.log(number);

		    $.ajax({
				url: 'getname.php',
				type: 'GET',
				data:{'fname': fname, 'lname':lname, 'number':number},
				success: function(response) {
					console.log(response);
					$('.result-name').html(response);
				}
			}); //end ajax
		return false;
	});
})//end ready