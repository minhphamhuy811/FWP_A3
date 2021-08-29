import React from 'react'
// import {Link} from 'react-router-dom'
// import Clock from 'react-live-clock'
// import moment from 'moment/min/moment-with-locales'
// import 'moment/locale/vi'
import '../index.css'
import logochxhcnvn from '../assets/logo_chxhcnvn.svg'
import logobyt from '../assets/logo_byt.svg'

export default function Mininavbar() {
	return(
		<nav className="bg-secondary">
			<div className="md:flex justify-center items-center">
				<div className="flex gap-x-2 pr-4 justify-center items-center">
					<img src={logochxhcnvn} className="h-8" alt="logo_vn"/>
					<img src={logobyt} className="h-8 border border-transparent rounded-full bg-white" alt="logo_byt"/>
				</div>
			</div>
		</nav>
	)
}
