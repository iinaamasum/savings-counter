function readInput(id) {
  const intput = document.getElementById(id);
  const inputValue = parseFloat(intput.value);
  if (inputValue === Number) {
    intput.value = "";
    return inputValue;
  } else {
    intput.style.background = "red";
    intput.value = "Please Enter a Number"
  }
}

/* catching input from input feild */
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = readInput("input-one");
  const food = readInput("input-two");
  const rent = readInput("input-three");
  const clothes = readInput("input-four");
  const savingPercent = readInput("input-five");

  const totalExpenses = food + rent + clothes;
  const currentBalance = income - totalExpenses;

  document.getElementById("total-exp").innerText = totalExpenses;
  document.getElementById("balance").innerText = currentBalance;
});
