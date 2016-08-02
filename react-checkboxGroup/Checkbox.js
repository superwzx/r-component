

var React = require('react');

var Checkbox = React.createClass({
	getInitialState: function () {
		return {
			id: this.props.id,
			checked: this.props.checked,
			name: this.props.name
		}
	},

	componentWillMount: function () {

	},

	handleChange: function () {

		var id = this.state.id;
		var checked = this.state.checked;

		this.setState({
			checked: !checked
		});

		if (this.props.onChange) {
			this.props.onChange(id, !checked)
		}
	},

	render: function () {
		return (
			<label>
				<input
					type="checkbox"
					value={this.state.id}
					checked={!!this.state.checked}
					onChange={this.handleChange}
				/>
				<span>{this.state.name}</span>
			</label>
		)
	}
});

module.exports = Checkbox;