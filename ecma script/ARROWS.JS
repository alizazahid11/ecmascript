//Q1
const getStringLength = (str) => str.length;
const inputString = "Hello, world!";
console.log(getStringLength(inputString)); 

//Q2
const multiplyNumbers = (num1, num2) => num1 * num2;
console.log(multiplyNumbers(5,10)); 

//Q3
const calculateAverage = numbers => numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
const nsArray = [10, 20, 30, 40, 50];
const average = calculateAverage(nsArray);
console.log(average);

//Q4
const getname=(strr)=>`hello ${t}!`;
const t="aliza";
console.log(getname(t));

//Q5
const randomnum=()=>Math.random();
console.log(randomnum())