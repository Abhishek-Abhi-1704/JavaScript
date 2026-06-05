let userName = "Abhishek"
let userRole = "Admin"

let checkAccess = () => {
    let hasAccess = false;

    if(userRole === "Admin"){
        let welcomeMsg = `Hey ${userName}, you have admin privilages`;
        hasAccess = true;
        console.log(welcomeMsg);
    }
    console.log("Has Access : ",hasAccess);
}

checkAccess()

/*

1. global scope: userName, userRole, checkAccess  
            |
2. function Scope(CheckAccess function):  hasAccess
            |
3. Block scope(if block) : welcomeMsg

*/