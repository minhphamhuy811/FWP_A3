import React from 'react'
import {WrongInput, CorrectInput} from '../../components/Alert'

const nameRegex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
const idRegex = /^[0-9A-Z][0-9]*$/    // Passport number can start with a letter 
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/

function validateForm(data, type) {
	if (data !== '') {
		switch(type.test(data)){
		case false: return <WrongInput />
		case true: return <CorrectInput />
		} 
	}
}

export {
	nameRegex, 
	idRegex, 
	emailRegex, 
	phoneRegex, 
	validateForm
}