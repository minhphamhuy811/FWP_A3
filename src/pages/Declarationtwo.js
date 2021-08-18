import React from 'react'
import {Link} from 'react-router-dom'

export default function Symptomewqer_Info() {
	return(
		<div className="flex flex-col bg-gray-100">
			<div className="border-blue-900 px-4 mb-4 min-h-screen relative max-w-xl mx-auto">
				<div className="bg-white border border-transparent rounded-2xl p-4 my-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl">TỜ KHAI Y TẾ</h1>
						<p className="text-red-600" style={{fontSize: '10px'}}>*Thận trọng: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có thể xử lý hình sự</p>
					</div>
					<div className="my-4">
						<h3 className="font-bold">Các dấu hiệu, biểu hiện nhiễm SARS-COV-2</h3>
						<form action="">

							<p className="font-light my-2">1.Ho <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className="style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">2.Sốt (trên 37.5 độ C) <a className="text-red-600 italic">(*)</a> <input type="text" placeholder="nhập nhiệt độ của bạn" className="rounded-full"  /></p>


							<p className="font-light my-2">3.Đau đầu <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">4.Đau họng, rát họng <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">5.Sổ mũi, chảy mũi, ngạt mũi <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">6.Khó thở <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">7.Đau ngực, tức ngực <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">8.Đau mỏi người, đau cơ <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">9.Mất vị giác <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">10.Mất khứu giác <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">11.Đau bụng, buồn nôn <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

							<p className="font-light my-2">12.Tiêu chảy <a className="text-red-600 italic">(*)</a></p>
							<label><input className="style-radio radio-option" type="radio" value='có' /> Có	</label>
							<label><input className=" style-radio radio-option" type="radio" value='ko'/> Không	</label>

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
