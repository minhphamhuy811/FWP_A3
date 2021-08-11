import React from 'react'
import {Link} from 'react-router-dom'

export default function Mininavbar() {

	return(
		<nav className="bg-secondary px-4 py-2">
			<div className="flex justify-between items-center">
				<div className="text-white">
					© 2021 Team Vuers, All rights reserved.
				</div>
				<Link to={'/admin-login'} className="flex border border-white rounded-xl text-white px-2 py-1 justify-evenly items-center hover:text-red-700 hover:bg-white focus:text-red-700 focus:bg-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
					</svg>
					Login
				</Link>
			</div>
		</nav>
	)
}
