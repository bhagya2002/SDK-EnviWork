function deleteNote(noteId) {
  fetch("/delete-notes", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

function addPoints(noteId) {
  fetch("/add-points", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

// task generator
let quotes, quote, quoteauthor;
let randNum;

// Load JSON file into quotes
fetch("quotes.txt")
  .then((response) => response.json())
  .then((data) => { quotes = JSON.parse(data); });
	// .then((rawData) => rawData.text())
	// .then((data) => quotes = JSON.parse(data));

function genQuote() {
  console.log("wrking here too")
	lastIndex = randNum;
	randNum = Math.floor(Math.random() * quotes.length + 1); // Generate a Random Quote from the list
	quote = quotes[randNum].inspire; // Gets the line of Quote
	quoteauthor = quotes[randNum].author; // Gets the author of Quote
  console.log("wrking here too")
	document.getElementById("quote-line").innerHTML = '"' + quote + '"';
	document.getElementById("quote-author").innerHTML = "- " + quoteauthor;
}

// weather widget
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
