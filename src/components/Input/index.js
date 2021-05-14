import React from "react";

const Input = props => {
	const { name } = props;
	const msg = props[name];

	const { showmsg } = props;
	console.log(showmsg, "showmsg"); //xiaogang-log
	return (
		<div>
			<input {...props} />
			<p style={{ display: "none" }}>{msg}</p>
		</div>
	);
};

// const CustomizeInput = ({value = "", ...props}) => (
//   <div style={{padding: 10}}>
//     <Input style={{outline: "none"}} value={value} {...props} />
//   </div>
// );

class CustomizeInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log("CustomizeInput props", this.props); //xiaogang-log
		const { value = "", ...otherProps } = this.props;
		return (
			<div style={{ padding: 10 }}>
				<Input style={{ outline: "none" }} value={value} {...otherProps} />
			</div>
		);
	}
}

export default CustomizeInput;
