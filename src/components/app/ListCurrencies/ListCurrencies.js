import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import DisplayCurrency from "../DisplayCurrency"

const ListCurrencies = (props) => {

	const { getCurrencyCollection } = props
	const [currencyCollection, setCurrencyCollection] = useState({})
	const [currencyCollectionDataLoading, setCurrencyCollectionDataLoading] = useState(true)

	useEffect(() => {

		(async function fetchData() {

			const apiData = await getCurrencyCollection()
			setCurrencyCollection(apiData)
			setCurrencyCollectionDataLoading(false)

		}())

	}, [getCurrencyCollection])

	// IF we are still loading data show the loading indicator, otherwise show the data

	if (currencyCollectionDataLoading) {

		return <div data-testid="ListCurrencies" className="ListCurrencies">Loading...</div>

	}

	return (

		<div data-testid="ListCurrencies" className="ListCurrencies">

			{Object.keys(currencyCollection).map((currencyKey) => (

				<DisplayCurrency key={currencyKey} label={currencyKey} rate={currencyCollection[currencyKey]} />

			))}

		</div>

	)


}

ListCurrencies.propTypes = {

	getCurrencyCollection: PropTypes.func.isRequired,

}

export default ListCurrencies
