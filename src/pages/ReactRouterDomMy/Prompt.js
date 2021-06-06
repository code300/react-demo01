import React from "react";
import { RouterContext } from "./Context";
import LifeCycle from "./LifeCycle";

export default function Prompt(message, when = true) {
	return (
		<RouterContext.Consumer>
			{context => {
				if (when) {
					let method = context.history.block;
					console.log("context", context); //xiaogang-log
					// console.log("message", message); //xiaogang-log
					return (
						<LifeCycle
							onMount={self => {
								self.release = method(message);
							}}
							onUnmount={self => {
								self.release();
							}}
						/>
					);
				}
			}}
		</RouterContext.Consumer>
	);
}
