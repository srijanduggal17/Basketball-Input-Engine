//Window.innerHeight is 647

//File and setup
var fs = nodeRequire('file-system');
var maindata = JSON.parse(fs.readFileSync("Data Storage/maindata.JSON", 'utf8'));

var playerdropdowndiv = document.getElementById("playerdropdown");
var indexofpractice;
var practicingarray = [];

for (var j = 0; j < maindata["Practices"].length; j++) {
	if (maindata["Input Date"][0] === maindata["Practices"][j]["Date"]) {
		indexofpractice = j;

		for (var i = 0; i < maindata["Player"].length; i++) {
			if (maindata["Practices"][j]["Player Status"][maindata["Player"][i]["Name"]] === "Practicing") {
				var playername = maindata["Player"][i]["Name"].toLowerCase().replace(" ","");
				
				var newplayerindropdown = document.createElement("a");
				newplayerindropdown.innerHTML = maindata["Player"][i]["Name"];
				newplayerindropdown.setAttribute('id',''+playername+'');
				newplayerindropdown.setAttribute('onclick',"choosePlayer('" + maindata["Player"][i]["Name"] + "')");
				playerdropdowndiv.appendChild(newplayerindropdown);

				var newplayerdata = {
					"Player" : maindata["Player"][i]["Name"],
					"ScrimmagePressure" : [],
					"DrillPressure" : []
				}
				maindata["Practices"][j]["Data"].push(newplayerdata)

				practicingarray.push(maindata["Player"][i]["Name"]);
			}
		}
		break;
	}
}


//Pressure Selection and default (change to drill)
var pressure = "Scrimmage";

function choosePressure(press) {
	pressure = press;
}


//Scaling Variables
var topspace = 20;
var circleradius = .0247*window.innerHeight;
var hoopx = .4*window.innerHeight;
var hoopy = .0866*window.innerHeight;

jss.set('.circleforplayers', {
	'width': '' + .0495*window.innerHeight + 'px',
	'height': '' + .0495*window.innerHeight + 'px',
});

//Court SVG
var court = document.getElementById("courtgroup");
court.setAttribute('transform','scale(' + .808124*window.innerHeight/522.85602 + ',' + .758714*window.innerHeight/490.888 + ')');
var courtsvg = document.getElementById("court");
courtsvg.setAttribute('width',''+.808124*window.innerHeight+'');
courtsvg.setAttribute('height',''+.758714*window.innerHeight+'');

//Hoop SVG
var hoopgroup = document.getElementById("hoopgroup");
hoopgroup.setAttribute('transform','scale(' + .808124*window.innerHeight/522.85602 + ',' + .758714*window.innerHeight/490.888 + ')');
var hoopsvg = document.getElementById('hoopsvg');
hoopsvg.style.left = .39*window.innerHeight + 'px';
hoopsvg.style.top = topspace + .073*window.innerHeight + 'px';


//Hoop Hover properties
hoopsvg.setAttribute('onmouseout','uncolorHoop()');

var hoop = document.getElementById('hoop');

function colorHoop() {
	hoop.style.fill = "#FF6347";
}

function uncolorHoop() {
	hoop.style.fill = "none";
}

//Shot Lines
d3.select("#shots").attr('width',.808124*window.innerHeight)
					.attr('height',.758714*window.innerHeight);

//Pass Lines
d3.select("#passes").attr('width',.808124*window.innerHeight)
					.attr('height',.758714*window.innerHeight);

//Dribble Lines
d3.select("#dribbles").attr('width',.808124*window.innerHeight)
					.attr('height',.758714*window.innerHeight);

//Rebound Lines
d3.select("#rebounds").attr('width',.808124*window.innerHeight)
					.attr('height',.758714*window.innerHeight);

var circlesvgwidth = .049459*window.innerHeight

//Buttons and Divs
var checkbutton = document.getElementById('checkbutton');
var xbutton = document.getElementById('xbutton');
var notrebbutton = document.getElementById('notreb');
var opponentbutton = document.getElementById('opponent');
var oobourbutton = document.getElementById('oobour');
var ooboppbutton = document.getElementById('oobopp')
var pagecontentdiv = document.getElementById('pagecontent');
var actionbuttons = document.getElementById('actionbuttons');

//Basic Variables
var newevent = {};
var newevent2 = {};

var currentsequence = maindata["Practices"][indexofpractice]["Next Sequence"];
var currentevent = 0;
var currentplayer;
var player1;

var locationtimer = 0;
var locationarray = [];

//State Variables
var abletopass = 0;
var abletoshoot = 0;
var abletodribble = 0;
var abletorebound = 0;

var passwasattempted = 0;
var shotwasattempted = 0;
var reboundwasattempted = 0;

var passoccurred = 0;
var dribbleoccurred = 0;

var currentcircle = 0;
var currentpass = 0;
var currentdribble = 0;
var currentshot = 0;
var currentrebound = 0;


function inputData() {
	var dt = new Date()

	if (pressure === "Drill" && shotwasattempted === 0) {
		newevent = {
			"Action" : "",
			"Location" : [event.pageX,event.pageY],
			"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()]
		};

		playerdropdowndiv.style.display = "block";
		playerdropdowndiv.style.left = event.pageX + 'px';
		playerdropdowndiv.style.top = event.pageY + 'px';
	}

	else if (pressure === "Scrimmage") {
		if (passwasattempted !== 1 && shotwasattempted !== 1) {
			playerdropdowndiv.style.display = "block";
			playerdropdowndiv.style.left = event.pageX + 'px';
			playerdropdowndiv.style.top = event.pageY + 'px';
		}

		if (passoccurred === 0 && dribbleoccurred === 0 && (abletopass + abletoshoot + abletodribble + abletorebound) === 0 && passwasattempted === 0) {
			newevent = {
				"Sequence" : currentsequence,
				"Event" : currentevent,
				"Location" : [event.pageX,event.pageY],
				"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()],
				"Origin" : "Play Start"
			};
		}

		else if (abletorebound === 1) {
			notrebbutton.style.display = "none";

			newevent["Rebounded"] = "Yes";
			newevent["Rebound Location"] = [event.pageX,event.pageY];
			maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);	

			drawReboundArrow(event.pageX,event.pageY);

			abletorebound = 0;
			currentevent = 0;
			currentsequence += 1;

			newevent = {};
			newevent = {
				"Sequence" : currentsequence,
				"Event" : currentevent,
				"Location" : [event.pageX,event.pageY],
				"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()],
				"Origin" : "Rebound"
			}

			currentplayer = null;
		}

		else if (abletopass === 1 && passoccurred === 0 && passwasattempted === 0 && dribbleoccurred === 0) {
			passwasattempted = 1;

			newevent2 = {
				"Sequence" : currentsequence,
				"Event" : currentevent + "-b",
				"Location" : [event.pageX,event.pageY],
				"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()],
				"From" : currentplayer
			}

			newevent["Event"] += "-a";

			abletopass = 0;
			abletoshoot = 0;
			abletodribble = 0;

			hoopsvg.setAttribute('onmouseover','');


			var currentplayerid = currentplayer.toLowerCase().replace(" ","");
			document.getElementById(''+currentplayerid+'').style.display = "none";
		}

		else if (abletopass === 1 && passoccurred === 0 && passwasattempted === 0 && dribbleoccurred === 1) {
			passwasattempted = 1;

			abletoshoot = 0;
			abletopass = 0;
			abletodribble = 0;
			
			hoopsvg.setAttribute('onmouseover','');

			dribbleoccurred = 0;
			maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);

			var lastlocation = newevent["Location"][newevent["Location"].length - 1];

			newevent = {};
			newevent = {
				"Sequence" : currentsequence,
				"Event" : currentevent + "-a",
				"Location" : [lastlocation[0],lastlocation[1]],
				"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()]
			};

			newevent2 = {
				"Sequence" : currentsequence,
				"Event" : currentevent + "-b",
				"Location" : [event.pageX,event.pageY],
				"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()],
				"From" : currentplayer
			}

			var currentplayerid = currentplayer.toLowerCase().replace(" ","");
			document.getElementById(''+currentplayerid+'').style.display = "none";
		}

		else if (abletopass === 1 && passoccurred === 1 && passwasattempted === 0 && dribbleoccurred === 0) {
			passoccurred = 0;
			passwasattempted = 1;

			abletopass = 0;
			abletodribble = 0;
			abletoshoot = 0;

			hoopsvg.setAttribute('onmouseover','');
			
			newevent["Action"] = "Pass Made";
			newevent2["Action"] = "Pass Received";
			maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);
			maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(player1)]["ScrimmagePressure"].push(newevent2);

			currentplayer = player1;
			player1 = null;

			newevent = {};

			newevent = {
				"Sequence" : currentsequence,
				"Event" : currentevent + "-a",
				"Location" : [newevent2["Location"][0],newevent2["Location"][1]],
				"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()],
				"Action" : "Dribble"
			};

			newevent2 = {};

			newevent2 = {
				"Sequence" : currentsequence,
				"Event" : currentevent + "-b",
				"Location" : [event.pageX,event.pageY],
				"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()],
				"From" : currentplayer
			}

			var currentplayerid = currentplayer.toLowerCase().replace(" ","");
			document.getElementById(''+currentplayerid+'').style.display = "none";
		}
	}
}

function inputDribble() {
	var dt = new Date();

	hoopsvg.setAttribute('onmouseover','');

	if (abletodribble === 1 && passoccurred === 0 && dribbleoccurred == 0) {
		newevent["Action"] = "Dribble";
	}

	else if (abletodribble === 1 && dribbleoccurred === 1 && passoccurred === 0) {
		maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);

		var lastlocation = newevent["Location"][newevent["Location"].length - 1];

		newevent = {};
		newevent = {
			"Sequence" : currentsequence,
			"Event" : currentevent,
			"Location" : [lastlocation[0],lastlocation[1]],
			"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()]
		};

		newevent["Action"] = "Dribble";
	}

	else if (abletodribble === 1 && dribbleoccurred === 0 && passoccurred === 1) {
		passoccurred = 0;

		newevent["Action"] = "Pass Made";
		newevent2["Action"] = "Pass Received";
		maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);
		maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(player1)]["ScrimmagePressure"].push(newevent2);

		currentplayer = player1;
		player1 = null;

		newevent = {};
		newevent = {
			"Sequence" : currentsequence,
			"Event" : currentevent,
			"Location" : [newevent2["Location"][0],newevent2["Location"][1]],
			"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()],
			"Action" : "Dribble"
		};
	}

	d3.select("#dribbles").style('display','block')
						.append('svg')
						.style('display','block')
						.attr('class','dribbleclass')
						.attr('width',.808124*window.innerHeight)
						.attr('height',.758714*window.innerHeight)
						.attr('id','dribble' + currentdribble + 'svg');

	d3.select("#dribble" + currentdribble + 'svg').append('line')
							.attr('id', 'dribble' + currentdribble + 'line1')
							.attr("x1", newevent["Location"][0])
							.attr("y1", newevent["Location"][1] - topspace)
							.attr('x2', event.pageX)
							.attr('y2', event.pageY - topspace);

	currentline = 0;
	locationtimer = 0;

	$(document).on( "mousemove", function( event ) {
		if (currentline === 0) {
			d3.select("#dribble" + currentdribble + "line1").attr('x2', event.pageX)
								.attr('y2', event.pageY - topspace);
		}

		else if (currentline % 2 === 0) {
			d3.select("#dribble" + currentdribble + 'line' + currentline + '').attr('x2', event.pageX)
												.attr('y2', event.pageY - topspace);
		}

		d3.select("#circle" + (currentcircle-1) + '').style('left',event.pageX - circleradius)
													.style('top',event.pageY - circleradius)
													.style("z-index",11);

		locationtimer += 1;		

		if (locationtimer === 4) {
			locationarray.push([event.pageX,event.pageY]);
			locationtimer = 0;
			currentline += 1;
			if (currentline % 2 === 0) {
				d3.select("#dribble" + currentdribble + 'svg').append('line')
										.attr('id', 'dribble' + currentdribble + 'line' + currentline + '')
										.attr("x1", locationarray[locationarray.length - 1][0])
										.attr("y1", locationarray[locationarray.length - 1][1] - topspace)
										.attr('x2', event.pageX)
										.attr('y2', event.pageY - topspace)
										.attr("stroke-width", 2)
										.attr("stroke", "blue");	
			}
		}
	});
}

function stopDribble() {
	locationarray.push([event.pageX,event.pageY]);

	d3.select("#circle" + (currentcircle-1) + '').style('left',event.pageX - circleradius)
												.style('top',event.pageY - circleradius)
												.style("z-index",1);

	$(document).off("mousemove");

	newevent["Location"] = [newevent["Location"]];
	newevent["Location"] = newevent["Location"].concat(locationarray);

	actionbuttons.style.display = "block";
	ooboppbutton.style.display = "none";
	oobourbutton.style.display = "none";
	opponentbutton.style.display = "none";
	notrebbutton.style.display = "none";
	checkbutton.style.display = "none";
	xbutton.style.display = "block";
	xbutton.setAttribute('onclick','chooseAction("Dribble Stolen")');
	actionbuttons.style.left = locationarray[locationarray.length -1][0] - 50 + 'px';
	actionbuttons.style.top = locationarray[locationarray.length -1][1] - 50 + 'px';

	locationarray = [];
	currentevent += 1;
	dribbleoccurred = 1;

	abletodribble = 1;
	abletopass = 1;
	abletoshoot = 1;

	currentdribble += 1;

	hoopsvg.setAttribute('onmouseover','colorHoop()');
}

function choosePlayer(nam) {
	playerdropdowndiv.style.display = "none";

	if (pressure === "Drill") {

		console.log('drillchoose');

		currentplayer = nam;

		d3.select("#circles").append('svg')
							.attr('id','circle0')
							.attr('width',circlesvgwidth)
							.attr('height',circlesvgwidth)
							.attr('class','circleforplayers')
							.style('left',newevent["Location"][0] - circleradius)
							.style('top',newevent["Location"][1] - circleradius)
							.style('display','block')
							.append('circle')
							.attr('cx',.5*circlesvgwidth)
							.attr('cy',.5*circlesvgwidth)
							.attr('r',.0231839*window.innerHeight);
		d3.select("#circle0").append('text')
							.attr('x','50%')
							.attr('y','65%')
							.attr('text-anchor','middle')
							.style('stroke-width','0')
							.style('fill','#000')
							.style('font-size',.02163833*window.innerHeight)
							.text(getInitials(currentplayer));

		d3.select("#circles").style('display','block');

		drawShotArrow(newevent["Location"][0],newevent["Location"][1]);
		checkbutton.setAttribute('onclick','chooseAction("Shot Made")');
		xbutton.setAttribute('onclick','chooseAction("Shot Missed")');

		shotwasattempted = 1;

		currentcircle += 1;
	}

	else if (pressure === "Scrimmage") {
		if (currentevent === 0 && (abletopass + abletoshoot + abletodribble) === 0 && passwasattempted === 0) {
			currentplayer = nam;
			abletoshoot = 1;
			abletopass = 1;
			abletodribble = 1;
		
			hoopsvg.setAttribute('onmouseover','colorHoop()');

			drawNextCircle(currentplayer, newevent["Location"][0], newevent["Location"][1]);

			var currentplayerid = currentplayer.toLowerCase().replace(" ","");
			document.getElementById(''+currentplayerid+'').style.display = "none";
		}

		else if (passwasattempted === 1 && dribbleoccurred === 0) {
			var currentplayerid = currentplayer.toLowerCase().replace(" ","");
			document.getElementById(''+currentplayerid+'').style.display = "block";

			player1 = nam;

			drawNextCircle(player1, newevent2["Location"][0], newevent2["Location"][1]);
			drawPassArrow(newevent["Location"][0], newevent["Location"][1], newevent2["Location"][0], newevent2["Location"][1])

			newevent["To"] = player1;

			currentevent += 1;
			abletopass = 1;
			abletoshoot = 1;
			abletodribble = 1;

			hoopsvg.setAttribute('onmouseover','colorHoop()');

			passwasattempted = 0;
			passoccurred = 1;

			actionbuttons.style.display = "block";
			ooboppbutton.style.display = "none";
			oobourbutton.style.display = "none";
			opponentbutton.style.display = "none";
			notrebbutton.style.display = "none";
			checkbutton.style.display = "none";
			xbutton.style.display = "block";
			xbutton.setAttribute('onclick','chooseAction("Pass Missed")');
			var player1id = player1.toLowerCase().replace(" ","");
			document.getElementById(''+player1id+'').style.display = "none";
		}
	}
}

function chooseShot() {
	var dt = new Date();

	if (abletoshoot === 1 && shotwasattempted === 0 && passoccurred === 0 && dribbleoccurred === 0) {
		drawShotArrow(newevent["Location"][0],newevent["Location"][1]);
		abletoshoot = 0;
		abletopass = 0;
		abletodribble = 0;
		shotwasattempted = 1;

		hoopsvg.setAttribute('onmouseover','');

		d3.select("#circle" + (currentcircle - 1) + '').attr('onmousedown','')
														.attr('onmouseup','');
	}

	else if (abletoshoot === 1 && shotwasattempted === 0 && passoccurred === 0 && dribbleoccurred === 1) {
		drawShotArrow(newevent["Location"][newevent["Location"].length - 1][0],newevent["Location"][newevent["Location"].length - 1][1]);
		abletoshoot = 0;
		abletopass = 0;
		abletodribble = 0;
		shotwasattempted = 1;

		hoopsvg.setAttribute('onmouseover','');

		d3.select("#circle" + (currentcircle - 1) + '').attr('onmousedown','')
														.attr('onmouseup','');

		dribbleoccurred = 0;
		maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);

		var lastlocation = newevent["Location"][newevent["Location"].length - 1];

		newevent = {};
		newevent = {
			"Sequence" : currentsequence,
			"Event" : currentevent,
			"Location" : [lastlocation[0],lastlocation[1]],
			"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()]
		};
	}

	else if (abletoshoot === 1 && shotwasattempted === 0 && passoccurred === 1 && dribbleoccurred === 0) {
		drawShotArrow(newevent2["Location"][0], newevent2["Location"][1])
		abletoshoot = 0;
		abletopass = 0;
		abletodribble = 0;
		shotwasattempted = 1;

		hoopsvg.setAttribute('onmouseover','');

		d3.select("#circle" + (currentcircle - 1) + '').attr('onmousedown','')
														.attr('onmouseup','');

		passoccurred = 0;

		newevent["Action"] = "Pass Made";
		newevent2["Action"] = "Pass Received";
		maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);
		maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(player1)]["ScrimmagePressure"].push(newevent2);

		currentplayer = player1;
		player1 = null;

		newevent = {};
		newevent = {
			"Sequence" : currentsequence,
			"Event" : currentevent,
			"Location" : [newevent2["Location"][0],newevent2["Location"][1]],
			"Time" : [dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds()]
		};
	}

	checkbutton.setAttribute('onclick','chooseAction("Shot Made")');
	xbutton.setAttribute('onclick','chooseAction("Shot Missed")');
	var currentplayerid = currentplayer.toLowerCase().replace(" ","");
	document.getElementById(''+currentplayerid+'').style.display = "block";
}

function chooseAction(act) {
	if (pressure === "Drill") {
		newevent["Action"] = act;
		maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["DrillPressure"].push(newevent);
		actionbuttons.style.display = "none";

		d3.select("#shots").selectAll("*").remove();
		d3.select("#circle0").remove();

		newevent = {};
		shotwasattempted = 0;
	}

	else if (pressure === "Scrimmage") {
		if (shotwasattempted === 1 && act === "Shot Made") {
			newevent["Action"] = act;
			currentevent = 0;
			shotwasattempted = 0;
			currentsequence += 1;
			maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);

			d3.select("#shots").selectAll("*").remove();
			d3.select("#passes").selectAll("*").remove();
			d3.select("#dribbles").selectAll("*").remove();
			d3.select("#rebounds").selectAll("*").remove();
			d3.select("#circles").selectAll("*").remove();
			currentcircle = 0;
			currentpass = 0;
			currentdribble = 0;
			currentshot = 0;
			currentrebound = 0;

			checkbutton.style.display = "none";
			xbutton.style.display = "none";

			newevent = {};
			shotwasattempted = 0;

			currentplayer = null;
		}

		else if (shotwasattempted === 1 && act === "Shot Missed") {
			newevent["Action"] = act;

			notrebbutton.style.display = "block";
			checkbutton.style.display = "none";
			xbutton.style.display = "none";
			var currentplayerid = currentplayer.toLowerCase().replace(" ","");
			document.getElementById(''+currentplayerid+'').style.display = "block";
			shotwasattempted = 0;
			abletorebound = 1;
		}

		else if (act === "Dribble Stolen") {
			newevent["Action"] = act;

			xbutton.style.display = "none";

			dribbleoccurred = 0;
			currentevent = 0;
			currentsequence += 1;

			abletoshoot = 0;
			abletodribble = 0;
			abletopass = 0;

			hoopsvg.setAttribute('onmouseover','');

			d3.select("#shots").selectAll("*").remove();
			d3.select("#passes").selectAll("*").remove();
			d3.select("#dribbles").selectAll("*").remove();
			d3.select("#rebounds").selectAll("*").remove();
			d3.select("#circles").selectAll("*").remove();
			currentcircle = 0;
			currentpass = 0;
			currentdribble = 0;
			currentshot = 0;
			currentrebound = 0;

			maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);

			var currentplayerid = currentplayer.toLowerCase().replace(" ","");
			document.getElementById(''+currentplayerid+'').style.display = "block";
			currentplayer = null;
		}

		else if (act === "Pass Missed") {
			xbutton.style.display = "none";
			ooboppbutton.style.display = "inline";
			oobourbutton.style.display = "inline";
			opponentbutton.style.display = "inline";

			passoccurred = 0;
			currentevent = 0;
			currentsequence += 1;

			abletoshoot = 0;
			abletodribble = 0;
			abletopass = 0;

			hoopsvg.setAttribute('onmouseover','');
		}
	}
}

function notRebounded() {
	newevent["Rebounded"] = "No";
	maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);
	notrebbutton.style.display = "none";

	d3.select("#shots").selectAll("*").remove();
	d3.select("#passes").selectAll("*").remove();
	d3.select("#dribbles").selectAll("*").remove();
	d3.select("#rebounds").selectAll("*").remove();
	d3.select("#circles").selectAll("*").remove();
	currentcircle = 0;
	currentpass = 0;
	currentdribble = 0;
	currentshot = 0;
	currentrebound = 0;

	newevent = {};
	currentplayer = null;
	currentevent = 0;
	currentsequence += 1;
	abletorebound = 0;
}

function lossTo(who) {
	oobourbutton.style.display = "none";
	ooboppbutton.style.display = "none";
	opponentbutton.style.display = "none";

	newevent["Action"] = "Pass Missed";
	newevent["Loss To"] = who;
	newevent2["Action"] = "Pass Not Received";
	newevent2["Loss To"] = who;
	maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(currentplayer)]["ScrimmagePressure"].push(newevent);
	maindata["Practices"][indexofpractice]["Data"][practicingarray.indexOf(player1)]["ScrimmagePressure"].push(newevent2);

	currentplayer = player1;
	player1 = null;
	var currentplayerid = currentplayer.toLowerCase().replace(" ","");
	document.getElementById(''+currentplayerid+'').style.display = "block";
	currentplayer = null;

	d3.select("#shots").selectAll("*").remove();
	d3.select("#passes").selectAll("*").remove();
	d3.select("#dribbles").selectAll("*").remove();
	d3.select("#rebounds").selectAll("*").remove();
	d3.select("#circles").selectAll("*").remove();
	currentcircle = 0;
	currentpass = 0;
	currentdribble = 0;
	currentshot = 0;
	currentrebound = 0;

	newevent = {};
	newevent2 = {};
}

function drawShotArrow(xloc,yloc) {
	//all of this is relative to top left corner of court
	var centerx = xloc;
	var centery = yloc - topspace;
    
	var diffx = hoopx - centerx;
	var diffy = hoopy - centery;

	var dist = Math.sqrt(Math.pow(diffx,2) + Math.pow(diffy,2));

	var unitvector = [(diffx/dist),(diffy/dist)];
	var vectortoinitialpoint = [circleradius*unitvector[0],circleradius*unitvector[1]];

	var x1 = centerx + vectortoinitialpoint[0];
	var y1 = centery + vectortoinitialpoint[1];


	var headmag = 15;
	var head = [headmag*unitvector[0],headmag*unitvector[1]];

	var head1vector = [Math.cos(Math.PI/6)*head[0] - Math.sin(Math.PI/6)*head[1],Math.cos(Math.PI/6)*head[1] + Math.sin(Math.PI/6)*head[0]];
	var head2vector = [Math.cos(11*Math.PI/6)*head[0] - Math.sin(11*Math.PI/6)*head[1],Math.cos(11*Math.PI/6)*head[1] + Math.sin(11*Math.PI/6)*head[0]];


	var head1x = hoopx-head1vector[0];
	var head1y = hoopy-head1vector[1];

	var head2x = hoopx-head2vector[0];
	var head2y = hoopy-head2vector[1];

	d3.select("#shots").style('display','block')
						.append('line')
						.attr('id','shot' + currentshot + 'mainline')
						.attr('x1',centerx)
						.attr('y1',centery)
						.attr('x2',hoopx)
						.attr('y2',hoopy);

	d3.select("#shots").append('line')
						.attr('id','shot' + currentshot + 'head1line')
						.attr('x1',head1x)
						.attr('y1',head1y)
						.attr('x2',hoopx)
						.attr('y2',hoopy);

	d3.select("#shots").append('line')
						.attr('id','shot' + currentshot + 'head2line')
						.attr('x1',head2x)
						.attr('y1',head2y)
						.attr('x2',hoopx)
						.attr('y2',hoopy);

	var posleft = hoopx + .5*(centerx - hoopx);
	var postop = hoopy + .5*(centery - hoopy);


	actionbuttons.style.top = postop + 'px';
	actionbuttons.style.left = posleft + 'px';
	actionbuttons.style.display = "block";
	ooboppbutton.style.display = "none";
	oobourbutton.style.display = "none";
	opponentbutton.style.display = "none";
	notrebbutton.style.display = "none";
	checkbutton.style.display = "inline";
	xbutton.style.display = "inline";

	currentshot += 1;
}

function drawPassArrow(xi,yi,xf,yf) {
	var diffx = xf - xi;
	var diffy = yf - yi;

	var dist = Math.sqrt(Math.pow(diffx,2) + Math.pow(diffy,2));

	var unitvector = [(diffx/dist),(diffy/dist)];
	var vectortoinitialpoint = [circleradius*unitvector[0],circleradius*unitvector[1]];

	var x1 = xi + vectortoinitialpoint[0];
	var y1 = yi + vectortoinitialpoint[1] - topspace;

	var x2 = xf - vectortoinitialpoint[0];
	var y2 = yf - vectortoinitialpoint[1] - topspace;

	var headmag = 15;
	var head = [headmag*unitvector[0],headmag*unitvector[1]];

	var head1vector = [Math.cos(Math.PI/6)*head[0] - Math.sin(Math.PI/6)*head[1],Math.cos(Math.PI/6)*head[1] + Math.sin(Math.PI/6)*head[0]];
	var head2vector = [Math.cos(11*Math.PI/6)*head[0] - Math.sin(11*Math.PI/6)*head[1],Math.cos(11*Math.PI/6)*head[1] + Math.sin(11*Math.PI/6)*head[0]];


	var head1x = x2-head1vector[0];
	var head1y = y2-head1vector[1];

	var head2x = x2-head2vector[0];
	var head2y = y2-head2vector[1];

	d3.select("#passes").style('display','block')
						.append('line')
						.attr('id','pass' + currentpass + 'mainline')
						.attr('x1',x1)
						.attr('y1',y1)
						.attr('x2',x2)
						.attr('y2',y2);

	d3.select("#passes").append('line')
						.attr('id','pass' + currentpass + 'head1line')
						.attr('x1',head1x)
						.attr('y1',head1y)
						.attr('x2',x2)
						.attr('y2',y2);

	d3.select("#passes").append('line')
						.attr('id','pass' + currentpass + 'head2line')
						.attr('x1',head2x)
						.attr('y1',head2y)
						.attr('x2',x2)
						.attr('y2',y2);

	var posleft = x2 + .5*(x1 - x2);
	var postop = y2 + .5*(y1 - y2);
	actionbuttons.style.top = postop + 'px';
	actionbuttons.style.left = posleft + 'px';

	currentpass += 1;
}

function drawReboundArrow(xloc,yloc) {
	var centerx = xloc;
	var centery = yloc - topspace;
    
	var diffx = centerx - hoopx;
	var diffy = centery - hoopy;

	var dist = Math.sqrt(Math.pow(diffx,2) + Math.pow(diffy,2));

	var unitvector = [(diffx/dist),(diffy/dist)];
	var vectortoinitialpoint = [circleradius*unitvector[0],circleradius*unitvector[1]];

	var x2 = centerx - vectortoinitialpoint[0];
	var y2 = centery - vectortoinitialpoint[1];


	var headmag = 15;
	var head = [headmag*unitvector[0],headmag*unitvector[1]];

	var head1vector = [Math.cos(Math.PI/6)*head[0] - Math.sin(Math.PI/6)*head[1],Math.cos(Math.PI/6)*head[1] + Math.sin(Math.PI/6)*head[0]];
	var head2vector = [Math.cos(11*Math.PI/6)*head[0] - Math.sin(11*Math.PI/6)*head[1],Math.cos(11*Math.PI/6)*head[1] + Math.sin(11*Math.PI/6)*head[0]];


	var head1x = x2-head1vector[0];
	var head1y = y2-head1vector[1];

	var head2x = x2-head2vector[0];
	var head2y = y2-head2vector[1];

	d3.select("#rebounds").style('display','block')
						.append('line')
						.attr('id','rebound' + currentrebound + 'mainline')
						.attr('x1',hoopx)
						.attr('y1',hoopy)
						.attr('x2',x2)
						.attr('y2',y2);

	d3.select("#rebounds").append('line')
						.attr('id','rebound' + currentrebound + 'head1line')
						.attr('x1',head1x)
						.attr('y1',head1y)
						.attr('x2',x2)
						.attr('y2',y2);

	d3.select("#rebounds").append('line')
						.attr('id','rebound' + currentrebound + 'head2line')
						.attr('x1',head2x)
						.attr('y1',head2y)
						.attr('x2',x2)
						.attr('y2',y2);

	var posleft = hoopx + .5*(centerx - hoopx);
	var postop = hoopy + .5*(centery - hoopy);

	currentrebound += 1;
}

function getInitials(name) {
	var currentinitials;

	if (name.includes(" ")) {
		var x = name.split(" ");
		var a = x[0].slice(0,1).toUpperCase();
		var b = x[1].slice(0,1).toUpperCase();
		currentinitials =  a.concat(b);
	}

	return currentinitials;
}

function drawNextCircle(player,x,y) {
	d3.select("#circles").append('svg')
						.attr('id','circle' + currentcircle + '')
						.attr('width',circlesvgwidth)
						.attr('height',circlesvgwidth)
						.attr('class','circleforplayers')
						.style('left',x - circleradius)
						.style('top',y - circleradius)
						.style('display','block')
						.append('circle')
						.attr('cx',.5*circlesvgwidth)
						.attr('cy',.5*circlesvgwidth)
						.attr('r',.0231839*window.innerHeight);
	d3.select("#circle" + currentcircle + '').append('text')
						.attr('x','50%')
						.attr('y','65%')
						.attr('text-anchor','middle')
						.style('stroke-width','0')
						.style('fill','#000')
						.style('font-size',.02163833*window.innerHeight)
						.text(getInitials(player));

	d3.select("#circles").style('display','block');

	d3.select("#circle" + currentcircle + '').attr('onmousedown','inputDribble()')
											.attr('onmouseup','stopDribble()');

	d3.select("#circle" + (currentcircle - 1) + '').attr('onmousedown','')
													.attr('onmouseup','');

	currentcircle += 1;
}

function writeData() {
	fs.writeFile("Data Storage/maindata.JSON", JSON.stringify(maindata, null, "\t"), function (err) {
        if (err != undefined) {
            alert(err.message,"Data Save error")
        }
    });	
}

function undoSequence() {
	if (pressure === "Scrimmage") {
		if (currentevent !== 0) {
			for (var i = 0; i < practicingarray.length; i++) {
				var arraylength = maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"].length
				for (var j = 0; j < arraylength; j++) {
					if (maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"][maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"].length - 1]["Sequence"] === currentsequence) {
						maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"].pop();
					}
				}
			}

			d3.select("#shots").selectAll("*").remove();
			d3.select("#passes").selectAll("*").remove();
			d3.select("#dribbles").selectAll("*").remove();
			d3.select("#rebounds").selectAll("*").remove();
			d3.select("#circles").selectAll("*").remove();
			currentcircle = 0;
			currentpass = 0;
			currentdribble = 0;
			currentshot = 0;
			currentrebound = 0;

			abletorebound = 0
			abletoshoot = 0;
			abletodribble = 0;
			abletopass = 0;

			passwasattempted = 0;
			shotwasattempted = 0;
			passoccurred = 0;
			dribbleoccurred = 0;

			newevent = {};
			newevent2 = {};

			currentevent = 0;
			currentplayer = null;

			actionbuttons.style.display = "none";
			playerdropdowndiv.style.display = "none";

			for (var i = 0; i < practicingarray.length; i++) {
				var playerid = practicingarray[i].toLowerCase().replace(" ","");
				document.getElementById(''+playerid+'').style.display = "block";
			}

			hoopsvg.setAttribute('onmouseover','');
		}

		else if (currentevent === 0 && currentsequence !== 0) {
			for (var i = 0; i < practicingarray.length; i++) {
				var arraylength = maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"].length
				for (var j = 0; j < arraylength; j++) {
					if (maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"][maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"].length - 1]["Sequence"] === currentsequence - 1) {
						maindata["Practices"][indexofpractice]["Data"][i]["ScrimmagePressure"].pop();
					}
				}
			}

			d3.select("#shots").selectAll("*").remove();
			d3.select("#passes").selectAll("*").remove();
			d3.select("#dribbles").selectAll("*").remove();
			d3.select("#rebounds").selectAll("*").remove();
			d3.select("#circles").selectAll("*").remove();
			currentcircle = 0;
			currentpass = 0;
			currentdribble = 0;
			currentshot = 0;
			currentrebound = 0;

			abletorebound = 0
			abletoshoot = 0;
			abletodribble = 0;
			abletopass = 0;

			passwasattempted = 0;
			shotwasattempted = 0;
			passoccurred = 0;
			dribbleoccurred = 0;

			newevent = {};
			newevent2 = {};

			currentevent = 0;
			currentsequence -= 1;
			currentplayer = null;

			actionbuttons.style.display = "none";
			playerdropdowndiv.style.display = "none";

			for (var i = 0; i < practicingarray.length; i++) {
				var playerid = practicingarray[i].toLowerCase().replace(" ","");
				document.getElementById(''+playerid+'').style.display = "block";
			}

			hoopsvg.setAttribute('onmouseover','');
		}
	}
}