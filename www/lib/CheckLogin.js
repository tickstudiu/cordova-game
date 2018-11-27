// Function logined
function logined() {
  document.getElementById("form").classList.add("d-none");
  document.getElementById("option").classList.remove("d-none");
}

// Function handleLogin
function handleLogin() {
  var inputEmail = document.getElementById("inputEmail").value;
  var inputPassword = document.getElementById("inputPassword").value;

  if (inputEmail == '') {
    alert("email is empty.");
  }else{
    if (inputPassword = '') {
      alert("password is empty.");
    }else{
      logined();
    }
  }
}

document.getElementById("submit").addEventListener("click", handleLogin);
