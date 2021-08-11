import React from 'react'
export default function Declaration() {


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
