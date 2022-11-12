// event, focus, keypress, keydown, keyup, onchange, onblur
const hideText = document.getElementById("hideText");
const inputField = document.getElementById("inputField");
const deleteButton = document.getElementById("deleteBtn");

// click function adding
deleteButton.addEventListener("click", function () {
  hideText.innerText = "type any color name and click the button";
  document.body.style.backgroundColor = inputField.value;
  inputField.value = "";
});

// focus function adding
// inputField.addEventListener("focus", function () {
//   document.body.style.backgroundColor = "orange";
// });

// blur function adding
// inputField.addEventListener("blur", function () {
//   document.body.style.backgroundColor = "transparent";
// });

// keydown function adding
// inputField.addEventListener("keydown", function () {
//   console.log(inputField.value);
// });

// keypress function adding
// inputField.addEventListener("keypress", function () {
//   console.log(inputField.value);
// });

// keyup function adding
inputField.addEventListener("keyup", function () {
  if (inputField.value == "delete") {
    deleteButton.removeAttribute("disabled");
  }
});

// keyup and event function adding
// inputField.addEventListener("keyup", function (event) {
//   if (event.target.value === "delete") {
//     deleteButton.removeAttribute("disabled");
//   } else {
//     deleteButton.setAttribute("disabled", true);
//   }
// });

// change function adding
// inputField.addEventListener("change", function () {
//   console.log(inputField.value);
// });

// Event Bubble function
// parent Bubble
const parentBubble = document.getElementById("eventBubble");
parentBubble.addEventListener("click", function () {
  console.log("clicking the parent Bubble");
});

// ul Bubble
const ulBubble = document.getElementById("ulBubble");
ulBubble.addEventListener("click", function () {
  console.log("clicking the ul Bubble");
});
// item-two Bubble
const secondBubble = document.getElementById("itemBubble-two");
secondBubble.addEventListener("click", function (event) {
  console.log("clicking the second Bubble");

  event.stopImmediatePropagation();
});

// item-two Bubble
document.getElementById("itemBubble-two");
secondBubble.addEventListener("click", function (event) {
  console.log("clicking the second Bubble");
  //   event.stopPropagation();
});

// item-two Bubble
document.getElementById("itemBubble-two");
secondBubble.addEventListener("click", function (event) {
  console.log("clicking the second Bubble");
});

// Delegate function adding
const items = document.getElementsByClassName("item");
for (const item of items) {
  item.addEventListener("click", function (event) {
    // 1st way to remove
    // const parent = document.getElementById("delegate");
    // parent.removeChild(item);
    // 2nd way to remove
    // event.target.parentNode.removeChild(event.target);
  });
}

// new item adding
const addItem = document.getElementById("addItem");
addItem.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "New Item";
  li.className = "item";
  const parentItem = document.getElementById("delegate");
  parentItem.appendChild(li);
});

// remove the item
const parentItemRemove = document.getElementById("delegate");
parentItemRemove.addEventListener("click", function (event) {
  console.log(event.target);
  event.target.parentNode.removeChild(event.target);
});
