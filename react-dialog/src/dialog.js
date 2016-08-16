
let React = require('react');

let Dialog = React.createClass({

	getInitialState () {
		return {
			title: config.title,
			content: config.content,
			buttons: [{
				short: 'OK',
				name: '确定',
				className: '',
				handle: (e) => {}
			}, {
				short: 'CANCEL',
				name: '取消',
				className: '',
				handle: (e) => {}
			}]
		}
	},

	componentWillMount () {

	},

	render () {

		let title = (
			<div>
				<div className="dialog-title">
					<div className="dialog-title-inner">
						{this.state.title}
					</div>
				</div>
			</div>
		);

		let content = (
			<div className="dialog-content">
				<div className="dialog-content-inner">
					{this.state.content}
				</div>
			</div>
		);

		let buttons = (
			<div className="dialog-buttons">
				<div className="dialog-buttons-inner">
					{
						this.state.buttons.map(function (item) {
							return (
								<button
									onClick={item.handle}
								>
									item.name
								</button>
							)
						})
					}
				</div>
			</div>
		);

		return (
			<div className="dialog-mask">
				<div className="dialog">
					<div className="dialog-inner">
						{title}
						{content}
						{buttons}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Dialog;