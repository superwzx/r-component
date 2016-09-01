import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import Button from '../../react-button/src/Button';

/**
 *
 * @param txt
 */
const reactAlert = txt => {
	let buttons = [
		<Button size="lg">Ok</Button>
	];
	let overlay = document.createElement('div');
	document.body.appendChild(overlay);
	ReactDOM.render(
		<Dialog
			buttons={buttons}
		>
			{txt}
		</Dialog>,
		overlay
	);
};


/**
 *
 * @param config
 */
const reactConfirm = (config) => {
	let buttons = [
		<Button size="log">Ok</Button>,
		<Button size="log">Cancel</Button>
	];
	let overlay = document.createElement('div');
	document.body.appendChild(overlay);
	ReactDOM.render(
		<Dialog
			{buttons}
		>
			{config.content}
		</Dialog>
	);
};


/**
 *
 * @param config
 */
const reactModal = (config) => {
	let buttons = Object.assign([
		<Button size="log">Ok</Button>,
		<Button size="log">Cancel</Button>
	], config.buttons);
	let overlay = document.createElement('div');
	document.body.appendChild(overlay);
	ReactDOM.render(
		<Dialog
			{buttons}
		>
			{config.content}
		</Dialog>
	);
};


export default {reactAlert, reactConfirm, reactModal};
