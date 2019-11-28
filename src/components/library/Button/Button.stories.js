// Button
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react"
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions"
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import Button from "./Button"

storiesOf("Button", module)

	.addDecorator(withKnobs)

	.add("as dynamic variables", () => {

		// Knobs as dynamic variables.

		const label = text("Label", "This is a button")
		const isDangerousAction = boolean("Is dangerous action", false)
		const isPrimaryAction = boolean("Is primary action", false)
		const disabled = boolean("Is disabled", false)
		const asLink = boolean("As Link", false)

		return (<Button asLink={asLink} isPrimaryAction={isPrimaryAction} isDangerousAction={isDangerousAction} disabled={disabled} onClick={action("button-click")} label={label} />)

	})
