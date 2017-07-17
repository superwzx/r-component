

import React, { Component, PropTypes } from 'react';

export class TabPanel extends Component {

	static propTypes = {
		tabIndex: PropTypes.string,
		currentIndex: PropTypes.string
	}

	render() {
		return (
			<div className={this.props.tabIndex === this.props.currentIndex ? 'active' : ''}>
				{this.props.children}
			</div>
		)
	}

}