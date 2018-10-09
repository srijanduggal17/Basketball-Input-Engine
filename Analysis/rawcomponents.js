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