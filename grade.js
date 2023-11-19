let readlineSync = require('readline-sync');

let mark=parseInt(readlineSync.question('Enter your mark: '));

if(mark>=60){
    console.log("You are Passed")
}else{
    console.log("You are failed")
}