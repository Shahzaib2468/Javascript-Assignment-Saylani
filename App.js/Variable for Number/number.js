// 1. Declare a variable called age & assign to it your age. 
// Show your age in an alert box.

var age = prompt("What is your age");
alert("I am"+" "+(age)+" "+"years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor 
// has visited a web page. Show his/her number of visits on your web page. 
// For example: “You have visited this site N times”.

var n = localStorage.getItem('on_load_counter');

    if (n === null) {
        n = 0;
    }

    n++;

    localStorage.setItem("on_load_counter", n);
    alert("You have visited"+" "+(n)+" "+"times");

    // 3. Declare a variable called birthYear & assign to it your birth year. 
    // Show the following message in your browser:

var birthyear = prompt("What is your birth year");
document.write("My birth year is"+" "+(birthyear));
