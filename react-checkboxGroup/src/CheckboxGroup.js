

var React = require('react');

var CheckboxItem = require('./Checkbox');


var CheckboxGroup = React.createClass({

	getInitialState () {
		return {
			data: this.props.data,
			name: this.props.name
		}
	},

	componentWillMount () {
		this.checked = [];
	},

	getChecked () {
		return this.checked;
	},

	setChecked (value, isChecked) {
		
		let i = this.checked.indexOf(value);

		if (isChecked) {
			if (i < 0) {
				this.checked.push(value)
			}
		} else {
			if (i > -1) {
				this.checked.splice(i, 1)
			}
		}

	},

	render () {
		return (
			<div>
				{
					this.state.data.map(function (item, index) {
						return (
							<CheckboxItem
								key={index}
								value={item.value}
								text={item.text}
							    checked={item.checked}
							    name={this.state.name}
							    parentCallback={this.setChecked}
							/>
						)
					}.bind(this))
				}
				<div>
					<button onClick={this.getChecked}>click</button>
				</div>
			</div>
		)
	}
})

module.exports = CheckboxGroup;