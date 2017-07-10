import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Buttons from '../react-button/src/Button.js';
import showNotice from './src/index';

const config1 = {
    color: 'error',
    custom: {},
    content: '你猜'
};
const config2 = {
    color: 'success',
    custom: {},
    content: '你猜1'
};
const showAlert = (event,param) => {
    showNotice(param);
};

ReactDOM.render(
	(
        <div>
            <Buttons className="button" size="md" color="primary" click={showAlert} param={config1}>click</Buttons>
            <Buttons className="button" size="md" color="primary" click={showAlert} param={config2}>click1</Buttons>
        </div>
    ),
	document.getElementById('haha')
);


