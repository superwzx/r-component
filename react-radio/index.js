import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from './src/RadioGroup';

var DATA = [
    {label: '苹果', value: 'Apple',checked: false},
    {label: '梨', value: 'Pear',checked: false},
    {label: '橘', value: 'Orange',checked: false}
];                                                                                                                                                                                        
ReactDOM.render(
	(
        <div>
            <RadioGroup options={DATA} name="fruit"></RadioGroup>
        </div>
    ),
	document.getElementById('haha')
);

