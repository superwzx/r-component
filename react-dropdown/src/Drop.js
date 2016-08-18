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
					showFlag: !this.state.showFlag,
					listIndex: ''
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
		var index = this.props.keyIndex;
		this.setState({
			currentVal: this.props.currentVal[index] ? this.props.currentVal[index] : ''
		});
	},
	// 处理用户输入后list的筛选
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
	//input失焦的时候处理下拉数组
	clearInput: function (val) {
		var newData = this.props.list.filter(function(item) {
            return item.value == val;
        });
        //判断输入内容是否存在
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
	//处理键盘上下键操作以及下拉选项点选操作
	handleKey: function () {
		var ind = (arguments[0]!=='') ? +arguments[0] : +this.state.listIndex;
		var arr = this.filterList();
		var val = arr[ind].value,
			id = arr[ind].id;
		this.props.getSubList(this.props.keyIndex,id,val);
		this.setState({
			currentVal: val,
			listIndex: ind
		});
	},
	//处理键盘回车事件
	handleEnter: function () {
		this.setState({
			showFlag: false
		});
	},
	//过滤与输入文字匹配的项
	filterList: function () {
		var array = [];
		this.props.list.forEach(function (list,index) {
            if(list.value.indexOf(this.state.filterText) === -1) {
                return;
            }
            array.push(list);
        }.bind(this));
        return array;
	},
	render: function () {
		var array = this.filterList();
		var contents = [
			(
				<DropBtn 
					currentVal = {this.state.currentVal} 
					list = {array} 
					onUserInput = {this.handleUserInput} 
					onBlurInput = {this.clearInput} 
					onKey = {this.handleKey} 
					onEnter = {this.handleEnter} 
				/>
			),
			(
				<DropList
					list = {array}
					listIndex = {this.state.listIndex}
					onConfirm = {this.handleKey}
				/>
			)
		];

		return (
			<div 
				ref="hahaha"
				className={this.state.showFlag ? 'dropdown-wrap dropdown-active' : 'dropdown-wrap'} >
				{contents}
			</div>
		)
	}
});

module.exports = Drop;