import React, { Component } from "react";
import { ThemeConsumer } from "./Context";

export default class ConsumerPage extends Component {
	render() {
		return (
			<div>
				<h3>ConsumerPage</h3>
				<ThemeConsumer>
					{themeContext => (
						<div className={themeContext.themeColor}>ConsumerPage DOM</div>
					)}
				</ThemeConsumer>
			</div>
		);
	}
}
