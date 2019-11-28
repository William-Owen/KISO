// Header
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react"
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
// import { action } from "@storybook/addon-actions"
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from "@storybook/addon-knobs"

import Header from "./Header"

storiesOf("Header", module)

	.addDecorator(withKnobs)

	.add("as dynamic variables", () => Header)
