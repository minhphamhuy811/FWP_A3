import React from 'react'
// import {useState} from 'react'
import logobyt from './assets/logo_byt.svg'
import logochxhcnvn from './assets/logo_chxhcnvn.svg'

export default function Declaration() {
	// const [firstName, setFirstName] = useState()
	// const [lastName, setLastName] = useState()

	return (
		<div className="bg-gray-100 p-4">
			<div className="border-8 border-blue-900 p-2 min-h-screen">
				<div className="bg-white border border-transparent rounded-2xl p-4">
					<div className="flex gap-x-2 justify-center items-center">
						<img src={logochxhcnvn} className="h-10" />
						<img src={logobyt} className="h-10" />
					</div>
					<div className="text-center pt-4">
						<h3 style={{ fontSize: '10px' }}>BAN CHỈ ĐẠO QUỐC GIA PHÒNG CHỐNG COVID-19</h3>
						<h1 className="font-bold">HỆ THỐNG QUẢN LÝ KHAI BÁO Y TẾ</h1>
					</div>
				</div>
				<p className="font-bold">Địa chỉ liên lạc tại Việt Nam</p>
				<br />
				<div className="grid grid-cols-3 gap-4">
					<div >
						<label className=" tracking-wide text-base font-bold mb-2" >
							Tỉnh/thành <a className="text-red-600 italic">(*)</a>

						</label>
						<select className="block appearance-none w-full bg-white-200 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500" id="grid-state">
							<option>-Chọn-</option>
							<option>Hà Nội</option>
							<option>Hồ Chí Minh</option>
						</select>
					</div>
					<div>
						<label className=" tracking-wide text-base font-bold mb-2" >
							Quận/huyện <a className="text-red-600 italic">(*)</a>
						</label>
						<select className="block appearance-none w-full bg-white-200 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500" id="grid-state">
							<option>-Chọn-</option>
							<option>1</option>
							<option>2</option>
						</select>
					</div>

					<div>
						<label className=" tracking-wide text-base font-bold mb-2" >
							Phường/xã <a className="text-red-600 italic">(*)</a>
						</label>
						<select className="block appearance-none w-full bg-white-200 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500" id="grid-state">
							<option>-Chọn-</option>
							<option>1</option>
							<option>2</option>
						</select>
					</div>

					<div className="col-span-3">
						<label className=" tracking-wide text-base font-bold mb-2" >
							Số nhà, phố, tổ dân phố/thôn/đội <a className="text-red-600 italic">(*)</a>
						</label>
						<input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500" placeholder=""></input>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="col-span-1">
						<label className=" tracking-wide text-base font-bold mb-2" >
							Điện thoại <a className="text-red-600 italic">(*)</a>
						</label>
						<input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500" placeholder=""></input>
					</div>
					<div className="col-span-1">
						<label className=" tracking-wide text-base font-bold mb-2" >
							Email
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500" placeholder=""></input>
					</div>
				</div>
				<p className="font-bold">Trong vòng 14 ngày qua, Anh/Chị có dến tình/thành phố, quốc gia/ vùng lãnh thổ nào (có thể đi qua nhiều nơi)</p>
				<label><input className="style-radio radio-option" type="radio" value='có' ></input> Có	</label>
				<label><input className="style-radio radio-option" type="radio" value='ko'></input> Không	</label>
				<br />
				<p className=" font-bold">Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện ít nhất 1 trong các dấu hiệu: sốt, ho, khó thở, viêm phổi, đau họng, mệt mỏi không?</p>
				<label><input className="style-radio radio-option" type="radio" value='có' ></input> Có	</label>
				<label><input className=" style-radio radio-option" type="radio" value='ko'></input> Không	</label>
				<br />
				<p className="font-bold">Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với <a className="text-red-600 italic">(*)</a></p>



			
				<table className="table max-w-max border-solid border-gray-300 border-4 table-fixed">
					<thead >
						<tr>
							<th className="w-4/5"></th>
							<th className="w-1/5" >Có</th>
							<th >Không</th>
						</tr>
					</thead >
					<tbody >
						<tr className="border-solid border-gray-300 border-4 ">
							<td  >Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19 <a className="text-red-600 italic">(*)</a></td>
							<td  ><input type="radio"  ></input></td>
							<td  ><input type="radio" ></input></td>
						</tr>
						<tr className="border-solid border-gray-300 border-4 " >
							<td>Người từ nước có bệnh COVID-19 <a className="text-red-600 italic">(*)</a></td>
							<td><input type="radio"  ></input></td>
							<td><input type="radio"  ></input></td>
						</tr>
						<tr className="border-solid border-gray-300 border-4 ">
							<td>Người có biểu hiện (Sốt, ho, khó thở, Viêm phổi) <a className="text-red-600 italic">(*)</a></td>
							<td><input type="radio"  ></input></td>
							<td><input type="radio"  ></input></td>
						</tr>
					</tbody>

				</table>
				
			





			</div>
		</div>
	)
}
