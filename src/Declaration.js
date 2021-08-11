import React, {useState} from 'react'

export default function Declaration() {
	const [fullName, setFullName] = useState('')
	const [birthYear, setBirthYear] = useState('')
	const [gender, setGender] = useState('')
	const [national, setNational] = useState('')
	const [id, setID] = useState('')
	const [address, setAddress] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')

	return(
		<div className="flex flex-col bg-gray-100">
			<div className="border-blue-900 px-8 py-4 min-h-screen relative max-w-xl mx-auto">
				<div className="bg-white border border-transparent rounded-2xl p-4 my-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl">TỜ KHAI Y TẾ</h1>
						<p className="text-red-600" style={{fontSize: '10px'}}>*Thận trọng: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có thể xử lý hình sự</p>
					</div>
					<div className="mt-2 text-center font-bold">Phần 1: Thông tin cá nhân</div>
					<div className="my-2">
						<h3 className="font-bold">Thông tin người khai báo</h3>
						<form action="" className="my-2">
							<ul className="flex flex-col">
								<label htmlFor="fullname">Họ và Tên <a className="text-red-600 italic">(*)</a></label>
								<input type="text" placeholder="Nguyễn Văn A" className="rounded-full border-gray-300 focus:border-blue-900" id="fullname" value={fullName} onChange={e => setFullName(e.target.value)}/>
							</ul>
							<ul className="flex flex-col my-2">
								<label htmlFor="id">Số hộ chiếu / CMND / CCCD <a className="text-red-600 italic">(*)</a></label>
								<input type="text" placeholder="012345678" className="rounded-full border-gray-300 focus:border-blue-900" id="id" value={id} onChange={e => setID(e.target.value)}/>
							</ul>
							<div className="grid grid-cols-3 gap-x-4 my-2">
								<ul className="flex flex-col">
									<label htmlFor="birthyear">Năm Sinh <a className="text-red-600 italic">(*)</a></label>
									<input type="text" placeholder="2021" className="rounded-full border-gray-300 focus:border-blue-900" id="birthyear" value={birthYear} onChange={e => setBirthYear(e.target.value)}/>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="gender">Giới Tính <a className="text-red-600 italic">(*)</a></label>
									<select name="gdr" id="gender" value={gender} onChange={e => setGender(e.target.value)} className="rounded-full border-gray-300 focus:border-blue-900">
										<option value="male" onClick={e => setGender(e.target.value)}>Nam</option>
										<option value="female" onClick={e => setGender(e.target.value)}>Nữ</option>
										<option value="differ" onClick={e => setGender(e.target.value)}>Khác</option>
									</select>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="national">Quốc Tịch <a className="text-red-600 italic">(*)</a></label>
									<input type="text" placeholder="Việt Nam" className="rounded-full border-gray-300 focus:border-blue-900" id="national" value={national} onChange={e => setNational(e.target.value)}/>
								</ul>
							</div>
							<h3 className="font-bold">Thông tin nơi cư trú</h3>
							<div className="grid grid-cols-3 gap-x-4">
								<div>
									<label>
							Tỉnh/thành <a className="text-red-600 italic">(*)</a>
									</label>
									<select className="block rounded-full border-gray-300 appearance-none w-full bg-white-200 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-gray" id="grid-state">
										<option>-Chọn-</option>
										<option>Hà Nội</option>
										<option>Hồ Chí Minh</option>
									</select>
								</div>
								<div>
									<label>
							Quận/huyện <a className="text-red-600 italic">(*)</a>
									</label>
									<select className="option-input" id="grid-state">
										<option>-Chọn-</option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
								<div>
									<label>
							Phường/xã <a className="text-red-600 italic">(*)</a>
									</label>
									<select className="option-input" id="grid-state">
										<option>-Chọn-</option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
								<ul className="flex flex-col col-span-3 my-2">
									<label htmlFor="email" className="tracking-wide">Số nhà, phố, tổ dân phố/thôn/đội <a className="text-red-600 italic">(*)</a></label>
									<input type="text" placeholder="01 Đường Hồ Chí Minh, Khu Phố 01, Tổ 1, Phường 1, Quận 1" className="rounded-full border-gray-300 focus:border-blue-900" id="address" value={address} onChange={e => setAddress(e.target.value)}/>
								</ul>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<ul className="flex flex-col">
									<label htmlFor="email" className="tracking-wide">Điện thoại <a className="text-red-600 italic">(*)</a></label>
									<input type="number" placeholder="0123456789" className="rounded-full border-gray-300 focus:border-blue-900" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="email" className="tracking-wide">Email <a className="text-red-600 italic">(*)</a></label>
									<input type="email" placeholder="nguyenvana@mail.com" className="rounded-full border-gray-300 focus:border-blue-900" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
								</ul>
							</div>
						</form>
					</div>

				</div>
				<div className="bg-white border border-transparent rounded-2xl p-2">
					<div className="flex justify-around">
						<button className="border-red-600 bg-red-600 py-4 px-8 w-full rounded-l-xl text-white">XÓA</button>
						<button className="border-green-600 bg-green-600 p-4 w-full rounded-r-xl text-white">TIẾP TỤC</button>
					</div>
				</div>
			</div>
		</div>
	)
}
