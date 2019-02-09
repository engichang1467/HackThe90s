function ask_user ()
{
	// Get user input, this variable can be use to store the 
	var user = prompt("What's your name: ");
	alert("Hi! " + user + " Welcome to my blog");
}

// fucntions for opening and closing pop-up form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}