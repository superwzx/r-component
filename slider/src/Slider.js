/**
 * Created by f2e on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';

let isTouch = 'ontouchstart' in window,
        eStart = isTouch ? 'touchstart' : 'mousedown',
        eMove = isTouch ? 'touchmove' : 'mousemove',
        eEnd = isTouch ? 'touchend' : 'mouseup';
class Slider extends Component {
	static propTypes = {
		barColor: PropTypes.string,
		disabled: PropTypes.bool,
		width: PropTypes.string,
		trackColor: PropTypes.string,
		percent: PropTypes.number
	};

	static defaultProps = {
		disabled: false,
		percent: 0
	};

	state = {
		percent: 0
	};
	
	componentDidMount () {
		// 获取插件的宽度
		this.actual();

		// 注册document mouseUp监听事件
		document.addEventListener(eEnd, e => {
			document.removeEventListener(eMove, this.slide);
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
		document.addEventListener(eMove, this.slide);
		e.preventDefault();
	};

	bar = null;

	track = null;

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

		this.setState({
			percent: percent
		});
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
		handle: {
			backgroundColor: 'rgb(32, 160, 209)',
			boxShadow: '0 0 13px rgba(0, 0, 0, .3)',
			position: 'absolute',
			top: '-8px',
			right: '-12px',
			width: '20px',
			height: '20px',
			borderRadius: '50%',
			cursor: 'pointer'
		}
	};

	render () {
		const {...other} = this.props;

		return (
			<div
				ref={node => this.bar = node}
				onClick={this.handleClick}
			    style={this.style.bar}
			>
				<div
					ref={node => this.track = node}
					style={Object.assign(this.style.track, {width: `${this.state.percent}%`})}
				>
					<div onMouseDown={this.handleMouseDown} onTouchStart={this.handleMouseDown} style={this.style.handle}>
					</div>
				</div>
			</div>
		)
	}
}

export default Slider;