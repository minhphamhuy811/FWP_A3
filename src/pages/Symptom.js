import React from 'react'
export default function Symptom() {
	return(
		<div className="flex flex-col bg-gray-100">
			<div className="border-blue-900 px-8 py-4 min-h-screen relative max-w-xl mx-auto">
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
