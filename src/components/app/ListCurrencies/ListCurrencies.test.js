import React from "react"
import { render, waitForElement } from "@testing-library/react"
import ListCurrencies from "./ListCurrencies"

describe("DisplayCurrency", () => {

	it("can render a collection with 5 values, and the appear on the page as expected", async () => {

		const testData = {

			CAD: 1.4679,
			HKD: 8.6525,
			ISK: 136.3,
			EFG: 144.3,
			ABC: 156.3,
			DEF: 1546.3,

		}

		// Create a mock data function for testing

		const getCurrencyCollection = () => (testData)

		// Render the component

		const { container, getByText } = render(<ListCurrencies getCurrencyCollection={getCurrencyCollection} />)

		// We will now wait to see if an element appears with the value of the first element in the
		// test daata collection as expected.

		await waitForElement(() => getByText(Object.keys(testData)[0]))

		// Check that we have the expected number of elements as per our test data

		expect(container.firstChild.children.length).toBe(Object.keys(testData).length)

		// The following will fail if the values in the test data
		// object are not found or found multiple times on the page.

		Object.keys(testData).forEach((itemKey) => {

			getByText(itemKey)
			getByText(testData[itemKey].toString())

		})

	})

})
