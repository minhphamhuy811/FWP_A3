import React from 'react'
import Graph1 from '../assets/graph1.png'
import Graph2 from '../assets/graph2.png'
// import Table from '../components/Table'


export default function Information() {
	return(
		<div className="flex flex-col gap-y-8 px-2 mt-4 md:px-0">
			<div className="text-3xl flex justify-center font-bold">THÔNG TIN DỊCH TỄ</div>
			<div className="flex flex-row align-middle text-center p-4 gap-x-8 md:gap-y-0 justify-center items-center">
				<div className="border border-green-400 bg-green-200 rounded-2xl p-8">
					<div>Khỏe mạnh</div>
					<div className="text-xl text-green-800">9,891</div>
					<div>Người</div>
				</div>
				<div className="border border-red-400 bg-red-200 rounded-2xl p-8">
					<div>Nghi nhiễm</div>
					<div  className="text-xl text-red-400">3,810</div>
					<div>Người</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 align-middle mx-auto">
				<div className="flex flex-col gap-y-4">
					<div className="font-bold text-center">SỐ NGƯỜI ĐÃ KHAI BÁO</div>
					<img src={Graph1} alt="graph1" width="500px"/>
				</div>
				<div className="flex flex-col gap-y-4">
					<div className="font-bold text-center">SỐ NGƯỜI KHẢ NĂNG CÓ COVID-19</div>
					<img src={Graph2} alt="graph1"  width="525px"/>
				</div>
			</div>
		</div>
	)
}
