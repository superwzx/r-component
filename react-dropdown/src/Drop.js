var React = require('react');

var DropBtn = require('./DropBtn');
var DropList = require('./DropList');

var Drop = React.createClass({
	getInitialState: function () {
		return {
			currentVal: '',
			showFlag: false,
			filterText: '',
			listIndex: ''
		}
	},
	componentWillMount: function () {
		document.body.addEventListener('click', function (e) {
			if(this.refs.hahaha.querySelector('input') == e.target) {
				this.setState({
					showFlag: !this.state.showFlag
				});
			} else {
				this.setState({
					showFlag: false
				});
			}
		}.bind(this),false);
	},
	// 下拉联动时更新input里面的值
	componentWillReceiveProps: function() {
		this.setState({
			currentVal: this.props.currentVal[this.props.keyIndex]?this.props.currentVal[this.props.keyIndex]:''
		});
	},
	// 处理用户输入list删选
	handleUserInput: function (val) {
		this.setState({
			filterText: val,
			currentVal: val
		});
	},
	// 处理下拉列表点击状态更新
	switchOption: function (val) {
		this.setState({
			currentVal: val,
			filterText: ''
		});
	},
	clearInput: function (val) {
		var newData = this.props.list.filter(function(item) {
            return item.value == val;
        });
		if (newData != null && newData.length > 0) {
			this.setState({
				currentVal: val,
				filterText: ''
			});
			this.props.getSubList(this.props.keyIndex,newData[0].id,val);
		} else {
			this.setState({
				currentVal: '',
				filterText: ''
			});
			this.props.getSubList(this.props.keyIndex,'','');
		}
	},
	handleKey: function (index) {
		var ind = (arguments[0]!=='')?+arguments[0]:+this.state.listIndex;
		var arr = [];
		this.props.list.forEach(function (list,index) {
            if(list.value.indexOf(this.state.filterText) === -1) {
                return;
            }
            arr.push(list);
        }.bind(this));
		var val = arr[ind].value,
			id = arr[ind].id;
		// this.switchOption(val);
		this.props.getSubList(this.props.keyIndex,id,val);
		this.setState({
			currentVal: val,
			listIndex: index
		});
	},
	handleEnter: function () {
		this.setState({
			showFlag: false
		});
	},
	render: function () {
		var contents = [
			(
				<DropBtn currentVal={this.state.currentVal} filterText={this.state.filterText} list={this.props.list} onUserInput={this.handleUserInput} onBlurInput={this.clearInput} onKey={this.handleKey} onEnter={this.handleEnter}></DropBtn>
			),
			(
				<DropList list={this.props.list} listIndex = {this.state.listIndex} filterText={this.state.filterText} onConfirm={this.handleKey}></DropList>
			)
		];

		return (
			<div ref="hahaha" className={this.state.showFlag ? 'dropdown-wrap dropdown-active' : 'dropdown-wrap'}>
				{contents}
			</div>
		)
	}
});

module.exports = Drop;