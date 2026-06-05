let a = 10;
let b;

b = a; // pass by value
console.log(a, b);

b = 20;
console.log(a, b); // pass by value means that when we assign a variable to another variable, it creates a copy of the value. So, when we change the value of b, it does not affect the value of a.

let obj1 = {
  name: "Abhi",
  age: 22,
};

console.log(obj1);

let obj2;
obj2 = obj1;
console.log(obj2);

obj2.name = "Abhishek";
console.log(obj1); // pass by reference means that when we assign a variable to another variable, it creates a reference to the original value. So, when we change the value of obj2, it also changes the value of obj1 because both obj1 and obj2 are referencing the same object in memory.
