import React from "react"
import PropTypes from "prop-types"
import "./DisplayCurrency.sass"

const DisplayCurrency = (props) => {

	const { label, rate } = props

	return (

		<div data-testid="DisplayCurrency" className="DisplayCurrency">

			<span data-testid="label" className="label">
				{label}
			</span>

			<span data-testid="rate" className="rate">
				{rate}
			</span>

		</div>

	)

}

DisplayCurrency.propTypes = {

	label: PropTypes.string.isRequired,
	rate: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,

}

export default DisplayCurrency
