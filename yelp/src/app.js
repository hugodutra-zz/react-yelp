import React from "react";
import ReactDOM from "react-dom";

import styles from './styles/module.css';

const App = React.createClass({
	render: function() {
		return (
			<div className={styles["container"]}>
				OLARRRR
			</div>
		);
	}
});

var mountNode = document.querySelector("#root");
ReactDOM.render(<App />, mountNode);