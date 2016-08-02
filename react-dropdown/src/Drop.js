var React = require('react');

var DropBtn = require('./DropBtn');
var DropList = require('./DropList');

var Drop = React.createClass({
	getInitialState: function () {
		return {
			currentVal: '',
			showFlag: false,
			filterText: ''
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
	switchOption: function (val,id) {
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
	handleList: function (index,id,val) {
		this.props.getSubList(index,id,val);
	},
	render: function () {
		var contents = [
			(
				<DropBtn currentVal={this.state.currentVal} list={this.props.list} onUserInput={this.handleUserInput} onBlurInput={this.clearInput}></DropBtn>
			),
			(
				<DropList list={this.props.list} filterText={this.state.filterText} switchOption={this.switchOption} getSubList={this.handleList} keyIndex={this.props.keyIndex}></DropList>
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