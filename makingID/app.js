const showID = document.getElementById("showID");
const makingID = document.getElementById("makingIDBtn");

const displayID = (finalID) => {
  showID.innerHTML = finalID;
};

let result = 0;
let preYear = new Date().getFullYear().toString();
let preMonth = new Date().getMonth() + 1;
preMonth.toString();

const makingUniqueID = () => {
  result = result + 1;
  let finalID = preYear + preMonth + result;
  displayID(finalID);
};
