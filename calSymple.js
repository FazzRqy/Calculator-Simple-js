//code by FazzRqy
//Please those who are experienced in JavaScript to help me so that I am more proficient in the JavaScript programming language 
const readline = require('readline-sync');
function ask() {
let x,y;

do {
    x = readline.question('input numero x = ');
} while (isNaN(x));

do {
    y = readline.question('input numero y = ');
} while (isNaN(y));

let operation = readline.question('Input operation (*, /, +, -) = ');

let result;
        
switch (operation) {
 
    case '*':
        result = x * y;
    break;
    
    case '/':
        result = x / y;
    break;
    
    case '+':
        result = +(x) + +(y);
    break;
    
    case '-':
        result = x - y;
    break;
    
    default:
    console.log('error \n \n[END SCRIPT]')
      return;
}
console.log(x + operation + y + '=' + result)
};
ask()
