//get the date + time from the browser
//


var d = new Date();
// document.getElementById("demo").innerHTML = d.getTime();

var dateArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currentDay = dateArray[d.getDay()];

//conditional current day = saturday 

if (currentDay === "Friday"){
	//show Friday jpeg
	alert("Friday = true");

document.getElementById("title").innerHTML = "Is it finally Friday?";

} 

	else {
		//show !Friday jpeg

		alert("!Friday");
document.getElementById("title").innerHTML = "Hold in there budd... it is not Friday yet :("

	}