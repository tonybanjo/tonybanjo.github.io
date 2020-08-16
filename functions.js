/* I might use these functions later, but were used mostly for testing purposes

document.getElementById("click").onmouseover = function (){
    mouseOver()};
document.getElementById("click").onmouseout = function() {
    mouseOut()};

function mouseOver() {
    document.getElementById("click").src = "image1.jpg";
}
function mouseOut() {
    document.getElementById("click").src = "image2.jpg";
}
*/

//This function targets a <p> with the id of 'change' and will change the text
function textChange() {
    document.getElementById("change").innerHTML = "THIS TEXT HAS BEEN TAKEN OVER BY JAVASCRIPT! REFRESH BROWSER TO RESET!!";
}

//This function will change the background and font color to simulate "night mode"
function nightMode() {
    document.body.style.background = "#121212";
    document.body.style.color = "#BB85FC";
    document.getElementById("night").style.background = "#000000";
    document.getElementById("night").style.color = "#C8A2C8";
    document.getElementById("night2").style.background = "#000000";
    document.getElementById("night2").style.color = "#C8A2C8";
    document.getElementById("night3").style.background = "#1a2421";
    document.getElementById("night3").style.color = "#C8A2C8";
    document.getElementById("nighttext").style.color = "#C8A2C8";
}

// This function will append a new div container with the CSS class 'newdiv'
function createDiv() {
var newDiv = document.createElement('div');
newDiv.innerHTML = "We have added a new element!";
newDiv.setAttribute('class', 'newdiv');
document.body.appendChild(newDiv);
}

// This function uses an array with common colors, then checks a user input with an if/else statement to respond in two different ways
function colorResponse () {
    var color = ['red', 'blue', 'green', 'blue', 'yellow', 'orange', 'black', 'white', 'pink', 'purple'];
    var answer = document.getElementById("favcolor").value;
    if (color.includes(answer)) {
        alert("I like that color too!");
    } else {
        alert("I don't know that color.");
    }
}
//This function takes a user defined number to create the 'MAX' value of a range for a random number
function randomNum () {
        var input = document.getElementById("number_select");
        var number = input.value;
        var randNum = Math.floor(Math.random() * number);
        //alert (randNum);
        return (randNum);
}
//This function changes the content of the targeted div container to display the random number from the randomNum function
function numberDiv () {
    randomNum();
    document.getElementById("numberdiv").innerHTML = randomNum ();
}
/*This function takes the value of the random number from the div container targeted by numberDiv() and generates that 
number of animated divs in random positions, that are shaped like stars. More stars are added everytime the user clicks a button. */
function starrySky () {
    var getValue = document.getElementById("numberdiv");
    var starNum = getValue.innerHTML;
    var randomPositionLeft = Math.floor(Math.random() * 101);
    var randomPositionTop = Math.floor(Math.random() * 101);
        for (let i = 0; i < starNum; i++) {
            var starDiv = document.createElement('div');
            document.body.appendChild(starDiv);
            var randomPositionLeft = Math.floor(Math.random() * 101);
            var randomPositionTop = Math.floor(Math.random() * 101);
            starDiv.setAttribute('class', 'stars');
            starDiv.style.left = (randomPositionLeft) + "%";
            starDiv.style.top =  (randomPositionTop) + "%";

        }
}