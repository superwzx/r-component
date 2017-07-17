

import React, { Component, PropTypes } from 'react';

import { TabList } from './TabList';

export class Tabs extends Component {

	static propTypes = {
		currentIndex: PropTypes.string
	};

	state = {
		currentIndex: this.props.currentIndex
	};

  /**
	 * set
   * @returns {Array}
   */
  setTabPanels () {
		let newChildren = [];
		let currentIndex = this.state.currentIndex;

		React.Children.forEach(this.props.children, child => {
			newChildren.push( React.cloneElement(child, {currentIndex: currentIndex}) );
		});

		return newChildren;
	}

  switchTab (index) {
		this.setState({
			currentIndex: index
		});
	}

  render () {

		var tabPanels = this.setTabPanels();
		var contents = [
			(
				<TabList
					currentIndex={this.props.currentIndex}
					panels={this.props.children}
					switchTab={this.switchTab}
				/>
			),
			(
				<div className="tab-panel">
					{tabPanels}
				</div>
			)
		];

		return (
			<div>
				{contents}
			</div>
		)
	}

}
