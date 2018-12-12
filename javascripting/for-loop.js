var total = 0
var limit = 10
for (var i = 0; i < 10; i++){
total = total+i;
}
console.log(total);

//Write a JavaScript program to get the length of an JavaScript object
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

//solución:
var cont = 0;
for(keys in student){
  cont = cont + 1;
}
console.log(cont);
