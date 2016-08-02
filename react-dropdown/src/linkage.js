var React = require('react');
var Drop = require('./Drop');
var Linkage = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            choose: [],
            currentVal: []
        }
    },
    componentWillMount: function () {
        var num = this.props.count, initArr=[];
        for(var i = 0;i<num;i++) {
            i==0?initArr.push(this.props.data[i][0]):initArr.push({data:[]});
        }
        this.setState({
            items: initArr
        });
    },
    _handleChange: function(index,id,val) {
        var choose = this.state.choose,
            newItems = this.state.items,
            currentVal = this.state.currentVal,
            num = this.props.count;
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
    },
    render: function () {
        var arr = [];
        this.state.items.map(function (item,i) {
            arr.push(<Drop key={i} keyIndex={i} currentVal={this.state.currentVal} list={item.data} getSubList={this._handleChange}></Drop>);
        }.bind(this));
        return (
            <div>{arr}</div>
        )
    }
});

module.exports = Linkage;