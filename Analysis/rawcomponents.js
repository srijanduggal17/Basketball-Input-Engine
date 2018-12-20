class PlayerChoice extends React.Component {
	render() {
		return (
			<option>{this.props.name}</option>
		)
	}
}

class PlayerDropdown extends React.Component {
	render() {
		return (
			<select id="playerDropdown">
				<option>Whole Team</option>
				{this.props.options.map(x => <PlayerChoice name={x.Name} />)}
			</select>
		)
	}
}

class PressureDropdown extends React.Component {
	render() {
		return (
			<div id="pressuredropdowndiv"> 
				<option>Game</option>
				<option>Scrimmage</option>
				<option>Drill</option>
			</div>
		)
	}
}

class HeatMap extends React.Component {
	render() {
		let data = this.props.data.groups[0]
		data.forEach(x => {
			x.Location[0] = Math.round(x.Location[0]*100);
			x.Location[1] = Math.round(x.Location[1]*100);			
		});

		data.push({Location: [100, 100]}, {Location: [50, 50]}, {Location: [50, 100]})

		console.log(data);

		return (
			<g>
				{data.map(x => <circle r="2" cx={`${x.Location[0]}%`} cy={`${x.Location[1]}%`}></circle>)}
			</g>
		)
	}
}