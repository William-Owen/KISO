// Button

import React from "react"
import PropTypes from "prop-types"
import "./App.sass"

const App = (props) => {

	const { children } = props

	return (

		<div className="App">

			{children}

		</div>

	)

}

App.propTypes = {

	children: PropTypes.node,

}

App.defaultProps = {

	children: null,

}

export default App
