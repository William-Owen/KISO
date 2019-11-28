import React from "react"
import { Field } from "../../library"

export default function PageFormExample() {

	return (

		<div className="PageFormExample">

			<h2>Form Example</h2>

			<form>

				<Field label="Email Address">

					<input type="email" />

				</Field>


				<Field label="User Name">

					<input type="text" />

				</Field>

				<Field label="First Name">

					<input type="text" />

				</Field>

				<Field label="Last Name">

					<input type="text" />

				</Field>

				<Field label="Password">

					<input type="password" />

				</Field>


			</form>

		</div>

	)

}
