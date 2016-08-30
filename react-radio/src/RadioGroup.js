import React, {Component, PropTypes} from 'react';
import Radios from './Radio';

class RadioGroup extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        name: PropTypes.string
    };
    static defaultProps = {
        name: 'radio-'+new Date()
    };
    state = {
        data: this.props.options,
        name: this.props.name
    };
    getChecked = () => {
        return this.checked;
    }
    setChecked = (value) => {
        this.checked = value;
    }
    render () {
        return (
            <div>
                {
                    this.state.data.map(function (item,index) {
                        return (
                            <Radios 
                                key = {index}
                                name = {this.state.name}
                                item = {item}
                                parentCallback = {this.setChecked}
                            />
                        )
                    }.bind(this))
                }
            </div>
        );
    }
}

export default RadioGroup;