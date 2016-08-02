var React = require('react');

var DropList = React.createClass({

	getInitialState: function () {
		return {
			currentVal: this.props.currentVal
		}
	},
	selectOption: function (e) {
		var val = e.target.textContent, index = e.target.getAttribute('data-index'),id = e.target.getAttribute('data-id');
		this.props.switchOption(val);
		this.props.getSubList(index,id,val);
	},
	render: function () {
		var arr = [];
        this.props.list.forEach(function (list) {
            if(list.value.indexOf(this.props.filterText) === -1) {
                return;
            }
            arr.push(<a href="javascript:;" className="dropdown-option" key={list.value} data-index={this.props.keyIndex} data-id={list.id} onClick={this.selectOption}>{list.value}</a>);
        }.bind(this));
        return (
            <div className="dropdown-list">{arr}</div>
        )
	}
})

module.exports = DropList;