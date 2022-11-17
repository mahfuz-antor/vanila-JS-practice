// add deposit amount:
const depositInputEnter = document.getElementById("depositInput");
// deposit input Enter key listener
depositInputEnter.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const depositBtn = document.getElementById("depositBtn");
    depositBtn.click();
  }
});
// onclick function for deposit
const depositAmount = () => {
  // getting new deposit amount
  const depositField = document.getElementById("depositInput");
  const newDepositAmount = depositField.value;
  if (newDepositAmount !== "") {
    // getting previous deposit amount
    const depositShow = document.getElementById("depositShow");
    const previousDepositAmount = depositShow.innerText;
    // getting total amount
    const totalDeposit =
      parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositShow.innerText = totalDeposit;
    depositField.value = "";
    // adding total balance
    const totalBalance = document.getElementById("totalBalance");
    const showTotalBalance = parseFloat(totalBalance.innerText);
    totalBalance.innerText = showTotalBalance + parseFloat(newDepositAmount);
  } else {
    alert("Please type any number");
  }
};

// add withdraw amount Part:
// withdraw amount function
const withdrawAmount = () => {
  //getting new amount
  const withdrawField = document.getElementById("withdrawInput");
  const newWithdrawAmount = withdrawField.value;
  if (newWithdrawAmount !== "") {
    // getting old amount
    const withdrawShow = document.getElementById("withdrawShow");
    const oldWithdrawAmount = withdrawShow.innerText;
    // total withdraw amount
    const totalWithdrawAmount =
      parseFloat(oldWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawField.value = "";
    // remove from total balance
    const getTotalBalance = document.getElementById("totalBalance");
    const showTotalBalance = parseFloat(getTotalBalance.innerText);
    // checking the Balance for withdraw amount
    if (showTotalBalance < newWithdrawAmount) {
      alert("You don't have enough Balance");
    } else {
      // Show withdraw amount
      withdrawShow.innerText = totalWithdrawAmount;
      // show total Balance
      getTotalBalance.innerText =
        showTotalBalance - parseFloat(newWithdrawAmount);
    }
  } else {
    alert("type any number!");
    withdrawField.value = "";
  }
};

// Input field Enter key listener
const withdrawInputEnter = document.getElementById("withdrawInput");
withdrawInputEnter.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const withdrawBtn = document.getElementById("withdrawBtn");
    withdrawBtn.click();
  }
});
