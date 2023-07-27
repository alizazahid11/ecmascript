 //Q1:
const pi=3.14;
console.log(pi);
// pi=41;
// console.log(pi);

//Q2:
function sumOfSquares(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const square = arr[i] * arr[i];
      sum += square;
    }
  
    return sum;
  }
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers)); // Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55)
 
//Q3
arry=["aliza","farzeen","urooj","cheeku"];
for(let i=0;i<arry.length;i++){
  let first=arry[i][0];
  console.log(first);
}

//Q4
function generateasteriks(n){
  const asterik="*";
  return asterik.repeat(n)
}
const numAsterisks = 50;
console.log(generateasteriks(numAsterisks));

//Q5:
function object(name,property){
  var msg="hello"  +" "+ name+"!"+" your age is"+" "+property+" "+"years old";
  return msg;
}
var ob="aliza"
var ag=22;
console.log(object(ob,ag));

//Q6
function findMaxValue(numbers) {
  let max;
  if (numbers.length > 0) {
    max = Math.max(...numbers);
  } else {
    // Handle the case when the array is empty
    max = undefined;
  }
  return max;
}
const numberArray = [10, 5, 25, 15];
console.log(findMaxValue(numberArray)); // Output: 25
