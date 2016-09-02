import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Notification from './notification.js';

let overlay = document.createElement('div');
overlay.className = 'notification-main';
document.body.appendChild(overlay);
const showNotice = (config) => {
    let dom = document.createElement('div');
    overlay.appendChild(dom);
    ReactDOM.render(
        <Notification color={config.color} custom={config.custom} removeDom={dom}>
            {config.content}
        </Notification>,
        dom
    );
};


export default showNotice;