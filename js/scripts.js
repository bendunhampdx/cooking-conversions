function convertLiters(gallons) {
  return gallons * 3.78541;
}

const number1 = prompt("Enter a number of gallons to convert into liters")
alert(convertLiters(number1))