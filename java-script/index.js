function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("auth-message").innerHTML = "";
}

function showSignup() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("auth-message").innerHTML = "";
}

// Sign Up
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("auth-message").innerHTML =
    "Account Created Successfully ✅";
  document.getElementById("auth-message").style.color = "green";

  this.reset();
});

// Login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("auth-message").innerHTML = "Login Successfully ✅";
  document.getElementById("auth-message").style.color = "green";

  this.reset();
});
