import React from 'react'
import Declare_page from './layout/Declare_page'
import Declaration from './Declaration'
import Declarationtwo from './Declarationtwo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'

export default function App() {
	return (
		<Router>
			<Switch>
				<div>
					<Route exact path='/'>
						<Declare_page />
						<Declaration />
					</Route>
					<Route path='/continue'>
						<Declare_page />
						<Declarationtwo />
					</Route>
					<Route path='/admin-login'>
						<Login/>
					</Route>
				</div>

			</Switch>
		</Router>
	)
}
