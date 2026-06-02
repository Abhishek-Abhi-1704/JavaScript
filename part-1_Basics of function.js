// function is a self-contained, reusable block of code designed to perform a specific task

// When a Node.js/JavaScript application starts, the Node.js runtime environment is created and allocates memory for program execution.This memory is mainly divided into Stack Memory and Heap memory 

// Stack Memory: Stack memory stores primitive values, variable names, references to objects, and function execution contexts. It is fast, organized, and follows the Last In, First Out (LIFO) principle.

// Heap Memory: Heap memory stores actual objects, arrays, functions, and other complex data types. It is dynamically allocated and accessed through references stored in the stack.

function greet(name)
{
    console.log(`Hello ${name}`)
}

greet("Abhi")

let num1 = 100;
let num2 = 200;

function add(a,b)
{
    return a+b;
}
sum = add(num1,num2)
console.log(sum);
