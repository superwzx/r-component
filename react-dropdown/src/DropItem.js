

	var React = require('react');

	var DropItem = React.createClass({

		// getInitialState: function () {
		// 	return {
		// 		//tabIndex: this.props.currentIndex
		// 	}
		// },

		render: function () {
			return (
				<div className={this.props.tabIndex == this.props.currentIndex ? 'active' : ''}>
					{this.props.children}
				</div>
			)
		}
	})

	module.exports = DropItem;