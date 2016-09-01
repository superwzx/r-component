
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
			dialog: {
				width: '600px'
			},
			header: {
				fontSize: '18px'
			},
			content: {
				fontSize: '14px'
			},
			footer: {
				fontSize: '14px'
			}
		}
	};

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
