

// fucntions for opening and closing pop-up form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";

}

function openPost() {
  document.getElementById("postForm").style.display = "block";
}

function closePost() {
  var firebaseRef = firebase.database().ref();
  document.getElementById("postForm").style.display = "none";
  firebaseRef.child("Post").set("Blah");

}

function AddNewList () {

  var list = document.getElementById("myOlist");
  var theText = document.getElementById("post").value;

  var entry = document.createElement('li');
  
  entry.appendChild(document.createTextNode(theText));
  var newEntry = list.appendChild(entry);
    
}