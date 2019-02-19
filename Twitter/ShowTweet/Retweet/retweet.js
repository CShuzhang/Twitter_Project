$(document).ready( function(){
	$('.iRetweet').click( function(){
		var stock = $(this);
		var request = $.ajax({		
			url: '../ShowTweet/Retweet/retweet.php',
			type: 'POST',
			data: { id : $(this).val()},
		})

		request.done( function (data){
			var search = stock.next();
			console.log(search);
			search.html(data);
		});
	});
});
