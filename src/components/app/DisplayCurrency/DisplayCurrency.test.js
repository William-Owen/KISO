import React from "react"
import { render } from "@testing-library/react"
import DisplayCurrency from "./DisplayCurrency"
import "@testing-library/jest-dom/extend-expect"

describe("DisplayCurrency", () => {

	it("can render passed values", () => {

		const testLabel = "ABC"
		const testRate = 3.8332

		// Render the component with the test values

		const { getByTestId } = render(<DisplayCurrency label={testLabel} rate={testRate} />)

		// Test to see that teh test values are appearing on the page

		expect(getByTestId("label")).toHaveTextContent(testLabel)
		expect(getByTestId("rate")).toHaveTextContent(testRate)

	})

})
