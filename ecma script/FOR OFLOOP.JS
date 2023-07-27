//Q1
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

for (const fruit of fruits) {
  console.log(fruit);
}

//Q2
const message='aliza zahid';
for(const character of message){
    console.log(character);
}

//Q3
const personii = {
    name:'aliza',
    age:22,
    country:'Pakistan'
};
for(const key in personii ){
    const value = personii[key];
   console.log(value);
}

//Q4
const colors = new Set(['Red', 'Green', 'Blue', 'Yellow', 'Purple']);
for(const clr of colors){
    console.log(clr);
}

//Q5
let x=[];
for(let i=0;i<10;i++){
    x.push(i);

}
console.log("array",x);
for(let i=0;i<x.length;i++){
    
 console.log("For Loop - Value at index", i, ":", x[i]);
      
}
for(const myarr in x){
    console.log("For-Of Loop - Value:",myarr);
}