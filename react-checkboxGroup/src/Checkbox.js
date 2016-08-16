

var React = require('react');

var CheckboxItem = React.createClass({

	getInitialState () {
		return {
			value: this.props.value,
			text: this.props.text,
			checked: this.props.checked
		}
	},

	componentWillMount () {

	},

	handleChange (e) {
		let checked = e.target.checked;

		this.setState({
			checked: checked
		});

		this.props.parentCallback(e.target.value, checked);
	},

	render () {
		return (
			<label>
				<input
					type="checkbox"
					value={this.state.value}
					checked={this.state.checked}
					name={this.props.name}
					onChange={this.handleChange}
				/>
				<span>{this.state.text}</span>
			</label>
		)
	}
});

module.exports = CheckboxItem;