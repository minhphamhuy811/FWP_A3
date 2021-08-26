import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import DeclarePageHeader from './layout/DeclarePageHeader'
import SymptomInfo from './pages/SymptomInfo'
import Information from './pages/Information'
import SymptomStatus from './pages/SymptomStatus'
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
						<DeclarePageHeader />
						<Hotline/>
						<SymptomInfo />
					</Route>
					<Route path='/symptom-status'>
						<DeclarePageHeader />
						<Hotline/>
						<SymptomStatus/>
					</Route>
					<Route path='/covid-information'>
						<DeclarePageHeader />
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
