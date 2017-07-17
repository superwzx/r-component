
import React, {Component, PropTypes} from 'react';

export class Tab extends Component {
	getInitialState () {
		return {
			tabIndex: this.props.tabIndex,
			tab: this.props.tab,
			active: this.props.active
		}
	}

	static propTypes = {
		tabIndex: PropTypes.string,
		tab: PropTypes.string,
		active: this.props.string
	};

	static defaultProps = {

	};

	state = {
		tabIndex: this.props.tabIndex,
		tab: this.props.tab,
		active: this.props.active
	};

	componentWillReceiveProps (nextProps) {
		this.setState({
			active: nextProps.active
		});
	}

	switch () {
		this.props.switch(this.state.tabIndex);
	}

	render () {
		return (
			<a
				id={this.props.tabIndex}
				className={this.state.active ? 'active' : ''}
				onClick={this.switch}
			>
				{this.state.tab}
			</a>
		)
	}
}
