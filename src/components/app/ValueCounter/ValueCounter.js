import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "../../library"

export default function ValueCounter() {

	const count = useSelector((state) => state.counter.count)
	const dispatch = useDispatch()

	const IncrementCount = () => {

		dispatch({
			type: "INCREMENT_COUNT",
		})

	}

	const DecrementCount = () => {

		dispatch({
			type: "DECREMENT_COUNT",
		})

	}

	return (

		<div>


			<p>The current count value is <strong data-testid="count-value">{count}</strong></p>

			<Button label="Increment Count" handelOnAction={IncrementCount} />
			<Button label="Decrement Count" handelOnAction={DecrementCount} />

		</div>

	)

}
