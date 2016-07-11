import React from "react";
import ReactDOM from "react-dom";

import 'font-awesome/css/font-awesome.css'
import './app.css'
import styles from './styles.module.css'

const App = React.createClass({
	render: ()=> {
		return (
			<div className={styles.wrapper}>
				<h1><i className="fa fa-star"></i>Enviroment: {__NODE_ENV__}</h1>	
			</div>
		);
	}
});

var mountNode = document.querySelector("#root");
ReactDOM.render(<App />, mountNode);