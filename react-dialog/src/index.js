import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import Dialog from './Dialog';
import Button from '../../react-button/src/Button';

const reactAlert = txt => {

	let buttons = [
		<Button
			size="lg"
		>
			Ok
		</Button>
	];

	let overlay = document.createElement('div');

	document.body.appendChild(overlay);

	ReactDom.render(
		<Dialog
			buttons={buttons}
		>
			{txt}
		</Dialog>,
		overlay
	);
};


export default reactAlert;
