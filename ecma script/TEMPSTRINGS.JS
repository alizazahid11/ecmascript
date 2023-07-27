//Q1
function strgen(name,age){
    return`hello my name is ${name} and i am ${age} years old`;
   
}
let n="aliza";
let a=22;
console.log(strgen(n,a));

//Q2
function sumAndAverage(numbers) {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
  
    const average = sum / numbers.length;
    return `Sum: ${sum}, Average: ${average.toFixed(2)}`;
  }
  
  // Example usage:
  const numbersArray = [10, 20, 30, 40, 50];
  console.log(sumAndAverage(numbersArray));

  //Q3
  function createHTMLElement(tagName, text) {
    return `<${tagName}>${text}</${tagName}>`;
  }
  
 
  const tagName = "h1";
  const text = "Hello, World!";
  const htmlElement = createHTMLElement(tagName, text);
  console.log(htmlElement);
  
  //Q4
  function generateProductInfo(product) {
    return `Product: ${product.name}, Price: $${product.price.toFixed(2)}, Quantity: ${product.quantity}`;
  }
  
  const productInfo = {
    name: "Widget",
    price: 19.99,
    quantity: 3,
  };
const productInformation = generateProductInfo(productInfo);
console.log(productInformation);
  
//Q5
function dat(dd,mm,yy){
    return `${dd}/${mm}/${yy}`;
}
const d=10;
const m=10;
const y=2001;
console.log(dat(d,m,y));