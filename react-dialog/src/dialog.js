
import React, {Component, PropTypes} from 'react';

class Dialog extends Component {
	
	static propTypes = {
		title: PropTypes.string,
		width: PropTypes.string,
		buttons: PropTypes.array,
		children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
		style: PropTypes.object
	};

	static defaultProps = {
		title: 'Dialog',
		style: {
			wrap: {
				position: 'fixed',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				zIndex: '99'
			},
			dialog: {
				width: '320px',
				margin: '0 auto',
				position: 'relative',
				backgroundColor: '#fff'
			},
			header: {
				fontSize: '16px',
				fontWeight: '600',
				color: '#666',
				padding: '12px'
			},
			content: {
				fontSize: '16px',
				textAlign: 'center',
				padding: '20px 12px'
			},
			footer: {
				fontSize: '14px',
				textAlign: 'right',
				padding: '12px'
			}
		}
	};

	state = {
		status: true
	};

	open () {
		this.setState({
			status: true
		});
	}

	close () {
		this.setState({
			status: false
		});
	}

	destroy () {

	}

	componentWillUnmount () {
		console.log('123');
	}

	render () {
		const {
			title,
			buttons,
			children,
			style,
			...other
		} = this.props;

		const header = (
			<section style={style.header}>
				<h3>{title}</h3>
			</section>
		);

		const content = (
			<section style={style.content}>
				{children}
			</section>
		);

		const footer = (
			<section style={style.footer}>
				{buttons}
			</section>
		);

		const dialog = (
			<div style={style.dialog}>
				{header}
				{content}
				{footer}
			</div>
		);

		return (
			<div style={style.wrap} {...other}>
				{dialog}
			</div>
		)
	}
}

export default Dialog;