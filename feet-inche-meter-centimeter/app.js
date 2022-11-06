// feet to inch and meter to centimeter calculator

// foot to inch calculator
const feetToInch = (feetNum) => {
  const result = feetNum * 12;
  return result;
};
const showInch = feetToInch(5);
// console.log(showInch);

// meter to centimeter calculator
const meterToCentimeter = (meterNum) => {
  const result = meterNum * 100;
  return result;
};
const showCentimeter = meterToCentimeter(8);
// console.log(showCentimeter);

// calculate the rectangle area
const rectangleArea = (long, width, height) => {
  const longHeight = long * height;
  const longHeightResult = longHeight * 2;
  const widthLong = width * long;
  const widthLongResult = widthLong * 2;
  const heightWidth = height * width;
  const widthHeightResult = heightWidth * 2;
  const total = longHeightResult + widthHeightResult + widthLongResult;
  return total;
};

const rectangleNumbers = rectangleArea(8, 6, 10);
// console.log(rectangleNumbers);

// Find the large friend name from the array
const friends = ["Ismail", "Ayatullah", "Mustakim", "Taifur", "A. Sattar", "a"];
// showing into the UI
const largeNameArray = document.getElementById("largeName");
const sowLargeName = document.getElementById("showLargeName");
largeNameArray.innerHTML = friends;
// function get the output
const bestFriend = (friends) => {
  let largeName = "";
  for (let i = 0; i < friends.length; i++) {
    let element = friends[i];
    if (largeName.length < element.length) {
      largeName = element;
    }
  }
  sowLargeName.innerHTML = largeName;
};
bestFriend(friends);

// find out the Negative value from an Array
const taskFour = document.getElementById("taskFour");
const showTaskFour = document.getElementById("taskFourResult");

// declaring the Array
const numbersFour = [23, 18, 22, 11, 0, -3, 10];
taskFour.innerHTML = numbersFour;

// function declaration
const stopNegativeValue = (numbers) => {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element >= 0) {
      newNumbers.push(element);
    } else if (element < 0) {
      break;
    }
  }
  showTaskFour.innerHTML = newNumbers;
};
stopNegativeValue(numbersFour);

// Changing the Object value
const changingObject = {
  name: "Mahfuz",
  age: 25,
  profession: "Student",
};

console.log((changingObject.name = "antor"));

console.log(changingObject);
