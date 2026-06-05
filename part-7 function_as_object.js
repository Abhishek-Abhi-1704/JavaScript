
/*
object are first class citizens in JavaScript, 
which means that they can be treated like any other value. 
1]  They can be assigned to variables, 
2]  passed as arguments to functions, and 
3]  returned from functions. 
*/

/*
The functions in JavaScript are objects, 
and they have properties and methods just like any other object.

properties: name, length
behaviour: call(), apply(), bind()

that why function are called object in js
*/





let c1 = {
  name: "Abhi",
  age: 22,
  city: "Delhi",
  country: "India",
};

function exmp(student) {
  console.log(student);
  c1.name = "Abhishek";
}

exmp(c1);
console.log(c1); // when we pass an object to a function, we are passing a reference to the object. So, when we change the value of the object inside the function, it also changes the value of the object outside the function because both the function and the variable are referencing the same object in memory.

c1.name = "chethan";
console.log(c1); // when we change the value of the object outside the function, it also changes the value of the object inside the function because both the function and the variable are referencing the same object in memory.

console.log(exmp.name);
console.log(exmp.length);

let greet = () => console.log("hello");
let greet1 = greet;
let greet2 = greet;
greet1();
console.log(greet1.name);
console.log(greet2.name);
console.log(greet.name);






