import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import Button from '../../react-button/src/Button';

/**
 *
 * @param txt
 */


const reactAlert = function(txt) {

	let overlay = document.createElement('div');

	let close = () => {
		ReactDOM.unmountComponentAtNode(overlay);
		overlay.parentNode.removeChild(overlay);
	};

	let buttons = [
		<Button size="sm" mouseUp={close}>{txt}</Button>
	];

	document.body.appendChild(overlay);

	let dialog = <Dialog buttons={buttons}>OK</Dialog>;

	ReactDOM.render(dialog, overlay);
}

export default reactAlert;
