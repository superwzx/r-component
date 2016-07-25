


var React = require('react');

var TabList = require('./TabList');

var Tabs = React.createClass({
	propTypes: {

	},

	getTabPanels: function () {
		var newChildren = [];
		console.log(this.props.children)
		this.props.children.forEach(function (child) {
			newChildren.push( React.cloneElement(child));
		});
		return newChildren;
	},

	render: function () {
		
		var tabPanels = this.getTabPanels();
		var contents = [
			(
				<TabList
					panels={this.props.children}
				/>
			),
			(
				<div>
					{tabPanels}
				</div>
			)
		];

		return (
			<div>
				{contents}
			</div>
		)
	}
});

module.exports = Tabs;