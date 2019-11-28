import React from "react"
import { fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import renderWithRedux from "../../../utilities/rederWithRedux"
import ValueCounter from "./ValueCounter"

describe("ValueCounter", () => {

	it("can render with redux with defaults", () => {

		const { getByTestId } = renderWithRedux(<ValueCounter />)
		const countIndicator = getByTestId("count-value")

		expect(countIndicator).toHaveTextContent(/^0$/)

	})

	it("can render with redux with 1000 count", () => {

		const initialStateValue = {
			counter: {
				count: 1000,
			},
		}

		const { getByTestId } = renderWithRedux(<ValueCounter />, { initialState: initialStateValue })
		const countIndicator = getByTestId("count-value")

		expect(countIndicator).toHaveTextContent(/^1000$/)

	})

	it("can increment count", () => {

		const { getByTestId, getByText } = renderWithRedux(<ValueCounter />)
		const countIndicator = getByTestId("count-value")

		// Value of 0 should increment to 1

		expect(countIndicator).toHaveTextContent(/^0$/)
		fireEvent.click(getByText("Increment Count"))
		expect(countIndicator).toHaveTextContent(/^1$/)

	})

	it("can decrement count", () => {

		const { getByTestId, getByText } = renderWithRedux(<ValueCounter />)
		const countIndicator = getByTestId("count-value")

		// Value of 1 should decrement to -1

		expect(countIndicator).toHaveTextContent(/^0$/)
		fireEvent.click(getByText("Decrement Count"))
		expect(countIndicator).toHaveTextContent(/^-1$/)

	})

	it("can decrement and increment count", () => {

		const { getByTestId, getByText } = renderWithRedux(<ValueCounter />)
		const countIndicator = getByTestId("count-value")

		// Value of 1 should decrement to -1

		expect(countIndicator).toHaveTextContent(/^0$/)
		fireEvent.click(getByText("Increment Count"))
		expect(countIndicator).toHaveTextContent(/^1$/)
		fireEvent.click(getByText("Decrement Count"))
		expect(countIndicator).toHaveTextContent(/^0$/)
		fireEvent.click(getByText("Decrement Count"))
		expect(countIndicator).toHaveTextContent(/^-1$/)
		fireEvent.click(getByText("Increment Count"))
		expect(countIndicator).toHaveTextContent(/^0$/)

	})

})
