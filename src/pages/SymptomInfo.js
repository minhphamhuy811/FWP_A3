import { Link } from 'react-router-dom'
import React from 'react'
import { useSessionStorage } from '../middleware/UseStorage'
import { CountryDropdown } from 'react-country-region-selector';
import { isFormCorrect, isFormFilled, nameRegex, idRegex, emailRegex, phoneRegex, validateForm, handleRedirect } from '../lib/utils/validate'
import generateYear from '../lib/utils/generate-year'
import Hotline from '../components/Hotline';

export default function SymptomInfo() {
	const [fullName, setFullName] = useSessionStorage('fullName', '')
	const [id, setID] = useSessionStorage('id', '')
	const [birthYear, setBirthYear] = useSessionStorage('birthYear', '')
	const [gender, setGender] = useSessionStorage('gender', '')
	const [country, setCountry] = useSessionStorage('country', 'Vietnam')
	const [city, setCity] = useSessionStorage('city', '')
	const [district, setDistrict] = useSessionStorage('district', '')
	const [ward, setWard] = useSessionStorage('ward', '')
	const [address, setAddress] = useSessionStorage('address', '')
	const [phoneNumber, setPhoneNumber] = useSessionStorage('phoneNumber', '')
	const [email, setEmail] = useSessionStorage('email', '')


	function resetSymptomInfo() {
		setFullName('')
		setID('')
		setBirthYear('')
		setGender('')
		setCountry('')
		setAddress('')
		setPhoneNumber('')
		setEmail('')
		setCity('')
		setDistrict('')
		setWard('')
		sessionStorage.clear()
	}

	return (
		<div className="flex flex-col bg-gray-100 min-h-screen">
			<div className="border-blue-900 px-4 mb-2 relative max-w-xl mx-auto">
				<div className="bg-white border border-transparent rounded-2xl p-4 my-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl">KHAI BÁO SỨC KHỎE</h1>
					</div>
					<div className="mt-2 text-center font-bold">Phần 1: Thông tin cá nhân</div>
					<div className="my-2">
						<h3 className="font-bold">Thông tin người khai báo</h3>
						<form method="post" action="/" className="my-2">
							<ul className="flex flex-col">
								<label htmlFor="fullName" className="flex gap-x-1">Họ và Tên <div className="text-red-600 italic"> (*)</div>{validateForm(fullName, nameRegex)}</label>
								<input type="text" placeholder="Nguyễn Văn A" className="option-input p-3 rounded-full border-gray-300 focus:border-blue-900" id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} />
							</ul>
							<ul className="flex flex-col my-2">
								<label htmlFor="id" className="flex gap-x-1">Số hộ chiếu / CMND / CCCD <div className="text-red-600 italic">(*)</div>{validateForm(id, idRegex)}</label>
								<input type="text" placeholder="012345678" itemID="id" className="rounded-full border-gray-300 focus:border-blue-900" id="id" value={id} onChange={e => setID(e.target.value)} />
							</ul>
							<div className="grid grid-cols-3 gap-x-4 my-2">
								<ul className="flex flex-col">
									<label htmlFor="birthYear" className="flex gap-x-1">Năm Sinh <div className="text-red-600 italic">(*)</div></label>
									<select name="birthyear" id="birthYear" value={birthYear} onChange={e => setBirthYear(e.target.value)} className="option-input p-3 rounded-full border-gray-300 focus:border-blue-900">
										<option hidden>-Chọn-</option>
										{generateYear()}
									</select>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="gender" className="flex gap-x-1">Giới Tính <div className="text-red-600 italic">(*)</div></label>
									<select name="gdr" id="gender" value={gender} onChange={e => setGender(e.target.value)} className="option-input p-3 rounded-full border-gray-300 focus:border-blue-900">
										<option hidden>-Chọn-</option>
										<option>Nam</option>
										<option>Nữ</option>
										<option>Khác</option>
									</select>
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="country" className="flex gap-x-1">Quốc Tịch <div className="text-red-600 italic">(*)</div></label>
									<CountryDropdown
									type="text"  className="rounded-full option-input p-3 border-gray-300 focus:border-blue-900" id="country"
									value={country}
									onChange={value => setCountry(value)}
									/>
								</ul>
							</div>
							<div className="my-2">
							<h3 className="font-bold">Thông tin nơi cư trú</h3>
							</div>
							<div className="grid grid-cols-3 gap-x-4">
								<div>
									<label htmlFor="city" className="flex gap-x-1">
										Tỉnh/thành <div className="text-red-600 text-xs italic">(*)</div>
									</label>
									<select className="option-input p-3" id="city" value={city} onChange={e => setCity(e.target.value)}>
										<option hidden>-Chọn-</option>
										<option>Thành phố Hà Nội</option>
										<option>Thành phố Hồ Chí Minh</option>
										<option>Tỉnh An Giang</option>
										<option>Tỉnh Bà Rịa - Vũng Tàu</option>
										<option>Tỉnh Bạc Liêu</option>
										<option>Tỉnh Bắc Giang</option>
										<option>Tỉnh Bắc Kạn</option>
										<option>Tỉnh Bắc Ninh</option>
										<option>Tỉnh Bến Tre</option>
										<option>Tỉnh Bình Dương</option>
										<option>Tỉnh Bình Định</option>
										<option>Tỉnh Bình Phước</option>
										<option>Tỉnh Bình Thuận</option>
										<option>Tỉnh Cao Bằng</option>
										<option>Tỉnh Cà Mau</option>
										<option>Thành phố Cần Thơ</option>
										<option>Thành phố Hải Phòng</option>
										<option>Thành phố Đà Nẵng</option>
										<option>Tỉnh Gia Lai</option>
										<option>Tỉnh Hòa Bình</option>
										<option>Tỉnh Hà Giang</option>
										<option>Tỉnh Hà Nam</option>
										<option>Tỉnh Hà Tĩnh</option>
										<option>Tỉnh Hưng Yên</option>
										<option>Tỉnh Hải Dương</option>
										<option>Tỉnh Hậu Giang</option>
										<option>Tỉnh Điện Biên</option>
										<option>Tỉnh Đắk Lắk</option>
										<option>Tỉnh Đắk Nông</option>
										<option>Tỉnh Đồng Nai</option>
										<option>Tỉnh Đồng Tháp</option>
										<option>Tỉnh Khánh Hòa</option>
										<option>Tỉnh Kiên Giang</option>
										<option>Tỉnh Kon Tum</option>
										<option>Tỉnh Lai Châu</option>
										<option>Tỉnh Long An</option>
										<option>Tỉnh Lào Cai</option>
										<option>Tỉnh Lâm Đồng</option>
										<option>Tỉnh Lạng Sơn</option>
										<option>Tỉnh Nam Định</option>
										<option>Tỉnh Nghệ An</option>
										<option>Tỉnh Ninh Bình</option>
										<option>Tỉnh Ninh Thuận</option>
										<option>Tỉnh Phú Thọ</option>
										<option>Tỉnh Phú Yên</option>
										<option>Tỉnh Quảng Bình</option>
										<option>Tỉnh Quảng Nam</option>
										<option>Tỉnh Quảng Ngãi</option>
										<option>Tỉnh Quảng Ninh</option>
										<option>Tỉnh Quảng Trị</option>
										<option>Tỉnh Sóc Trăng</option>
										<option>Tỉnh Sơn La</option>
										<option>Tỉnh Thanh Hóa</option>
										<option>Tỉnh Thái Bình</option>
										<option>Tỉnh Thái Nguyên</option>
										<option>Tỉnh Thừa Thiên - Huế</option>
										<option>Tỉnh Tiền Giang</option>
										<option>Tỉnh Trà Vinh</option>
										<option>Tỉnh Tuyên Quang</option>
										<option>Tỉnh Tây Ninh</option>
										<option>Tỉnh Vĩnh Long</option>
										<option>Tỉnh Vĩnh Phúc</option>
										<option>Tỉnh Yên Bái</option>
									</select>

								</div>
								<div>
									<label htmlFor="district" className="flex gap-x-1">
										Quận/huyện <div className="text-red-600 italic">(*)</div>
									</label>
									<select className="option-input p-3" id="district" value={district} onChange={e => setDistrict(e.target.value)}>
										<option hidden>-Chọn-</option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
								<div>
									<label htmlFor="ward" className="flex gap-x-1">Phường/xã <div className="text-red-600 italic">(*)</div></label>
									<input type="text" placeholder="1" className="option-input text-gray-600 p-3" id="ward" value={ward} onChange={e => setWard(e.target.value)}/>
								</div>
							</div>
							<ul className="flex flex-col col-span-3 my-2">
								<label htmlFor="address" className="tracking-wide flex gap-x-1">Số nhà, phố, tổ dân phố/thôn/đội <div className="text-red-600 italic">(*)</div></label>
								<input type="text" placeholder="01 Đường Hồ Chí Minh, Khu Phố 01, Tổ 1, Phường 1, Quận 1" className="rounded-full border-gray-300 focus:border-blue-900" id="address" value={address} onChange={e => setAddress(e.target.value)} />
							</ul>
							<div className="grid grid-cols-2 gap-4">
								<ul className="flex flex-col">
									<label htmlFor="phoneNumber" className="tracking-wide flex gap-x-1">Điện thoại <div className="text-red-600 italic">(*)</div>{validateForm(phoneNumber, phoneRegex)}</label>
									<input type="text" placeholder="0123456789" className="rounded-full border-gray-300 focus:border-blue-900" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
								</ul>
								<ul className="flex flex-col">
									<label htmlFor="email" className="tracking-wide flex gap-x-1">Email <div className="text-red-600 italic">(*)</div>{validateForm(email, emailRegex)}</label>
									<input type="email" placeholder="nguyenvana@mail.com" className="rounded-full border-gray-300 focus:border-blue-900" id="email" value={email} onChange={e => setEmail(e.target.value)} />
								</ul>
							</div>
						</form>
					</div>
				</div>
				<div className="bg-white border border-transparent rounded-2xl p-2">
					<div className="flex justify-around text-center">
						<Link className="group flex justify-center border border-transparent rounded-xl text-white bg-secondary hover:bg-red-900 focus:outline-none p-4 mr-2 text-white font-bold" style={{ borderRadius: '15px' }} onClick={() => resetSymptomInfo()}>XÓA</Link>
						<Link to={'/symptom-status'} className="border-green-600 bg-green-600 p-4 w-full rounded-xl hover:bg-green-900 focus:outline-none text-white font-bold" onClick={e => handleRedirect(e, isFormCorrect, isFormFilled)}>TIẾP TỤC</Link>
						{console.log("Form is filled: " + isFormFilled)}
					</div>
				</div>
			</div>
			<Hotline/>	
		</div>
	)
}
