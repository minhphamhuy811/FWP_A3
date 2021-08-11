import React from 'react'
import Declare_page_header from './layout/Declare_page_header'
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
						<Declare_page_header />
						<Declaration />
					</Route>
					<Route path='/continue'>
						<Declare_page_header />
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
