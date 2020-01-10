# Write a function that detects if two strings are an anagram e.g. ‘bleat’ and ‘table’ are anagrams but ‘eat’ and ‘tar’ are not.

```
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i]) {
        return false;
      }
    }
    return true;
  }
}

rl.question("Please enter the first String : ", answer1 => {
  rl.question("Please enter the second String : ", answer2 => {
    let a = answer1
      .toLowerCase()
      .trim()
      .split("")
      .sort();
    let b = answer2
      .toLowerCase()
      .trim()
      .split("")
      .sort();

    let result = isAnagram(a, b);
    console.log(result);
    rl.close();
  });
});

```

test : Test Folder

# Explain the design pattern used in following:

```
interface Vehicle {
      int set_num_of_wheels()
      int set_num_of_passengers()
      boolean has_gas()
  }

```

a) Explain how can you use the pattern to create car and plane class?
b) Use a different design pattern for this solution.

There is No concept of interface in Javascript but we can use the Constructor pattern to create new car and plane object.

```

function Vehicle( set_num_of_wheels, set_num_of_passengers, has_gas ) {

  this.set_num_of_wheels = set_num_of_wheels;
  this.set_num_of_passengers = set_num_of_passengers;
  this.has_gas = has_gas;

}



// We can create new instances of the car and plane

var Car = new Vehicle( 4 ,10,true );
var Plane = new Vehicle( 10, 0, false );


console.log(Car.has_gas)
console.log(Plane.set_num_of_wheels)

```

or classes

```

class Vehicle {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

}

class Car extends Vehicle {
    constructor(name, price) {
        super(name, price);
    }
}

class Plane extends Vehicle {
    constructor(name, price) {
        super(name, price);
    }
}

let c = new Car('CAR', 3033);
let p = new Plane('PLANE', 2222);

```

# Write a video player application with ‘Play’, ‘Forward’ , ‘Rewind’ functionalities. Please write pseudocode for this program and explain the design pattern you will use to develop these three functionalities.

Here The Observer Pattern is used to solve the Problem . We use the Event Observer pattern here When some button is pressed by the User.

code : public/index.html

Run:

> npm i

> node index.js

Demo : http://localhost:5000/
