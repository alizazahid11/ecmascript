//Q1
function sumTwoNumbers(numbersArray) {
    // Destructuring the numbersArray into variables 'num1' and 'num2'
    let [num1, num2] = numbersArray;
    return num1 + num2;
  }
  
  const number = [5, 10];
  console.log(sumTwoNumbers(number)); // Output: 15
  
 //Q2
function getPersonInfo(person) {
    const { name, age, occupation } = person;
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  }
  const personInfo = {
    name: "aliza",
    age: 22,
    occupation: "student",
  };
  
  console.log(getPersonInfo(personInfo));
  
  //Q3
  function getPersonWithHighestScore(people) {
    const [highestScorer, ...rest] = people.sort((a, b) => b.score - a.score);
    return highestScorer.name;
  }
  const peopleArray = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 87 },
    { name: "Charlie", score: 92 },
    { name: "David", score: 98 },
  ];
  
  const highestScorerName = getPersonWithHighestScore(peopleArray);
  console.log(highestScorerName); 
  
  //Q4
  function getInitials(person) {
    const { firstName = '', lastName = '', middleName = '' } = person;
    const initials = firstName[0] + middleName[0] + lastName[0];
    return initials
  }
  const persoInfo = {
    firstName: "Aliza",
    lastName: "Zahid",
    middleName: "Muhammad",
  };
  
  console.log(getInitials(persoInfo)); // Output: "JRD"
  
//Q5
function obj(arr){
    const[first,...rest]=arr;
   const last=rest.pop();
    return {first,last};
}
let yrr=["aa","bb","dd"];
console.log(obj(yrr));
