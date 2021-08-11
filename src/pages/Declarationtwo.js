import React from 'react'
import {Link} from 'react-router-dom'

export default function Declaration() {
	return(
		<div className="flex flex-col bg-gray-100">
			<div className="border-blue-900 px-8 py-4 min-h-screen relative max-w-xl mx-auto">
				<div className="bg-white border border-transparent rounded-2xl p-4 my-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl lead">TỜ KHAI Y TẾ</h1>
						<p className="text-red-600" style={{fontSize: '10px'}}>*Thận trọng: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có thể xử lý hình sự</p>
					</div>
					<div className="mt-2 text-center font-bold">Phần 2: Thông tin dịch tễ</div>
					<div className="my-2">
						<h3 className="font-bold">Tình trạng nghi nhiễm hoặc gặp phải</h3>
						<form action="">
							<p className="font-light my-2">Trong vòng 14 ngày qua, Anh/Chị có dến tình/thành phố, quốc gia/ vùng lãnh thổ nào (có thể đi qua nhiều nơi)</p>
							<label className="align-middle"><input className="style-radio radio-option" type="radio" value='có' /> Có    </label>
							<label className="align-middle"><input className="style-radio radio-option" type="radio" value='ko'/> Không	</label>
							<p className="font-light my-2">Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện ít nhất 1 trong các dấu hiệu: sốt, ho, khó thở, viêm phổi, đau họng, mệt mỏi không?</p>
							<label className="align-middle"><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label className="align-middle"><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>
							<p className="font-light my-2">Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với <a className="text-red-600 italic">(*)</a></p>
							<table className="table max-w-max border-solid border-gray-300 border-4 table-fixed">
								<thead>
									<tr className="text-center">
										<th className="w-3/5"/>
										<th className="w-1/5" >Có</th>
										<th >Không</th>
									</tr>
								</thead >
								<tbody >
									<tr className="border-solid border-gray-300 border-4">
										<td  >Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19 <a className="text-red-600 italic">(*)</a></td>
										<td className="text-center"><input type="radio"  /></td>
										<td className="text-center"><input type="radio" /></td>
									</tr>
									<tr className="border-solid border-gray-300 border-4 " >
										<td>Người từ nước có bệnh COVID-19 <a className="text-red-600 italic">(*)</a></td>
										<td className="text-center"><input type="radio"  /></td>
										<td className="text-center"><input type="radio"  /></td>
									</tr>
									<tr className="border-solid border-gray-300 border-4 ">
										<td>Người có biểu hiện (Sốt, ho, khó thở, Viêm phổi) <a className="text-red-600 italic">(*)</a></td>
										<td className="text-center"><input type="radio"/></td>
										<td className="text-center"><input type="radio"/></td>
									</tr>
								</tbody>

							</table>

						</form>
					</div>

				</div>
				<div className="bg-white border border-transparent rounded-2xl p-2">
					<div className="flex justify-around items-center text-center">
						<Link className="group flex justify-center border border-transparent rounded-xl text-white bg-secondary hover:bg-red-900 focus:outline-none p-4 mr-2 text-white font-bold" style={{borderRadius: '15px'}}>XÓA</Link>
						<Link to={'/'} className="group flex justify-center border border-transparent bg-yellow-400 py-4 w-1/2 rounded-l-xl text-white hover:bg-yellow-800 focus:outline-none font-bold">QUAY LẠI</Link>
						<Link className="group flex justify-center border border-transparent bg-green-600 p-4 w-1/2 rounded-r-xl hover:bg-green-900 focus:outline-none text-white font-bold">HOÀN TẤT</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
