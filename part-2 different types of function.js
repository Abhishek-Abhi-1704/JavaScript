let num1 = 100;
let num2 = 300;

// no i/p parameter and no return value
function add1(){
    console.log(num1+num2);
}
add1()

// no i/p parameter with return value
function add2(){
    return num1+num2;
}
let sum1 = add2()
console.log(sum1);

// with i/p value no return type
function add3(x,y){
    console.log(x+y);
}
add3(num1,num2)

// with i/p value and  return type
function add4(x,y){
    return x+y;
}
let sum2 = add4(num1,num2)
console.log(sum2);


