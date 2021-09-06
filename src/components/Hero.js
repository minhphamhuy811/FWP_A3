// import logochxhcnvn from '../assets/logo_chxhcnvn.svg'
// import logobyt from '../assets/logo_byt.svg'
import React from 'react'
import logochxhcnvn from '../assets/logo_chxhcnvn.svg'
import logobyt from '../assets/logo_byt.svg'
import {Link} from 'react-router-dom'

export default function Hero() {
	function resetSessionStorage() {
		sessionStorage.clear()
	}
	return(
		<div className="bg-primary">
			<div className="flex justify-center items-center border border-transparent py-4 px-2 md:px-8">
			<div className="flex flex-shrink-0 gap-x-2 px-7 justify-center items-center">
				<img src={logochxhcnvn} className="h-12" alt="logo_vn"/>
				<img src={logobyt} className="h-12 border border-transparent rounded-full bg-white" alt="logo_byt"/>
			</div>
			<div className="flex flex-col justify-center items-center text-center border-l border-r px-4 py-0.5 border-white">
				<h3 className="text-white" style={{fontSize: '10px'}}>BAN CHỈ ĐẠO QUỐC GIA PHÒNG CHỐNG COVID-19</h3>
				<h1 className="font-bold text-white">HỆ THỐNG THÔNG TIN & KHAI BÁO SỨC KHỎE</h1>
				<h3 className="text-white italic" style={{fontSize: '12.5px'}}>Dành cho bệnh nhân mắc Covid-19</h3>
			</div>
			<div className="items-stretch md:items-center">
				<Link to={'/admin-login'} className="flex gap-x-2 font-bold border border-transparent py-4 px-4 rounded-r-xl text-white justify-evenly items-center hover:text-primary hover:bg-white hover:border-white focus:text-red-700 focus:bg-gray-50" onClick={() => resetSessionStorage()} >
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
						<path
							d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
					</svg>
					Ban Quản Lý
				</Link>
			</div>
			</div>
		</div>
	)
}
