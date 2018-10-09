const playerDiv = document.getElementById("playerDiv");

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
			"Name": "Hongyang X"
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

ReactDOM.render(<PlayerDropdown options={roster.Roster} />, playerDiv);