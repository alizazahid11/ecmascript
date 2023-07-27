// //Q1
async function delayedGreeting(name) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Hello, ${name}! Welcome to our website.`);
  }

  delayedGreeting("alizay");

//Q2
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          name: "aliza",
          age: 22,
          city: "karachi",
        };
        resolve(data);
      }, 3000); // Simulating a 3-second delay
    });
  }
  async function getData() {
    try {
      const result = await fetchData();
      console.log("Data fetched:", result);
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  getData();
  
  //Q3
  function fetchUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: "aliza zahid" },
          { id: 2, name: "urooj khalid" },
          { id: 3, name: "farzeen shahid" },
        ];
        resolve(users);
      }, 4000); // Simulating a 4-second delay
    });
  }
  

  async function getUsers() {
    try {
      const users = await fetchUsers();
      console.log("Users fetched:", users);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  getUsers();

  //Q4
  function fetchData(id) {
    return new Promise((resolve, reject) => {
      fetch(`https://github.com/alizazahid11/firebase_hosting${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  
 //Q5
 function fetchData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(`https://github.com/alizazahid11/firebase_hosting${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }, 5000); // Simulating a 5-second delay
    });
  }
 //Q6
 let globalCounter = 0;

function timeout(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      globalCounter++;
      resolve({ counter: globalCounter, argument: value });
    }, 1000);
  });
}

async function incrementAndOutput(value) {
  const result = await timeout(value);
  console.log(`Global Counter: ${result.counter}, Argument: ${result.argument}`);
  return result;
}

async function runLoop() {
  for (let i = 1; i <= 10; i++) {
    const result = await incrementAndOutput(i);
    console.log("Returned Result:", result);
  }
}

runLoop();


  