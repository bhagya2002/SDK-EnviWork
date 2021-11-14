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
let tasks, task;
let randNum;

// Load JSON file into quotes
fetch("envTasks.txt")
	.then((rawData) => rawData.text())
  .then((data) => { tasks = Jsonify(data); });


function genQuote() {
	lastIndex = randNum;
	randNum = Math.floor(Math.random() * tasks.length + 1); // Generate a Random Quote from the list
	task = tasks[randNum].inspire; // Gets the line of Quote
	document.getElementById("task-line").innerHTML = '"' + task + '"';
}

// weather widget
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
