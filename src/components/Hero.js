import logochxhcnvn from '../assets/logo_chxhcnvn.svg'
import logobyt from '../assets/logo_byt.svg'
import React from 'react'

export default function Hero() {
	return(
		<div className="bg-blue-900 border border-transparent p-8">
			<div className="flex gap-x-2 justify-center items-center">
				<img src={logochxhcnvn} className="h-14" alt="logo_vn"/>
				<img src={logobyt} className="h-14 border border-transparent rounded-full bg-white" alt="logo_byt"/>
			</div>
			<div className="text-center pt-4">
				<h3 className="text-white" style={{fontSize: '10px'}}>BAN CHỈ ĐẠO QUỐC GIA PHÒNG CHỐNG COVID-19</h3>
				<h1 className="font-bold text-white">HỆ THỐNG QUẢN LÝ KHAI BÁO Y TẾ</h1>
			</div>
		</div>
	)
}
