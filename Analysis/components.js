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
