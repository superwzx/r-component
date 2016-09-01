import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Icon from '../react-icon/src/Icon';
import Buttons from './src/Button';

const config = {
    color:'#fff',
    backgroundColor:'black'
};

ReactDOM.render(
	(
        <div>
            <Buttons className="button" size="lg" color="primary" custom={config} disabled={false} mouseUp={test}>
                <Icon content="ion-ionic" color="white" gap="0 5px 0 0" />home
            </Buttons>
        </div>
    ),
	document.getElementById('haha')
);

function test () {
    alert(111);
}

