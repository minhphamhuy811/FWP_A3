import React, {useState} from 'react'

export default function Declaration() {
	const [fullName, setFullName] = useState('')
	const [birthYear, setBirthYear] = useState('')
	const [gender, setGender] = useState('')
	const [national, setNational] = useState('')
	const [id, setID] = useState('')

	return(
		<div className="flex flex-col bg-gray-100">
			<div className="border-blue-900 px-8 py-4 min-h-screen relative max-w-xl mx-auto">
				<div className="bg-white border border-transparent rounded-2xl p-4 my-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl">TỜ KHAI Y TẾ</h1>
						<p className="text-red-600" style={{fontSize: '10px'}}>*Thận trọng: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có thể xử lý hình sự</p>
					</div>
					<div className="my-4">
						<h3 className="font-bold">Thông tin người khai báo</h3>
						<form action="">
							<ul className="flex flex-col">
								<label htmlFor="fullname">Họ và Tên:</label>
								<input type="text" placeholder="Nguyễn Văn A" className="rounded-full" id="fullname" value={fullName} onChange={e => setFullName(e.target.value)}/>
							</ul>
							<ul className="flex flex-col">
								<label htmlFor="id">Số hộ chiếu / CMND / CCCD:</label>
								<input type="text" placeholder="012345678" className="rounded-full" id="id" value={id} onChange={e => setID(e.target.value)}/>
							</ul>
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
							<h3 className="font-bold">Địa chỉ liên lạc tại Việt Nam</h3>
							<br />
							<div className="grid grid-cols-3 gap-4">
								<div >
									<label className="tracking-wide text-base font-bold mb-2" >
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
									<label className="tracking-wide text-base font-bold mb-2" >
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
									<input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500" placeholder=""/>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="col-span-1">
									<label className=" tracking-wide text-base font-bold mb-2" >
							Điện thoại <a className="text-red-600 italic">(*)</a>
									</label>
									<input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500" placeholder=""/>
								</div>
								<div className="col-span-1">
									<label className=" tracking-wide text-base font-bold mb-2" >
							Email
									</label>
									<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500" placeholder=""/>
								</div>
							</div>
							<p className="font-bold">Trong vòng 14 ngày qua, Anh/Chị có dến tình/thành phố, quốc gia/ vùng lãnh thổ nào (có thể đi qua nhiều nơi)</p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className="style-radio radio-option" type="radio" value='ko'/> Không	</label>
							<br />
							<p className=" font-bold">Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện ít nhất 1 trong các dấu hiệu: sốt, ho, khó thở, viêm phổi, đau họng, mệt mỏi không?</p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>
							<br />
							<p className="font-bold">Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với <a className="text-red-600 italic">(*)</a></p>




							<table className="table max-w-max border-solid border-gray-300 border-4 table-fixed">
								<thead >
									<tr>
										<th className="w-4/5"/>
										<th className="w-1/5" >Có</th>
										<th >Không</th>
									</tr>
								</thead >
								<tbody >
									<tr className="border-solid border-gray-300 border-4 ">
										<td  >Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19 <a className="text-red-600 italic">(*)</a></td>
										<td  ><input type="radio"  /></td>
										<td  ><input type="radio" /></td>
									</tr>
									<tr className="border-solid border-gray-300 border-4 " >
										<td>Người từ nước có bệnh COVID-19 <a className="text-red-600 italic">(*)</a></td>
										<td><input type="radio"  /></td>
										<td><input type="radio"  /></td>
									</tr>
									<tr className="border-solid border-gray-300 border-4 ">
										<td>Người có biểu hiện (Sốt, ho, khó thở, Viêm phổi) <a className="text-red-600 italic">(*)</a></td>
										<td><input type="radio"/></td>
										<td><input type="radio"/></td>
									</tr>
								</tbody>

							</table>
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
