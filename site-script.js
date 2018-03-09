console.log("hi");

var firstBox = document.getElementById('first-box');
console.log(firstBox);

firstBox.innerHTML = "hi";

firstBox.style.backgroundColor = "red";


function testfunction() { 
    console.log("hay");
    firstBox.style.backgroundColor = "green";
    firstBox.innerHTML = "bye";
}



firstBox.addEventListener("click", testfunction)




function onMouseOver() {
    firstBox.style.backgroundColor = "yellow";

}
firstBox.addEventListener("mouseover",onMouseOver);

function onMouseOut() {
    firstBox.style.backgroundColor = "orange";
}
firstBox.addEventListener("mouseout",onMouseOut);

function crossoutitems(event) {
    
    var item = event.target;
    if(item.style.textDecoration == "line-through"){ 
        item.style.textDecoration="none";
    
    } else {
        item.style.textDecoration="line-through";
    }
    
}

var schoolitems = document.getElementsByClassName("item");
// console.log(schoolitems);

for(var count = 0; count < schoolitems.length; count++) {
    console.log("loop ran");
    var item = schoolitems[count];
    item.addEventListener("click", crossoutitems);
}



var timebetweenupdates = 1000;

function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
console.log ("the time is",date );
console.log(hours, minutes, seconds); 
}

var clocktimer = setInterval(displayTime,timebetweenupdates);


var hoursbox = document.getElementById("hours");

var minutesbox = document.getElementById("minutes");

var secondsbox = document.getElementById("seconds");