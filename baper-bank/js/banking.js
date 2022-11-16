// add deposit amount:
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  const depositField = document.getElementById("depositInput");
  const depositAmount = depositField.value;
  //   console.log(depositAmount, "getting deposit");
  const depositShow = document.getElementById("depositShow");
  depositShow.innerText = depositAmount;
});

// add withdraw amount:
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawField = document.getElementById("withdrawInput");
  const withdrawAmount = withdrawField.value;
  //   console.log(withdrawAmount, "withdraw gettin");
  const withdrawShow = document.getElementById("withdrawShow");
  withdrawShow.innerText = withdrawAmount;
});
