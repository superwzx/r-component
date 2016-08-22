var React = require('react');

var Radios = React.createClass({
    getInitialState: function () {
        return {
            label: this.props.item.label,
            value: this.props.item.value,
            checked: this.props.item.checked
        }
    },
    handleChange: function () {
        var value = this.state.value,
            checked = this.state.checked;
        this.setState({
            checked: !checked
        });
        if(this.props.onChange) {
            this.props.onChange(value,!checked);
        }
    },
    render: function () {
        return (
            <label>
                <input type="radio" name={this.props.name} defaultChecked={!!this.state.checked} value={this.state.value} onChange={this.handleChange} />
                <span>{this.state.label}</span>
            </label>
        );
    }
});

module.exports = Radios;