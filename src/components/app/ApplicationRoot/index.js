import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { App } from "../../library"

import {
	PageHome,
	PageReduxExample,
	PageFormExample,
	PageApiExample,
} from "../../pages"
import NavigationPrimary from "../NavigationPrimary"

export default function ApplicationRoot() {

	return (

		<App>

			<Router>

				<header>

					<h1>Hello World</h1>

				</header>

				<NavigationPrimary />

				<main>

					<Switch>

						<Route path="/redux-example"><PageReduxExample /></Route>
						<Route path="/api-example"><PageApiExample /></Route>
						<Route path="/form-example"><PageFormExample /></Route>

						<Route path="/"><PageHome /></Route>

					</Switch>

				</main>

				<footer>

					<p>Application Footer</p>

				</footer>

			</Router>

		</App>

	)

}
