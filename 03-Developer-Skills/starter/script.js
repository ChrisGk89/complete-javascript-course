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
    console.log(
      `Dolphins wins with ${avgDolphins} points vs ${avgKoalas} points of Koalas`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win with ${avgKoalas} points vs ${avgDolphins} points of Dolphins`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);


scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);