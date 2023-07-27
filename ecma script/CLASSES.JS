//Q1
class Personsi {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const friend1 = new Personsi("ALIZA", "ZAHID");
  const friend2 = new Personsi("RAMSHA", "TARIQ");
  
  console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
  console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);
  
 //Q2
 class person3{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
 } 
 const infor=new person3("aliza",22);
 console.log(`hellow my name is ${infor.name} and my age is ${infor.age}`);

 //Q3
 class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  const rectangle1 = new Rectangle(5, 10);
  const rectangle2 = new Rectangle(7, 3);
  
  console.log("Area of rectangle1:", rectangle1.getArea()); 
  console.log("Perimeter of rectangle1:", rectangle1.getPerimeter()); 
  
  console.log("Area of rectangle2:", rectangle2.getArea()); 
  console.log("Perimeter of rectangle2:", rectangle2.getPerimeter()); 
  
  //Q4
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getDiameter() {
      return 2 * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  const circle1 = new Circle(5);
  const circle2 = new Circle(7);
  
  console.log("Diameter of circle1:", circle1.getDiameter()); 
  console.log("Circumference of circle1:", circle1.getCircumference()); 
  console.log("Area of circle1:", circle1.getArea()); 
  
  console.log("Diameter of circle2:", circle2.getDiameter()); 
  console.log("Circumference of circle2:", circle2.getCircumference()); 
  console.log("Area of circle2:", circle2.getArea()); 
    
  //Q5
  class Person3 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Student extends Person3 {
    constructor(name, age, course) {
      super(name, age);
      this.course = course;
    }
  
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old. I am a student studying ${this.course}.`;
    }
  }
  const student1 = new Student("aliza", 22, "Computer Science");
  const student2 = new Student("ali", 19, "Physics");
  
  console.log(student1.introduce());
 
  
  console.log(student2.introduce());

  
 

//Q6
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side); // Call the parent class constructor with side as both width and height
      this.side = side; // Store the side as a property of the Square class
    }
  
    getArea() {
      return this.side ** 2; // Override getArea to calculate area using the side
    }
  
    getPerimeter() {
      return 4 * this.side; // Override getPerimeter to calculate perimeter using the side
    }
  }
  
  // Example usage:
  const square1 = new Square(5);
  const square2 = new Square(7);
  
  console.log("Area of square1:", square1.getArea()); 
  console.log("Perimeter of square1:", square1.getPerimeter()); 
  
  console.log("Area of square2:", square2.getArea()); 
  console.log("Perimeter of square2:", square2.getPerimeter());
  
      
