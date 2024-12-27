function myFunction() {

let asciiNumber = document.getElementById("ascii-code").value;
asciiNumber.input.charCodeAt(0);

if(asciiNumber >= 48 && asciiNumber <= 57 ){
    alert(asciiNumber + " Is a Number ");
 }

}

// Question # 2

document.write("<h3>Answer 2</h3>");

let a = prompt("Enter 1st Number");
let b = prompt("Enter 2nd Number");

if(a > b) {
    document.write("Big Number is " + a);
}
else if(b > a) {
    document.write("Big Number is " + b);
}


// Question # 3

document.write("<h3>Answer 3</h3>");


let userNumber = prompt("Enter Number Value Check Positive or Negative");

if (userNumber > 0){
    document.write("Given Number is Positive");
} else if (userNumber < 0){
    document.write("Given Number is Negative")
}else {
    document.write("Number is Zero");
}

// Question # 5

document.write("<h3>Answer 5</h3>");

let userPass = "Hello";
let askUser = prompt("Enter Password");

if(askUser === "Hello"){
    document.write("“Correct! The password you entered matches the original password");
} if(askUser === "") {
    document.write("Please Enter Your Password");
} else {
    document.write("Incorrect password");
}

// Question # 6

// This if/else statement does not work. Try to fix it:

document.write("<h3>Answer 6</h4>");

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write(greeting);


// Question # 7

document.write("<h3>Answer 7</h4>");

let time = +prompt("Enter Time");

if(time >= 0 && time <= 1200){
    document.write("Good Morning");
} else if (time >= 1200 && time <= 1700){
    document.write("Good Afternoon");
} else if (time >= 1700 && time <= 2100){
    document.write("Good Evening");
} else if (time >= 1700 && time <= 2359){
    document.write("Good Night");
} else {
    document.write("Please Enter Right Number");
}