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

// class HeatMap extends React.Component {
// 	render() {
// 		return (
// 		)
// 	}
// }