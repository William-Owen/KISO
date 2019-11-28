// NavigationPrimary
// eslint-disable-next-line import/no-extraneous-dependencies

import { storiesOf } from "@storybook/react"
// eslint-disable-next-line import/no-extraneous-dependencies
// import { action } from "@storybook/addon-actions"
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from "@storybook/addon-knobs"

import NavigationPrimary from "./NavigationPrimary"

storiesOf("NavigationPrimary", module)

	.addDecorator(withKnobs)

	.add("as dynamic variables", () => NavigationPrimary)
