
var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./src/Tabs');
var TabPanel = require('./src/TabPanel');

// 加载组件到 DOM 元素 mountNode
ReactDOM.render(
	(
    <Tabs>
      <TabPanel tab='tab 1' id="1">first</TabPanel>
      <TabPanel tab='tab 2' id="2">second</TabPanel>
      <TabPanel tab='tab 3' id="3">third</TabPanel>
    </Tabs>
  ),
	document.getElementById('haha')
);