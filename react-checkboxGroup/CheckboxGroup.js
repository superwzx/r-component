

var React = require('react');

var Checkbox = require('./Checkbox');


var CheckboxGroup = React.createClass({
	getInitialState: function () {
		return {
			data: []
		}
	},
	componentWillMount: function () {
		this.props.data.forEach(function (item) {
			this.props.checked.forEach(function (id) {
				if (item.id == id) {
					item.checked = true;
				}
			});
		}.bind(this));
		this.setState({
			data: this.props.data
		});
	},

	getChecked: function () {
		var arr = [];
		this.state.data.forEach(function (item) {
			if (item.checked) {
				arr.push(item.id)
			}
		})
		return arr;
	},

	handleChange: function (id, checked) {

		//var data = [...this.state.data];
		var oldData = this.state.data,
			data = [];

		for (var i = 0, l = oldData.length; i < l; i++) {
			data[i] = oldData[i];
		}

		data.forEach(function (item) {
			if (item.id == id) {
				item.checked = checked;
			}
		});

		this.setState({
			data: data
		});
	},

	render: function () {
		return (
			<div>
				{
					this.state.data.map(function (item) {
						return (
							<Checkbox
								name={item.username}
								id={item.id}
								parent={this}
							    checked={item.checked}
							    onChange={this.handleChange}
							/>
						)
					}.bind(this))
				}
			</div>
		)
	}
})

module.exports = CheckboxGroup;