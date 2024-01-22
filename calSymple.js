//code by FazzRqy
//Please those who are experienced in JavaScript to help me so that I am more proficient in the JavaScript programming language 

let x,y;

do {
    x = prompt('input numero x = ');
} while (isNaN(x));

do {
    y = prompt('input numero y = ');
} while (isNaN(y));

let operation = prompt('Input operation (*, /, +, -) = ');

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
    alert('error \n \n[END SCRIPT]')
      return;
}

let conf = prompt(` u numero x is = ${x}\n u operation is = ${operation}\n and u numero y is = ${y}\n it's true? (y/n) = `);

switch (conf) {
    case 'y':
        alert(`u result is = ${result}\n \n[END SCRIPT]`);
    break;
    
    case 'n':
        alert('[END SCRIPT]');
    break;
    
    default:
     alert('error\n \n[END SCRIPT]');
     return;
};
