


var React = require('react');

var DropBtn = require('./DropBtn');
var DropList = require('./DropList');

var Drop = React.createClass({
	getInitialState: function () {
		return {
			currentVal: this.props.currentVal?this.props.currentVal:'',
			showFlag: false,
			filterText: ''
		}
	},
	componentWillMount: function () {
		document.body.addEventListener('click', function (e) {
			if(e.target.querySelectorAll('div.dropdown-wrap').length) {
				this.setState({
					showFlag: false
				});
			} else {
				this.setState({
					showFlag: !this.state.showFlag
				});
			}
		}.bind(this));
	},
	handleUserInput: function (val) {
		this.setState({
			filterText: val,
			currentVal: val
		});
	},
	switchOption: function (val) {
		this.setState({
			currentVal: val,
			filterText: ''
		});
	},
	render: function () {
		var contents = [
			(
				<DropBtn currentVal={this.state.currentVal} onUserInput={this.handleUserInput}></DropBtn>
			),
			(
				<DropList list={this.props.list} filterText={this.state.filterText} switchOption={this.switchOption}></DropList>
			)
		];

		return (
			<div className={this.state.showFlag ? 'dropdown-wrap dropdown-active' : 'dropdown-wrap'}>
				{contents}
			</div>
		)
	}
});

module.exports = Drop;