import React from 'react'
// import {useState} from 'react'
import logobyt from './assets/logo_byt.svg'
import logochxhcnvn from './assets/logo_chxhcnvn.svg'

export default function Declaration() {
	// const [firstName, setFirstName] = useState()
	// const [lastName, setLastName] = useState()

	return(
		<div className="bg-gray-100 p-4">
			<div className="border-8 border-blue-900 p-2 min-h-screen">
				<div className="bg-white border border-transparent rounded-2xl p-4">
					<div className="flex gap-x-2 justify-center items-center">
						<img src={logochxhcnvn} className="h-10"/>
						<img src={logobyt} className="h-10"/>
					</div>
					<div className="text-center pt-4">
						<h3 style={{fontSize: '10px'}}>BAN CHỈ ĐẠO QUỐC GIA PHÒNG CHỐNG COVID-19</h3>
						<h1 className="font-bold">HỆ THỐNG QUẢN LÝ KHAI BÁO Y TẾ</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
