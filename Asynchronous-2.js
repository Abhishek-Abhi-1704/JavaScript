let fun1 = () => console.log("fun1 starts execution");

let fun2 = () => {
    console.log("fun2 starts execution")
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    while (Date.now() <= end) {
        
    }
    console.log("fun2 completes execution")
};
let fun3 = () => {
     console.log("fun3 starts execution")
    let start = Date.now();
    let delay = 2000;
    let end = start + delay;
    while (Date.now() <= end) {
        
    }
    console.log("fun3 completes execution")
};

let fun4 = () => console.log("fun4 starts execution");

fun1();
setTimeout(fun2,5000);
setTimeout(fun3,2000);
fun4()

// exceution fun1 --> fun4 --> fun3 --> fun2
