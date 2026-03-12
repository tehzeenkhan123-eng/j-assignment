const prompt = require("prompt-sync")();
//1. Print Numbers
//Write a program that prints numbers 1 to 20 using a for loop.
//let num="1";
//for(let i=1;i<=20;i=++num){console.log(num);}

//2. Even Numbers
//Write a program that prints all even numbers from 1 to 50 using a for loop.
//let i="2";
//for(i=2;i<=50;i+=2){console.log(i);}

//3. Multiplication Table
//Ask the user for a number and print its multiplication table from 1 to 10 using a for loop.
//Example:
//7 x 1 = 7
//7 x 2 = 14
//...
//let n=7;
//for(let i=1;i<=10;i++){console.log(n, "*", i, "=", n * i);}



//4. Sum of Numbers
//Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
//let i = 1;
//let sum=0;
//while(i<=100)
    //{
        // console.log(i);
       // sum+=i;  
        //i++;
    //}
    //console.log(sum);

//5. Countdown
//Create a program that prints a countdown from 10 to 1 using a while loop and then prints
//"Blast off!".
//let i=10;
//while(i>=1)
    //{console.log(i);i--;}
//console.log("blast off!")


//6. Password Checker
//Ask the user to enter a password.
//Keep asking until the correct password "1234" is entered.
//Use a do...while loop.
//let password="1234";
//let userpassword;
//do{
   // userpassword = prompt("Enter your password");
//}while(userpassword!=password)
//console.log("Access granted")


//7. Count Digits
//Ask the user for a number and write a program to count how many digits it has.
//Example:
//Input: 54321
//Output: 5 digits
//Use a while loop.




//8. Reverse a Number
//Ask the user for a number and reverse the digits.
//Example:
//Input: 1234
//Output: 4321
//Use a while loop.

//9. Print Characters of a Word
//Ask the user to enter a word and print each character using a for...of loop.
//Example:
//Input: hello
//Output:
//h
//e
//l
//l
//o
//let a="java";
//for(let val of a){
 //   console.log(val);   
//}



//10. Print Object Keys
//Given the object:
//let user = {
//username: "alex",
//age: 21,
//city: "Delhi"
//};
//Use a for...in loop to print all keys of the object.
//Example output:
//username
//age
//city
//let user={
   // username:"alex",
    //age:"21",
   // city:"Delhi"
//};
//for(let key in user)
   // {console.log(key)}


//1. Instagram Likes Counter
//A post gets 50 likes every hour.
//Write a program that prints the total likes after each hour for 10 hours.
//Example:
//Hour 1 → 50 likes
//Hour 2 → 100 likes
//Hour 3 → 150 likes
//Use a for loop.
let likes=0;
for(let hour=1;hour<=10;hour++)

{ likes= likes + 50;
    console.log("hour"+ hour + "→" + likes +"likes");
}
//2. Gaming XP Level Up
//A player needs 100 XP to level up.
//Starting from 0 XP, increase XP by 20 each round and print the XP after every round until the
//player reaches 100 XP.
//Use a while loop.


//3. Password Guessing Game
//The correct password is "gamer123".
//Ask the user to enter the password again and again until it is correct.
//Print "Access Granted " when correct.
//Use a do...while loop.

//4. Username Letter Checker
//Ask the user to enter their username.
//Print each character of the username on a new line.
//Example:
//Input: ninja
//Output:
//n
//i
//n
//j
//a
//Use a for...of loop.

//5. YouTube Subscriber Milestones
//A YouTuber gains 1000 subscribers each month.
//Write a program that prints subscriber milestones for 12 months.
//Example:
//Month 1 → 1000 subscribers
//Month 2 → 2000 subscribers
//Month 3 → 3000 subscribers
//Use a for loop.

//test
