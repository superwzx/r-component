import React, {Component, PropTypes} from 'react';
import Radios from './Radio';

class RadioGroup extends Component {
    static propTypes = {
        options: React.PropTypes.array.isRequired,
        name: React.PropTypes.string
    };
    getDefaultprops () {
        name: 'radio-'+new Date()
    }
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