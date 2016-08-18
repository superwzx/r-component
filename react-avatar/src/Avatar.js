var React = require('react');

var Avatar = React.createClass({
    componentWillMount: function () {
        this.style = {
            root: {
                display: 'table',
                width: this.props.size || 40,
                height: this.props.size || 40,
                textAlign: 'center',
                borderRadius: '50%',
                background: this.props.background || 'none',
                overflow: 'hidden'
            },
            inner: {
                display: 'table-cell',
                textAlign: 'center',
                verticalAlign: 'middle'
            },
            icon: {
                fontSize: this.props.size*0.5
            }
        }
        this.src = this.props.src || this.props.defaultSrc;
    },
    render: function () {
        if(this.props.icon) {
            return (
                <div style={this.style.root}>
                    <div style={this.style.inner}>
                        <span className={this.props.icon} style={this.style.icon}></span>
                    </div>
                </div> 
            )
        } else {
            return (
                <div style={this.style.root}>
                    <img src={this.src} width="100%" height="100%" />
                </div>
            )
        }
    }
});

module.exports = Avatar;