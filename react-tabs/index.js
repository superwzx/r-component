
var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./src/Tabs');
var TabPanel = require('./src/TabPanel');

ReactDOM.render(
	(
    <Tabs currentIndex="1">
      <TabPanel tab='tab 1' tabIndex="1">first</TabPanel>
      <TabPanel tab='tab 2' tabIndex="2">second</TabPanel>
      <TabPanel tab='tab 3' tabIndex="3">third</TabPanel>
    </Tabs>
  ),
	document.getElementById('haha')
);