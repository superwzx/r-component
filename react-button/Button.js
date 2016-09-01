/**
 * Created by f2e on 16/8/19.
 */

import React, {Compinent, PropTypes} from 'react';



var Button = React.createClass({
	getInitialState () {

	},

	render () {
		return (
			<button
				style={}
			>
				{this.props.children}
			</button>
		)
	}
})