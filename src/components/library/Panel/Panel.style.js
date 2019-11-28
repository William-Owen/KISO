/** @jsx jsx */ 

import { css } from '@emotion/core'

const themeDefaults = {

    colors: {

        panel: {

            background: '#f5f3f1'

        }

    }

}

const getStyles = (theme) => {
    
    const elementTheme = {

        ...themeDefaults,
        ...theme

    }

    return css`

        --color-panel-background: ${elementTheme.colors.panel.background};

        padding: 20px;
        background-color: var(--color-panel-background);
        border-radius: 4px;
        color: #fff;

        h2 {

            margin: 0

        }

    `
  
}

export default getStyles