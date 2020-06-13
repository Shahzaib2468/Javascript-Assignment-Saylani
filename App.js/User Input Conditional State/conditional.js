// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var x = prompt("Where you from");

if (x === "karachi"){
    alert("Welcome to city of light")
} 

var y = prompt("What is your gender");

if (y === "male"){
    alert("Good Morning Sir")

} else{
    alert("Good Morning Ma’am")
}

var z = prompt("Input color of road traffic signal")

if (z === "red"){
    alert("Must Stop")

} else if("yellow"){
    alert("Ready to move")
}
  else{
    alert("Move now")
}


// Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table:

var score = prompt("What is your score");
score = parseInt(score);

if (score > 80){
    document.write("Remark: Excellent:"+"<br />" +"A-one grade");

} else if (score > 70){
    document.write("Remark: Good:"+"<br />" +"A grade");

} else if (score > 60){
    document.write("Remark: You need to improve:"+"<br />" +"B grade");

} else {
    document.write("Remark: Failed:"+"<br />" +"F");

}
