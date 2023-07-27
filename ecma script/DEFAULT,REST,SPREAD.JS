//Q1
function numb(a=0,n=0){
    
    return a+n;
}
console.log(numb());
console.log(numb(2));
console.log(numb(3,2));

//Q2
function collectArguments(...args) {
    return args;
  }
  console.log(collectArguments(1, 2, 3)); 
  console.log(collectArguments("apple", "banana", "cherry")); 
  console.log(collectArguments(true, 42, "hello", { key: "value" })); 
  
//Q3
function findMaxValue(ni) {
    return Math.max(...ni);
  }
const numbArray = [10, 5, 25, 15];
  console.log(findMaxValue(numbArray)); 

//Q4
function arrays(arr1,arr2){
    let con=[...arr1,...arr2]
    return con;
}  
let array1=["2","ali","33"];
let array2=[2,6,9,6];
console.log(arrays(array1,array2))
  
//Q5
function addIdToObject(person) {
    const newPerson = {
      ...person,
      id: generateUniqueId()
    };
    return newPerson;
  }
  
  function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  
  const personInf = {
    name: "Aliza",
    age: 22,
    occupation: "Student",
  };
  
  const personWithId = addIdToObject(personInf);
  console.log(personWithId);
  
  