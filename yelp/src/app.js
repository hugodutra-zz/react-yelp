import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({
	render: function() {
		return (<div>OLARRRR</div>);
	}
});

var mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);