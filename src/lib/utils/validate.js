import React from 'react'
import {WrongInput, CorrectInput} from '../../components/Alert'

const nameRegex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
const idRegex = /^[0-9A-Z][0-9]*$/    // Passport number can start with a letter
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/
var isFormCorrect = false
var isFormFilled = false

function validateForm(data, type) {
	// if the data field is not empty, check the data
	if (data !== '') {
		isFormFilled = true
		if (type.test(data)) {
			isFormCorrect = true
			return <CorrectInput />
		}
		else {
			isFormCorrect = false
			return <WrongInput />
		}
	}
	else {
		isFormFilled = false
	}

}

function handleRedirect(e, isFormCorrect, isFormFilled) {
	if (!(isFormCorrect && isFormFilled)) {
		e.preventDefault()
		alert('Bạn chưa điền đơn hoặc đơn sai sót!')
	}
}

export {
	isFormCorrect,
	isFormFilled,
	nameRegex,
	idRegex,
	emailRegex,
	phoneRegex,
	validateForm,
	handleRedirect
}
