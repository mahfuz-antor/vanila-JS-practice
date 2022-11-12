// event, focus, keypress, keydown, keyup, onchange, onblur
const hideText = document.getElementById("hideText");
const inputField = document.getElementById("inputField");
const deleteButton = document.getElementById("deleteBtn");

// click function adding
deleteButton.addEventListener("click", function () {
  hideText.style.display = "none";
});

// focus function adding
inputField.addEventListener("focus", function () {
  document.body.style.backgroundColor = "orange";
});
// blur function adding
inputField.addEventListener("blur", function () {
  document.body.style.backgroundColor = "transparent";
});
