import React from 'react'

export default function Hotline() {
	return (
		<div className="flex flex-col gap-y-2 bg-gray-100 px-2 md:px-4 lg:px-8 pt-8 text-center">
			<h3 className="text-md md:text-xl lg:text-2xl font-bold">Nếu bạn hoặc bệnh nhân có triệu chứng nặng.</h3>
			<h3 className="text-md md:text-xl lg:text-2xl font-bold">Xin vui lòng liên hệ đường dây nóng ban chỉ đạo phòng chống Covid-19 bên dưới:</h3>
			<div className="mt-6 mb-12">
				<div  className="text-2xl flex justify-center items-end gap-x-2">
					<p className="text-3xl font-bold text-secondary">1022</p> bấm phím <p className="text-3xl font-bold text-secondary">2</p>
				</div>
				<div className="text-2xl flex justify-center items-end gap-x-2">
				hoặc <p className="text-3xl font-bold text-secondary">1900 9095</p>
				</div>
			</div>
		</div>
	)
}
