import axios from "axios"

// Fetch currency information from the Exchange Rates API service.

const getCurrencyCollection = async () => {

	const apiResponse = await axios.get(`https://api.exchangeratesapi.io/latest`)

	return apiResponse.data.rates

}

export default getCurrencyCollection
