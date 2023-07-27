//Q1
function counteraa() {
    let count = 0;
  
    function incrementAndLog() {
      count++;
      console.log(`Counter value: ${count}`);
    }
  
    return incrementAndLog;
  }
  
  const counterFunc = counteraa();
  
  counterFunc(); 
  counterFunc(); 
  counterFunc(); 
  
  //Q2
  function createMultiplier(n){
     return function mul(e){
        
     
     return e*n ;}
  }
const multiplyByTwo = createMultiplier(2);
console.log(multiplyByTwo(5)); // Output: 10
console.log(multiplyByTwo(10)); // Output: 20

const multiplyByThree = createMultiplier(3);
console.log(multiplyByThree(5)); // Output: 15
console.log(multiplyByThree(8)); // Output: 24

//Q3
function secretMessage(message) {
    return function (additionalMessage) {
      console.log(`Secret message: ${message}. Additional message: ${additionalMessage}`);
    };
  }
  const showSecret = secretMessage("Hello, this is a secret!");
  
  showSecret("Don't tell anyone.");
  showSecret("Keep it confidential."); 

  //Q4
  function calculates(a, b) {
    return {
      add: function() {
        return a + b;
      },
      multiply: function() {
        return a * b;
      }
    };
  }
  const calculators = calculates(5, 3);
  
  console.log(calculators.add());     
  console.log(calculators.multiply()); 
  
  