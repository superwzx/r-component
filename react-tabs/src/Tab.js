

var React = require('react');


var Tab = React.createClass({

	propTypes: {

	},

	getInitialState: function () {
		return {
			id: this.props.id,
			name: this.props.name
		}
	},

	switchTabPanel: function () {
		
	},

	render: function () {
		return <a id={this.props.id} onClick={this.switchTabPanel}>{this.state.name}</a>
	}
});

module.exports = Tab;
