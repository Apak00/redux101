import {createStore} from "redux";

const initialState = {
	someProperty: "initialValue",
	listName: "Levent",
	nameArray:["medet","mahmud","bünyamin","abdurrahman","kadir"],
};

function generalReducer (state = initialState, action) {
	switch (action.type) {
		case "LOG":
			console.log(action.text);
			return state;
		case "ADD_ITEM":
			return {...state, nameArray: state.nameArray.concat(action.name)}
		default:
			return state;
	}
}

export default createStore(generalReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
