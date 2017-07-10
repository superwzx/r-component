

var React = require('react');
var Tab = require('./Tab');


var TabList = React.createClass({

	getInitialState: function () {
		var arr = [],
			currentIndex = this.props.currentIndex;
		this.props.panels.forEach(function (item) {
			arr.push({
				tabIndex: item.props.tabIndex,
				tab: item.props.tab,
				active: item.props.tabIndex == currentIndex
			});
		});
		return {
			list: arr
		}
	},

	switch: function (id) {
		var arr = [];
		this.state.list.forEach(function (item) {
			if (item.tabIndex == id) {
				arr.push({
					tabIndex: item.tabIndex,
					tab: item.tab,
					active: true
				})
			} else {
				arr.push({
					tabIndex: item.tabIndex,
					tab: item.tab,
					active: false
				})
			}
		});

		this.setState({
			list: arr
		});

		this.props.switchTab(id);
	},

	render: function () {

		return (
			<div className="tab-list">
				{
					this.state.list.map(function(item) {
						return <Tab tabIndex={item.tabIndex} tab={item.tab} active={item.active} switch={this.switch} />
					}.bind(this))
				}
			</div>
		)
	}
});

module.exports = TabList;
