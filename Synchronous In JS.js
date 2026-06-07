// JS executes line by line

// 1. execution happen one at a time, sequentially
// 2. one piece of code will block other peice of code, bcz it execute in synchronously

// 3.this can freeze the UI, and make it unresponsive, it affect the user excepiernce

let task1 = () => {

    console.log("Task1 is starting");
    
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    
    console.log("Task1 is executing");
    
    while(Date.now() <= end){
        
    }
    console.log("Task1 is completed");
}

let task2 = () => {

    console.log("Task2 is starting");
    
    let start = Date.now();
    let delay = 10000;
    let end = start + delay;
    
    console.log("Task2 is executing");
    
    while(Date.now() <= end){
        
    }
    console.log("Task2 is completed");
}

task1();
task2();

//  task2 must wait until task1 completes because JavaScript executes code      synchronously on a single thread.

// The busy-wait loop in task1 blocks the call stack and prevents any othercode from executing.

// Only after task1 finishes can task2 start its execution.
// This blocking behavior can negatively impact performance and user experience, especially in browsers where the UI becomes unresponsive.