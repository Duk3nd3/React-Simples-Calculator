import React from 'react';
import '../sheetstyles/Button.css';

function Button(props) {
	const isOperator = (value) => {
		return isNaN(value) && value !== '.' && value !== '=';
	};

	return (
		<button
			className={`button-container ${
				isOperator(props.children) ? 'operator' : ''
			}`.trimEnd()}
			onClick={() => props.handleClic(props.children)}
		>
			{props.children}
		</button>
	);
}

export default Button;
