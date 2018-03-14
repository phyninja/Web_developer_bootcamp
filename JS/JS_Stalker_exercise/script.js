var firstName = prompt("Please enter your First Name")
var lastName = prompt("Please enter your Last Name")
var age = prompt("Please enter your age")
while (age < 0){
	age = prompt("Age cannot be negative. Please enter again")
}
alert("Your name is " + firstName + " " + lastName + ". You are " + age + " years old! *mic drop*")


//Calculate how many days the user has been alive
var daysAlive = age * 365;
alert("You've been alive for about " + daysAlive + " days. (You old brah) ")

//Conditionals practise
if (age == "21"){
	alert("Happy 21st birthday!!")
}

//Calculate if age is Odd or even
if (age % 2 == 1){
	alert("your age is odd!")
}
else if (age % 2 == 0){
	alert("your age is even!")
}
else {
	alert("your age is neither odd nor even. You're weird.")
}

//See if age is a Perfect Square
if (Math.sqrt(age) % 1 == 0 ){
	alert("Wow, your age is a perfect square :)")
}
