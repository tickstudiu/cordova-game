// Prototype to shuffle string
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

// Function to start game
function starting() {
  document.getElementById("count-container").classList.add("d-none");
  document.getElementById("game-container").classList.remove("d-none");
}

// Parameter for answer
var ans;

// Function to return word with shuffle
function word() {

  // Word we have
  var data = ["test", "name", "love", "group"];
  var index = Math.floor((Math.random() * data.length) + 0);
  var word = data[index];
  ans = word;
  return word.shuffle();
}

// Parameter for quiz
var word = word();

// Function display data
function displayDate(){
  var value = document.getElementById("answer").value;
  if(ans == value){
      if(confirm("Answer is correct! Want to try again?")){
      window.location.href = "index2.html";
    }else{
      window.location.href = "index.html";
    }
  }else{
    alert("Answer is wrong.");
  }
}

// Set time count down
var time = 4;

// Update the count down every 1 second
var prestart = setInterval(function() {
  // Get todays date and time
  var now = time - 1;
  time = now;

  // Display the result in the element with id="count-down"
  document.getElementById("count-down").innerHTML = time;

  // If the count down is finished, write some text
  if (time < 0) {
    clearInterval(prestart);
    document.getElementById("count-down").innerHTML = "START";
    setTimeout(starting, 1000);
  }
}, 1000);

document.getElementById("word").innerHTML = word;

document.getElementById("submit").addEventListener("click", displayDate);
