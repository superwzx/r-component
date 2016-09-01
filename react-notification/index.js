import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';


import Notification from './src/notification.js';

const config = {};

ReactDOM.render(
	(
        <div>
            <Notification color="success" custom={config}>你猜你猜你猜</Notification>
            <Notification color="error" custom={config}>你猜你猜你猜1</Notification>
        </div>
    ),
	document.getElementById('haha')
);


