// 1. Write a program that take two numbers & add them in a new variable. 
// Show the result in your browser.

var x = 5;
var y = 8;
var z = x + y;
var u = document.getElementById("addition");
document.write("Sum of 5 and 8 is"+" "+z+"<br />");


// Write a script to display multiplication table of any number in your browser.

var a = 4;
for (var i=0; i<=10; i++){
    document.write(a + "x"+ i + "=" + a*i + "<br />");
}


// //subtraction
var m = 9;
var n = 5;
var k = m - n;
document.write("Subtraction of 9 and 5 is"+" "+k+"<br />");

// //Division
var p = 8;
var o = 4;
var d = p / o;
document.write("division of 8 and 4 is"+" "+d+"<br />");

// //Multiplication
var q = 2;
var e = 2;
var f = q * e;
document.write("Multiplication of 2 and 2 is"+" "+f+"<br />");

// // 3. Do the following using JS Mathematic Expressions

var ivalue = 5;
document.write("initial value:"+" "+ivalue+"<br />");

var value = ivalue++;
document.write("value after increament is:"+" "+ivalue+"<br />");

var add = ivalue + 7;
document.write("value after addition is:"+" "+add+"<br />");

var dec = --add;
document.write("value after decreament is:"+" "+dec+"<br />");

var divide = dec % 3;
document.write("value after reminder is:"+" "+divide+"<br />");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee).

var currency = prompt("10USD and 25Riyal conversion")
var USD = 1048;
var Riyal = 700;
var addition = USD + Riyal;
var total = addition * currency;
document.write("Total currency in pkr is"+" "+total);





