// Remove the Duplicate from an Array

// Remove the Duplicate Number
const friendsYear = [1999, 1998, 2000, 2001, 1999, 2000, 1998];

const removeDuplicateNum = (numbers) => {
  let newYear = [];
  for (const element of numbers) {
    console.log(element);
    if (newYear.indexOf(element) == -1) {
      newYear.push(element);
    }
  }
  return newYear;
};
// console.log(removeDuplicateNum(friendsYear));

// Remove the Duplicate Names
const friendsName = ["Akash", "Batash", "Tatash", "Akash", "Batash"];
const removeDuplicateName = (names) => {
  let newNames = [];
  for (const element of names) {
    // console.log(element, "element checking");
    if (newNames.indexOf(element) == -1) {
      newNames.push(element);
    }
    // console.log(newNames, "checking from inside");
  }
  for (const newElement of newNames) {
    // console.log(newElement, "new element is checking");
  }
  return newNames;
};
// const nameShow = removeDuplicateName(friendsName);
// console.log(nameShow);
