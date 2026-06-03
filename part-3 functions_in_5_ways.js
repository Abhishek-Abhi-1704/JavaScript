// function declaration

function add(x, y) {
  return x + y;
}
console.log(add(100, 300));


// function expression

let add = function (x,y) {
    return x + y;
}
console.log(add(100, 300));


// arrow function

let add = (x, y) => { return x + y }
console.log(add(100, 300));


// immediately invoked function expression (IIFE)

(function () {
  console.log(200 + 3000);
})();
