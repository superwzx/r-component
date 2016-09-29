/**
 * Created by f2e on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Slider from './src/Slider.js';

ReactDOM.render(
	<div>
		<Slider from={20} to={80} />
	</div>, document.getElementById('content')
);