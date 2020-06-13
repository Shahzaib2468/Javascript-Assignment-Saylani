// Write a program to take a number in a variable, do 
// the required arithmetic to display the following result in your browser.

var a = 10;
document.write("The value of a is:"+" "+a+"<br />","<br />");

var b = ++a;
document.write("The value of ++a is:"+" "+b+"<br />");

var c = b++;
document.write("The value of a is:"+" "+c+"<br />", "<br />");

var d = c++;
document.write("Now The value of a++ is:"+" "+d+"<br />");

var f = c++;
document.write("The value of a is:"+" "+f+"<br />", "<br />");

var g = --f;
document.write("The value of --a is:"+" "+g+"<br />");
document.write("Now The value of a is:"+" "+g+"<br />","<br />");

var h = f--;
document.write("The value of a is:"+ " "+h+"<br />");

var j = f--;
document.write("Now the value of a is:"+ " "+j+"<br />","<br />");

// 2. What will be the output in variables a, b & result 
// after execution of the following script:

var a = 2, b = 1; 
var result = --a - --b + ++b + b--;

document.write("The value of a is 2"+"<br />");
document.write("The value of b is 1"+"<br />");
document.write("The result is"+" "+result);
        // =  1  -  0  +  1  + 1 = 3

// Explain the output at each stage: 

--a; //1
--a - --b; //1
--a - --b + ++b; //2
--a - --b + ++b + b--; //3



