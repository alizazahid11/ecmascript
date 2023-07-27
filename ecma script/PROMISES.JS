//Q1
const calculateSquare = (number) => new Promise(resolve => setTimeout(() => resolve(number * number), 1000));
calculateSquare(5)
  .then(result => {
    console.log("Square:", result); // Square: 25
  })
  .catch(error => {
    console.error("Error:", error);
  });

  //Q2
  function getAllResolvedValues(promisesArray) {
    return Promise.all(promisesArray);
  }
  const promise1 = Promise.resolve(10);
  const promise2 = new Promise(resolve => setTimeout(() => resolve(20), 2000));
  const promise3 = Promise.resolve(30);
  
  const promisesArray = [promise1, promise2, promise3];
  
  getAllResolvedValues(promisesArray)
    .then(resolvedValues => {
      console.log(resolvedValues); // [10, 20, 30]
    })
    .catch(error => {
      console.error("Error:", error);
    });

//Q3
function sumResolvedValues(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then(([value1, value2]) => value1 + value2);
  }
  const prom1 = Promise.resolve(10);
  const prom2 = Promise.resolve(20);
  
  sumResolvedValues(promise1, promise2)
    .then(sum => {
      console.log("Sum of resolved values:", sum); 
    })
    .catch(error => {
      console.error("Error:", error);
    });
    
 //Q4
 function counte(value) {
    console.log(value);
    return value + 1;
  }
  
  Promise.resolve("Start Counting.")
    .then(counte)
    .then(counte)
    .then(counte)
    .then(counte)
    .catch(error => console.error("Error:", error));
  
  
     