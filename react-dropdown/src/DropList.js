var React = require('react');

var DropList = React.createClass({
    //下拉选项选择操作，并返回index
	selectOption: function (e) {
		var id = e.target.getAttribute('data-id');
		this.props.onConfirm(+id);
	},
	render: function () {
		var arr = [];
        this.props.list.forEach(function (list,index) {
            arr.push(<a
                        href = "javascript:;"
                        className = {this.props.listIndex === index ? 'dropdown-option dropdown-option-active' : 'dropdown-option'}
                        data-id = {index}
                        onClick = {this.selectOption}>
                        {list.value}
                    </a>);
        }.bind(this));
        return (
            <div className="dropdown-list">{arr}</div>
        )
	}
})

module.exports = DropList;