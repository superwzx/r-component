import React, {Component, PropTypes} from 'react';
import Styles from './style.config';

class Buttons extends Component {
    static propTypes = {
        href: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string,
        custom: PropTypes.object,
        disabled: PropTypes.bool,
        block: PropTypes.bool,
        mouseUp: PropTypes.func,
        click: PropTypes.func,
        mouseLeave: PropTypes.func,
        param: PropTypes.object
    };
    static defaultProps = {
        size: 'md',
        color: 'primary',
        disabled: false,
        block: false
    };

    state = {
        disabled: this.props.disabled
    };

    componentWillMount = () => {
        
    }
    handleClick = (event) => {

        console.log(this)
        //if(this.props.href) {
        //    window.location.href = this.props.href;
        //} else if(this.props.click) {
        //    this.props.click(event,this.props.param);
        //}


        var self = this;

        self.setState({
            disabled: true
        });

        self.props.click().then(function () {
          self.setState({
              disabled: false
          })
        })
    }
    handleMouseUp = (event) => {
        if(this.props.mouseUp) this.props.mouseUp(event,this.props.param);
    }
    handleMouseLeave = (event) => {
        if(this.props.mouseLeave) this.props.mouseLeave(event,this.props.param);
    }
    render () {
        var size = Styles.size[this.props.size];
        var color = Styles.color[this.props.color];
        var style = Object.assign({},size,color,this.props.custom);
        return (
            <button
                className="button"
                onClick={this.handleClick}
                disabled={this.state.disabled}
                style={style}
                onMouseUp={this.handleMouseUp}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Buttons;
