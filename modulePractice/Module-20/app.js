// this is Module Practice file

// Module:20 - 20-2

const feetShow = (num) => {
  const result = num / 12;
  return result;
};

// console.log(feetShow(18), "getting the feet");

const inchesShow = (num) => {
  const result = num * 12;
  return result;
};
// console.log(feetShow(2), "getting the inches");

// Module: 20 - 20-3

// odd and Even number check

const oddEvenCheck = (num) => {
  let result = num % 2;

  if (result == 0) {
    return console.log(num + " is an Even number");
  } else if (result != 0) {
    return console.log(num + " is an Odd number");
  }
};
// oddEvenCheck(13);

// Module: 20 - 20-4: Leap Year

const checkLeapYear = (year) => {
  const resultOne = year % 4;
  const resultTwo = year % 100;
  const resultThree = year % 400;

  if ((resultOne == 0 && resultTwo != 0) || resultThree == 0) {
    return console.log(year + " is a Leap Year");
  } else {
    return console.log(year + " not a Leap Year");
  }
};

// checkLeapYear(2400);

// Module: 20 - 20-5: Factorial

// const factorialThree = 3 * 2 * 1;
// const factorialFive = 5 * 4 * 3 * 2 * 1;

let factorialTen = 1;
for (let i = 1; i <= 10; i++) {
  factorialTen = factorialTen * i;
}
// console.log(factorialTen);

// Module: 20 - 20-6: Factorial Function

const getFactorial = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return console.log(factorial + "is your Factorial Number");
};
// getFactorial(10);

// Module: 20 - 20-7: Factorial While Loop

let whileFact = 1;
let i = 1;
while (i <= 10) {
  whileFact = whileFact * i;
  i++;
}
// console.log(whileFact);

const getWhileFact = (number) => {
  let whileFact = 1;
  let i = 1;
  while (i <= number) {
    whileFact = whileFact * i;
    i++;
  }
  return console.log("inside the while function", whileFact);
};
// getWhileFact(10);

// Module: 20.5 - 20.5-0: Practice

const oneToHundred = (i, oddNum) => {
  //   let oddNum = 80;

  for (i; i <= oddNum; i++) {
    let checkNum = i % 2 == 0;
    // console.log(checkNum);
    if (checkNum == true) {
      console.log("The Even Number is: ", i);
    } else {
      console.log("The Odd Number is: ", i);
    }
  }
};
// oneToHundred(1, 100);
