
var React = require('react');
var ReactDOM = require('react-dom');
var Drop = require('./src/Drop');
var DropList = require('./src/DropList');
                                                                                                                                                                                                            
ReactDOM.render(
	(
        <Drop currentVal="">
            <DropList>我是测试1</DropList>
            <DropList>我是测试2</DropList>
            <DropList>我是测试3</DropList>
        </Drop>
    ),
	document.getElementById('haha')
    // emsfl
);