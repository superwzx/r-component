import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Linkage from './src/Linkage';
//联动选项，有几个下拉，DATA包含几个数组，pid对应
var DATA = {
    0:[
        {
            label: '省',
            data: [
                {id:1, value: '安徽'},
                {id:2, value: '江苏'},
                {id:3, value: '安庆'}
            ]
        }
    ],
    1:[{
        label: '市',
        pid: 1,
        data: [
            {id: 10, value: '蚌埠'},
            {id: 11, value: '巢湖'},
            {id: 12, value: '太湖'}
        ]
    },{
        label: '市',
        pid: 2,
        data: [
            {id: 20, value: '你猜1'},
            {id: 21, value: '你猜2'},
            {id: 22, value: '你猜3'}
        ]
    }],
    2:[{
        label: '区',
        pid: 10,
        data: [
            {id: 100,value: '什么区'}
        ]
    }]
};                                                                                                                     
//count表示有几个下拉                                                              
ReactDOM.render(
	(
        <div>
            <Linkage
                data = {DATA}
                count={3}
            />
        </div>
    ),
	document.getElementById('haha')
);

