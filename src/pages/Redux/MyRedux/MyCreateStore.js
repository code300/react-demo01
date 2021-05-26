export default function CreateStore(reducer) {
	let currentState = null;
	let currentListeners = [];
	// getState 获取数据
	function getState() {
		return currentState;
	}
	// dispatch派发action事件
	function dispatch(action) {
		// reducer 定义修改规则
		currentState = reducer(currentState, action);
		currentListeners.forEach(listener => listener());
	}
	// 订阅
	function subscribe(listener) {
		currentListeners.push(listener);
	}
	return {
		getState,
		dispatch,
		subscribe,
	};
}
