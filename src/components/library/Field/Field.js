// Field

import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./Field.sass"

function Field(props) {

	const {

		className,
		children,
		label,
		htmlFor,
		hasError,
		helpText,
		errorText,

	} = props

	const elementClass = classnames(

		"Field",
		className,
		{ hasError },

	)

	return (

		<div className={elementClass}>

			<label htmlFor={htmlFor}>{label}</label>

			{helpText && <p className="help-text">{helpText}</p>}

			{children}

			{errorText && <p className="error-text">{errorText}</p>}

		</div>

	)

}

Field.propTypes = {

	className: PropTypes.string,
	label: PropTypes.string,
	htmlFor: PropTypes.string,
	children: PropTypes.number.isRequired,
	hasError: PropTypes.bool,
	helpText: PropTypes.string,
	errorText: PropTypes.string,

}

Field.defaultProps = {

	className: null,
	label: null,
	htmlFor: null,
	hasError: false,
	helpText: null,
	errorText: null,

}

export default Field
