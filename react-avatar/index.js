var React = require('react');
var ReactDOM = require('react-dom');
var Avatar = require('./src/Avatar');
                                                                                                                                                                                      
ReactDOM.render(
	(
        <div>
            <Avatar 
                src="./images/head.jpg"
                defaultSrc="./images/head.jpg"
                size={40}
            />
        </div>
    ),
	document.getElementById('haha')
);

