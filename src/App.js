import React from 'react'
import Declare_page_header from './layout/Declare_page_header'
import Declaration from './pages/Declaration'
import Declarationtwo from './pages/Declarationtwo'
import Information from './pages/Information'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Hotline from './components/Hotline'

export default function App() {
	return (
		<Router>
			<Switch>
				<div>
					<Route exact path='/home'>
						<Declare_page_header />
						<Hotline/>
						<Declaration />
					</Route>
					<Route path='/continue'>
						<Declare_page_header />
						<Hotline/>
						<Declarationtwo />
					</Route>
					<Route path='/covid-information'>
						<Declare_page_header />
						<Information/>
					</Route>
					<Route path='/admin-login'>
						<Login/>
					</Route>
				</div>

			</Switch>
		</Router>
	)
}
