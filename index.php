<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <title>Hello, world!</title>
</head>

<body>
  <div class="container">
    <h1 id="hello_world"></h1>

    <h4 id="data"></h4>

    <h5 id="one"></h5>

    <h5 id="sum"></h5>

    <h5 id="temprature"></h5>

    <h5 id="localVarible"></h5>
  </div>
  <hr>
  <div class="container">
    <h2>Profile</h2>
    <h3 id="name"></h3>
    <h3 id="job"></h3>
    <h3 id="age"></h3>
  </div>
  <hr>
  <div class="container">
    <h4 id="carDetails"></h4>
  </div>
  <hr>
  <div class="container">
    <h3>JavaScript Events</h3>
    
    <button class="btn btn-success stm-sm" onclick="showTime()">Show Time</button>
    <h4 id="showTime">Click button to view time</h4>
    <br>

    <button class="btn btn-primary" onclick="this.innerHTML = Date()">Time</button>

    
  </div>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <script src="js/script.js"></script>
</body>

</html>