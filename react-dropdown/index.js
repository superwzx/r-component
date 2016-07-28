
var React = require('react');
var ReactDOM = require('react-dom');
var Drop = require('./src/Drop');
// var DropList = require('./src/DropList');
 
var LIST = [
    {value:'我是测试1'},
    {value:'我是测试2'},
    {value:'我是测试3'}
]                                                                                                                                                                                                        
ReactDOM.render(
	(
        <Drop currentVal="" list={LIST}></Drop>
    ),
	document.getElementById('haha')
);