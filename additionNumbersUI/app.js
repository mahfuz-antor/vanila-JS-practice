// getting top section input
const firstNumber = document.getElementById("firstNum");
const secondNumber = document.getElementById("secondNum");
const showTwoInputResult = document.getElementById("twoInputResult");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  const firstNumResult = firstNumber.value;
  const secondNumResult = secondNumber.value;
  const showSumResult =
    parseFloat(firstNumResult) + parseFloat(secondNumResult);
  showTwoInputResult.innerText = showSumResult;

  // input field empty
  firstNumber.value = "";
  secondNumber.value = "";
});

// getting the three buttons
const firstBtn = document.getElementById("firstBtn");

firstBtn.addEventListener("click", function () {
  const showFirstResult = document.getElementById("firstResult");
  const firstInputField = document.getElementById("firstField");
  const firstResult = firstInputField.value;
  const firstSum = firstResult * 2;
  console.log(firstSum, "first");
  showFirstResult.innerText = firstSum;
  firstInputField.value = "";
});

const secondBtn = document.getElementById("secondBtn");
secondBtn.addEventListener("click", function () {
  const showSecondResult = document.getElementById("secondResult");
  const secondInputField = document.getElementById("secondField");
  const secondResult = secondInputField.value;
  const secondSum = secondResult * 3;
  console.log(secondSum, "second");
  showSecondResult.innerText = secondSum;
  secondInputField.value = "";
});

const thirdBtn = document.getElementById("thirdBtn");
// thirdBtn.addEventListener("click", function () {
//   const showResult = document.getElementById("thirdResult");
//   const thirdInputField = document.getElementById("thirdField");
//   const thirdResult = thirdInputField.value;
//   const thirdSum = thirdResult * 4;
//   console.log(thirdSum, "third");
//   showResult.innerText = thirdSum;
//   thirdInputField.value = "";
// });

const thirdAddResult = () => {
  const showResult = document.getElementById("thirdResult");
  const thirdInputField = document.getElementById("thirdField");
  const thirdResult = thirdInputField.value;
  const thirdSum = thirdResult * 4;
  console.log(thirdSum, "third");
  showResult.innerText = thirdSum;
  thirdInputField.value = "";
};
const thirdInputKey = document.getElementById("thirdField");
thirdInputKey.addEventListener("keyup", function (event) {
  console.log(event.target.value, "key is pressing");
});
