function outerFun(){
    
    let outerVariable = 0;

    function innerFun(){

        outerVariable += 1
        console.log(`the count value is ${outerVariable}`);
        
    }

    return innerFun;
}

exmp = outerFun()

exmp()

/*

1.outerFun() is executed first because the right side of the assignment is evaluated before the result is      assigned to exmp.

2.When outerFun() executes, a Function Execution Context (FEC) is created and pushed onto the Call Stack.
During the creation phase:
 -Memory is allocated for outerVariable.
 -Memory is allocated for innerFun.
 -outerVariable is initially set to undefined.
During the execution phase:
 -outerVariable gets the value 0.
 -innerFun is defined.
 -outerFun returns the reference to innerFun.

3.After outerFun() completes, its execution context is removed from the Call Stack.
The reference of innerFun is stored in exmp.

4.Normally, local variables of a function are eligible for garbage collection after the function finishes execution.

5.However, since innerFun still references outerVariable, JavaScript keeps the outer lexical environment alive in memory.

6. When exmp() is called, it executes innerFun.
   innerFun accesses and updates outerVariable from the outer function's lexical scope.
   Even though outerFun() has finished execution, innerFun can still access its variables because the lexical environment is preserved.
This preserved relationship between a function and its outer lexical environment is called a Closure.

Definition: A closure is a combination of a function and its lexical environment, allowing the function to access variables from its outer scope even after the outer function has finished execution.

*/
