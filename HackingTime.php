<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <title>3chat</title>
</head>

<body>
  <!--Creating new log-in-->
  <script src="script/script.js"></script>
  <h1>3chat</h1>
  <img src="3hlyqx4novf01.jpg" width="100" hight="100">

  <button class="open-button" onclick="openForm()">Login here</button>

  <div class="form-popup" id="myForm">
    <form action="/action_page.php" class="form-container">
      <h1>Login</h1>

      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter your name" name="name" required>

      <button type="submit" class="btn">Login</button>
      <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
  </div>

  <!--Creating new post-->
  <script src="script/script.js"></script>
  
  <button class="post-button" onclick="openPost()">Create New Post</button>

  <div class="form-popup" id="postForm">
    <form action="/action_page.php" class="form-container">
      <h1>Post</h1>

      <label for="name"><b>Create New Post</b></label>
      <input type="text" id="post" placeholder="Write Something" Post="post" required>

      <button type="button" class="btn" onclick="AddNewList()">Post</button>
      <button type="button" class="btn cancel" onclick="closePost()">Close</button>
    </form>
  </div>

  <h3>What's on your mind today?</h3>
  <ul id="myOlist"></ul>

  <footer class="main-footer">
    <span>&copy; 2019 M. Chang, B. Chan, A. Zhang</span>
  </footer>
  </body>
</html>