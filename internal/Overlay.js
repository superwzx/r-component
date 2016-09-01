import React, {Component, PropTypes} from 'react';

class Overlay extends Component {
	static propTypes = {
		show: ProTypes.bool.isRequired,
		style: PropTypes.object
	};

	static defaultProps = {
		style: {}
	};

	render() {
		const styles = {
			position: 'fixed',
			height: '100%',
			width: '100%',
			top: 0,
			left: '-100%',
			opacity: 0,
			backgroundColor: 'rgba(0, 0, 0, .45)'
		};

		return (
			<div ref="overlay" style={styles}></div>
		);
	}
}

export default Overlay;