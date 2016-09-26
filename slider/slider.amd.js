
require(['react'], function (React) {
	
	return React.createClass({
		initialState: function () {
			leftHandlePercent: this.props.min,
			rightHandlePercent: this.props.max
		},

		componentDidMount: function () {
			this.actual();

			document.addEventListener('mouseup', function (e) {
				document.removeEventListener('mousemove', this.slide);
			});

			window.addEventListener('resize', function (e) {
				this.actual();
			});
		},

		actual: function () {
			var bar = this.bar;
			this.width = bar.offsetWidth;
			this.offsetX = bar.offsetLeft;
		},

		handleMouseDown: function (e) {
			this.activeHandle = e.target;
			document.addEventListener('mousemove', this.slide);
			e.preventDefault();
		},

		handleMouseUp: function (e) {
			this.activeHandle = null;
			e.preventDefault();
		},

		bar: null,

		track: null,

		leftHandle: null,

		rightHandle: null,

		activeHandle: null,

		slide: function (e) {
			var pageX = e.pageX,
				distance,
				percent;

			distance = (pageX < this.offsetX) ? 0 :
				(pageX > (this.offsetX + this.width) ) ? this.width :
					(pageX - this.offsetX);

			percent = Math.ceil((distance / this.width) * 100);

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

		},

		handleClick: function (e) {
			var pageX = e.pageX,
				distance = pageX - this.offsetX,
				percent = Math.ceil(distance / this.width * 100);

			this.setState({
				percent: percent
			});
		},

		render: function () {
			var current = {
				marginLeft: this.state.leftHandlePercent + '%',
				marginRight: (100 - this.state.rightHandlePercent) + '%'
			};

			return (
				<div
					ref={ function(node) {this.bar = node} }
					onClick={this.handleClick}
				    className="slider-bar"
				>
					<div
						className="track"
						style={current}
						ref={ function(node) {this.track = node} }
					>
						<div
							className="leftHandle"
							ref={ function(node) {this.leftHandle = node} }
							onMouseDown={this.handleMouseDown}
							onMouseUp={this.handleMouseUp}
						>
							<div className="leftHandleTip">
								{this.state.leftHandlePercent}
							</div>
						</div>
						<div
							className="rightHandle"
							ref={ function(node) {this.rightHandle = node} }
							onMouseDown={this.handleMouseDown}
							onMouseUp={this.handleMouseUp}
						>
							<div  className="rightHandleTip">
								{this.state.rightHandlePercent}
							</div>
						</div>
					</div>
				</div>
			)
		}


	});

});