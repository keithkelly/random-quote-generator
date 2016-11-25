// FUNCTION: Returns random RGB color for background
function randomBackgroundColor() {
	return 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
}

// FUNCTION: Returns random number between 0 and the limit (not including limit number)
function randomNumber(limit) {
	return Math.floor(Math.random() * limit);
} 

// FUNCTION: Returns a random quote from the quotes array
function getRandomQuote() {
	var quoteNum = randomNumber(quotes.length);
	return quotes[quoteNum];	
}

// FUNCTION: Prints random quote generated from random quote function
function printQuote() {
	var getQuote = getRandomQuote();
	var quote = '';
	quote += '<p class="quote">' + getQuote.quote + '</p>';
	quote += '<p class="source">' + getQuote.source; 

	if( getQuote.citation ) {
		quote += '<span class="citation">' + getQuote.citation + '</span>';
	}

	if( getQuote.year ) {
		quote += '<span class="year">' + getQuote.year + '</span>';
	}

	quote += '</p>';
	document.body.style.backgroundColor = randomBackgroundColor();
	document.getElementById('quote-box').innerHTML = quote;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);