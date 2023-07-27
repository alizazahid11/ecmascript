//Q1
const personal_info={
    name:"aliza",
    age:22,
    occupation:"Student"
}
for(const x in personal_info){
    console.log(`${x}: ${personal_info[x]}`);
}
let arr=["aliza",22,"student"]
for(const y in arr){
    console.log(arr[y])
}

//Q2
const object2={
    name:"aliza",
    age:22,
    country:'pakistan'
};
for(const k in object2){
    console.log(`${k}:${object2[k]}`);
}

//Q3
let numbs = [1, 2, 3, 4, 5];
console.log("Array Indices:");
for (let index = 0; index < numbs.length; index++) {
  console.log(index);
}
//Q4
const mes = "ALIZAY";

console.log("Characters in the string:");
for (const index in mes) {
  const character = mes[index];
  console.log(character);
}

//Q5
const scores = new Map();
scores.set('John', 95);
scores.set('Alice', 85);
scores.set('Bob', 78);
scores.set('Emily', 92);

console.log("Name and Score pairs:");
const scoresObject = Object.fromEntries(scores);
for (const name in scoresObject) {
  const score = scoresObject[name];
  console.log(`${name}: ${score}`);
}


//Q6
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
  };
for(const c in car){
    console.log(`${c}:${car[c]}`)
}  
