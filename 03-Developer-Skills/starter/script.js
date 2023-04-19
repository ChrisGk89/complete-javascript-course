// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(64, 54, 49);

console.log(scoreDolphins);
console.log(scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins with ${avgDolphins} points vs ${avgKoalas} points of Koalas`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win with ${avgKoalas} points vs ${avgDolphins} points of Dolphins`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
console.log(mark.bmi);
john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullname}'s BMI ${mark.bmi} is higher than ${john.fullname}'s BMI ${john.bmi}`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullname}'s BMI ${john.bmi} is higher than ${mark.fullname}'s BMI ${mark.bmi}`
  );
} else console.log("Both BMIs are equal");

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 152, 265, 234, 456, 876, 345, 234];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

const calcAverageOfArrays = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum/arr.length);
};

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverageOfArrays(bills));
console.log(calcAverageOfArrays(tips));
console.log(calcAverageOfArrays(totals));
