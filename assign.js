//1. Positive, Negative, or Zero
//Write a program that checks whether a number is:
//• Positive
//• Negative
//• Zero
//Use if...else if.

//let a=6;
//if (a > 0) {
//    console.log("Positive");
//} else if 
//(a < 0) {
//    console.log("Negative");
//} else {
//    console.log("Zero");
//}


//2. Even or Odd
//Write a program that checks whether a number is even or odd.
//Use if...else.
//let b=5;
//if (b % 2 === 0) {
    //console.log("Even");
//} else {
    //console.log("Odd");
//}



//3. Voting Eligibility
//Ask for a person's age and check:
//• If age ≥ 18, they can vote
//• Otherwise, they cannot vote
//Use if...else.
//let age=20;
//if (age >=18){
//    console.log("you can vote");
//}
//else {console.log("you cannot vote")}



//4. Largest of Two Numbers
//Write a program that compares two numbers and prints which number is greater.
//Use if...else.
//let num1=10;
//let num2=20;
//if (num1 > num2) {
//    console.log(num1);
//} else {
//    console.log(num2);
//}

//5. Student Grade System
//Write a program that assigns grades based on marks:
//• 90–100 → Grade A
//• 75–89 → Grade B
//• 50–74 → Grade C
//• Below 50 → Fail
//Use if...else if.
let marks=80;
if (marks >=90 && marks <=100){ console.log("grade A");}
else if (marks >=75 && marks <=89){ console.log("grade B");}
else if (marks >=50 && marks <=74){ console.log("grade C");}
else { console.log("Fail");}



//6. Number Between Range
//Write a program to check if a number is between 10 and 50.
//Use logical operator &&.
let num=25
 if (num >= 10 && num <= 50) {
            console.log("The number is between 10 and 50.");
        } else {
            console.log("The number is not between 10 and 50.");
        }



//7. Divisible by 3 and 5
//Write a program that checks:
//• If a number is divisible by both 3 and 5.
//Use && operator.
let a=45
if (a % 3==0 && a% 5==0) {
            console.log("The number is divisible by 3 and 5 .");
        } else {
            console.log("The number is not divisible by 3 and 5 ");
        }






//8. Login System
//Create a simple login check:
//• Username must be "admin"
//• Password must be "1234"
//If both are correct → Login Successful
//Otherwise → Invalid Credentials
//Use && operator.


let username = "ten";
let password = "5678";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}