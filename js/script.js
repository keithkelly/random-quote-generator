// Variable to hold used quotes
var usedQuotes = [];
var timer;

// Returns random number between 0 and the limit (not including limit number)
function randomNumber(limit) {
	return Math.floor(Math.random() * limit);
} 

// Returns random RGB color for background
function randomBackgroundColor() {
	return 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
}

// Refreshes quote every n seconds
function refreshQuote() {
	timer = setInterval(printQuote, 5000);
}

// Resets the quote refresh timer after 'Show another quote' button is clicked
function resetQuoteRefresh() {
	clearInterval(timer);
	refreshQuote();
}

// Removes quote object passed to it from array
function removeQuote(quote) {
	quotes.splice(quotes.indexOf(quote), 1);
	usedQuotes.push(quote);
}

// Adds quotes back to original array and resets the usedQuotes container
function resetQuotes() {
	quotes = usedQuotes;
	usedQuotes = [];
}

// Returns a random quote from the quotes array
function getRandomQuote() {
	var quote = quotes[randomNumber(quotes.length)];

	// Remove quote from array and log the quote
	removeQuote(quote);

	// If the array is empty then reset
	if(quotes.length === 0) {
		resetQuotes();
	}

	return quote;
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
	document.getElementById('quote-box').innerHTML = printQuote;
}

// Initiate the refresh quote intervals
window.onload = refreshQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function() {
	printQuote();
	resetQuoteRefresh();
}, false);