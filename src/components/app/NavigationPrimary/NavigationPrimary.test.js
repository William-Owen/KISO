// NavigationPrimary

import React from "react"
import ReactDOM from "react-dom"
import NavigationPrimary from "./NavigationPrimary"

// eslint-disable-next-line no-undef
it("renders without crashing", () => {

	const div = document.createElement("div")
	ReactDOM.render(<NavigationPrimary>Label</NavigationPrimary>, div)
	ReactDOM.unmountComponentAtNode(div)

})
