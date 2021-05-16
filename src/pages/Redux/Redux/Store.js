import { createStore } from "redux";

// reducer(修改store的修改规则)
export const counterReducer = (state = 0, { type, payload = 1 }) => {
	switch (type) {
		case "ADD":
			return state + payload;
		case "MINUS":
			return state - payload;
		default:
			return state;
	}
};
// store
const store = createStore(counterReducer);

export default store;
