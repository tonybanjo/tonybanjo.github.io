/*
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
function textChange() {
    document.getElementById("change").innerHTML = "THIS TEXT HAS BEEN TAKEN OVER BY JAVASCRIPT! REFRESH BROWSER TO RESET!!";
}

function nightMode() {
    document.body.style.background = "#121212";
    document.body.style.color = "#BB85FC";
    document.getElementById("night").style.background = "#000000";
    document.getElementById("night").style.color = "#C8A2C8";
    document.getElementById("night2").style.background = "#000000";
    document.getElementById("night2").style.color = "#C8A2C8";
}

function createDiv() {
var newDiv = document.createElement('div');
newDiv.innerHTML = "We have added a new element!";
newDiv.setAttribute('class', 'newdiv');
document.body.appendChild(newDiv);
}

function colorResponse () {
    var color = ['red', 'blue', 'green', 'blue', 'yellow', 'orange', 'black', 'white', 'pink', 'purple'];
    var answer = document.getElementById("favcolor").value;
    if (color.includes(answer)) {
        alert("I like that color too!");
    } else {
        alert("I don't know that color.");
    }
}

function randomNum () {
        var input = document.getElementById("number_select");
        var number = input.value;
        var randNum = Math.floor(Math.random() * number);
        //alert (randNum);
        return (randNum);
}

function numberDiv () {
    randomNum();
    document.getElementById("numberdiv").innerHTML = randomNum ();
}

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
            /* starDiv = document.createElement('div');
            starDiv.setAttribute('class', 'stars');
            starDiv.style.left = i * 2;
            document.body.appendChild(starDiv); */
}