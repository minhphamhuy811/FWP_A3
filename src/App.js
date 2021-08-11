import React from 'react'
import Declare_page from './layout/Declare_page'
import Declaration from './Declaration'
import Declarationtwo from './Declarationtwo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
	return (
		<Router>
			<Switch>
				<div>
					<Route exact path='/'>
						<Declare_page />
						<Declaration />
					</Route>
					<Route path='/2'>
						<Declare_page />
						<Declarationtwo />
					</Route>
				</div>

			</Switch>
		</Router>
	)
}



export default App
