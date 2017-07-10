


var React = require('react');

var TabList = require('./TabList');

var Tabs = React.createClass({
	propTypes: {

	},

	getInitialState: function () {
		return {
			currentIndex: this.props.currentIndex
		}
	},

	getTabPanels: function () {
		var newChildren = [];

		var currentIndex = this.state.currentIndex;

		React.Children.forEach(this.props.children, function (child) {
			newChildren.push( React.cloneElement(child, {currentIndex: currentIndex}) );
		});

		return newChildren;
	},

	switchTab: function (index) {
		this.setState({
			currentIndex: index
		})
	},

	render: function () {
		
		var tabPanels = this.getTabPanels();
		var contents = [
			(
				<TabList
					currentIndex={this.props.currentIndex}
					panels={this.props.children}
				    switchTab={this.switchTab}
				/>
			),
			(
				<div className="tab-panel">
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