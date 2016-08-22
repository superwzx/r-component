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
        var val = this.state.data.filter(function (item) {
            return item.checked == true;
        });
        return val;
    },
    handleChange: function (value,checked) {
        var oldData = this.props.options,
            newData = [];
        for(var i = 0; i < oldData.length; i++) {
            newData[i] = oldData[i]
        };
        newData.forEach(function (item) {
            item.checked = item.value == value?checked:false;
        });
        this.setState({
            data: newData
        });
    },
    render: function () {
        return (
            <div>
                {
                    this.state.data.map(function (item) {
                        return (
                            <Radios name={this.state.name} item={item} onChange={this.handleChange}></Radios>
                        )
                    }.bind(this))
                }
            </div>
        );
    }
});

module.exports = RadioGroup;