// Module 21

for (let i = 0; i <= 10; i++) {
  let randomNum = Math.random() * 6;
  let result = Math.round(randomNum);
  //   console.log(result);
}

// swap variable
let first = 10;
let second = 20;
// console.log(first, second);

// let setFirst = first;
// first = second;
// second = setFirst;

// destructuring mood
[first, second] = [second, first];

// console.log(first, second);

// total sum value

const totalNumbers = (number) => {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    sum = sum + element;
  }
  return sum;
};
const totalResult = totalNumbers([2, 5, 3]);
// console.log("total is: ", totalResult);

// find the largest number
const largestNumber = (allNum) => {
  let largest = allNum[0];
  for (let i = 0; i < allNum.length; i++) {
    let element = allNum[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
};

const largestOutput = [12, 32, 44, 89];
resultLargest = largestNumber(largestOutput);

// console.log(resultLargest);

// function to get the small number from an Array

const gettingSmallNumber = (numbers) => {
  let smallNum = numbers[0];
  for (let i = 0; i <= numbers.length; i++) {
    let elementNum = numbers[i];
    if (elementNum < smallNum) {
      smallNum = elementNum;
    }
  }
  return smallNum;
};
const numbersArray = [50, 43, 12, 10, 30];
const findSmallNum = gettingSmallNumber(numbersArray);

// console.log(findSmallNum);

const smallNumFromThree = (num1, num2, num3) => {
  if (num1 < num2 && num1 < num3) {
    console.log("num1 is the smallest:", num1);
  } else if (num2 < num1 && num2 < num3) {
    console.log("num2 is the smallest:", num2);
  } else {
    console.log("num3 is the smallest:", num3);
  }
};

// smallNumFromThree(40, -330, 10);
