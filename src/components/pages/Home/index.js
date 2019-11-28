import React from "react"
import { Panel } from "../../library"
import { ThemeProvider } from 'emotion-theming'

const theme = {

    colors: {

        panel: {

			background: 'hotpink'

        }

    }

}

export default function PageHome() {

	return (

		<div className="PageHome">

			<ThemeProvider theme={theme}>

				<Panel>

					<h2>Homepage</h2>

				</Panel>

			</ThemeProvider>

		</div>

	)

}
