// JavaScript is a synchronous and single-threaded language.

// Synchronous means JavaScript executes one statement at a time
// in the order in which they appear in the program.

// Example:

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// Here, Task 2 waits for Task 1 to complete.
// Task 3 waits for Task 2 to complete.

// This behavior works well for fast operations.

// Problems arise when JavaScript encounters
// time-consuming operations such as:

// 1. Fetching data from a server
// 2. Database operations
// 3. Reading files
// 4. Timers
// 5. Network requests

// Example:

console.log("Start");
setTimeout(() => {
    console.log("Data Received");
}, 5000);
console.log("End");


// If JavaScript waited 5 seconds for setTimeout()
// to complete before executing the next statement,
// the entire application would become unresponsive.

// Imagine opening Instagram and waiting for all posts,
// comments and messages to load before being allowed
// to click anything on the screen.

// That would create a poor user experience.

// To avoid blocking the execution of the program,
// JavaScript uses asynchronous programming.

// Asynchronous programming allows long-running operations
// to execute in the background while JavaScript continues
// executing the remaining code.

console.log("Start");
setTimeout(() => {
    console.log("Data Received");
}, 5000);
console.log("End");

// Output:

// Start
// End
// Data Received

// JavaScript does not wait for the timer to finish.

// 1. Timer is registered by Web APIs.
// 2. JavaScript continues executing remaining code.
// 3. After the timer completes, the callback is placed
//    in the Callback Queue.
// 4. Event Loop moves the callback to the Call Stack
//    when the Call Stack becomes empty.
// 5. Callback executes.

// To perform actions after an asynchronous operation completes,
// JavaScript initially used Callbacks.

function fetchUser(callback){

    setTimeout(() => {
        callback("User Data");
    }, 2000);
}

fetchUser((data) => {
    console.log(data);
});

// A callback is a function passed as an argument
// to another function and executed later.

// Callbacks work well for a small number of
// asynchronous operations.

// Problem starts when multiple asynchronous operations
// depend on each other.

// Using callbacks:

setTimeout(() => {
    console.log("Fetch User");

    setTimeout(() => {
        console.log("Fetch Posts");

        setTimeout(() => {
            console.log("Fetch Comments");

            setTimeout(() => {
                console.log("Fetch Likes");

            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Here every task depends on the previous task.

// Because of this dependency,
// callbacks become nested inside callbacks.

// This situation is called "Callback Hell".

// Callback Hell is also known as
// the "Pyramid Of Doom".

// Problems of Callback Hell:
// 1. Code becomes difficult to read.
// 2. Code becomes difficult to maintain.
// 3. Debugging becomes harder.
// 4. Error handling becomes complicated.
// 5. The code structure keeps moving
//    towards the right side.

// To overcome the problems of Callback Hell,
// JavaScript introduced Promises.