let readlineSync = require('readline-sync');

let length=parseInt(readlineSync.question('Enter length of the rectangle : '));
let bredth=parseInt(readlineSync.question('Enter bredth of the rectangle : '));

area= length*bredth

console.log(area);