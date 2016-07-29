

var React = require('react');


var DropBtn = React.createClass({
	handleChange: function () {
        this.props.onUserInput(
            this.refs.filterText.value
        );
    },
	render: function () {
		return (
			<a href="javascript:;" className="dropdown-btn">
				<input type="text" value = {this.props.currentVal} ref="filterText" onChange={this.handleChange} />
				<i></i>
			</a>
		)
	}
});

module.exports = DropBtn;
