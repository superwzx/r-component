import React, {Component,PropTypes} from 'react';
import Drop from './Drop';

class Linkage extends Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        count: React.PropTypes.number.isRequired
    };
    state = {
        items: [],
        choose: [],
        currentVal: []
    };
    componentWillMount () {
        var num = this.props.count, initArr=[];
        //设置下拉数组，默认除第一个下拉，其余数组为空
        for(var i = 0;i<num;i++) {
            i==0?initArr.push(this.props.data[i][0]):initArr.push({data:[]});
        }
        this.setState({
            items: initArr
        });
    }
    getSelected = () => {
        return this.state.currentVal;
    }
    _handleChange = (index,id,val) => {
        var choose = this.state.choose,
            newItems = this.state.items,
            currentVal = this.state.currentVal,
            num = this.props.count;
        //选项没变不做操作
        if(choose[+index] == id) return;
        if(id) {
            choose[+index] = +id;
            currentVal[+index] = val;
            if(this.props.data[+index+1]) {
                // 过滤和选项匹配的数组
                var newData = this.props.data[+index+1].filter(function(item) {
                    return item.pid == +id;
                });
            }
        }
        //更新items数组
        if(+index+1 < num) {
            if (newData != null && newData.length > 0) {
                newItems.splice(+index+1,1,newData[0]);
            } else {
                newItems.splice(+index+1,1,{data:[]});
            }
        }
        for(var i = +index+1;i<num;i++) {
            currentVal[i] = '';
        }
        this.setState({
            items: newItems,
            choose: choose,
            currentVal: currentVal
        });
    }
    render () {
        var arr = [];
        this.state.items.map(function (item,i) {
            arr.push(<Drop 
                        key={i} 
                        keyIndex={i} 
                        currentVal={this.state.currentVal} 
                        list={item.data} 
                        getSubList={this._handleChange}
                    />);
        }.bind(this));
        return (
            <div>{arr}</div>
        )
    }
}

export default Linkage;