

var React = require('react');


var Tab = React.createClass({

	getInitialState: function () {
		return {
			tabIndex: this.props.tabIndex,
			tab: this.props.tab,
			active: this.props.active
		}
	},

	componentWillReceiveProps: function (nextProps) {
		this.setState({
			active: nextProps.active
		});
	},

	switch: function () {
		console.log(this.state.tabIndex)
		this.props.switch(this.state.tabIndex);
	},

	render: function () {
		return (
			<a
				id={this.props.tabIndex}
				className={this.state.active ? 'active' : ''}
				onClick={this.switch}
			>
				{this.state.tab}
			</a>
		)
	}
});

module.exports = Tab;
