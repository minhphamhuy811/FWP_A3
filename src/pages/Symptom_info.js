import {  Link } from 'react-router-dom'
import React, {useState} from 'react'

export default function Symptom_info() {
	
	const [allValues, setAllValues] = useState(() => {
		const saved = sessionStorage.getItem('allValues')
		const initialValues = JSON.parse(saved)
		return {
			fullName: initialValues.fullName,
			id: initialValues.id,
			birthYear: initialValues.birthYear,
			gender: initialValues.gender,
			country: initialValues.country,
			address: initialValues.address,
			ward: initialValues.ward,
			district: initialValues.district,
			city: initialValues.city,
			phoneNumber: initialValues.phoneNumber,
			email: initialValues.email
		} || {
			fullName: '',
			id: '',
			birthYear: '',
			gender: '',
			country: '',
			address: '',
			ward: '',
			district: '',
			city: '',
			phoneNumber: '',
			email: ''
		}
	})

	function resetSymptomInfo() {
		sessionStorage.clear()
	}

	const setValues = () => {
		sessionStorage.setItem('allValues', JSON.stringify(allValues))
	}

	const changeHandler = e => {
		setAllValues({...allValues, [e.target.name]: e.target.value})
	}
	

	return(
		<div className="flex flex-col bg-gray-100">
			<div className="border-blue-900 px-4 mb-4 min-h-screen relative max-w-xl mx-auto">
				<div className="bg-white border border-transparent rounded-2xl p-4 mb-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl">KHAI BÁO SỨC KHỎE</h1>
					</div>
					<div className="mt-2 text-center font-bold">Phần 1: Thông tin cá nhân</div>
					<div className="my-2">
						<h3 className="font-bold">Thông tin người khai báo</h3>
						<form meathod="post" action="/" className="my-2">
							<ul className="flex flex-col">
								<label htmlFor="fullname">Họ và Tên <a className="text-red-600 italic">(*)</a></label>
								<input type="text" placeholder="Nguyễn Văn A" className="rounded-full border-gray-300 focus:border-blue-900" id="fullName" required='true' name='fullName' onChange={changeHandler}/>
							</ul>
							<ul className="flex flex-col my-2">
								<label htmlFor="id">Số hộ chiếu / CMND / CCCD <a className="text-red-600 italic">(*)</a></label>
								<input type="text" placeholder="012345678" itemID="id" className="rounded-full border-gray-300 focus:border-blue-900" id="id" name='id' onChange={changeHandler}/>
							</ul>
							<div className="grid grid-cols-3 gap-x-4 my-2">
								<ul className="flex flex-col">
									<label htmlFor="birthyear">Năm Sinh <a className="text-red-600 italic">(*)</a></label>
									<input type="text" placeholder="2021" className="rounded-full border-gray-300 focus:border-blue-900" id="birthYear" name='birthYear' onChange={changeHandler}/>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="gender">Giới Tính <a className="text-red-600 italic">(*)</a></label>
									<select name="gender" id="gender" onChange={changeHandler} className="rounded-full border-gray-300 focus:border-blue-900">
										<option>-Chọn-</option>
										<option>Nam</option>
										<option>Nữ</option>
										<option>Khác</option>
									</select>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="country">Quốc Tịch <a className="text-red-600 italic">(*)</a></label>
									<input type="text" placeholder="Việt Nam" className="rounded-full border-gray-300 focus:border-blue-900" id="country" name='country' onChange={changeHandler}/>
								</ul>
							</div>
							<h3 className="font-bold">Thông tin nơi cư trú</h3>
							<div className="grid grid-cols-3 gap-x-4">
								<div>
									<label>
							Tỉnh/thành <a className="text-red-600 text-xs italic">(*)</a>
									</label>
									<select className="option-input p-3" id="grid-state" name='city' onChange={changeHandler}>
										<option>-Chọn-</option>
										<option>Hà Nội</option>
										<option>Hồ Chí Minh</option>
									</select>
								</div>
								<div>
									<label>
							Quận/huyện <a className="text-red-600 italic">(*)</a>
									</label>
									<select className="option-input p-3" id="grid-state" name='district' onChange={changeHandler}>
										<option>-Chọn-</option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
								<div>
									<label>
							Phường/xã <a className="text-red-600 italic">(*)</a>
									</label>
									<select className="option-input p-3" id="grid-state" name='ward' onChange={changeHandler}>
										<option>-Chọn-</option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
								<ul className="flex flex-col col-span-3 my-2">
									<label htmlFor="email" className="tracking-wide">Số nhà, phố, tổ dân phố/thôn/đội <a className="text-red-600 italic">(*)</a></label>
									<input type="text" placeholder="01 Đường Hồ Chí Minh, Khu Phố 01, Tổ 1, Phường 1, Quận 1" className="rounded-full border-gray-300 focus:border-blue-900" id="address" name='address' onChange={changeHandler}/>
								</ul>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<ul className="flex flex-col">
									<label htmlFor="email" className="tracking-wide">Điện thoại <a className="text-red-600 italic">(*)</a></label>
									<input type="number" placeholder="0123456789" className="rounded-full border-gray-300 focus:border-blue-900" id="phoneNumber" name='phoneNumber' onChange={changeHandler}/>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="email" className="tracking-wide">Email <a className="text-red-600 italic">(*)</a></label>
									<input type="email" placeholder="nguyenvana@mail.com" className="rounded-full border-gray-300 focus:border-blue-900" id="email" name='email' onChange={changeHandler}/>
								</ul>
							</div>
						</form>
					</div>

				</div>
				<div className="bg-white border border-transparent rounded-2xl p-2">
					<div className="flex justify-around text-center">
						<Link className="group flex justify-center border border-transparent rounded-xl text-white bg-secondary hover:bg-red-900 focus:outline-none p-4 mr-2 text-white font-bold" style={{borderRadius: '15px'}} onClick={() => resetSymptomInfo()}>XÓA</Link>
						<Link to={'/symptom-status'} onClick={setValues} className="border-green-600 bg-green-600 p-4 w-full rounded-xl hover:bg-green-900 focus:outline-none text-white font-bold">TIẾP TỤC</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
