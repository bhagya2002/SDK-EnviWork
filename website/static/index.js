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


let quotes, quote, quoteauthor;
let randNum;

// Load JSON file into quotes
fetch("quotes.txt")
	.then((rawData) => rawData.text())
	.then((data) => quotes = JSON.parse(data));

function genQuote() {
	lastIndex = randNum;
	randNum = Math.floor(Math.random() * quotes.length + 1); // Generate a Random Quote from the list
	quote = quotes[randNum].inspire; // Gets the line of Quote
	quoteauthor = quotes[randNum].author; // Gets the author of Quote
	document.getElementById("quote-line").innerHTML = '"' + quote + '"';
	document.getElementById("quote-author").innerHTML = "- " + quoteauthor;
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

$(document).ready( function() {
var i = 0;
var txt = 'Welcome To Your Tasks';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("maintitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    document.getElementById("maintitle").classList.add("lets");
  }
}
 // This runs the displayTime function the first time
 typeWriter();
});