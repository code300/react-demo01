import { combineReducers, createStore } from "redux";

// reducer(修改store的修改规则)----可以有多个reducer
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

export const counterReducer2 = (state = { num: 0 }, { type, payload }) => {
	switch (type) {
		case "ADD2":
			return { ...state, num: state.num + payload };
		case "MINUS2":
			return { ...state, num: state.num - payload };
		default:
			return state;
	}
};
// store  单个reducer的情况
// const store = createStore(counterReducer);
// 多个reducer的情况需要用到combineReducers
const store = createStore(
	combineReducers(
		{ count: counterReducer, count2: counterReducer2 }
		// applyMiddleware(thunk, logger, promise)
	)
);

export default store;
