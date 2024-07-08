"use strict";
/* 
// Activity #1
function showMsg() {
  console.log(`Hello world!`);
}
showMsg();

// Activity #2
const showMsgArg = function (name) {
  console.log(`Hi, ${name}!`);
};
showMsgArg(`Kevin`);

// Activity #3
const doubleNumber = (x) => x * 2;
console.log(doubleNumber(10));

// Activity #4
function promThreeNumbers(a, b, c) {
  return (a + b + c) / 3;
}
console.log(promThreeNumbers(10, 8, 10));

// Activity #5
const returnMaxNumber = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
console.log(returnMaxNumber(7, 8));

// Activity #6
const multiply = (x) => x * x;
console.log(multiply(10));
 */

/* // Challenge Section #3
// Activity #1
const calcIMC = function (height, weight) {
  return weight / (height * height);
};
console.log(calcIMC(1.47, 32));

// Activity #2
function calcFactorial(number) {
  for (let i = number - 1; i > 0; i--) {
    number *= i;
  }
  return number;
}
console.log(calcFactorial(5));

// Activity #3
const convertDollar = (dollar) => {
  return dollar * 4.8;
};
console.log(convertDollar(2));

// Activity #4
function calcRectangle(width, height) {
  console.log(`The rectangle's area is ${width * height}`);
  console.log(`The rectangle's perimeter is ${width * 2 + height * 2}`);
}
calcRectangle(5, 10);

// Activity #5
const calcCircle = function (radius) {
  console.log(`The circle's area is ${3.1416 * (radius * radius)}`);
};
calcCircle(10);

// Activity #6
const showMultiplyTable = (table) => {
  for (let i = 1; i <= table; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
  }
};
showMultiplyTable(10);
 */

/* // Challenge Section #4
// * Activity #1
const genericList = [];

// * Activity #2
const programmingLanguages = [`JavaScript`, `C`, `C++`, `Kotlin`, `Python`];

// * Activity #3
programmingLanguages.push(`Java`);
programmingLanguages.push(`Ruby`);
programmingLanguages.push(`GoLang`);

// * Activity #4
const showElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
showElements(programmingLanguages);

// * Activity #5
const showElementsReverse = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};
showElementsReverse(programmingLanguages);

// * Activity #6
const prom = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] / arr.length;
  }

  return result.toFixed(1);
};
console.log(prom([10, 9, 8, 10, 9]));

// * Activity #7
const showMaxAndMin = function (arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  console.log(`Max number: ${max} and Min number: ${min}`);
};

showMaxAndMin([3, 4, 7, 1, 23]);

// * Activity #8
const sumElements = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
};
console.log(sumElements([10, 15, 20]));

// * Activity #9
const findNumber = function (arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (el === arr[i]) {
      return i;
    }
  }
  return -1;
};
console.log(findNumber([4, 3, 8, 16, 20], 7));

// * Activity #10
const sumTwoArr = function (arr1, arr2) {
  const resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    resultArr[i] = arr1[i] + arr2[i];
  }

  return resultArr;
};
console.log(sumTwoArr([1, 2, 3], [1, 2, 3]));

// * Activity #11
const sqrArr = function (arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i] * arr[i]);
  }

  return resultArr;
};
console.log(sqrArr([2, 5, 10]));
 */

// Test
