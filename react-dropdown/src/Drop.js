


var React = require('react');

var DropBtn = require('./DropBtn');

var Drop = React.createClass({
	getInitialState: function () {
		return {
			currentVal: this.props.currentVal?this.props.currentVal:'',
			showFlag: false
		}
	},
	getDropList: function () {
		var newChildren = [];

		var currentVal = this.state.currentVal;
		var showFlag = this.state.showFlag;

		React.Children.forEach(this.props.children, function (child) {
			// newChildren.push(React.cloneElement(child,{switchOption: this.switchOption,switchList: this.switchList}));
			newChildren.push(React.cloneElement(child,{switchOption: this.switchOption}));
		}.bind(this));

		return newChildren;
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
	// switchList: function () {
	// 	this.setState({
	// 		showFlag: !this.state.showFlag
	// 	});
	// },
	switchOption: function (val) {
		this.setState({
			currentVal: val
		});
	},
	render: function () {
		var dropLists = this.getDropList();
		var contents = [
			(
				// <DropBtn currentVal={this.state.currentVal} switchList={this.switchList}></DropBtn>
				<DropBtn currentVal={this.state.currentVal}></DropBtn>
			),
			(
				<div className="dropdown-list">
					{dropLists}
				</div>
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