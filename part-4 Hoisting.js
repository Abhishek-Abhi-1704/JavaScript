console.log(a);
var a = 100;
console.log(a);

// When JavaScript starts executing a program, it creates a Global Execution Context (GEC).
 
// The GEC has two phases: Memory Creation Phase and Execution Phase. 

// JavaScript does not physically move the variable to the top. Hoisting is just the behavior where variables and function declarations are processed before execution.

// During the memory creation phase, the variable a declared with var gets memory allocated and is initialized with undefined.

//  During the execution phase, the first console.log(a) prints undefined, then a is assigned the value 100, and the second console.log(a) prints 100. This behavior is called hoisting.

