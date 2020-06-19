import React, {useState, useEffect} from 'react'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'
import {AppContainer} from './components/StyledComponents'
import Header from './components/Header'

const App = () => {
	function currencyChangeHandler(currency) {
		console.log("currency:", currency)
		setCurrency(currency);
	}

	const defaultCurrency = "AUD"
	const [currency,setCurrency] = useState(defaultCurrency)
	const [bitcoinData, setBitcoinData] = useState({})

	const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"
	useEffect(() => {
		console.log("inside of useEffect")
		function getData() {
			fetch(`${bitcoinApi}?currency=${currency}`)
			.then(response => response.json())
			.then(data => setBitcoinData(data.bpi))
			.catch(e => console.error(e))
		}
		getData()
	},[currency])

	return (
		<AppContainer >
			<Header title="BITCOIN PRICE INDEX"/>
			<CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler} />
			<DataDisplay data={bitcoinData}/>
		</AppContainer>
	)
}

export default App
