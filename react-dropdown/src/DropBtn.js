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
	render: function () {
		return (
			<a href="javascript:;" className="dropdown-btn">
				<input type="text" value = {this.props.currentVal} ref="filterText" onChange={this.handleChange} onBlur={this.clearInput} />
				<i></i>
			</a>
		)
	}
});

module.exports = DropBtn;
