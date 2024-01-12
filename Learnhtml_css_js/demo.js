/*alert('test')
console.log("hie guys");
console.log("l really love coding");

let age = 32;
let name_name = "takunda";
let married = false; // let and const keywords are used for block scoping, thus the 
// variables cannot be accessed from other blocks

console.log(age, "thats my age");
console.log("my name is ", name);
console.log(married);
 
document.getElementById("p1").innerHTML = "hello " + name_name;
document.getElementById("p2").innerText = "my age is " + age;
document.getElementById("p3").innerHTML = "Iam l married " + married;

let username = window.prompt("Whats your name");
console.log(username)

let username;

document.getElementById("mybutton").onclick = function(){

username = document.getElementById("mytext").value;
console.log(username);
document.getElementById("mylabel").innerHTML = "hello "+ username;
}*/


let age = window.prompt("What is your age");
var linebreak = "<br />";
console.log(typeof age);

age = Number(age);
age +=1;
document.write(linebreak);
console.log("happy birthday you are: "+ age + "years old");

