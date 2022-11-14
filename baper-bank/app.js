const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  const emailField = document.getElementById("userEmail");
  const userEmail = emailField.value;
  const passwordField = document.getElementById("userPassword");
  const userPassword = passwordField.value;
  console.log(userEmail, userPassword);
});
