// All type of small and large number getting function

// Getting the small Number from 3numbers
const getSmallNum = (num1, num2, num3) => {
  if (num1 < num2 && num1 < num3) {
    console.log("Number1 is the smallest Number:", num1);
  } else if (num2 < num1 && num2 < num3) {
    console.log("Number2 is the smallest Number:", num2);
  } else {
    console.log("Number3 is the smallest Number:", num3);
  }
};

// getSmallNum(18, 30, 03);

// getting the small Number from an Array

const getSmallNumArray = (numbers) => {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    console.log(element);
    if (element < smallest) {
      console.log(element);
      smallest = element;
    }
  }
  return smallest;
};
const getSmallResult = getSmallNumArray([20, 30, 48, 100]);
console.log(getSmallResult);

// Getting the average number
const getAverageNumArray = (numbers) => {
  let smallest = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    smallest += element;
    // console.log(smallest);
  }
  let result = smallest / numbers.length;
  return result;
};
const getAverageResult = getAverageNumArray([1, 2, 3, 4, 5]);
// console.log(getAverageResult);

// Getting the Large Number from three

const getLargeNum = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log("Number1 is the Largest Number:", num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log("Number2 is the Largest Number:", num2);
  } else {
    console.log("Number3 is the Largest Number:", num3);
  }
};
// getLargeNum(30, 50, 10);
