import React from 'react';
import '../sheetstyles/ClearButton.css';

const ClearButton = (props) => (
	<div className='clear-button' onClick={props.handleClic}>
		{props.children}
	</div>
);

export default ClearButton;
