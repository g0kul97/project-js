let readlineSync = require('readline-sync');

let a=parseInt(readlineSync.question('Enter the number : '));
let b=parseInt(readlineSync.question('Enter the number : '));

product= a*b

console.log("product =",product);