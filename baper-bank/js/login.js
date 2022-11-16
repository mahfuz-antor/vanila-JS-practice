// for login information
const loginBtn = document.getElementById("loginBtn");
// login function
loginBtn.addEventListener("click", function () {
  // get the Email
  const emailField = document.getElementById("userEmail");
  const userEmail = emailField.value;
  // get the Password
  const passwordField = document.getElementById("userPassword");
  const userPassword = passwordField.value;
  // checking the Email and Password
  if (userEmail === "mahfuz@gmail.com" && userPassword === "mahfuz") {
    location.href = "banking.html";
  } else {
    alert("Please type correct Email and Password");
  }
});
