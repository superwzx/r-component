var React = require('react');

var DropBtn = React.createClass({
	handleChange: function () {
        this.props.onUserInput(
            this.refs.filterText.value
        );
    },
    clearInput: function () {
    	var val = this.refs.filterText.value;
        this.props.onBlurInput(val);
    },
    componentWillMount: function () {
        var ind = '';
        document.body.addEventListener('keyup', function (e) {
            if(this.refs.filterText !== e.target) return;
            var val = this.refs.filterText.value;
            this.props.list.forEach(function (item,index) {
                if(item.value == val) {
                    ind = index;
                }
            });
            switch(e.keyCode) {
                case 38: ind = (ind!=='' && ind>0)?--ind:this.props.list.length-1;this.props.onKey(ind);break;
                case 40: ind = (ind!=='' && ind<this.props.list.length-1)?++ind:0;this.props.onKey(ind);break;
                case 13: this.props.onEnter();this.refs.filterText.blur();break;
            }    
        }.bind(this),false);
    },
	render: function () {
		return (
			<a href="javascript:;" className="dropdown-btn">
				<input type="text" value = {this.props.currentVal} ref="filterText" onChange={this.handleChange} onBlur={this.clearInput} />
			</a>
		)
	}
});

module.exports = DropBtn;
