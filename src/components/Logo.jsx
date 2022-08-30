import React from 'react';
import calculatorLogo from '../images/calculator-app.png';

const Logo = () => {
	return (
		<div className='logo-container'>
			<img src={calculatorLogo} className='logo' alt='Logo de la calculadora' />
		</div>
	);
};

export default Logo;
