import React from 'react';
import supportedCurrencies from '../supported-currencies.json'

const CurrencySelector = (props) => {
	const {currency, handleCurrencyChange} = props
	return (
		<div>
			<select value={currency} onChange={(event) => handleCurrencyChange(event.target.value)}>
				{supportedCurrencies.map((currency, index) =>
				<option key={`${index}-${currency.currency}`} value={currency.currency}> {currency.country}</option>)}
			</select>
		</div>
	);
}

export default CurrencySelector;