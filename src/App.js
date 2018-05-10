import React, { Component } from 'react';
import {connect} from "react-redux";

import './App.css';
import store from "./store";
import NewComponent from './NewComponent';

class App extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="App">Hello react from vadi
				{store.getState.nameArray}
				{this.props.nameArray.map((item, index) =>
					<div key={index}>{item}</div>)
				}
				<NewComponent/>
			</div>

		);
	}
}
let currentState;
store.subscribe(() => {
	let previousState = currentState;
	currentState = store.getState().nameArray;
	if(previousState !== currentState){
		alert("Hello World");
	}
	});
function mapStateToProps(state) {
	return {
		nameArray: state.nameArray,
	}
}
export default connect(mapStateToProps)(App);
