import React from 'react'
import {Link} from 'react-router-dom'
// import Clock from 'react-live-clock'
// import moment from 'moment/min/moment-with-locales'
// import 'moment/locale/vi'
import '../index.css'

export default function Mininavbar() {
	return(
		<nav className="bg-secondary">
			<div className="md:flex md:justify-evenly items-center">
				<div className="grid grid-cols-2 items-stretch md:items-center">
					<Link to={'/'} className="flex button1 border-black md:border-l text-white p-2 justify-evenly items-center hover:text-red-700 hover:bg-white focus:text-red-700 focus:bg-gray-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
							<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
							<path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
						</svg>
					Khai Báo Sức Khỏe
					</Link>
					<Link to={'/admin-login'} className="flex button2 border-black border-l border-r p-2 text-white justify-evenly items-center hover:text-red-700 hover:bg-white focus:text-red-700 focus:bg-gray-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path
								d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
						</svg>
						Quản Lý Y Tế
					</Link>
				</div>
			</div>
		</nav>
	)
}
