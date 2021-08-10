import React, {useState} from 'react'
import logobyt from './assets/logo_byt.svg'
import logochxhcnvn from './assets/logo_chxhcnvn.svg'

export default function Declaration() {
	const [fullName, setFullName] = useState('')
	const [birthYear, setBirthYear] = useState('')
	const [gender, setGender] = useState('')
	const [national, setNational] = useState('')
	const [id, setID] = useState('')

	return(
		<div className="bg-gray-100 p-4">
			<div className="border-8 border-blue-900 p-4 min-h-screen">
				<div className="bg-white border border-transparent rounded-2xl p-4">
					<div className="flex gap-x-2 justify-center items-center">
						<img src={logochxhcnvn} className="h-10" alt="logo_vn"/>
						<img src={logobyt} className="h-10" alt="logo_byt"/>
					</div>
					<div className="text-center pt-4">
						<h3 style={{fontSize: '10px'}}>BAN CHỈ ĐẠO QUỐC GIA PHÒNG CHỐNG COVID-19</h3>
						<h1 className="font-bold">HỆ THỐNG QUẢN LÝ KHAI BÁO Y TẾ</h1>
					</div>
				</div>
				<div className="bg-white border border-transparent rounded-2xl p-4 my-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl">TỜ KHAI Y TẾ</h1>
						<p className="text-red-600" style={{fontSize: '10px'}}>*Thận trọng: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có thể xử lý hình sự</p>
					</div>
					<div className="my-4">
						<form action="">
							<div className="grid grid-cols-2 gap-x-4">
								<ul className="flex flex-col">
									<label htmlFor="fullname">Họ và Tên:</label>
									<input type="text" placeholder="Nguyễn Văn A" className="rounded-full" id="fullname" value={fullName} onChange={e => setFullName(e.target.value)}/>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="id">Số hộ chiếu / CMND / CCCD:</label>
									<input type="text" placeholder="012345678" className="rounded-full" id="id" value={id} onChange={e => setID(e.target.value)}/>
								</ul>
							</div>
							<div className="grid grid-cols-3 gap-x-4 my-4">
								<ul className="flex flex-col">
									<label htmlFor="birthyear">Năm Sinh:</label>
									<input type="text" placeholder="2021" className="rounded-full" id="birthyear" value={birthYear} onChange={e => setBirthYear(e.target.value)}/>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="gender">Giới Tính:</label>
									<input type="text" placeholder="Nam/Nữ" className="rounded-full" id="gender" value={gender} onChange={e => setGender(e.target.value)}/>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="national">Quốc Tịch:</label>
									<input type="text" placeholder="Nam/Nữ" className="rounded-full" id="national" value={national} onChange={e => setNational(e.target.value)}/>
								</ul>
							</div>
							{/*Minh Pham's part*/}
						</form>

					</div>
				</div>
				<div className="bg-white border border-transparent rounded-2xl p-4">
					<div className="flex justify-around">
						<button className="border-red-600 bg-red-600 py-4 px-8 rounded-xl text-white">XÓA</button>
						<button className="border-green-600 bg-green-600 p-4 rounded-xl text-white">TIẾN HÀNH</button>
					</div>
				</div>
			</div>
		</div>
	)
}
