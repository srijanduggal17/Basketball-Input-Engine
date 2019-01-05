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
		console.log(this.props.data);

		let data = this.props.data;


		let nongroup = data.nongroup;
		nongroup.forEach(x => {
			x.Location[0] = Math.round(x.Location[0]*10000)/100;
			x.Location[1] = Math.round(x.Location[1]*10000)/100;			
		});

		let groups = data.groups;

		return (
			<g>
				<g>
					{nongroup.map(x => <circle r="1.5" fill="blue" cx={`${x.Location[0]}%`} cy={`${x.Location[1]}%`}></circle>)}
				</g>
				{groups.map(y => {
					y.pts.forEach(x => {
						x.Location[0] = Math.round(x.Location[0]*10000)/100;
						x.Location[1] = Math.round(x.Location[1]*10000)/100;			
					});

					y.center[0] = Math.round(y.center[0]*10000)/100;
					y.center[1] = Math.round(y.center[1]*10000)/100;

					return (
						<g>
							{y.pts.map(x => <circle r="1" fill="blue" cx={`${x.Location[0]}%`} cy={`${x.Location[1]}%`}></circle>)}
							<circle r="5%" fill="none" stroke="black" cx={`${y.center[0]}%`} cy={`${y.center[1]}%`}></circle>
						</g>
					)
				})}
			</g>
		)
	}
}