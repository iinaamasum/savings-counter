function readInput(id) {
  const intput = document.getElementById(id);
  const inputValue = parseFloat(intput.value);
  if (inputValue === Number) {
    intput.value = "";
    return inputValue;
  } else {
    intput.placeholder = "It's not a number";
  }
}

function calcPercent(income, savingPercent) {
  return (income * savingPercent) / 100;
}
/* catching input from expense and income feild */
document.getElementById("calculate-btn").addEventListener("click", function () {
  var income = readInput("input-one");
  const food = readInput("input-two");
  const rent = readInput("input-three");
  const clothes = readInput("input-four");

  const totalExpenses = food + rent + clothes;
  const currentBalance = income - totalExpenses;

  document.getElementById("total-exp").innerText = totalExpenses;
  document.getElementById("balance").innerText = currentBalance;
});

/* catching input from save feild */
document.getElementById("save").addEventListener("click", function () {
  const savingPercent = readInput("input-five");
  const sacingAmount = calcPercent(savingPercent);
});
