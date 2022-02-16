function readInput(id) {
  const intput = document.getElementById(id);
  const inputValue = parseFloat(intput.value);
  intput.value = "";
  return inputValue;
}

/* catching input from input feild */
document.getElementById("calculate-btn").addEventListener("click", function () {
  const inputValOne = readInput("input-one");
  const inputValTwo = readInput("input-two");
  const inputValThree = readInput("input-three");
  const inputValFour = readInput("input-four");
  const inputValFive = readInput("input-five");
});
