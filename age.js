let readlineSync = require('readline-sync');

let age=parseInt(readlineSync.question('Enter your age : '));

if(age<0){
    console.log("Invalid code.Try again");
}else if(age>=0 && age<=12){
    console.log("You are a child")
}else if(age>=13 && age<=19){
    console.log("You are a teenager ")
}else if(age>=20 && age<=59){
    console.log("You are a adult ")
}else{
    console.log("You are a senior ")
}