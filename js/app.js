/* error message display none by js */
const validationProperty = document.querySelectorAll(".display-property");
for (const valprop of validationProperty) {
  valprop.style.display = "none";
}
/* error showing function */
function vlidationInput(valString, valNegative, valPositive) {
  validationProperty[0].style.display = valString;
  validationProperty[1].style.display = valNegative;
  validationProperty[2].style.display = valPositive;
}

/* input function */
function readInput(id) {
  const intput = document.getElementById(id);
  const inputValue = parseFloat(intput.value);
  intput.value = "";
  return inputValue;
}

/* global variable */
var income = 0,
  savingPercent = 0,
  currentBalance = 0;

/* catching input from expense and income feild */
document.getElementById("calculate-btn").addEventListener("click", function () {
  income = readInput("input-one");
  const food = readInput("input-two");
  const rent = readInput("input-three");
  const clothes = readInput("input-four");
  document.getElementById("input-one").value = "";

  /* validation */
  if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
    vlidationInput("none", "block", "none");
  } else if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    vlidationInput("block", "none", "none");
  } else {
    const totalExpenses = food + rent + clothes;
    currentBalance = income - totalExpenses;
    vlidationInput("none", "none", "block");

    if (currentBalance >= 0) {
      document.getElementById("balance").innerText = currentBalance;
    } else {
      document.getElementById("balance").innerText =
        "❌ Higher expenses than income";
    }

    document.getElementById("total-exp").innerText = totalExpenses;
  }
});

/* catching input from save feild */
document.getElementById("save-btn").addEventListener("click", function () {
  savingPercent = readInput("input-five");
  const savingAmount = (income * savingPercent) / 100;
  /* checking percentance */
  if (isNaN(savingPercent)) {
    vlidationInput("block", "none", "none");
    return;
  } else if (savingPercent < 0) {
    vlidationInput("none", "block", "none");
  } else if (savingPercent > 100) {
    document.getElementById("saving-amount").innerText =
      "❌ Percentance should be less than 100";
    return;
  }
  /* checking remaining amount */
  if (currentBalance - savingAmount < 0) {
    document.getElementById("remaining-amount").innerText =
      "❌ Can't save money, Income low";
  } else {
    document.getElementById("remaining-amount").innerText =
      currentBalance - savingAmount;
  }
  document.getElementById("saving-amount").innerText = savingAmount;
});
