const boy = prompt("Boyingizni kiriting:");
const ogirlik = prompt("Ogirligingizni kiriting:");

const BMI = ogirllik / boy ** 2;

if (BMI <= 18.5) {
  alert(`Sizninh BMI ${BMI} va siz ozginsiz`);
} else if (BMI > 18.8 && BMI <= 24.9) {
  alert(`Sizning BMI ${BMI} va siz normalsiz `);
} else if (BMI <= 25 && 29.9) {
  alert(`Sizning BMI ${BMI} va siz ortancha vaznga egasiz`);
} else if (BMI >= 30) {
  alert(`Sizning BMI ${BMI} va siz semissiz`);
}
