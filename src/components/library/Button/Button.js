// Button

import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./Button.sass"

function Button(props) {

	const {
		label,
		className,
		disabled,
		tabIndex,
		asLink,
		isDangerousAction,
		isPrimaryAction,
		handelOnAction,
	} = props

	const elementClass = classnames(
		"Button",
		{ dangerous: isDangerousAction },
		{ primary: isPrimaryAction },
		{ link: asLink },
		className,
	)

	return (

		<button type="button" onClick={handelOnAction} onKeyDown={handelOnAction} tabIndex={tabIndex} disabled={disabled} className={elementClass}>

			{label}

		</button>

	)

}

Button.propTypes = {

	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	tabIndex: PropTypes.number,
	disabled: PropTypes.bool,
	isDangerousAction: PropTypes.bool,
	isPrimaryAction: PropTypes.bool,
	asLink: PropTypes.bool,
	handelOnAction: PropTypes.func.isRequired,

}

Button.defaultProps = {

	className: null,
	tabIndex: 0,
	disabled: false,
	asLink: false,
	isDangerousAction: false,
	isPrimaryAction: false,

}

export default Button
