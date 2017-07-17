

import React, { Component, PropTypes } from 'react';
import { Tab } from './Tab';


export class TabList extends Component {

	static propTypes = {
		currentIndex: PropTypes.string
	};

	state = {
		list: this.props.panels.map( item => ({
			tabIndex: item.props.tabIndex,
			tab: item.props.tab,
			active: item.props.tabIndex === this.props.currentIndex
		}))
	};

  /**
	 * switch tab nav
   * @param id
   */
	switch (id) {
		let newList = this.props.list.map( item => {
			if (item.tabIndex === id)
				item.active = true;
			return item;
		});
		this.setState({
			list: newList
		});

		this.props.switchTab(id);
	}


	render () {
		return (
			<div className="tab-list">
				{
					this.state.list.map(item =>
						<Tab
							tabIndex={item.tabIndex}
							tab={item.tab}
							active={item.active}
							switch={this.switch}
						/>
					)
				}
			</div>
		)
	}
}
