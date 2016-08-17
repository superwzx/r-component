var React = require('react');
var Radios = require('./Radio');

var RadioGroup = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.options,
            name: this.props.name || 'radio-'+new Date()
        }
    },
    getChecked: function () {
        return this.checked;
    },
    setChecked: function (value) {
        this.checked = value;
    },
    render: function () {
        return (
            <div>
                {
                    this.state.data.map(function (item) {
                        return (
                            <Radios 
                                name={this.state.name}
                                item={item}
                                parentCallback={this.setChecked}
                            />
                        )
                    }.bind(this))
                }
            </div>
        );
    }
});

module.exports = RadioGroup;