let fun1 = () => console.log("Fetching data ...");

// setInterval() repeatedly executes a callback function after every specified
// time interval until it is stopped.

// Here, fun1 will execute every 2 seconds.

// setInterval() returns a unique interval ID, which can be used to control
// or stop the interval later.

let intervalID = setInterval(fun1, 2000);

// clearInterval() stops the execution of a running interval.
// It accepts the interval ID returned by setInterval().

setTimeout(() => clearInterval(intervalID), 10000);

// setTimeout() executes its callback once after the specified delay.
// After 10 seconds, the callback runs and calls clearInterval(intervalID),
// which stops the interval from executing any further.

// The callback is scheduled every 2 seconds, but the exact execution time depends on whether the Call Stack is free. If JavaScript is busy executing some long-running synchronous code, the callback may be delayed. This is because the Event Loop can move the callback to the Call Stack only when the stack becomes empty.

