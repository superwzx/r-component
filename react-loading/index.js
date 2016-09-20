import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Loading from './src/Loading';

var outerCustom = {
    // background: "#20a0d1"
};
var innerCustom = {
    // background: "#20a0d1"
};
var pointCustom = {

};                                                                                                                                       
ReactDOM.render(
	(
        <div>
            <Loading
                outerCustom = {outerCustom}
                innerCustom = {innerCustom}
                pointCustom = {pointCustom}
                background = '#20a0d1'
                percent = {50}
            />
        </div>
    ),
	document.getElementById('haha')
);

