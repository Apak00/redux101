import React from "react";
import store from "./store";

export default class NewComponent extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
            textInput: "",
        };
    }

	render(){
		return(
			<div>
				<input
					type="text"
					name="input field"
					value={this.state.textInput}
					onChange={(event) => this.setState({textInput:event.target.value})}/>
					<button
						onClick= {() => store.dispatch({ type:"ADD_ITEM", name:"Apak"})}
						> LOG </button>
					</div>
				);
			}
		}
