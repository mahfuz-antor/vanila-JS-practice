// DOM related events
let li = document.createElement("li");
li.innerText = "List-4";
let ul = document.getElementById("list-items");
console.log(ul.children[2]);

// List item added btn function
const listAddBtn = () => {
  ul.appendChild(li);
  ul.children[2].remove();
};

// function for item no: one
const itemOne = document.getElementById("itemOne");
itemOne.onclick = function () {
  document.body.style.backgroundColor = "red";
  document.body.style.color = "white";
};

// function for item no: two
const itemTwo = document.getElementById("itemTwo");
itemTwo.onclick = function () {
  document.body.style.backgroundColor = "transparent";
  document.body.style.color = "inherit";
};

// function for item no: three
const itemThree = document.getElementById("itemThree");
function greenColor() {
  document.body.style.backgroundColor = "green";
  document.body.style.color = "white";
}
itemThree.addEventListener("click", greenColor);

// function for input field
const inputBtn = document.getElementById("inputBtn");

inputBtn.addEventListener("click", function () {
  const inputText = document.getElementById("inputField");
  const inputResult = document.getElementById("inputResult");
  const li = document.createElement("li");
  inputResult.appendChild(li);
  li.innerText = inputText.value;
  inputText.value = "";
});
