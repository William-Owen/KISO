// Panel

/** @jsx jsx */ 

import PropTypes from "prop-types"
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import getStyles from './Panel.style'

function Panel(props) {

	const { children } = props

    const theme = useTheme()
    const emotionCSS = getStyles(theme)

    return (

		<div css={emotionCSS}>

            {children}

		</div>

	)

}

Panel.propTypes = {

	children: PropTypes.number.isRequired,

}

export default Panel
