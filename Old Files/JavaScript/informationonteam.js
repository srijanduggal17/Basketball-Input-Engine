var fs = nodeRequire('file-system');

var currentteamname;
var currentlevel;
var currentschool;
var currentheadcoach;

var newlevel;

var stafftable;
var playertable;

var maindata = JSON.parse(fs.readFileSync("Data Storage/maindata.JSON", 'utf8'));

var staffnextrowid = 0;
var playernextrowid = 0;

var editrole;
var staffeditrownum;
var staffeditname;
var staffeditrow;
var editstaffname;

var playereditrownum;
var playereditname;
var playereditposition;
var playereditnumber;
var playereditheight;

window.onload = function() {
	currentteamname = maindata["Team Name"];
	currentlevel = maindata["Level"];
	currentschool = maindata["School"];
	currentheadcoach = maindata["Head Coach"];

	document.getElementById("teamname").innerHTML = currentteamname;
	document.getElementById("level").innerHTML = currentlevel;
	document.getElementById("school").innerHTML = currentschool;
	document.getElementById("headcoach").innerHTML = currentheadcoach;

	stafftable = document.getElementById("stafftable");
	playertable = document.getElementById("playerstable");

	for (var i = 0; i < maindata["Staff"].length; i++) {
		var newrow = stafftable.insertRow(stafftable.rows.length - 1);
		var newname = newrow.insertCell();
		var newrole = newrow.insertCell();
		var newselectrole = newrow.insertCell();
		var neweditcell = newrow.insertCell();
		var newdeletecell = newrow.insertCell();
		
		newname.innerHTML = maindata["Staff"][i]["Name"];
		newrole.innerHTML = maindata["Staff"][i]["Role"];

		newname.setAttribute('id','staffname' + staffnextrowid + '');
		newrole.setAttribute('id','staffrole' + staffnextrowid + '');

		var neweditbutton = document.createElement('button');
		neweditbutton.setAttribute('onclick','editStaff(' + staffnextrowid + ')');
		neweditbutton.setAttribute('name','' + staffnextrowid + '');
		neweditbutton.setAttribute('id','staffeditbutton' + staffnextrowid + '');
		neweditbutton.innerHTML = "Edit";

		neweditcell.appendChild(neweditbutton);

		var newdeletebutton = document.createElement('button');
		newdeletebutton.setAttribute('onclick','deleteStaff(' + staffnextrowid + ')');
		newdeletebutton.innerHTML = "Delete";

		newdeletecell.appendChild(newdeletebutton);

		staffnextrowid += 1;
	}

	for (var i = 0; i < maindata["Player"].length; i++) {
		var newrow = playertable.insertRow(playertable.rows.length - 1);
		var newname = newrow.insertCell();
		var newposition = newrow.insertCell();
		var newheight = newrow.insertCell();
		var newnumber = newrow.insertCell();
		var neweditcell = newrow.insertCell();
		var newdeletecell = newrow.insertCell();

		newname.innerHTML = maindata["Player"][i]["Name"];
		newposition.innerHTML = maindata["Player"][i]["Position"];
		newheight.innerHTML = maindata["Player"][i]["Height"];
		newnumber.innerHTML = maindata["Player"][i]["Jersey Number"];

		newname.setAttribute('id','playername' + playernextrowid + '');

		var neweditbutton = document.createElement('button');
		neweditbutton.setAttribute('onclick','editPlayer(' + playernextrowid + ')');
		neweditbutton.setAttribute('name','' + playernextrowid + '');
		neweditbutton.setAttribute('id','playereditbutton' + playernextrowid + '');
		neweditbutton.innerHTML = "Edit";

		neweditcell.appendChild(neweditbutton);

		var newdeletebutton = document.createElement('button');
		newdeletebutton.setAttribute('onclick','deletePlayer(' + playernextrowid + ')');
		newdeletebutton.innerHTML = "Delete";

		newdeletecell.appendChild(newdeletebutton);

		playernextrowid += 1;
	}
}

function selectLevel(lvl) {
	newlevel = lvl;
}

function editGeneralInfo() {
	$("#teamname").empty();
	$("#teamname").append("<input type='text' id='editteamname' value='" + currentteamname + "'>");

	$("#level").empty();
	$("#level").append("<button onclick=\"selectLevel('HS')\">HS</button><button onclick=\"selectLevel('College')\">College</button>");

	$("#school").empty();
	$("#school").append("<input type='text' id='editschool' value='" + currentschool + "'>");

	$("#headcoach").empty();
	$("#headcoach").append("<input type='text' id='editheadcoach' value='" + currentheadcoach + "'>");

	document.getElementById('editbutton1').innerHTML = "Check";
	document.getElementById('editbutton1').setAttribute('onclick','saveGeneralInfo()');
}

function saveGeneralInfo() {
	var editedteamname = capitalizeName(document.getElementById('editteamname').value);
	var editedschool = capitalizeName(document.getElementById('editschool').value);
	var editedheadcoach = capitalizeName(document.getElementById('editheadcoach').value);

	var editedlevel;
	if (newlevel !== undefined) {
		editedlevel = newlevel;
	}
	else {
		editedlevel = currentlevel;
	}

	maindata["Team Name"] = editedteamname;
	maindata["School"] = editedschool;
	maindata["Level"] = editedlevel;
	maindata["Head Coach"] = editedheadcoach;

	$("#teamname").empty();
	$("#teamname").append(editedteamname);

	$("#level").empty();
	$("#level").append(editedlevel);

	$("#school").empty();
	$("#school").append(editedschool);

	$("#headcoach").empty();
	$("#headcoach").append(editedheadcoach);

	document.getElementById('editbutton1').innerHTML = "Edit";
	document.getElementById('editbutton1').setAttribute('onclick','editGeneralInfo()');

	currentteamname = editedteamname;
	currentschool = editedschool;
	currentlevel = editedlevel;
	currentheadcoach = editedheadcoach;
}

function chooseRole(rle) {
	role = rle;
	document.getElementById("roledropdown").classList.toggle("show");
	document.getElementById("role").innerHTML = role;
}

function editRole(rle) {
	editrole = rle;
	document.getElementById("editroledropdown").classList.toggle("show");
	document.getElementById("staffrole" + staffeditrownum + '').innerHTML = editrole;
}

function roleDropdown() {
	document.getElementById("roledropdown").classList.toggle("show");
}

function editRoleDropdown() {
	document.getElementById("editroledropdown").classList.toggle("show");
}

function editStaff(rownum) {
	var preveditrow = staffeditrownum;
	staffeditrownum = rownum;

	staffeditrow = document.getElementById('staffeditbutton' + rownum + '').parentNode.parentNode;

	staffeditname = staffeditrow.cells[0].innerHTML;

	$(staffeditrow.cells[0]).empty();
	$(staffeditrow.cells[0]).append("<input type='text' id='editstaffname' value='" + staffeditname + "'>");

	if (preveditrow !== staffeditrownum) {
		$(staffeditrow.cells[2]).empty();
		staffeditrow.cells[2].appendChild(document.getElementById("editrolediv"));		
	}

	document.getElementById('editrolediv').style.display = "table-cell";

	$(staffeditrow.cells[3]).children('button')[0].innerHTML = "Check";

	document.getElementById('staffinputrow').style.display = "none";

	for (var i = 1; i < stafftable.rows.length - 1; i++) {
		$(stafftable.rows[i].cells[3]).children('button')[0].style.display = "none";
	}

	$(staffeditrow.cells[3]).children('button')[0].setAttribute('onclick','saveStaffChanges()');
	$(staffeditrow.cells[3]).children('button')[0].style.display = "table-cell";
}

function saveStaffChanges() {
	var editedname = document.getElementById('editstaffname').value;
	var savedrole = staffeditrow.cells[1].innerHTML;

	for (var i = 0; i < maindata["Staff"].length; i++) {
		if (maindata["Staff"][i]["Name"] === staffeditname) {
			maindata["Staff"][i]["Name"] = capitalizeName(editedname);
			maindata["Staff"][i]["Role"] = savedrole;
		}
	}

	document.getElementById('editrolediv').style.display = "none";

	$(staffeditrow.cells[0]).empty();
	staffeditrow.cells[0].innerHTML = editedname;

	document.getElementById('staffinputrow').style.display = "table-row";

	$(staffeditrow.cells[3]).children('button')[0].innerHTML = "Edit";
	$(staffeditrow.cells[3]).children('button')[0].setAttribute('onclick',"editStaff(" + staffeditrownum + ')');

	for (var i = 1; i < stafftable.rows.length - 1; i++) {
		$(stafftable.rows[i].cells[3]).children('button')[0].style.display = "table-cell";
	}
}

function deleteStaff(rownum) {
	var stafftodelete = document.getElementById('staffname' + rownum + '').innerHTML;

	for (var i = 0; i < maindata["Staff"].length; i++) {
		if (maindata["Staff"][i]["Name"] === stafftodelete) {
			maindata["Staff"].splice(i,1);
		}
	}

	var rowtodelete = document.getElementById('staffname' + rownum + '').parentNode;
	$(rowtodelete).remove();
}

function createStaff() {
    document.getElementById("role").innerHTML = "";
	var staffname = document.getElementById("staffname").value;

	if (staffname != "" && staffname != "") {
		maindata["Staff"].push({"Name": capitalizeName(staffname), "Role": role});

		var newrow = stafftable.insertRow(stafftable.rows.length - 1);
		var newname = newrow.insertCell();
		var newrole = newrow.insertCell();
		var newselectrole = newrow.insertCell();
		var neweditcell = newrow.insertCell();
		var newdeletecell = newrow.insertCell();
		
		newname.innerHTML = capitalizeName(staffname);
		newrole.innerHTML = role;

		newname.setAttribute('id','staffname' + staffnextrowid + '');
		newrole.setAttribute('id','staffrole' + staffnextrowid + '');

		var neweditbutton = document.createElement('button');
		neweditbutton.setAttribute('onclick','editStaff(' + staffnextrowid + ')');
		neweditbutton.setAttribute('name','' + staffnextrowid + '');
		neweditbutton.setAttribute('id','staffeditbutton' + staffnextrowid + '');
		neweditbutton.innerHTML = "Edit";

		neweditcell.appendChild(neweditbutton);

		var newdeletebutton = document.createElement('button');
		newdeletebutton.setAttribute('onclick','deleteStaff(' + staffnextrowid + ')');
		newdeletebutton.innerHTML = "Delete";

		newdeletecell.appendChild(newdeletebutton);

		document.getElementById("staffname").value = "";
		role = null;

		staffnextrowid += 1;
	}
}

function createPlayer() {
	var newplayername = document.getElementById("newplayername").value;
	var newplayerposition = document.getElementById("newplayerposition").value;
	var newplayerheight = document.getElementById("newplayerheight").value;
	var newplayernumber = document.getElementById("newplayernumber").value;

	if (newplayername != "" && newplayerposition != "" && newplayerheight != "" && newplayernumber != "") {
		maindata["Player"].push(
			{
				"Name" : capitalizeName(newplayername), 
				"Position" : capitalizeName(newplayerposition), 
				"Height" : newplayerheight, 
				"Jersey Number" : newplayernumber
			});

		var newrow = playertable.insertRow(playertable.rows.length - 1);
		var newname = newrow.insertCell();
		var newposition = newrow.insertCell();
		var newheight = newrow.insertCell();
		var newnumber = newrow.insertCell();
		var neweditcell = newrow.insertCell();
		var newdeletecell = newrow.insertCell();

		newname.innerHTML = capitalizeName(newplayername);
		newposition.innerHTML = capitalizeName(newplayerposition);
		newheight.innerHTML = newplayerheight
		newnumber.innerHTML = newplayernumber;

		newname.setAttribute('id','playername' + playernextrowid + '');

		var neweditbutton = document.createElement('button');
		neweditbutton.setAttribute('onclick','editPlayer(' + playernextrowid + ')');
		neweditbutton.setAttribute('name','' + playernextrowid + '');
		neweditbutton.setAttribute('id','playereditbutton' + playernextrowid + '');
		neweditbutton.innerHTML = "Edit";

		neweditcell.appendChild(neweditbutton);

		var newdeletebutton = document.createElement('button');
		newdeletebutton.setAttribute('onclick','deletePlayer(' + playernextrowid + ')');
		newdeletebutton.innerHTML = "Delete";

		newdeletecell.appendChild(newdeletebutton);

		document.getElementById("newplayername").value="";
		document.getElementById("newplayerposition").value="";
		document.getElementById("newplayerheight").value="";
		document.getElementById("newplayernumber").value="";
	}

	playernextrowid += 1;
}

function editPlayer(rownum) {
	playereditrownum = rownum;

	playereditrow = document.getElementById('playereditbutton' + rownum + '').parentNode.parentNode;

	playereditname = playereditrow.cells[0].innerHTML;
	playereditposition = playereditrow.cells[1].innerHTML;
	playereditheight = playereditrow.cells[2].innerHTML;
	playereditnumber = playereditrow.cells[3].innerHTML;

	$(playereditrow.cells[0]).empty();
	$(playereditrow.cells[0]).append("<input type='text' id='editplayername' value='" + playereditname + "'>");

	$(playereditrow.cells[1]).empty();
	$(playereditrow.cells[1]).append("<input type='text' id='editplayerposition' value='" + playereditposition + "'>");

	$(playereditrow.cells[2]).empty();
	$(playereditrow.cells[2]).append("<input type='text' id='editplayerheight' value='" + playereditheight + "'>");

	$(playereditrow.cells[3]).empty();
	$(playereditrow.cells[3]).append("<input type='text' id='editplayernumber' value='" + playereditnumber + "'>");	

	$(playereditrow.cells[4]).children('button')[0].innerHTML = "Check";
	$(playereditrow.cells[4]).children('button')[0].setAttribute('onclick','savePlayerChanges()');

	document.getElementById('playerinputrow').style.display = "none";

	for (var i = 1; i < playertable.rows.length - 1; i++) {
		$(playertable.rows[i].cells[4]).children('button')[0].style.display = "none";
	}

	$(playereditrow.cells[4]).children('button')[0].style.display = "table-cell";
}

function savePlayerChanges() {
	var editedname = document.getElementById('editplayername').value;
	var editedposition = document.getElementById('editplayerposition').value;
	var editedheight = document.getElementById('editplayerheight').value;
	var editednumber = document.getElementById('editplayernumber').value;

	for (var i = 0; i < maindata["Player"].length; i++) {
		if (maindata["Player"][i]["Name"] === playereditname) {
			maindata["Player"][i]["Name"] = capitalizeName(editedname);
			maindata["Player"][i]["Position"] = capitalizeName(editedposition);
			maindata["Player"][i]["Height"] = editedheight;
			maindata["Player"][i]["Jersey Number"] = editednumber;
		}
	}

	$(playereditrow.cells[0]).empty();
	playereditrow.cells[0].innerHTML = editedname;

	$(playereditrow.cells[1]).empty();
	playereditrow.cells[1].innerHTML = capitalizeName(editedposition);

	$(playereditrow.cells[2]).empty();
	playereditrow.cells[2].innerHTML = editedheight;

	$(playereditrow.cells[3]).empty();
	playereditrow.cells[3].innerHTML = editednumber;


	document.getElementById('playerinputrow').style.display = "table-row";

	$(playereditrow.cells[4]).children('button')[0].innerHTML = "Edit";
	$(playereditrow.cells[4]).children('button')[0].setAttribute('onclick',"editPlayer(" + playereditrownum + ')');

	for (var i = 1; i < playertable.rows.length - 1; i++) {
		$(playertable.rows[i].cells[4]).children('button')[0].style.display = "table-cell";
	}
}


function deletePlayer(rownum) {
	var playertodelete = document.getElementById('playername' + rownum + '').innerHTML;

	for (var i = 0; i < maindata["Player"].length; i++) {
		if (maindata["Player"][i]["Name"] === playertodelete) {
			maindata["Player"].splice(i,1);
		}
	}

	var rowtodelete = document.getElementById('playername' + rownum + '').parentNode;
	$(rowtodelete).remove();
}