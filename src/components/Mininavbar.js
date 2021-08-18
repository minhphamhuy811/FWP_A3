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
				{/*<div className="text-white">*/}
				{/*	<Clock format={'dddd • L • LT'} locale={moment.locale('vi')} ticking={true} timezone={'Asia/Ho_Chi_Minh'} className="capitalize font-bold"/>*/}
				{/*</div>*/}
				<div className="grid grid-cols-3 items-stretch md:items-center">
					<Link to={'/'} className="flex button1 border-black md:border-l text-white p-2 justify-evenly items-center hover:text-red-700 hover:bg-white focus:text-red-700 focus:bg-gray-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
							<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
							<path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
						</svg>
					Khai Báo
					</Link>
					<Link to={'/forum'} className="flex button2 border-black border-l border-r p-2 text-white justify-evenly items-center hover:text-red-700 hover:bg-white focus:text-red-700 focus:bg-gray-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
							<path
								d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
						</svg>
						Diễn Đàn
					</Link>
					<Link to={'/covid-information'} className="flex button2 border-black md:border-r text-white p-2 justify-evenly items-center hover:text-red-700 hover:bg-white focus:text-red-700 focus:bg-gray-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
							<path
								d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
						</svg>
						Thông Tin
					</Link>
				</div>
			</div>
		</nav>
	)
}
