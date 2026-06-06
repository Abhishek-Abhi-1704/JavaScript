// Callback Function: A callback function is a function passed as an argument to another function, which is invoked later by the receiving function when a specific task or event occurs.

let AreaOfCircle = (radius) => Math.PI * radius * radius;

let AreaOfSquare = (side) => side*side;

let AreaOfEquilateralTriangle = (side) => (Math.sqrt(3)/4)*side*side;

let calc = (value,callback) => callback(value);

console.log(calc(10,AreaOfCircle));
console.log(calc(10,AreaOfCircle));
console.log(calc(10,AreaOfEquilateralTriangle));
