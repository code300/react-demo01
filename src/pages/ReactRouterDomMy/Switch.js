import React, { Component, isValidElement } from "react";
import { RouterContext } from "./Context";
import matchPath from "./matchPath";

export default class Switch extends Component {
	render() {
		return (
			<RouterContext.Consumer>
				{context => {
					const { location } = context;
					let match = undefined; //匹配的match
					let element = undefined; //匹配的元素

					// todo 遍历children, 给匹配赋值 done
					// React.Children.forEach() react里面的API 因为children可能是单个Object也可能是Array(判断数据类型分别遍历太麻烦)
					// Switch找到第一个匹配的Route或者redirect
					React.Children.forEach(this.props.children, child => {
						if (match == null && React.isValidElement(child)) {
							element = child;
							const { path } = child.props;
							match = path
								? matchPath(location.pathname, child.props)
								: context.match;
						}
					});
					// 克隆 覆盖match
					return match
						? React.cloneElement(element, { computedMatch: match })
						: null;
				}}
			</RouterContext.Consumer>
		);
	}
}
