var fs = nodeRequire('file-system');
var maindata = JSON.parse(fs.readFileSync("Data Storage/maindata.JSON", 'utf8'));

var neweventarray = [];
var maindata;
var eventname;
var eventtable = document.getElementById('eventtable');

var eventeditrow;
var eventeditrownum;

var eventeditdate;
var eventeditstarttime;
var eventeditendtime;
var eventeditlocation;

function addEvent() {
	document.getElementById("newevent").style.display ="block";
}

function selectEvent(ev) {
	eventname = ev;
}

eventnextrowid = 0;

function makeEvent() {
	var eventdate = document.getElementById("neweventdate").value;
	var eventstarttime = document.getElementById("neweventtimestart").value;
	var eventendtime = document.getElementById("neweventtimeend").value;
	var eventlocation = document.getElementById("neweventlocation").value;

	if (eventdate !== "" && eventstarttime !== "" && eventendtime !== "" && eventlocation !== "") {
		var newobj = {
			"Event" : eventname,
			"Date" : eventdate,
			"Start Time" : eventstarttime,
			"End Time" : eventendtime,
			"Location" : eventlocation
		}

		var newrow = eventtable.insertRow(eventtable.rows.length - 1);
		var neweventname = newrow.insertCell();
		var newdate = newrow.insertCell();
		var newstarttime = newrow.insertCell();
		var newendtime = newrow.insertCell();
		var newlocation = newrow.insertCell();
		var neweditcell = newrow.insertCell();
		var newdeletecell = newrow.insertCell();

		neweventname.innerHTML = eventname;
		newdate.innerHTML = eventdate;
		newstarttime.innerHTML = eventstarttime;
		newendtime.innerHTML = eventendtime;
		newlocation.innerHTML = eventlocation;

		newdate.setAttribute('id','event' + eventnextrowid + '');
		
		var neweditbutton = document.createElement('button');
		neweditbutton.setAttribute('onclick','editEvent(' + eventnextrowid + ')');
		neweditbutton.setAttribute('name','' + eventnextrowid + '');
		neweditbutton.setAttribute('id','eventeditbutton' + eventnextrowid + '');
		neweditbutton.innerHTML = "Edit";

		neweditcell.appendChild(neweditbutton);

		var newdeletebutton = document.createElement('button');
		newdeletebutton.setAttribute('onclick','deleteEvent(' + eventnextrowid + ')');
		newdeletebutton.innerHTML = "Delete";

		newdeletecell.appendChild(newdeletebutton);

		document.getElementById("neweventdate").value="";
		document.getElementById("neweventtimestart").value="";
		document.getElementById("neweventtimeend").value="";
		document.getElementById("neweventlocation").value="";
		eventname = null;

		neweventarray.push(newobj);

		eventnextrowid += 1;
	}
}

function editEvent(rownum) {
	eventeditrownum = rownum;
	eventeditrow = document.getElementById('eventeditbutton' + rownum + '').parentNode.parentNode;

	eventeditname = eventeditrow.cells[0].innerHTML;
	eventeditdate = eventeditrow.cells[1].innerHTML;
	eventeditstarttime = eventeditrow.cells[2].innerHTML;
	eventeditendtime = eventeditrow.cells[3].innerHTML;
	eventeditlocation = eventeditrow.cells[4].innerHTML;

	$(eventeditrow.cells[0]).empty();
	$(eventeditrow.cells[0]).append("<button onclick=\"selectEvent('Game')\">Game</button><button onclick=\"selectEvent('Practice')\">Practice</button>");

	$(eventeditrow.cells[1]).empty();
	$(eventeditrow.cells[1]).append("<input type='date' id='editeventdate' value='" + eventeditdate + "'>");

	$(eventeditrow.cells[2]).empty();
	$(eventeditrow.cells[2]).append("<input type='time' id='editeventstarttime' value='" + eventeditstarttime + "'>");

	$(eventeditrow.cells[3]).empty();
	$(eventeditrow.cells[3]).append("<input type='time' id='editeventendtime' value='" + eventeditendtime + "'>");	

	$(eventeditrow.cells[4]).empty();
	$(eventeditrow.cells[4]).append("<input type='text' id='editeventlocation' value='" + eventeditlocation + "'>");	

	$(eventeditrow.cells[5]).children('button')[0].innerHTML = "Check";
	$(eventeditrow.cells[5]).children('button')[0].setAttribute('onclick','saveEventChanges()');

	document.getElementById('eventinputrow').style.display = "none";

	for (var i = 1; i < eventtable.rows.length - 1; i++) {
		$(eventtable.rows[i].cells[5]).children('button')[0].style.display = "none";
	}

	$(eventeditrow.cells[5]).children('button')[0].style.display = "table-cell";
}

function saveEventChanges() {
	var editedeventdate = document.getElementById('editeventdate').value;
	var editedeventstarttime = document.getElementById('editeventstarttime').value;
	var editedeventendtime = document.getElementById('editeventendtime').value;
	var editedeventlocation = document.getElementById('editeventlocation').value;

	var savedeventname;
	if (eventname !== null) {
		savedeventname = eventname;
	}
	else {
		savedeventname = eventeditname;
	}

	for (var i = 0; i < neweventarray.length; i++) {
		if (neweventarray[i]["Date"] === eventeditdate) {
			neweventarray[i] = {};
			neweventarray[i] = {
				"Event" : savedeventname,
				"Date" : editedeventdate,
				"Start Time" : editedeventstarttime,
				"End Time" : editedeventendtime,
				"Location" : editedeventlocation
			}
		}
	}

	$(eventeditrow.cells[0]).empty();
	eventeditrow.cells[0].innerHTML = savedeventname;

	$(eventeditrow.cells[1]).empty();
	eventeditrow.cells[1].innerHTML = editedeventdate;

	$(eventeditrow.cells[2]).empty();
	eventeditrow.cells[2].innerHTML = editedeventstarttime;

	$(eventeditrow.cells[3]).empty();
	eventeditrow.cells[3].innerHTML = editedeventendtime;	

	$(eventeditrow.cells[4]).empty();
	eventeditrow.cells[4].innerHTML = editedeventlocation;	

	document.getElementById('eventinputrow').style.display = "table-row";

	$(eventeditrow.cells[5]).children('button')[0].innerHTML = "Edit";
	$(eventeditrow.cells[5]).children('button')[0].setAttribute('onclick',"editEvent(" + eventeditrownum + ')');

	for (var i = 1; i < eventtable.rows.length - 1; i++) {
		$(eventtable.rows[i].cells[5]).children('button')[0].style.display = "table-cell";
	}

	eventname = null;
}

function deleteEvent(rownum) {
	var eventtodelete = document.getElementById('event' + rownum + '').innerHTML;

	for (var i = 0; i < neweventarray.length; i++) {
		if (neweventarray[i]["Date"] === eventtodelete) {
			neweventarray.splice(i,1);
		}
	}

	var rowtodelete = document.getElementById('event' + rownum + '').parentNode;
	$(rowtodelete).remove();	
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