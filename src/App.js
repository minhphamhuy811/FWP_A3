import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Declare_page_header from './layout/Declare_page_header'
import Symptom_info from './pages/Symptom_info'
import Information from './pages/Information'
import Symptom_status from './pages/Symptom_status'
import Login from './pages/Login'
import Hotline from './components/Hotline'



export default function App() {
	return (
		<Router>
			<Switch>
				<div>
					<Route exact path="/">
						<Redirect to="/symptom-info" />
					</Route>
					<Route exact path='/symptom-info'>
						<Declare_page_header />
						<Hotline/>
						<Symptom_info />
					</Route>
					<Route path='/symptom-status'>
						<Declare_page_header />
						<Hotline/>
						<Symptom_status/>
					</Route>
					<Route path='/covid-information'>
						<Declare_page_header />
						<Information/>
					</Route>
					<Route path='/admin-login'>
						<Login/>
					</Route>
					<Route path='/symptom'>
						<Login/>
					</Route>
				</div>

			</Switch>
		</Router>
	)
}
