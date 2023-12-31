import React from 'react'
import ReactDOM from 'react-dom'
import '../src/index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
// import Navbar from './components/Navbar'
// import Login from './Login'

ReactDOM.render (
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
