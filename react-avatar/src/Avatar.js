import React, {Component, PropTypes} from 'react';

class Avatar extends Component {
    static propTypes = {
        src: PropTypes.string,
        defaultSrc: PropTypes.string,
        size: PropTypes.number,
        icon: PropTypes.string,
        background: PropTypes.string
    };
    static defaultProps = {
        size: 40,
        background: 'none'
    }
    componentWillMount = () => {
        this.style = {
            root: {
                display: 'table',
                width: this.props.size,
                height: this.props.size,
                textAlign: 'center',
                borderRadius: '50%',
                background: this.props.background,
                overflow: 'hidden'
            },
            inner: {
                display: 'table-cell',
                textAlign: 'center',
                verticalAlign: 'middle'
            },
            icon: {
                fontSize: this.props.size *0.5
            }
        }
        this.src = this.props.src || this.props.defaultSrc || '';
    }
    render () {
        if(this.props.icon) {
            return (
                <div style={this.style.root}>
                    <div style={this.style.inner}>
                        <span
                            className={this.props.icon}
                            style={this.style.icon}>
                        </span>
                    </div>
                </div> 
            )
        } else {
            return (
                <div style={this.style.root}>
                    <img
                        src={this.src}
                        width="100%"
                        height="100%"
                    />
                </div>
            )
        }
    }
}

export default Avatar;