"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerChoice = function (_React$Component) {
	_inherits(PlayerChoice, _React$Component);

	function PlayerChoice() {
		_classCallCheck(this, PlayerChoice);

		return _possibleConstructorReturn(this, (PlayerChoice.__proto__ || Object.getPrototypeOf(PlayerChoice)).apply(this, arguments));
	}

	_createClass(PlayerChoice, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"option",
				null,
				this.props.name
			);
		}
	}]);

	return PlayerChoice;
}(React.Component);

var PlayerDropdown = function (_React$Component2) {
	_inherits(PlayerDropdown, _React$Component2);

	function PlayerDropdown() {
		_classCallCheck(this, PlayerDropdown);

		return _possibleConstructorReturn(this, (PlayerDropdown.__proto__ || Object.getPrototypeOf(PlayerDropdown)).apply(this, arguments));
	}

	_createClass(PlayerDropdown, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"select",
				{ id: "playerDropdown" },
				React.createElement(
					"option",
					null,
					"Whole Team"
				),
				this.props.options.map(function (x) {
					return React.createElement(PlayerChoice, { name: x.Name });
				})
			);
		}
	}]);

	return PlayerDropdown;
}(React.Component);

var PressureDropdown = function (_React$Component3) {
	_inherits(PressureDropdown, _React$Component3);

	function PressureDropdown() {
		_classCallCheck(this, PressureDropdown);

		return _possibleConstructorReturn(this, (PressureDropdown.__proto__ || Object.getPrototypeOf(PressureDropdown)).apply(this, arguments));
	}

	_createClass(PressureDropdown, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ id: "pressuredropdowndiv" },
				React.createElement(
					"option",
					null,
					"Game"
				),
				React.createElement(
					"option",
					null,
					"Scrimmage"
				),
				React.createElement(
					"option",
					null,
					"Drill"
				)
			);
		}
	}]);

	return PressureDropdown;
}(React.Component);

var HeatMap = function (_React$Component4) {
	_inherits(HeatMap, _React$Component4);

	function HeatMap() {
		_classCallCheck(this, HeatMap);

		return _possibleConstructorReturn(this, (HeatMap.__proto__ || Object.getPrototypeOf(HeatMap)).apply(this, arguments));
	}

	_createClass(HeatMap, [{
		key: "calculateAccuracy",
		value: function calculateAccuracy(data) {
			var shotsMade = 0;
			var shotsMissed = 0;

			data.forEach(function (x) {
				if (x.Action === "Shot Made") shotsMade += 1;else if (x.Action === "Shot Missed") shotsMissed += 1;
			});

			return Math.round(100 * shotsMade / (shotsMade + shotsMissed));
		}
	}, {
		key: "render",
		value: function render() {
			var _this5 = this;

			console.log(this.props.data);

			var data = this.props.data;

			var nongroup = data.nongroup;
			nongroup.forEach(function (x) {
				x.Location[0] = Math.round(x.Location[0] * 10000) / 100;
				x.Location[1] = Math.round(x.Location[1] * 10000) / 100;
			});

			var groups = data.groups;

			return React.createElement(
				"g",
				null,
				React.createElement(
					"g",
					null,
					nongroup.map(function (x) {
						if (x.Action = "Shot Missed") {
							return React.createElement("circle", { r: "1.5", fill: "red", cx: x.Location[0] + "%", cy: x.Location[1] + "%" });
						} else if (x.Action = "Shot Made") {
							return React.createElement("circle", { r: "1.5", fill: "green", cx: x.Location[0] + "%", cy: x.Location[1] + "%" });
						}
					})
				),
				groups.map(function (y) {
					y.pts.forEach(function (x) {
						x.Location[0] = Math.round(x.Location[0] * 10000) / 100;
						x.Location[1] = Math.round(x.Location[1] * 10000) / 100;
					});

					y.center[0] = Math.round(y.center[0] * 10000) / 100;
					y.center[1] = Math.round(y.center[1] * 10000) / 100;

					if (y.pts.length > 5) {
						var accuracy = _this5.calculateAccuracy(y.pts);
						var color = "hsl(" + accuracy + ",100%,50%)";
						return React.createElement(
							"g",
							null,
							React.createElement("circle", { r: "4%", fill: color, stroke: "black", cx: y.center[0] + "%", cy: y.center[1] + "%" })
						);
					} else {
						return React.createElement(
							"g",
							null,
							y.pts.map(function (x) {
								if (x.Action = "Shot Missed") {
									return React.createElement("circle", { r: "1.5", fill: "red", cx: x.Location[0] + "%", cy: x.Location[1] + "%" });
								} else if (x.Action = "Shot Made") {
									return React.createElement("circle", { r: "1.5", fill: "green", cx: x.Location[0] + "%", cy: x.Location[1] + "%" });
								}
							}),
							React.createElement("circle", { r: "4%", fill: "none", stroke: "black", cx: y.center[0] + "%", cy: y.center[1] + "%" })
						);
					}
				})
			);
		}
	}]);

	return HeatMap;
}(React.Component);
