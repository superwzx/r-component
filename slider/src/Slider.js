/**
 * Created by f2e on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
import StyleSheet from 'react-style';

console.log(StyleSheet)

const styles = StyleSheet.create({
	bar: {
		backgroundColor: '#ccc',
		position: 'relative',
		width: '100%',
		height: '6px',
		borderRadius: '10px',
		cursor: 'pointer'
	},
	track: {
		backgroundColor: 'rgb(32, 160, 209)',
		borderRadius: '10px',
		height: '100%',
		maxWidth: '100%',
		position: 'relative',
		transition: 'width 0.1s ease'
	},
	leftHandle: {
		//backgroundColor: 'rgb(32, 160, 209)',
		backgroundColor: 'rgb(0, 255, 0, .3)',
		boxShadow: '0 0 13px rgba(0, 0, 0, .3)',
		position: 'absolute',
		top: '-8px',
		left: '-10px',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		cursor: 'pointer',
		marginLeft: '0%',
		marginRight: '0%',
		zIndex: '2'
	},
	rightHandle: {
		//backgroundColor: 'rgb(32, 160, 209)',
		backgroundColor: 'rgb(255, 0, 0, .5)',
		boxShadow: '0 0 13px rgba(0, 0, 0, .3)',
		position: 'absolute',
		top: '-8px',
		right: '-10px',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		cursor: 'pointer',
		zIndex: '3'
	}
});

class Slider extends Component {

	static propTypes = {
		barColor: PropTypes.string,
		disabled: PropTypes.bool,
		width: PropTypes.string,
		trackColor: PropTypes.string,
		percent: PropTypes.number,
		type: PropTypes.string,
		leftHandlePercent: PropTypes.number,
		rightHandlePercent: PropTypes.number
	};

	static defaultProps = {
		disabled: false,
		percent: 0,
		type: 'normal'
	};

	state = {
		percent: 0,
		leftHandlePercent: 0,
		rightHandlePercent: 100
	};

	componentDidMount () {
		// 获取插件的宽度
		this.actual();

		// 注册document mouseUp监听事件
		document.addEventListener('mouseup', e => {
			document.removeEventListener('mousemove', this.slide);
		});

		// 注册window resize事件
		window.addEventListener('resize', e => {
			this.actual();
		});
	}

	actual () {
		let bar = this.bar;
		this.width = bar.offsetWidth;
		this.offsetX =  bar.offsetLeft;
	}

	handleMouseDown = e => {
		this.activeHandle = e.target;
		document.addEventListener('mousemove', this.slide);
		e.preventDefault();
	};

	handleMouseUp = e => {
		this.activeHandle = null;
		e.preventDefault();
	};

	bar = null;

	track = null;

	leftHandle = null;

	rightHandle = null;

	activeHandle = null;

	slide = e => {

		let pageX = e.pageX,
			distance,
			percent;

		if (pageX < this.offsetX) {
			distance = 0;
		} else {
			var x = pageX - this.offsetX;
			distance = x > this.width ? this.width : x;
		}

		percent = (distance / this.width  * 100).toFixed(0);

		if (this.activeHandle === this.leftHandle) {

			if (percent > this.state.rightHandlePercent) {
				percent = this.state.rightHandlePercent;
			}
			this.setState({
				leftHandlePercent: percent
			});

		} else if (this.activeHandle === this.rightHandle) {
			if (percent < this.state.leftHandlePercent) {
				percent = this.state.leftHandlePercent;
			}
			this.setState({
				rightHandlePercent: percent
			});
		}

	};

	handleClick = e => {
		let pageX = e.pageX,
			distance = pageX - this.offsetX,
			percent = (distance / this.width  * 100).toFixed(0);

		this.setState({
			percent: percent
		});
	};

	style = {

	};

	render () {
		const {...other} = this.props;

		let current = {
			marginLeft: this.state.leftHandlePercent + '%',
			marginRight: (100 - this.state.rightHandlePercent) + '%'
		};

		return (
			<div
				ref={node => this.bar = node}
				onClick={this.handleClick}
			    //styles={[styles.bar]}
			>
				<div
					//styles={[styles.track]}
					ref={node => this.track = node}
				>
					<div
						//styles={[styles.leftHandle]}
						ref={node => this.leftHandle = node}
						onMouseDown={this.handleMouseDown}
						onMouseUp={this.handleMouseUp}
					>
						{this.state.leftHandlePercent}
					</div>
					<div
						//styles={[styles.rightHandle]}
						ref={node => this.rightHandle = node}
						onMouseDown={this.handleMouseDown}
						onMouseUp={this.handleMouseUp}
					>
						{this.state.rightHandlePercent}
					</div>
				</div>
			</div>
		)
	}
}

export default Slider;