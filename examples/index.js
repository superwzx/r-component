/**
 * Created by f2e on 16/9/22.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Slider} from '../src/slider';

// var Tabs = require('./src/Tabs');
// var TabPanel = require('./src/TabPanel');

const Example = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tabs">Tab</Link></li>
                <li><Link to="/slider">Slider</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/tabs" component={TabComponent}/>
            <Route path="/slider" component={SliderComponent}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const TabComponent = () => (
    <div>

    </div>
)

const SliderComponent = () => (
    <div>
        <Slider from={20} to={80} />
    </div>
)

ReactDOM.render(
    <div>
        <Example/>
    </div>, document.getElementById('app')
)