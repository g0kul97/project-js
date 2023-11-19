let readlineSync = require('readline-sync');

let age=parseInt(readlineSync.question('Enter your age : '));


if (age>=18){
    console.log("You are eligible for votting");
} else{
    console.log("Sorry you are not eligible for votting");
}