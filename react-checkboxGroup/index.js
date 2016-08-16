
var React = require('react');
var ReactDOM = require('react-dom');
var CheckboxGroup = require('./src/CheckboxGroup');

var data = [
	{value: 1, text: 1},
	{value: 2, text: 2},
	{value: 3, text: 3},
	{value: 4, text: 4}
],
name = "hehe";

ReactDOM.render(
	(
    <CheckboxGroup data={data} name={name} />
  ),
	document.getElementById('haha')
);