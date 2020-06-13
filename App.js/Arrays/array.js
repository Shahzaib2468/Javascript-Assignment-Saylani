//Arrays

var cities = ["Karachi", "Islamabad", "Quetta", "Peshawar", "Lahore"];
document.write(cities+"<br />"+"<br />")
document.write("Selected cities list"+"<br />"+cities[1]+"<br />"+"<br />");

// Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var a = arr.join(" ");
document.write(arr+"<br /><br />");
document.write(a);