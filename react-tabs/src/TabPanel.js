

	var React = require('react');

	var TabPanel = React.createClass({

		getInitialState: function () {
			return {
				list: this.props.panels
			}
		},

		render: function () {
			return (
				<div>
					{this.props.children}
				</div>
			)
		}
	})

	module.exports = TabPanel;