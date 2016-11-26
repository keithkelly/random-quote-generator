// Returns random number between 0 and the limit (not including limit number)
function randomNumber(limit) {
	return Math.floor(Math.random() * limit);
} 

// Returns random RGB color for background
function randomBackgroundColor() {
	return 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
}

// Returns a random quote from the quotes array
function getRandomQuote() {
	var quoteIndex = randomNumber(quotes.length);
	return quotes[quoteIndex];
}

// Removes quote object passed to it from array
function removeQuote(quote) {
	return quotes.splice(quotes.indexOf(quote), 1);
}

// Prints random quote generated from random quote function
function printQuote() {
	var getQuote = getRandomQuote();
	var printQuote = '';

	printQuote += '<p class="quote">' + getQuote.quote + '</p>';
	printQuote += '<p class="source">' + getQuote.source; 

	// Only show citation if it exists
	if( getQuote.citation ) {
		printQuote += '<span class="citation">' + getQuote.citation + '</span>';
	}

	// Only show year if it exists
	if( getQuote.year ) {
		printQuote += '<span class="year">' + getQuote.year + '</span>';
	}

	printQuote += '</p>';

	// Change the background color
	document.body.style.backgroundColor = randomBackgroundColor();

	// Show quote on page
	document.getElementById('quote-box').innerHTML = quote;

	// Log quote to console then remove from array
	console.log(getQuote);
	removeQuote(getQuote);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);