let user1 = prompt("Enter first number : ");
let operation = prompt("Enter operator (+ ; - ; * ; /) : ");
let user2 = prompt("Enter second number : ");

switch(operation)
{
    case "+":
    alert(+user1 + +user2);
    break;
    case "-":
    alert(user1 - user2);
    break;
    case "*":
    alert(user1 * user2);
    break;
    case "/":
        if (user2 != 0)
        {
            alert(user1 / user2);
        }
        break;
    default: alert("ERROR :( ");
}