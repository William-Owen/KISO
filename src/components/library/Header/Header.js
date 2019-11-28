/** @jsx jsx */

import { css, jsx } from "@emotion/core"

function Header(props) {

	const { children } = props

	const componentCss = css`

		color: red;

	`

	return (

		<div css={componentCss}>

			{children}

		</div>

	)

}
Header.propTypes = {

}

Header.defaultProps = {

}

export default Header
