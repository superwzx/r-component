import React, {Component, PropTypes} from 'react';

class Radios extends Component {
    state = {
        label: this.props.item.label,
        value: this.props.item.value,
        checked: this.props.item.checked
    };
    constructor (props) {
        super(props);
    }
    handleChange = (e) => {
        this.props.parentCallback(e.target.value);
    }
    render () {
        return (
            <label>
                <input
                    type = "radio" 
                    name = {this.props.name}
                    defaultChecked = {!!this.state.checked}
                    value = {this.state.value}
                    onChange = {this.handleChange}
                />
                <span>{this.state.label}</span>
            </label>
        );
    }
}

export default Radios;