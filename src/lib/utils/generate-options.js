import React from 'react'

const cities = ['Hà Nội', 'Hồ Chí Minh']
const districts = [
	'Ba Đình',
	'Bắc Từ Liêm',
	'Cầu Giấy',
	'Đống Đa',
	'Hà Đông',
	'Hai Bà Trưng',
	'Hoàn Kiếm',
	'Hoàng Mai',
	'Long Biên',
	'Nam Từ Liêm',
	'Tây Hồ',
	'Thanh Xuân',
	'Sơn Tây',
	'Ba Vì',
	'Chương Mỹ',
	'Đan Phượng',
	'Đông Anh',
	'Gia Lâm',
	'Hoài Đức',
	'Mê Linh',
	'Mỹ Đức',
	'Phú Xuyên',
	'Phúc Thọ',
	'Quốc Oai',
	'Sóc Sơn',
	'Thạch Thất',
	'Thanh Oai',
	'Thanh Trì',
	'Thường Tín',
	'Ứng Hoà', 
	'Quận 1',
	'Quận 12',
	'Quận Thủ Đức',
	'Quận 9',
	'Quận Gò Vấp',
	'Quận Bình Thạnh',
	'Quận Tân Bình',
	'Quận Tân Phú',
	'Quận Phú Nhuận',
	'Quận 2',
	'Quận 3',
	'Quận 10',
	'Quận 11',
	'Quận 4',
	'Quận 5',
	'Quận 6',
	'Quận 8',
	'Quận Bình Tân',
	'Quận 7',
	'Huyện Củ Chi',
	'Huyện Hóc Môn',
	'Huyện Bình Chánh',
	'Huyện Nhà Bè',
	'Huyện Cần Giờ'
]

function generateLocation(type) {
	const arr = []
	type.forEach(i => {
		arr.push(<option value={i}>{i}</option>)
	})
	return arr
}
 
function generateYear() {
	const arr = []
	const start = 1920
	const end = new Date().getFullYear()
	for (let i = end; i >= start; i--) {
		arr.push(<option value={i}>{i}</option>)
	}
	return arr
}

export {
	cities, 
	districts, 
	generateLocation, 
	generateYear
}

