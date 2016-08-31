import React, {Component, PropTypes} from 'react';
import config from './style.config';

import Buttons from '../../react-button/src/Button.js';

class Notification extends Component {
    static propTypes = {
        color: PropTypes.string,
        custom: PropTypes.object
    };
    static defaultProps = {
        color: 'success'
    };
    state = {
        active: false
    };
    handleChange = () => {
        if(this.state.active) return;
        setTimeout(function () {
            this.setState({
                active: true
            });
        }.bind(this),0);
    }
    componentDidUpdate () {
        setTimeout(function () {
            this.setState({
                active: false
            });
        }.bind(this),3000);
    }
    render () {
        var style = Object.assign({},config.color[this.props.color], this.props.custom);
        return (
            <div>
                <Buttons className="button" size="md" color="primary" click={this.handleChange}>
                    click
                </Buttons>
                <div className="notification-main">
                    <div className={this.state.active?"notification-wrap notification-active":"notification-wrap"} style={style}>
                        <div className="notification-inner">{this.props.children}</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Notification;