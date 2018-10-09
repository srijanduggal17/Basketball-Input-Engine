"use strict";

var playerDiv = document.getElementById('playerDiv');

var roster = {
	"Roster": [{
		"Name": "Rus Hu"
	}, {
		"Name": "Panda He"
	}, {
		"Name": "Roy Li"
	}, {
		"Name": "Steven Sun"
	}, {
		"Name": "Roy Pan"
	}, {
		"Name": "Xincheng Yuan"
	}, {
		"Name": "Ben Song"
	}, {
		"Name": "Sebastian Jin"
	}, {
		"Name": "Eddy Wu"
	}, {
		"Name": "Hongyang Zhou"
	}, {
		"Name": "Roger Wang"
	}, {
		"Name": "Jamie Z"
	}, {
		"Name": "Bryan Yao"
	}, {
		"Name": "Jeremy Dou"
	}, {
		"Name": "Zihan Ai"
	}, {
		"Name": "Liyan Ma"
	}, {
		"Name": "Ziqiao Wang"
	}, {
		"Name": "Gary Guo"
	}, {
		"Name": "Henry Wei"
	}]
};

var playerChosen = null;

ReactDOM.render(React.createElement(PlayerDropdown, { options: roster.Roster }), playerDiv, function () {
	var makeMapButton = document.getElementById('makeMap');
	var playerDropdown = document.getElementById('playerDropdown');

	function makeMap() {
		playerChosen = playerDropdown.value;
		console.log(playerChosen);
	}

	makeMapButton.addEventListener('click', makeMap);
});
