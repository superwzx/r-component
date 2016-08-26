import React, {Component, PropTypes} from 'react';

class Icon extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        color: PropTypes.string,
        size: PropTypes.number
    };
    static defaultProps = {
        size: 16
    };
    componentWillMount = () => {
        this.style = {
            root: {
                color: this.props.color,
                fontSize: this.props.size
            }
        }
    }
    render () {
        return (
            <span className={this.props.content} style={this.style.root}></span>
        )
        
    }
}

export default Icon;