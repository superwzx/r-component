
let React = require('react');

let Dialog = React.createClass({

	getInitialState () {

		const default = {
			title: '',
			content: '',
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
		};

		const config = Object.assign(default, this.props);

		return {
			title: config.title,
			content: config.content,
			buttons: config.buttons,
			status: false
		}
	},

	componentWillMount () {

	},

	render () {

		let dialog;

		if (this.state.status) {

			const title = (
				<div className="dialog-title">
					<h3>
						{this.state.title}
					</h3>
				</div>
			);

			const content = (
				<div className="dialog-content">
					{this.state.content}
				</div>
			);

			const buttons = (
				<div className="dialog-buttons">
					{
						this.state.buttons.map(function (item) {
							return (
								<button onClick={item.handle}>
									item.name
								</button>
							)
						})
					}
				</div>
			);

			dialog = (
				<div>
					<div>
						<div>
							{title}
							{content}
							{buttons}
						</div>
					</div>
				</div>
			);

		} else {
			dialog = (
				<div></div>
			)
		}

		const mask = (
			<div className="dialog-mask"></div>
		);

		return (
			<div>
				<div className="dialog-wrap">
					{dialog}
					{mask}
				</div>
			</div>
		)
	}
});

module.exports = Dialog;