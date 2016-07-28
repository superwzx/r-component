

var React = require('react');


var DropBtn = React.createClass({

	getInitialState: function () {
		return {
			currentVal: this.props.currentVal
		}
	},
	render: function () {
		return (
			// <a href="javascript:;" className="dropdown-btn" onClick={this.props.switchList}>{this.props.currentVal}</a>
			<a href="javascript:;" className="dropdown-btn">{this.props.currentVal}</a>
		)
	}
});

module.exports = DropBtn;
