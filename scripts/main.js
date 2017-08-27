$(document).ready(function() {
	var quote,
		author;

	function getNewQuote() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp', //jsonp works around Chrome protection
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response) {
				//console.log(response.quoteText + response.quoteAuthor);
				quote = response.quoteText;
				author = response.quoteAuthor;
				$("#quote").text(response.quoteText);
				$("#author").text(response.quoteAuthor);

				if(author) {
					$("#author").text("- " + author);
				} else {
					$("#author").text("- unknown");	
				}
			}
		});
	}
	$(".get-quote").click(function(){
		getNewQuote();
	});
	$(".share-quote").click(function(){
		window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -- " + author));
	});
});