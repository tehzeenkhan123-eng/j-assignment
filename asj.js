//1. Phone Battery Drama
//Your phone battery percentage is given.
//Write a program that prints:
//• Battery > 80 → "Chill Plenty of battery"
//• Battery between 30 and 80 → "You're good "
// Battery between 10 and 29 → "Low battery "
// Battery < 10 → "Find a charger NOW! "
//Use if...else if.
let battery = 5;

if (battery > 80) {
    console.log("Chill Plenty of battery");
} 
else if (battery >= 30 && battery <= 80) {
    console.log("You're good");
} 
else if (battery >= 10 && battery <= 29) {
    console.log("Low battery");
} 
else {
    console.log("Find a charger NOW!");
}
//2. Netflix Night
//A streaming app checks if the user can watch a movie.
//Conditions:
//• Age ≥ 18
//• Has subscription = true
//If both are true → "Enjoy your movie "
//Otherwise → "Access denied "
//Use && operator.
let age="25"
let subscription="true"
if (age >=18  && subscription === "true") {
    console.log("enjoy your movie");
} else {
    console.log("access denied");
}

//3. Instagram Likes Check
//A post gets some likes.
//Write a program that prints:
//• Likes > 1000 → "Viral post "
//• Likes between 100 and 1000 → "Getting popular "
//• Likes < 100 → "Keep posting "
//Use if...else if.
let likes = "900";

if (likes > 1000) {
    console.log("viral post");
} 
else if (likes >= 100 && likes <= 1000) {
    console.log("getting popular");
} 
else  {console.log("keep posting");} 


   



//4. Weekend Mood
//Check if today is Saturday or Sunday.
//• If yes → "Party time "
//• Otherwise → "Back to work/study "
//Use || operator.
let today="saturday"
if (today === "saturday" || today ==="sunday"){ console.log("party time")}
else{console.log("back to work/study")}