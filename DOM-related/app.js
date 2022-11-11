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
