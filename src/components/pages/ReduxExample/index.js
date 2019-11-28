import React from "react"
import ValueCounter from "../../app/ValueCounter"
import "./ReduxExample.sass"

export default function PageReduxExample() {

	return (

		<div className="PageReduxExample">

			<h2>Redux Functional Component Example</h2>

			<p>The following component will increment and decrement a value via the redux store.</p>

			<ValueCounter />

		</div>

	)

}
