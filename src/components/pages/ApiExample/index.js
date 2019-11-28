import React from "react"
import ListCurrencies from "../../app/ListCurrencies"
import getCurrencyCollection from "../../../actions/getCurrencyCollection"

export default function PageReduxExample() {

	return (

		<div className="PageReduxExample">

			<h2>API fetching Functional Component Example</h2>

			<p>The following currency data is pulled from the live API service at <code>https://api.exchangeratesapi.io/latest</code> </p>

			<ListCurrencies getCurrencyCollection={getCurrencyCollection} />

		</div>

	)

}
