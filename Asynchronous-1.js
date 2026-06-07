let fun1 = () => {
    console.log("fun1 starts execution");
    console.log("fun1 completes execution");
}

let fun2 = () => {
    console.log("fun2 starts execution");
    let start = Date.now();
    let delay = 5000;
    let end = start+delay;
    while(Date.now() <= end){

    }
    console.log("fun2 completes execution");
}

let fun3 = () => {
    console.log("fun3 starts execution");
    console.log("fun3 completes execution");
}

fun1();
setTimeout(fun2,2000)
fun3()

// JavaScript is synchronous and single-threaded by default.
// Asynchronous behavior is achieved with the help of browser APIs (Web APIs)
// such as setTimeout, DOM APIs, fetch, etc., or Node.js APIs when running
// outside the browser.

// Execution Flow:
// 1. The Global Execution Context (GEC) is created.
// 2. fun1() is pushed onto the Call Stack, executes, and is removed.
// 3. setTimeout(fun2, 2000) is encountered.
//    - The timer is handled by the browser's Web API (or Node.js timer API).
//    - JavaScript does not wait for the timer to finish.
// 4. fun3() executes immediately after setTimeout is registered.
// 5. After 2 seconds, fun2 is placed into the Callback Queue.
// 6. The Event Loop continuously checks whether the Call Stack is empty.
// 7. When the Call Stack becomes empty, the Event Loop moves fun2 from the
//    Callback Queue to the Call Stack.
// 8. fun2 executes and completes.

// This demonstrates asynchronous behavior, where JavaScript continues
// executing other code instead of waiting for the timer to finish.