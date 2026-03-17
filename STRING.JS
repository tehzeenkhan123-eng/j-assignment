//1. String Length
//Ask the user to enter their name and print the length of the name using str.length.
//Example output:
//Your name has 5 characters
// let str ="Tehzeen"
// console.log(str.length)

//2. Uppercase Conversion
//Ask the user to enter a sentence and convert it into uppercase using .toUpperCase().
// let str ="hello"
// console.log(str.toUpperCase());


//3. Lowercase Conversion
//Ask the user to enter a word and convert it into lowercase using .toLowerCase().
// let str="HELLO";
// console.log(str.toLowerCase());

//4. Remove Extra Spaces
//Ask the user to enter a sentence with extra spaces at the beginning and end.
//Remove the spaces using .trim().
//Example:
//Input: " hello world "
//Output: "hello world"
// let str ="   hi my name is TEHZEEN    "
// console.log(str.trim())

//5. Extract Part of a String
//Ask the user to enter a word and print the first 3 characters using .slice().
// let str =" I love designing"
// console.log(str.slice(8));

//6. Combine Two Strings
//Ask the user to enter their first name and last name and combine them using .concat().
//Example:
//First name: John
//Last name: Doe
//Output: John Doe
// let first  = "john"
// let second ="doe"
// console.log(first.concat(second))

//7. Replace Word
//Ask the user to enter a sentence.
//Replace the word "bad" with "good" using .replace().
//Example:
//Input: This is a bad day
//Output: This is a good day
// let str="I like playing";
// str=str.replace("playing","swimming");
// console.log(str);

//8. Find Character at Position
//Ask the user to enter a word and print the character at index 2 using .charAt().
// let str="Badminton";
// console.log(str.charAt(8));

//9. Template Literal Practice
//Ask the user to enter their name and age.
//Print the result using template literals.
//Example:
//My name is Alex and I am 20 years old.
let num=96456456464;
let name="John";
console.log(`My Name is ${name} and this is my number ${num},`);


//10. Username Generator
//Ask the user to enter their full name.
//Create a username using:
//• first 3 letters of the name
//• add 123
//Example:
//Input: Rahul
//Output: rah123
//Use .slice() and .toLowerCase().