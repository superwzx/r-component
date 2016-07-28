

	var React = require('react');

	var DropList = React.createClass({

		getInitialState: function () {
			return {
				currentVal: this.props.currentVal
			}
		},
		selectOption: function (e) {
			var val = e.target.textContent;
			this.props.switchOption(val);
			// this.props.switchList();
		},
		render: function () {
			return (
				<a href="javascript:;" className="dropdown-option" onClick={this.selectOption}>{this.props.children}</a>
			)
		}
	})

	module.exports = DropList;