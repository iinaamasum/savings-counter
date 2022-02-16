function readInput(id) {
  const intput = document.getElementById(id);
  const inputValue = parseFloat(intput.value);
  if (typeof inputValue != "string") {
    intput.value = "";
    return inputValue;
  }
}

var income = 0;
document.getElementById("input-one").addEventListener("blur", function () {
  if (parseFloat(document.getElementById("input-one").value) != "string") {
    income = parseFloat(document.getElementById("input-one").value);
  }
});

/* catching input from expense and income feild */
document.getElementById("calculate-btn").addEventListener("click", function () {
  const food = readInput("input-two");
  const rent = readInput("input-three");
  const clothes = readInput("input-four");

  const totalExpenses = food + rent + clothes;
  var currentBalance = income - totalExpenses;

  document.getElementById("total-exp").innerText = totalExpenses;
  document.getElementById("balance").innerText = currentBalance;
});

/* catching input from save feild */
document.getElementById("save-btn").addEventListener("click", function () {
  const savingPercent = readInput("input-five");
  const savingAmount = (income * savingPercent) / 100;
  console.log(savingAmount);
  document.getElementById("saving-amount").innerText = savingAmount;
  document.getElementById("").innerText = currentBalance - savingAmount;
});
