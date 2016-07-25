

var React = require('react');
var Tab = require('./Tab');


var TabList = React.createClass({

	getInitialState: function () {
		return {
			list: this.props.panels
		}
	},

	render: function () {
		return (
			<div>
				{
					this.state.list.map(function (item) {
						return <Tab id={item.id} name={item.name} />
					})
				}
			</div>
		)
	}
});

module.exports = TabList;
