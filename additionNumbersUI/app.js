const firstInputField = document.getElementById("firstField");
const secondInputField = document.getElementById("secondField");
const thirdInputField = document.getElementById("thirdField");

const firstBtn = document.getElementById("firstBtn");
firstBtn.addEventListener("click", function () {
  console.log(firstInputField.value, "just");
});
