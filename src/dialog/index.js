import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Button from '../react-button/src/Button';

import reactAlert from './src/index';

const showDialog = () => {reactAlert('Hello Word!')};

ReactDOM.render(
	(
		<div>
			<Button
				className="button"
				size="lg"
				color="primary"
				disabled={false}
				mouseUp={showDialog}
			>
				Hello World
			</Button>
		</div>
	),
	document.getElementById('haha')
);
