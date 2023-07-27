//Q1
const person = {
    name: "Aliza",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  person.greet(); 
  
  //Q2
  function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
      console.log(`Current speed of ${this.brand} is ${this.speed} km/h.`);
    };
  }
  const myCar = new Car("Toyota");
  myCar.accelerate(50);
  myCar.printSpeed(); 
  
  //Q3
  const calculator = {
    value: 0,
  
    add: function(number) {
      this.value += number;
    },
  
    subtract: function(number) {
      this.value -= number;
    },
  
    multiply: function(number) {
      this.value *= number;
    },
  
    printValue: function() {
      console.log(`Current value is ${this.value}.`);
    }
  };
  calculator.add(5);
  calculator.subtract(2);
  calculator.multiply(3);
  calculator.printValue(); 

  //Q4
  const book={
    title:"jungle book",
   author:"edward",
   pages:50,
   printinfo:function(){
    console.log(`Title:${this.title}, Author:${this.author}, Pages:${this.pages} `)
   }
  };
  book.printinfo();

  //Q5
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce=function(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
  }
  const person1 = new Person("Aliza", 22);
const person2 = new Person("usama", 21);
person1.introduce();
person2.introduce()

//Q6
const counter = {
    count: 0,
  
    increment: function() {
      this.count += 1;
    },
  
    reset: function() {
      this.count = 0;
    }
  };
  console.log(counter.count); // Output: 0
  counter.increment();
  console.log(counter.count); // Output: 1
  counter.increment();
  console.log(counter.count); // Output: 2
  counter.reset();
  console.log(counter.count); // Output: 0
  
  //Q7
  const product = {
    name: "Example Product",
    price: 100,
    discount: 10,
  
    calculateDiscountedPrice: function() {
      const discountedPrice = this.price - (this.price * (this.discount / 100));
      return discountedPrice;
    }
  };
  console.log(product.calculateDiscountedPrice()); 
  
  //Q8
  const game = {
    play: function() {
      console.log("Playing the game!");
    }
  };
   // Call the play function directly:
  game.play(); // Output: "Playing the game!"
  

  