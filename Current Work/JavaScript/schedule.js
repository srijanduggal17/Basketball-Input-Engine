var fs = require('file-system');

var neweventarray = [];
var maindata;
var eventname;

window.onload = function loadSchedule() {
	maindata = JSON.parse(fs.readFileSync("Data Storage/maindata.JSON", 'utf8'));
	for (var i = 0; i < maindata["Schedule"].length; i++) {

		var row = document.createElement("tr");
		var event = document.createElement("td");
		var date = document.createElement("td");
		var starttime = document.createElement("td");
		var endtime = document.createElement("td");
		var location = document.createElement("td");
		var datainputbutton = document.createElement("td");

		event.innerHTML = maindata["Schedule"][i]["Event"];
		date.innerHTML = maindata["Schedule"][i]["Date"];
		starttime.innerHTML = maindata["Schedule"][i]["Start Time"];
		endtime.innerHTML = maindata["Schedule"][i]["End Time"];
		location.innerHTML = maindata["Schedule"][i]["Location"];

		var newbutton = document.createElement("a");
		newbutton.innerHTML = 'Input Data';
		
		var indate = [maindata["Schedule"][i]["Date"]];
		indate.push(maindata["Schedule"][i]["Event"]);

		newbutton.setAttribute('onclick','inputData(\'' + indate + '\')');

		switch(maindata["Schedule"][i]["Event"]) {
			case "Game":
				newbutton.setAttribute('href','../HTML/Data Input/selectgameplayerstatus.html');
				break;
			case "Practice":
				newbutton.setAttribute('href','../HTML/Data Input/selectpracticeplayerstatus.html');
				break;
		}
		
		datainputbutton.appendChild(newbutton);

		row.appendChild(event);
		row.appendChild(date);
		row.appendChild(starttime);
		row.appendChild(endtime);
		row.appendChild(location);
		row.appendChild(datainputbutton);

		document.getElementById("eventtable").appendChild(row);
	}
}

function inputData(inp) {
	maindata["Input Date"] = inp.split(',');
	fs.writeFile("Data Storage/maindata.JSON", JSON.stringify(maindata, null, "\t"), function (err) {
        if (err != undefined) {
            alert(err.message,"Input Date Save error")
        }
    });
}

function addEvent() {
	document.getElementById("newevent").style.display ="block";
}

function selectEvent(ev) {
	eventname = ev;
}

function confirmEvent() {
	var eventdate = document.getElementById("neweventdate").value;
	var eventstarttime = document.getElementById("neweventtimestart").value;
	var eventendtime = document.getElementById("neweventtimeend").value;
	var eventlocation = document.getElementById("neweventlocation").value;

	var newobj = {
		"Event" : eventname,
		"Date" : eventdate,
		"Start Time" : eventstarttime,
		"End Time" : eventendtime,
		"Location" : eventlocation
	}

	var newrow = document.createElement("tr");
	var newevent = document.createElement("td");
	var newdate = document.createElement("td");
	var newstarttime = document.createElement("td");
	var newendtime = document.createElement("td");
	var newlocation = document.createElement("td");
	var datainputbutton = document.createElement("td");

	newevent.innerHTML = eventname;
	newdate.innerHTML = eventdate;
	newstarttime.innerHTML = eventstarttime;
	newendtime.innerHTML = eventendtime;
	newlocation.innerHTML = eventlocation;

	var newbutton = document.createElement("button");
	newbutton.innerHTML = 'Input Data';
	newbutton.setAttribute('onclick','inputData(' + eventdate + ')');
	datainputbutton.appendChild(newbutton);

	newrow.appendChild(newevent);
	newrow.appendChild(newdate);
	newrow.appendChild(newstarttime);
	newrow.appendChild(newendtime);
	newrow.appendChild(newlocation);
	newrow.appendChild(datainputbutton);

	document.getElementById("eventtable").appendChild(newrow);

	document.getElementById("newevent").style.display = "none";
	document.getElementById("neweventdate").value="";
	document.getElementById("neweventtimestart").value="";
	document.getElementById("neweventtimeend").value="";
	document.getElementById("neweventlocation").value="";
	eventname = null;

	neweventarray.push(newobj);
}

function saveEvents() {
	maindata["Schedule"] = maindata["Schedule"].concat(neweventarray);
	console.log(maindata);

	for (var i = 0; i < neweventarray.length; i++) {
		if (neweventarray[i]["Event"] === "Practice") {
			var newpractice = {
				"Date" : neweventarray[i]["Date"],
				"Status" : 0,
				"Player Status" : {},
				"Data" : [],
			}
			maindata["Practices"].push(newpractice);
		}
	}

    fs.writeFile("Data Storage/maindata.JSON", JSON.stringify(maindata, null, "\t"), function (err) {
        if (err != undefined) {
            alert(err.message,"Schedule Save error")
        }
        else {
            alert("Schedule has been saved");
        }
    });
}