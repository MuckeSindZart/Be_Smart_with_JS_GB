/* task 1 */
const NUM = 123;
console.log(NUM);

let a;
a = 5;
a = 7;
console.log(a);

const B = 1 + 2 + 3;
console.log(B);

let [a1, b1] = [1, 2];
console.log(`${a1} ${b1}`);

// task 2

const c = 10;
const d = 2;

const sumNumbers = c + d;
const subNumbers = c - d;
const multiNumbers = c * d;
const divNumbers = c / d;
const sumResult = sumNumbers + subNumbers + multiNumbers + divNumbers;

console.log("Variables:", sumNumbers, subNumbers, multiNumbers, divNumbers);
console.log(`MathVariables: 
summary = ${sumNumbers},
subtraction = ${subNumbers}, 
multiplication = ${multiNumbers}, 
division = ${divNumbers}`);
console.log("Summary:" + sumResult);
console.log("Summary:", sumResult);
console.log(`Summary: ${sumResult}`);

//task 4

const a2 = 1.5;
const b2 = 0.75;
console.log(a2 + b2);

const a3 = -99;
console.log(-a3);

//task 5

const myName = "Alex";
console.log(myName);
const JAVA = "java";
const SCRIPT = "script";
const JAVASCRIPT = JAVA + SCRIPT;
console.log(JAVASCRIPT);

const hello = "Hello";
const world = "World";
console.log(`${hello} ${world}!`);

// Funny index.html Button Console Counter
let countClickButton = 0;

function clickCount(countClickButton) {
  console.log(`Нажали на кнопку ${countClickButton} раз`);
}
