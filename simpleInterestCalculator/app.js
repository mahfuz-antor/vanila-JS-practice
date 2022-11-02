// Making simple interest calculator

// S.I = (1000 ×5 × 1)/100 = 50
// Total = 1000 + 50 = 1050
const interestCalculate = (prinNum, rateNum, timeNum) => {
  const sumInterest = prinNum * rateNum * timeNum;
  const result = sumInterest / 100;
  const total = prinNum + result;
  console.log("Interest is: ", result);
  console.log("Total Amount is: ", total);
};

interestCalculate(100, 20, 5);
