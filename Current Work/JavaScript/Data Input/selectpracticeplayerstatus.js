var fs = require('file-system');

var maindata = JSON.parse(fs.readFileSync("Data Storage/maindata.JSON", 'utf8'));

var inputdate = maindata["Input Date"];

var playerstatus = {};

window.onload = function setupPage() {
	document.getElementById("inputpagetitle").innerHTML = inputdate[0] + ": " + inputdate[1];
	var roster = document.getElementById("roster");

	for (var i = 0; i < maindata["Player"].length; i++) {
		var playername = maindata["Player"][i]["Name"].toLowerCase().replace(" ","");

		var newplayer = document.createElement("p");
		newplayer.setAttribute('id',playername);
		newplayer.innerHTML = maindata["Player"][i]["Name"];

		var newinput = document.createElement("input");
		newinput.setAttribute('type','radio');
		newinput.setAttribute('name','' + playername + 'practicing');
		newinput.setAttribute('id','' + playername + 'practicingradio');

		var newinput2 = document.createElement("input");
		newinput2.setAttribute('type','radio');
		newinput2.setAttribute('name','' + playername + 'practicing');
		newinput2.setAttribute('id','' + playername + 'injuredradio');

		var newinput3 = document.createElement("input");
		newinput3.setAttribute('type','radio');
		newinput3.setAttribute('name','' + playername + 'practicing');
		newinput3.setAttribute('id','' + playername + 'absentradio');

		var playerdiv = document.createElement("div");
		playerdiv.setAttribute('id','' + maindata["Player"][i]["Name"] + '');

		playerdiv.appendChild(newplayer);

		var radiodiv = document.createElement("div");
		radiodiv.setAttribute('id','' + playername + 'radiodiv');

		radiodiv.appendChild(newinput);
		radiodiv.appendChild(document.createTextNode("Practicing"));
		radiodiv.appendChild(document.createElement("br"))
		radiodiv.appendChild(newinput2);
		radiodiv.appendChild(document.createTextNode("Injured"));
		radiodiv.appendChild(document.createElement("br"))
		radiodiv.appendChild(newinput3);
		radiodiv.appendChild(document.createTextNode("Absent"));
		radiodiv.appendChild(document.createElement("br"))
		radiodiv.appendChild(document.createElement("br"))

		playerdiv.appendChild(radiodiv);
		roster.appendChild(playerdiv);
	}

	var newbutton = document.createElement("button");
	newbutton.innerHTML = "Confirm";
	newbutton.setAttribute('id','confirmstatusbutton');
	newbutton.setAttribute('onclick','confirmPlayerStatus()');
	roster.appendChild(newbutton);
}

function confirmPlayerStatus() {
	for (var i = 0; i < maindata["Player"].length; i++) {
		var currentplayer = maindata["Player"][i]["Name"].toLowerCase().replace(" ","");

		if (document.getElementById('' + currentplayer + 'practicingradio').checked) {
			playerstatus[maindata["Player"][i]["Name"]] = "Practicing";
		}

		else if (document.getElementById('' + currentplayer + 'injuredradio').checked) {
			playerstatus[maindata["Player"][i]["Name"]] = "Injured";
		}

		else if (document.getElementById('' + currentplayer + 'absentradio').checked) {
			playerstatus[maindata["Player"][i]["Name"]] = "Absent";
		}		
	
		document.getElementById('' + currentplayer + 'radiodiv').style.display = "none";
		document.getElementById('' + currentplayer + '').innerHTML += " - " + playerstatus[maindata["Player"][i]["Name"]];
	}

	document.getElementById('confirmstatusbutton').style.display = "none";

	var newbutton = document.createElement('a');
	newbutton.innerHTML = "Collect Data";
	newbutton.setAttribute('id','collectdatabutton');
	newbutton.setAttribute('href','practicedatainput.html');
	
	document.getElementById('pagecontent').appendChild(newbutton);

	for (var i = 0; i < maindata["Practices"].length; i++) {
		if (maindata["Input Date"][0] === maindata["Practices"][i]["Date"]){
			maindata["Practices"][i]["Player Status"] = playerstatus;
			maindata["Practices"][i]["Next Sequence"] = 0;
			break;
		}
	}
	fs.writeFile("Data Storage/maindata.JSON", JSON.stringify(maindata, null, "\t"), function (err) {
        if (err != undefined) {
            alert(err.message,"Player Status Save error")
        }
    });
}