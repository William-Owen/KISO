import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

import "./NavigationPrimary.sass"

function NavigationPrimary() {

	const elementClassNames = classnames(
		"NavigationPrimary",
	)

	return (

		<nav className={elementClassNames}>

			<Link to="/">Home</Link>
			<Link to="/redux-example">Redux Example</Link>
			<Link to="/api-example">API Example</Link>
			<Link to="/form-example">Form Example</Link>

		</nav>

	)

}

export default NavigationPrimary
