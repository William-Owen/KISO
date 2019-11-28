// Field
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react"
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import Field from "./Field"
import App from "../App"

storiesOf("Field", module)

	.addDecorator(withKnobs)

	.add("as dynamic variables", () => {

		// Knobs as dynamic variables.

		const label = text("Label", "This is a button")
		const errorText = text("Error text", "")
		const helpText = text("Help text", "")
		const hasError = boolean("Has error", false)

		return (

			<App>

				<Field label={label} hasError={hasError} errorText={errorText} helpText={helpText}>

					<input type="text" />

				</Field>

			</App>

		)

	})

	.add("Basic use example", () => {

		// Knobs as dynamic variables.

		const label = "First name"
		const errorText = "There was a number of issues with the above field."
		const helpText = "First name only, must contain at least 2 letters with no numbers or symbols."
		const hasError = false

		return (

			<App>

				<Field label={label} hasError={hasError} errorText={errorText} helpText={helpText}>

					<input type="text" />

				</Field>

			</App>

		)

	})

	.add("Multi-field example", () => {

		// Knobs as dynamic variables.

		const label = "First name"
		const errorText = null
		const helpText = null
		const hasError = false

		return (

			<App>

				<Field label={label} hasError={hasError} errorText={errorText} helpText={helpText}>

					<input type="text" />

				</Field>

				<Field label={label} hasError={hasError} errorText={errorText} helpText={helpText}>

					<input type="text" />

				</Field>

				<Field label={label} hasError={hasError} errorText={errorText} helpText={helpText}>

					<input type="text" />

				</Field>

				<Field label={label} hasError={hasError} errorText={errorText} helpText={helpText}>

					<input type="text" />

				</Field>

			</App>

		)

	})
