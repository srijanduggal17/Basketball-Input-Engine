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
	calculateAccuracy(data) {
		let shotsMade = 0;
		let shotsMissed = 0;

		data.forEach(x => {
			if (x.Action === "Shot Made") shotsMade += 1;
			else if (x.Action === "Shot Missed") shotsMissed += 1;
		});
		
		return Math.round(100*shotsMade/(shotsMade + shotsMissed));
	}

	render() {
		console.log(this.props.data);

		let data = this.props.data;


		let nongroup = data.nongroup;
		nongroup.forEach(x => {
			x.Location[0] = Math.round(x.Location[0]*10000)/100;
			x.Location[1] = Math.round(x.Location[1]*10000)/100;			
		});

		let groups = data.groups;

		let totalGroupShots = 0;
		groups.forEach(y => {
			y.pts.forEach(x => {
				if (x.Action === "Shot Made" || x.Action === "Shot Missed") totalGroupShots += 1;
			})
		});

		return (
			<g>
				<g>
					{nongroup.map(x => {
						if (x.Action = "Shot Missed") {
							return (<circle r="1.5" fill="red" cx={`${x.Location[0]}%`} cy={`${x.Location[1]}%`}></circle>)
						} else if (x.Action = "Shot Made") {
							return (<circle r="1.5" fill="green" cx={`${x.Location[0]}%`} cy={`${x.Location[1]}%`}></circle>)
						}
					})}
					
				</g>
				{groups.map(y => {
					y.pts.forEach(x => {
						x.Location[0] = Math.round(x.Location[0]*10000)/100;
						x.Location[1] = Math.round(x.Location[1]*10000)/100;			
					});

					y.center[0] = Math.round(y.center[0]*10000)/100;
					y.center[1] = Math.round(y.center[1]*10000)/100;

					if (y.pts.length > 5) {
						const accuracy = this.calculateAccuracy(y.pts);
						const color = `hsl(${accuracy},100%,50%)`;
						const freq = y.pts.length / totalGroupShots;
						const circleSize = Math.round(freq*40)/10;
						return (
							<g>
								<circle r={`${circleSize}%`} fill={color} stroke={color} cx={`${y.center[0]}%`} cy={`${y.center[1]}%`}></circle>
								<circle r="4%" fill="none" stroke="black" cx={`${y.center[0]}%`} cy={`${y.center[1]}%`}></circle>
							</g>
						)
					} else {
						return (
							<g>
								{y.pts.map(x => {
									if (x.Action = "Shot Missed") {
										return (<circle r="1.5" fill="red" cx={`${x.Location[0]}%`} cy={`${x.Location[1]}%`}></circle>)
									} else if (x.Action = "Shot Made") {
										return (<circle r="1.5" fill="green" cx={`${x.Location[0]}%`} cy={`${x.Location[1]}%`}></circle>)
									}
								})}
								<circle r="4%" fill="none" stroke="black" cx={`${y.center[0]}%`} cy={`${y.center[1]}%`}></circle>
							</g>
						)
					}
				})}
			</g>
		)
	}
}