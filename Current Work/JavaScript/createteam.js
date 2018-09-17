var fs = nodeRequire('file-system');

var level;
var role = null;
var staff = [];
var player = [];

//The following variables will be used to store the old values when we are editing something.
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

var pagestatus = 1;

//This corresponds to the HS / College buttons
function selectLevel(lvl) {
	level = lvl;
}

//This corresponds to the Select Role button under staff
function roleDropdown() {
	document.getElementById("roledropdown").classList.toggle("show");
}

//This occurs when you choose a role from the dropdown
function chooseRole(rle) {
	role = rle;
	document.getElementById("roledropdown").classList.toggle("show");
	document.getElementById("role").innerHTML = role;
}

//The next two functions are the same as the last two but are for when you edit a player you've already added 
function editRoleDropdown() {
	document.getElementById("editroledropdown").classList.toggle("show");
}

function editRole(rle) {
	editrole = rle;
	document.getElementById("editroledropdown").classList.toggle("show");
	document.getElementById("staffrole" + staffeditrownum + '').innerHTML = editrole;
}


/*The two nextrowid variables will store the unique number for the next row added
so that each row has a unique number id for editing and deleting purposes
*/
var stafftable = document.getElementById("stafftable");

var staffnextrowid = 0;
var playernextrowid = 0;

var allowedname = /^[a-zA-Z ']+$/;
var allowedposition = /^[a-zA-Z]+$/;

//This function is when you hit the + button under Staff
function createStaff() {
	var staffname = document.getElementById('staffname').value;

	if (staffname === "" || staffname.match(allowedname) === null) {
		document.getElementById('staffnameaster').style.display = "inline";
	}

	if (role === null) {
		document.getElementById('roleaster').style.display = "inline";
	}

	//The following block occurs if both fields are not empty
	if (staffname !== "" && staffname.match(allowedname) !== null && role !== null) {
		document.getElementById("role").innerHTML = "";
		document.getElementById('staffnameaster').style.display = "none";
		document.getElementById('roleaster').style.display = "none";


		staff.push([capitalizeName(staffname), role]);

		//This block creates a row and tabledata elements.
		var newrow = stafftable.insertRow(stafftable.rows.length - 1);
		var newname = newrow.insertCell();
		var newrole = newrow.insertCell();
		var newselectrole = newrow.insertCell();
		var neweditcell = newrow.insertCell();
		var newdeletecell = newrow.insertCell();
		
		//The next blocks assign values to each cell in the row.
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

		//These two lines clear the name field and the role variable. The third one adds 1 to the rowid so that it remains unique
		document.getElementById("staffname").value = "";
		role = null;

		staffnextrowid += 1;
	}
}

//This occurs when you hit the edit button on a preexisting staff member.
function editStaff(rownum) {
	var preveditrow = staffeditrownum;
	staffeditrownum = rownum;

	//This line gets the row that is being edited.
	staffeditrow = document.getElementById('staffeditbutton' + rownum + '').parentNode.parentNode;

	staffeditname = staffeditrow.cells[0].innerHTML;

	//The next two blocks load the text field and the dropdown button
	$(staffeditrow.cells[0]).empty();
	$(staffeditrow.cells[0]).append("<input type='text' id='editstaffname' value='" + staffeditname + "'>");
	$(staffeditrow.cells[0]).append("<span id='editstaffnameaster'class='aster'>*</span>");

	if (preveditrow !== staffeditrownum) {
		$(staffeditrow.cells[2]).empty();
		staffeditrow.cells[2].appendChild(document.getElementById("editrolediv"));		
	}
	document.getElementById('editrolediv').style.display = "table-cell";

	/*The rest of this function does the following:
	Changes the edit to a check.
	Hides the input row and the edit buttons for all other rows
	Changes the function of the edit/check button to save
	*/
	$(staffeditrow.cells[3]).children('button')[0].innerHTML = "Check";

	document.getElementById('staffinputrow').style.display = "none";

	for (var i = 1; i < stafftable.rows.length - 1; i++) {
		$(stafftable.rows[i].cells[3]).children('button')[0].style.display = "none";
	}

	$(staffeditrow.cells[3]).children('button')[0].setAttribute('onclick','saveStaffChanges()');
	$(staffeditrow.cells[3]).children('button')[0].style.display = "table-cell";
}

//The next function saves the edits to the view and also to the temporary staff array.
function saveStaffChanges() {
	var editedname = document.getElementById('editstaffname').value;

	if (editedname === "" || editedname.match(allowedname) === null) {
		document.getElementById('editstaffnameaster').style.display = "inline";
	}
	else {
		document.getElementById('editstaffnameaster').style.display = "none";

		for (var i = 0; i < staff.length; i++) {
			if (staff[i][0] === staffeditname) {
				staff[i][0] = capitalizeName(editedname);
				staff[i][1] = savedrole;
			}
		}		

		var savedrole = staffeditrow.cells[1].innerHTML;

		//The rest of this function edits the view
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
}

//This function deletes the row in the view and also deletes the person from the temporary staff array
function deleteStaff(rownum) {
	var stafftodelete = document.getElementById('staffname' + rownum + '').innerHTML;

	for (var i = 0; i < staff.length; i++) {
		if (staff[i][0] === stafftodelete) {
			staff.splice(i,1);
		}
	}

	var rowtodelete = document.getElementById('staffname' + rownum + '').parentNode;
	$(rowtodelete).remove();
}

//The following functions are the same as for staff but just for players.
function createPlayer() {
	var newplayername = document.getElementById("newplayername").value;
	var newplayerposition = document.getElementById("newplayerposition").value;
	var newplayerheight = document.getElementById("newplayerheight").value;
	var newplayernumber = document.getElementById("newplayernumber").value;
	var playertable = document.getElementById("playertable");

	if (newplayername === "" || newplayername.match(allowedname) === null) {
		document.getElementById("newplayernameaster").style.display = "inline";
	}
	else {
		document.getElementById("newplayernameaster").style.display = "none";
	}

	if (newplayerposition === "" || newplayerposition.match(allowedposition) === null) {
		document.getElementById("newplayerpositionaster").style.display = "inline";
	}
	else {
		document.getElementById("newplayerpositionaster").style.display = "none";
	}

	if (newplayernumber === "" || newplayernumber.includes("-") || newplayernumber.includes(".") || newplayernumber.includes("+")) {
		document.getElementById("newplayernumberaster").style.display = "inline";
	}
	else {
		document.getElementById("newplayernumberaster").style.display = "none";
	}

	if (newplayerheight === "" || newplayerheight.includes("-") || newplayerheight.includes(".") || newplayerheight.includes("+")) {
		document.getElementById("newplayerheightaster").style.display = "inline";
	}
	else {
		document.getElementById("newplayerheightaster").style.display = "none";
	}

	if (newplayername !== "" && newplayername.match(allowedname) !== null && newplayerposition !== "" && newplayerposition.match(allowedposition) !== null && newplayerheight !== "" && newplayerheight.includes("-") === false && newplayerheight.includes(".") === false && newplayerheight.includes("+") === false && newplayernumber !== "" && newplayernumber.includes("-") === false && newplayernumber.includes(".") === false && newplayernumber.includes("+") === false) {
		player.push([capitalizeName(newplayername), capitalizeName(newplayerposition), newplayerheight, newplayernumber]);

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
		
		playernextrowid += 1;
	}
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
	$(playereditrow.cells[0]).append("<span id='editplayernameaster'class='aster'>*</span>");

	$(playereditrow.cells[1]).empty();
	$(playereditrow.cells[1]).append("<input type='text' id='editplayerposition' value='" + playereditposition + "'>");
	$(playereditrow.cells[1]).append("<span id='editplayerpositionaster'class='aster'>*</span>");

	$(playereditrow.cells[2]).empty();
	$(playereditrow.cells[2]).append("<input type='number' id='editplayerheight' value='" + playereditheight + "' min='0' max='99'>");
	$(playereditrow.cells[2]).append("<span id='editplayerheightaster'class='aster'>*</span>");

	$(playereditrow.cells[3]).empty();
	$(playereditrow.cells[3]).append("<input type='number' id='editplayernumber' value='" + playereditnumber + "' min='0' max='99'>");	
	$(playereditrow.cells[3]).append("<span id='editplayernumberaster'class='aster'>*</span>");

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

	if (editedname === "" || editedname.match(allowedname) === null) {
		document.getElementById('editplayernameaster').style.display = "inline";
	}
	else {
		document.getElementById('editplayernameaster').style.display = "none";
	}
	if (editedposition === "" || editedposition.match(allowedposition) === null) {
		document.getElementById('editplayerpositionaster').style.display = "inline";
	}
	else {
		document.getElementById('editplayerpositionaster').style.display = "none";
	}
	if (editedheight === "" || editedheight.includes("-") || editedheight.includes(".") || editedheight.includes("+")) {
		document.getElementById('editplayerheightaster').style.display = "inline";
	}
	else {
		document.getElementById('editplayerheightaster').style.display = "none";
	}
	if (editednumber === "" || editednumber.includes("-") || editednumber.includes(".") || editednumber.includes("+")) {
		document.getElementById('editplayernumberaster').style.display = "inline";
	}
	else {
		document.getElementById('editplayernumberaster').style.display = "none";
	}

	if (editedname !== "" && editedname.match(allowedname) !== null && editedposition !== "" && editedposition.match(allowedposition) !== null && editedheight !== "" && editedheight.includes("-") === false && editedheight.includes(".") === false && editedheight.includes("+") === false && editednumber !== "" && editednumber.includes("-") === false && editednumber.includes(".") === false && editednumber.includes("+") === false) {
		for (var i = 0; i < player.length; i++) {
			if (player[i][0] === playereditname) {
				player[i][0] = capitalizeName(editedname);
				player[i][1] = capitalizeName(editedposition);
				player[i][2] = editedheight;
				player[i][3] = editednumber;
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
}

function deletePlayer(rownum) {
	var playertodelete = document.getElementById('playername' + rownum + '').innerHTML;

	for (var i = 0; i < player.length; i++) {
		if (player[i][0] === playertodelete) {
			player.splice(i,1);
		}
	}

	var rowtodelete = document.getElementById('playername' + rownum + '').parentNode;
	$(rowtodelete).remove();
}

//This function occurs when you hit Finish. It creates the proper objects and saves all the data to the file.
function confirmTeam() {
	var maindata = JSON.parse(fs.readFileSync("Data Storage/maindata.JSON", 'utf8'));

	if (document.getElementById('teamname').value === "" || document.getElementById('teamname').value.match(allowedname) === null) {
		document.getElementById('teamnameaster').style.display = "inline";
		pagestatus = 0;
	}
	else {
		document.getElementById('teamnameaster').style.display = "none";
	}

	if (document.getElementById('headcoach').value === "" || document.getElementById('headcoach').value.match(allowedname) === null) {
		document.getElementById('headcoachaster').style.display = "inline";
		pagestatus = 0;
	}
	else {
		document.getElementById('headcoachaster').style.display = "none";
	}

	if (document.getElementById('school').value === "" || document.getElementById('school').value.match(allowedname) === null) {
		document.getElementById('schoolaster').style.display = "inline";
		pagestatus = 0;
	}
	else {
		document.getElementById('schoolaster').style.display = "none";
	}

	if (level === undefined) {
		document.getElementById('levelaster').style.display = "inline";
		pagestatus = 0;
	}
	else {
		document.getElementById('levelaster').style.display = "none";
	}

	if (pagestatus === 1) {
		maindata["Team Name"] = document.getElementById("teamname").value;
		maindata["Head Coach"] = document.getElementById("headcoach").value;
		maindata["School"] = document.getElementById("school").value;
		maindata["Level"] = level;

		for (var i = 0; i < staff.length; i++) {
			var staffobj = {"Name" : staff[i][0], "Role" : staff[i][1]};
			maindata["Staff"].push(staffobj);
		}

		for (var i = 0; i < player.length; i++) {
			var playerobj = {"Name" : player[i][0], "Position" : player[i][1], "Height" : player[i][2], "Jersey Number" : player[i][3]};
			maindata["Player"].push(playerobj);
		}

		fs.writeFile("Data Storage/maindata.JSON", JSON.stringify(maindata, null, "\t"), function (err) {
			if (err != undefined) {
				alert(err.message,"Team creation error")
			}
			else {
				alert("Team has been created");
			}
		});

		window.location="scheduleinput.html";		
	}

	pagestatus = 1;
}