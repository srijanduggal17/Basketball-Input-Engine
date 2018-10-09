const playerDiv = document.getElementById('playerDiv');

const roster = {
	"Roster": [
		{
			"Name": "Rus Hu"
		},
		{
			"Name": "Panda He"
		},
		{
			"Name": "Roy Li"
		},
		{
			"Name": "Steven Sun"
		},
		{
			"Name": "Roy Pan"
		},
		{
			"Name": "Xincheng Yuan"
		},
		{
			"Name": "Ben Song"
		},
		{
			"Name": "Sebastian Jin"
		},
		{
			"Name": "Eddy Wu"
		},
		{
			"Name": "Hongyang Zhou"
		},
		{
			"Name": "Roger Wang"
		},
		{
			"Name": "Jamie Z"
		},
		{
			"Name": "Bryan Yao"
		},
		{
			"Name": "Jeremy Dou"
		},
		{
			"Name": "Zihan Ai"
		},
		{
			"Name": "Liyan Ma"
		},
		{
			"Name": "Ziqiao Wang"
		},
		{
			"Name": "Gary Guo"
		},
		{
			"Name": "Henry Wei"
		}
	]
};

var playerChosen = null;

ReactDOM.render(<PlayerDropdown options={roster.Roster} />, playerDiv, () => {
	const makeMapButton = document.getElementById('makeMap');
	const playerDropdown = document.getElementById('playerDropdown')

	function makeMap() {
		playerChosen = playerDropdown.value;
	}

	makeMapButton.addEventListener('click', makeMap);
});