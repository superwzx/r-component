import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import config from './style.config';

class Notification extends Component {
    static propTypes = {
        color: PropTypes.string,
        custom: PropTypes.object,
        removeDom: PropTypes.object
    };
    static defaultProps = {
        color: 'success'
    };
    state = {
        active: false
    };
    componentWillMount () {
        if(this.state.active) return;
        setTimeout(function () {
            this.setState({
                active: true
            });
        }.bind(this),0);
    }
    componentDidMount () {
        setTimeout(function () {
            this.setState({
                active: false
            });
        }.bind(this),4000);
        setTimeout(function () {
            ReactDOM.unmountComponentAtNode(this.props.removeDom);
            this.props.removeDom.parentNode.removeChild(this.props.removeDom);
        }.bind(this),5000);
    }
    render () {
        var style = Object.assign({},config.color[this.props.color], this.props.custom);
        return (
            <div className={this.state.active?"notification-wrap notification-active":"notification-wrap notification-hidden"} style={style}>
                <div className="notification-inner">{this.props.children}</div>
            </div>
        )
    }
}

export default Notification;