var React = require('react');

var Avatar = React.createClass({
    componentWillMount: function () {
        this.style = {
            root: {
                width: this.props.size || 40,
                height: this.props.size || 40,
                textAlign: 'center',
                borderRadius: '50%',
                overflow: 'hidden'
            }
        }
        this.src = this.props.src || this.props.defaultSrc;
    },
    render: function () {
        return (
            <div style={this.style.root}>
                <img src={this.src} width="100%" height="100%" />
            </div>
        )
    }
});

module.exports = Avatar;