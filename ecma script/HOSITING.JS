//Q1
function decleration(){
    console.log(dec); //undefined
  var dec=8;
  console.log(dec)
}
decleration();

//Q2
function decle(){
    // console.log(d); can't access without initialization in let
    let d=9;
    console.log(d);
}
decle();

//Q3
function de(){
    // console.log(e);can't access without initialization in let
    const e=10;
    console.log(e);
}
de();

//Q4
function predefine(){
    // console.log(g);//g is not define

}
predefine();

//Q5
printValue();  //you can call the function before its actual declaration in the code

function printValue() {
  console.log("Hello, world!");
}
