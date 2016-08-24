import React, {Component, PropTypes} from 'react';

class DropBtn extends Component {
    //返回input中输入的值
    handleChange = () => {
        this.props.onUserInput(
            this.refs.filterText.value
        );
    }
    //input失焦事件，调用drop中的clearInput
    clearInput = () => {
        var val = this.refs.filterText.value;
        this.props.onBlurInput(val);
    }
    componentWillMount () {
        var ind = '';
        document.body.addEventListener('keyup', function (e) {
            if(this.refs.filterText !== e.target) return;
            var val = this.refs.filterText.value;
            //返回选项中与input值匹配的索引值
            this.props.list.forEach(function (item,index) {
                if(item.value == val) {
                    ind = index;
                }
            });
            //监控键盘上下键及回车键
            switch(e.keyCode) {
                case 38:
                    ind = (ind !== '' && ind > 0) ? --ind : this.props.list.length - 1;
                    this.props.onKey(ind);
                    break;
                case 40: 
                    ind = (ind !== '' && ind < this.props.list.length - 1) ? ++ind : 0;
                    this.props.onKey(ind);
                    break;
                case 13: 
                    this.props.onEnter();
                    this.refs.filterText.blur();
                    break;
            }    
        }.bind(this),false);
    }
    render () {
        return (
            <a href="javascript:;" className="dropdown-btn">
                <input
                    type="text"
                    value = {this.props.currentVal}
                    ref="filterText"
                    onChange={this.handleChange}
                    onBlur={this.clearInput}
                />
            </a>
        )
    }
}

export default DropBtn;
