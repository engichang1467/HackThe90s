var firebaseRef = firebase.database().ref();



updatePosts();


function updatePosts() {
  var query = firebase.database().ref().orderByKey();
  var list;

  var entry;
  query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        list = document.getElementById("myOlist");
        entry = document.createElement('li');
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        entry.appendChild(document.createTextNode(childData));
        var newEntry = list.appendChild(entry);
    });
  });
  
  
}







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
  document.getElementById("postForm").style.display = "none";

}

function AddNewList () {
  var firebaseRef = firebase.database().ref();

  var list = document.getElementById("myOlist");
  var theText = document.getElementById("post").value;

  var entry = document.createElement('li');
  
  entry.appendChild(document.createTextNode(theText));
  var newEntry = list.appendChild(entry);
    
  firebaseRef.push("Post").set(theText);
}